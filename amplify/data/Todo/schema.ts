import { type ClientSchema, a } from '@aws-amplify/backend';
import { sayHello } from '../../functions/say-hello/resource';

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/


export const schema = a.schema({
    Todo: a.model({
        content: a.string(),
    })
    .authorization((allow) => [allow.owner()]),
    sayHello: a
            .query()
            .returns(a.ref("Todo"))
            .authorization(allow => [allow.authenticated()])
            .handler(a.handler.function(sayHello))
            
});

export type Schema = ClientSchema<typeof schema>;
