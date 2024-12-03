const path = require('path');
const shell = require('shelljs');

const PROTO_DIR = path.join(__dirname, '../src/proto');
const MODEL_DIR = path.join(__dirname, '../src/proto/generated');
const PROTOC_PATH = path.join(__dirname, '../node_modules/.bin/grpc_tools_node_protoc');
const PLUGIN_PATH = path.join(__dirname, '../node_modules/.bin/protoc-gen-ts_proto');

// Create directory for generated files
shell.mkdir('-p', MODEL_DIR);

// Generate TypeScript code
shell.exec(`${PROTOC_PATH} \
    --plugin=protoc-gen-ts_proto=${PLUGIN_PATH} \
    --ts_proto_out=${MODEL_DIR} \
    --ts_proto_opt=esModuleInterop=true \
    --ts_proto_opt=outputServices=grpc-js \
    --proto_path=${PROTO_DIR} \
    ${PROTO_DIR}/*.proto`);

console.log('✨ Proto files generated!'); 