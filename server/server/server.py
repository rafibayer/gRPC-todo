from exceptions import TodoException
from concurrent import futures
from todo_store import TodoStore
import grpc
import todo_pb2
import todo_pb2_grpc
import os

class TodoService(todo_pb2_grpc.TodoServiceServicer):

    def __init__(self, db_path):
        super().__init__()
        self.store = TodoStore(db_path)

    def CreateTodo(self, request, context):
        try:
            return self.store.new_todo(request)
        except TodoException as e:
            context.set_details(e.message)
            context.set_code(e.statusCode)
            return todo_pb2.TodoItem()

    def GetTodos(self, request, context):
        try:
            return self.store.get_todos(request)
        except TodoException as e:
            context.set_details(e.message)
            context.set_code(e.statusCode)
            return todo_pb2.TodoItems()

    def EditTodo(self, request, context):
        try:
            return self.store.edit_todo(request)
        except TodoException as e:
            context.set_details(e.message)
            context.set_code(e.statusCode)
            return todo_pb2.TodoItem()

    def DeleteTodo(self, request, context):
        try:
            return self.store.delete_todo(request)
        except TodoException as e:
            context.set_details(e.message)
            context.set_code(e.statusCode)
            return todo_pb2.TodoItem()
    

def serve(db_path, port, workers):
    print(f'Starting server on port {port} ({workers} workers | DB @{db_path})')
    server = grpc.server(futures.ThreadPoolExecutor(workers))
    todo_pb2_grpc.add_TodoServiceServicer_to_server(TodoService(db_path), server)
    server.add_insecure_port(port)
    server.start()
    server.wait_for_termination()
    print('Server has terminated...')

if __name__ == '__main__':
    DB_PATH = os.environ.get('DB_PATH', '../../_db/database.db')
    PORT = f"[::]:{os.environ.get('PORT', 9090)}"
    WORKERS = int(os.environ.get('WORKERS', 3))
    serve(DB_PATH, PORT, WORKERS)