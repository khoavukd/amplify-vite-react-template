import { util } from "@aws-appsync/utils";

export const request = (ctx) => {
  return {
    operation: "UpdateItem",
    key: util.dynamodb.toMapValues({ id: ctx.args.postId }),
    update: {
      expression: "ADD likes :plusOne",
      expressionValues: { ":plusOne": { N: 1 } },
    },
  };
};

export const response = (ctx) => {
    return ctx.result;
}