import { Handler } from "aws-lambda";

export const handler: Handler = async (event, context) => {
    return { content: "Hello ! Steven"};
}
