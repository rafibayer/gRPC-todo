import sqlite3

import todo_pb2
from exceptions import TodoNotFoundError

class TodoStore:

    def __init__(self, db_path):
        self.db_path = db_path
        self._db_init()

    def new_todo(self, newTodo: todo_pb2.NewTodo) -> todo_pb2.TodoItem:
        # Insert
        conn = sqlite3.connect(self.db_path)
        insert = conn.cursor()
        ins_sql = '''
        INSERT INTO todos (name, description, dueDate, completed)
        VALUES (?, ?, ?, ?)
        '''
        insert.execute(ins_sql, (newTodo.name, newTodo.description, newTodo.dueDate, int(False)))
        conn.commit()

        # Return
        select = conn.cursor()
        sel_sql = 'SELECT * FROM todos WHERE id=?'
        select.execute(sel_sql, (insert.lastrowid,))
        todoItem = self._from_row(select.fetchone())
        return todoItem

    def get_todos(self, todoQuery: todo_pb2.TodoQuery) -> todo_pb2.TodoItems:
        # Pick query
        query = None
        if todoQuery.includeCompleted:
            query = 'SELECT * FROM todos'
        else:
            query = 'SELECT * FROM todos WHERE completed=0'
        
        # Query
        conn = sqlite3.connect(self.db_path)
        select = conn.cursor()
        select.execute(query)

        # Return
        todoItems = self._from_rows(select.fetchall())
        return todoItems

    def edit_todo(self, editRequest: todo_pb2.EditRequest) -> todo_pb2.TodoItem:
        # Update
        conn = sqlite3.connect(self.db_path)
        update = conn.cursor()
        upd_sql = 'UPDATE todos SET completed=? WHERE id=?'
        update.execute(upd_sql, (int(editRequest.newState), editRequest.id,))
        conn.commit()

        # Validate
        if update.rowcount < 1:
            raise TodoNotFoundError()

        # Return
        select = conn.cursor()
        sel_sql = 'SELECT * FROM todos WHERE id=?'
        select.execute(sel_sql, (editRequest.id,))
        todoItem = self._from_row(select.fetchone())
        return todoItem

    def delete_todo(self, deleteRequest: todo_pb2.DeleteRequest) -> todo_pb2.TodoItem:
        conn = sqlite3.connect(self.db_path)
        select = conn.cursor()
        sel_sql = 'SELECT * FROM todos WHERE id=?'
        select.execute(sel_sql, (deleteRequest.id, ))

        result = select.fetchone()
        if result is None:
            raise TodoNotFoundError()
        todoItem = self._from_row(result)

        delete = conn.cursor()
        del_sql = 'DELETE FROM todos WHERE id=?'
        delete.execute(del_sql, (deleteRequest.id, ))
        conn.commit()

        return todoItem

        
    def _from_row(self, row) -> todo_pb2.TodoItem:

        todoItem = todo_pb2.TodoItem(
            id=row[0],
            name=row[1],
            description=row[2],
            dueDate=row[3],
            completed=bool(row[4])
        )
        return todoItem

    def _from_rows(self, rows) -> todo_pb2.TodoItems:
        todoItems = todo_pb2.TodoItems()
        for row in rows:
            todoItems.items.append(self._from_row(row))
        return todoItems

    def _db_init(self):
        conn = sqlite3.connect(self.db_path)
        sql = '''
        CREATE TABLE IF NOT EXISTS todos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            dueDate TEXT NOT NULL,
            completed INTEGER NOT NULL CHECK(completed IN (0, 1))
        );
        '''
        conn.execute(sql)
        conn.commit()
        conn.close()


