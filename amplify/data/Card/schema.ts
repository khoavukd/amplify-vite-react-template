import { type ClientSchema, a } from '@aws-amplify/backend';

export const schema = a.schema({
    Card: a.model({
        items: a.string().required().array(),
        customerId: a.id(), // reference field 
        customer: a.belongsTo('Customer', 'customerId') // relationship field with the reference field
    })
    .authorization((allow) => [
        allow.owner()
    ])
});

export type Schema = ClientSchema<typeof schema>;
