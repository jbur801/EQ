"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
/* Amplify Params - DO NOT EDIT
    API_EQ44_GRAPHQLAPIENDPOINTOUTPUT
    API_EQ44_GRAPHQLAPIIDOUTPUT
    API_EQ44_GRAPHQLAPIKEYOUTPUT
    ENV
    REGION
Amplify Params - DO NOT EDIT */
const sha256_js_1 = __importDefault(require("@aws-crypto/sha256-js"));
const credential_provider_node_1 = require("@aws-sdk/credential-provider-node");
const signature_v4_1 = require("@aws-sdk/signature-v4");
const protocol_http_1 = require("@aws-sdk/protocol-http");
const node_fetch_1 = __importStar(require("node-fetch"));
const GRAPHQL_ENDPOINT = process.env.API_EQ44_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION || "us-east-1";
const { Sha256 } = sha256_js_1.default;
// const query = /* GraphQL */ `
//   query LIST_TODOS {
//     listTodos {
//       items {
//         id
//         name
//         description
//       }
//     }
//   }
// `;
//TODO: theres gotta be some way to import this from the sauce
const createUserQuery = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      AwfulPhrases {
        nextToken
      }
      conversations {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const query = createUserQuery;
    const input = { id: event.userName };
    const endpoint = new URL(GRAPHQL_ENDPOINT);
    const signer = new signature_v4_1.SignatureV4({
        credentials: (0, credential_provider_node_1.defaultProvider)(),
        region: AWS_REGION,
        service: "appsync",
        sha256: Sha256,
    });
    const requestToBeSigned = new protocol_http_1.HttpRequest({
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            host: endpoint.host,
        },
        hostname: endpoint.host,
        body: JSON.stringify({ query, variables: { input } }),
        path: endpoint.pathname,
    });
    console.log("request", requestToBeSigned);
    const signed = await signer.sign(requestToBeSigned);
    const request = new node_fetch_1.Request(endpoint, signed);
    let statusCode = 200;
    let body;
    let response;
    try {
        response = await (0, node_fetch_1.default)(request);
        body = await response.json();
        console.log(body);
        if (body.errors)
            statusCode = 400;
    }
    catch (error) {
        statusCode = 500;
        body = {
            errors: [
                {
                    message: error.message,
                },
            ],
        };
    }
    return event;
    // statusCode,
    // //  Uncomment below to enable CORS requests
    // // headers: {
    // //   "Access-Control-Allow-Origin": "*",
    // //   "Access-Control-Allow-Headers": "*"
    // // },
    // body: JSON.stringify(body),
};
exports.handler = handler;
