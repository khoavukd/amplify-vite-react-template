import { type ClientSchema, a } from '@aws-amplify/backend';

export const schema = a.schema({
    Collection: a.model({
        // set up relationship between types
        customers: a.hasMany("Customer", "collectionId"),
        tags: a.string().array(), // field can be also an array,
        representativeId: a.id().required()
        // customize secondary indexes to optimize your query performance
    })
    .secondaryIndexes((index) => [index("representativeId").queryField("listByRep")])
});

export type Schema = ClientSchema<typeof schema>;
