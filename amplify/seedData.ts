import { Amplify } from "aws-amplify";
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const outputs = require('../amplify_outputs.json');

// import * as outputs from "../amplify_outputs.json";
import { generateClient } from 'aws-amplify/api';
const client = generateClient();

Amplify.configure(outputs);

const seedDataFn = async () => {
    const createTodoMutation = `
        mutation CreateTodo($input: CreateTodoInput!) {
            createTodo(input: $input) {
                content
            }
        }
    `;

    const items = [
        { content: 'steven test seed data' },
        { content: 'today it is my birthday' }
    ];
    
    for (let item of items) {
        try {
            const response = await client.graphql({
                query: createTodoMutation,
                variables: {
                    input: item
                },
                authMode: "userPool"
            });
            console.log('created todo', response);
        } catch (err) {
            console.error('error creating todo', err);
        }
    }
}

seedDataFn().catch(err => console.error('seeding error', err));

