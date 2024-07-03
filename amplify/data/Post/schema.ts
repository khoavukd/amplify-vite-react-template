import { type ClientSchema, a } from "@aws-amplify/backend";

export const schema = a.schema({
  Post: a
    .model({
      id: a.id(),
      content: a.string(),
      likes: a
        .integer()
        .authorization((allow) => [allow.authenticated().to(["read"])]),
    })
    .authorization((allow) => [
      allow.authenticated().to(["read"]), // signed-in users only allow to read posts
      allow.owner(), // post's owner allowed to CRUD operations.
    ]),
  // likePost: a
  //   .mutation()
  //   .arguments({ postId: a.string() })
  //   .returns(a.ref("Post"))
  //   .authorization((allow) => [allow.authenticated()])
  //   .handler(a.handler.custom({
  //       dataSource: a.ref("Post"),
  //       entry: "../../functions/post/handler.ts"
  //   }))
});

export type schema = ClientSchema<typeof schema>;
