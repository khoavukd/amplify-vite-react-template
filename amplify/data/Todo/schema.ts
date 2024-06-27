import { type ClientSchema, a } from '@aws-amplify/backend';

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
    .authorization((allow) => [allow.owner()])
});

export type Schema = ClientSchema<typeof schema>;
