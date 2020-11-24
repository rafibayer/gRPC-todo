DOCKER_USER=rbayer
PROTO_NAME=todo.proto
PROTO_DIR=./protos
PROTO_PATH = $(PROTO_DIR)/$(PROTO_NAME)
SERVER_OUT=./server/server
CLIENT_DIR=./client
CLIENT_OUT=$(CLIENT_DIR)/src

.DEFAULT = up

# --build keyword is key, forces rebuild of containers (still uses cache)
up: webpack_client
	docker-compose up -d --build

down:
	docker-compose down

# quick command to clean up my docker messes with violence
kill:
	-docker rm -f $$(docker ps -aq)

codegen_server:
	python -m grpc_tools.protoc -I$(PROTO_DIR) --python_out=$(SERVER_OUT) --grpc_python_out=$(SERVER_OUT) $(PROTO_PATH)

webpack_client: codegen_client
	npm run build --prefix $(CLIENT_DIR)

codegen_client:
	protoc -I=$(PROTO_DIR) $(PROTO_NAME) \
    --js_out=import_style=commonjs:$(CLIENT_OUT) \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$(CLIENT_OUT)