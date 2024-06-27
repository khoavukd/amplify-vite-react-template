import { type ClientSchema, a } from '@aws-amplify/backend';

export const schema = a.schema({
    Customer: a.model({
        customerId: a.id().required(),
        // field can be a various scalar type, such as string, boolean, float, interger etc..
        name: a.string(),
        // field can be a custom type
        location: a.customType({
            // field can be required or optional
            lat: a.float().required(),
            long: a.float().required()
        }),
        // field can be an enum
        engagementStage: a.enum(['PROSPECT', 'INTERESTED', 'PURCHASED']),
        collectionId: a.id(),
        collection: a.belongsTo("Collection", "collectionId"),
        activeCard: a.hasOne("Card", "customerId") // relationship field with the reference field from the Card model
    })
    .identifier(["customerId"]) // use custom identifier, because it uses an `id: a.id()` field by default
});

export type Schema = ClientSchema<typeof schema>;
