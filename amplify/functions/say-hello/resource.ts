import { defineFunction } from "@aws-amplify/backend";

export const sayHello = defineFunction({
    // optionally specify a name for the function (default to directory name)
    name: 'sayHello',
    // optionally specify a path to your handler 
    entry: './handler.ts',
});
