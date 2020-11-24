/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./todo_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.TodoServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.TodoServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NewTodo,
 *   !proto.TodoItem>}
 */
const methodDescriptor_TodoService_CreateTodo = new grpc.web.MethodDescriptor(
  '/TodoService/CreateTodo',
  grpc.web.MethodType.UNARY,
  proto.NewTodo,
  proto.TodoItem,
  /**
   * @param {!proto.NewTodo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.TodoItem.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.NewTodo,
 *   !proto.TodoItem>}
 */
const methodInfo_TodoService_CreateTodo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.TodoItem,
  /**
   * @param {!proto.NewTodo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.TodoItem.deserializeBinary
);


/**
 * @param {!proto.NewTodo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.TodoItem)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TodoItem>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TodoServiceClient.prototype.createTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TodoService/CreateTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_CreateTodo,
      callback);
};


/**
 * @param {!proto.NewTodo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TodoItem>}
 *     Promise that resolves to the response
 */
proto.TodoServicePromiseClient.prototype.createTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TodoService/CreateTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_CreateTodo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.TodoQuery,
 *   !proto.TodoItems>}
 */
const methodDescriptor_TodoService_GetTodos = new grpc.web.MethodDescriptor(
  '/TodoService/GetTodos',
  grpc.web.MethodType.UNARY,
  proto.TodoQuery,
  proto.TodoItems,
  /**
   * @param {!proto.TodoQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.TodoItems.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.TodoQuery,
 *   !proto.TodoItems>}
 */
const methodInfo_TodoService_GetTodos = new grpc.web.AbstractClientBase.MethodInfo(
  proto.TodoItems,
  /**
   * @param {!proto.TodoQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.TodoItems.deserializeBinary
);


/**
 * @param {!proto.TodoQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.TodoItems)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TodoItems>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TodoServiceClient.prototype.getTodos =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TodoService/GetTodos',
      request,
      metadata || {},
      methodDescriptor_TodoService_GetTodos,
      callback);
};


/**
 * @param {!proto.TodoQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TodoItems>}
 *     Promise that resolves to the response
 */
proto.TodoServicePromiseClient.prototype.getTodos =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TodoService/GetTodos',
      request,
      metadata || {},
      methodDescriptor_TodoService_GetTodos);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.EditRequest,
 *   !proto.TodoItem>}
 */
const methodDescriptor_TodoService_EditTodo = new grpc.web.MethodDescriptor(
  '/TodoService/EditTodo',
  grpc.web.MethodType.UNARY,
  proto.EditRequest,
  proto.TodoItem,
  /**
   * @param {!proto.EditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.TodoItem.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EditRequest,
 *   !proto.TodoItem>}
 */
const methodInfo_TodoService_EditTodo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.TodoItem,
  /**
   * @param {!proto.EditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.TodoItem.deserializeBinary
);


/**
 * @param {!proto.EditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.TodoItem)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TodoItem>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TodoServiceClient.prototype.editTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TodoService/EditTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_EditTodo,
      callback);
};


/**
 * @param {!proto.EditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TodoItem>}
 *     Promise that resolves to the response
 */
proto.TodoServicePromiseClient.prototype.editTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TodoService/EditTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_EditTodo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DeleteRequest,
 *   !proto.TodoItem>}
 */
const methodDescriptor_TodoService_DeleteTodo = new grpc.web.MethodDescriptor(
  '/TodoService/DeleteTodo',
  grpc.web.MethodType.UNARY,
  proto.DeleteRequest,
  proto.TodoItem,
  /**
   * @param {!proto.DeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.TodoItem.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.DeleteRequest,
 *   !proto.TodoItem>}
 */
const methodInfo_TodoService_DeleteTodo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.TodoItem,
  /**
   * @param {!proto.DeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.TodoItem.deserializeBinary
);


/**
 * @param {!proto.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.TodoItem)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TodoItem>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TodoServiceClient.prototype.deleteTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TodoService/DeleteTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_DeleteTodo,
      callback);
};


/**
 * @param {!proto.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TodoItem>}
 *     Promise that resolves to the response
 */
proto.TodoServicePromiseClient.prototype.deleteTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TodoService/DeleteTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_DeleteTodo);
};


module.exports = proto;

