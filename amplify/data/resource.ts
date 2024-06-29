import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { schema as CollectionSchema } from './Collection/schema';
import { schema as CustomerSchema } from './Customer/schema';
import { schema as TodoSchema } from './Todo/schema';
import { schema as CardSchema } from './Card/schema';
import { schema as EchoSchema } from './Echo/schema';
import { schema as PostSchema } from './Post/schema';

const schema = a.combine([
  CollectionSchema, 
  CustomerSchema, 
  TodoSchema, 
  CardSchema,
  EchoSchema,
  PostSchema
]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool"
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
