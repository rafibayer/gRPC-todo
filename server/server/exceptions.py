import grpc

class TodoException(Exception):
    def __init__(self, message, statusCode: grpc.StatusCode):
        super().__init__(message)
        self.message = message
        self.statusCode = statusCode
        
class TodoNotFoundError(TodoException):
    def __init__(self, message='Todo Item Not Found', statusCode=grpc.StatusCode.NOT_FOUND):
        super().__init__(message, statusCode)

    