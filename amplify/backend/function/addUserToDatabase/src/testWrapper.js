const { handler } = require("./index");
const eventJson = {
  version: "1",
  region: "ap-southeast-2",
  userPoolId: "ap-southeast-2_D6gjCWMFg",
  userName: "7a359fae-fa78-4392-8333-3961b12f6818",
  callerContext: {
    awsSdkVersion: "aws-sdk-js-2.1309.0",
    clientId: "CLIENT_ID_NOT_APPLICABLE",
  },
  triggerSource: "PreSignUp_AdminCreateUser",
  request: {
    userAttributes: {
      email: "zzasdragon@gmail.com",
    },
    validationData: null,
  },
  response: {
    autoConfirmUser: false,
    autoVerifyEmail: false,
    autoVerifyPhone: false,
  },
};

const mainFun = async () => {
  const res = await handler(eventJson);
  console.log(res);
};
mainFun();