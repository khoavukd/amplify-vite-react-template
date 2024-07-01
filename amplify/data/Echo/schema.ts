import { 
    type ClientSchema, 
    a, 
    defineFunction // 1. Import "defineFunction" to create a new function 
} from '@aws-amplify/backend';
import { echoHandler } from '../../functions/echo/resource';

export const schema = a.schema({
    // 1. Define your return type as a custom type
    EchoResponse: a.customType({
        content: a.string(),
        executionDuration: a.float()
    }),

    // 2. Define your query with the return type and optionally arguments
    echo: a
        .query()
        // arguments that this query accepts 
        .arguments({
            content: a.string()
        })
        // return type of this query
        .returns(a.ref("EchoResponse"))
        // only allows signned-in users to call this API 
        .authorization(allow => [allow.authenticated()])
        // 3. Set the function has the handler 
        .handler(a.handler.function(echoHandler))
});

export type Schema = ClientSchema<typeof schema>;

