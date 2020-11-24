import grpc

import todo_pb2
import todo_pb2_grpc

channel = grpc.insecure_channel(target='localhost:9090')
stub = todo_pb2_grpc.TodoServiceStub(channel)

n = 10
created = []

# create todo
for i in range(n):
    newTodo = stub.CreateTodo(todo_pb2.NewTodo(name="test name", description="test descr", dueDate="2020-11-23"))
    created.append(newTodo)
    print(newTodo)

print(stub.GetTodos(todo_pb2.TodoQuery(includeCompleted=True)))

for todo in created:
    print('Editing ', todo.id)
    print(stub.EditTodo(todo_pb2.EditRequest(id=todo.id, newState=True)))

for todo in created:
    print('Deleting ', todo.id)
    print(stub.DeleteTodo(todo_pb2.DeleteRequest(id=todo.id)))