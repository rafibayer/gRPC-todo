# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import todo_pb2 as todo__pb2


class TodoServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.CreateTodo = channel.unary_unary(
                '/TodoService/CreateTodo',
                request_serializer=todo__pb2.NewTodo.SerializeToString,
                response_deserializer=todo__pb2.TodoItem.FromString,
                )
        self.GetTodos = channel.unary_unary(
                '/TodoService/GetTodos',
                request_serializer=todo__pb2.TodoQuery.SerializeToString,
                response_deserializer=todo__pb2.TodoItems.FromString,
                )
        self.EditTodo = channel.unary_unary(
                '/TodoService/EditTodo',
                request_serializer=todo__pb2.EditRequest.SerializeToString,
                response_deserializer=todo__pb2.TodoItem.FromString,
                )
        self.DeleteTodo = channel.unary_unary(
                '/TodoService/DeleteTodo',
                request_serializer=todo__pb2.DeleteRequest.SerializeToString,
                response_deserializer=todo__pb2.TodoItem.FromString,
                )


class TodoServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def CreateTodo(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetTodos(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def EditTodo(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteTodo(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_TodoServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'CreateTodo': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateTodo,
                    request_deserializer=todo__pb2.NewTodo.FromString,
                    response_serializer=todo__pb2.TodoItem.SerializeToString,
            ),
            'GetTodos': grpc.unary_unary_rpc_method_handler(
                    servicer.GetTodos,
                    request_deserializer=todo__pb2.TodoQuery.FromString,
                    response_serializer=todo__pb2.TodoItems.SerializeToString,
            ),
            'EditTodo': grpc.unary_unary_rpc_method_handler(
                    servicer.EditTodo,
                    request_deserializer=todo__pb2.EditRequest.FromString,
                    response_serializer=todo__pb2.TodoItem.SerializeToString,
            ),
            'DeleteTodo': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteTodo,
                    request_deserializer=todo__pb2.DeleteRequest.FromString,
                    response_serializer=todo__pb2.TodoItem.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'TodoService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class TodoService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def CreateTodo(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/TodoService/CreateTodo',
            todo__pb2.NewTodo.SerializeToString,
            todo__pb2.TodoItem.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetTodos(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/TodoService/GetTodos',
            todo__pb2.TodoQuery.SerializeToString,
            todo__pb2.TodoItems.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def EditTodo(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/TodoService/EditTodo',
            todo__pb2.EditRequest.SerializeToString,
            todo__pb2.TodoItem.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeleteTodo(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/TodoService/DeleteTodo',
            todo__pb2.DeleteRequest.SerializeToString,
            todo__pb2.TodoItem.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
