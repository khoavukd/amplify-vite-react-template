import { defineFunction } from "@aws-amplify/backend";

// 2. Define a function
export const echoHandler = defineFunction({
    entry: "./handler.ts"
});