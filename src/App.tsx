import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'


const client = generateClient<Schema>({
  authMode: 'userPool'
});

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    const getEchos = async () => {
      const { data: echos, errors } =  await client.queries.echo({
        content: "Steven tat con mat day"
      });

      console.log('echo data here', echos);
      console.log('error  here', errors);
      return echos;
    };

    getEchos();

    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
    // client.models.Collection.listByRep({
    //   representativeId: '2314'
    // })
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }

  function deleteTodo(id: string) {
    client.models.Todo.delete({ id });
  }

  // async function likePost(id?: number) {
  //   return await client.mutations.likePost({
  //     postId: "hellosteven"
  //   })
  // }

  async function getSayHello() {
    const { data, errors } = await client.queries.sayHello();

    console.log('response sayhello', data);
    return data;
  }

  return (
    <Authenticator>
      {
        ({ signOut, user }) => (
          <main>
            <h1>My todos</h1>
            <button onClick={createTodo}>+ new</button>
            <ul>
              {todos.map((todo) => (
                <li key={todo.id} onClick={() => deleteTodo(todo.id)}>{todo.content}</li>
              ))}
            </ul>
            <div>
              🥳 App successfully hosted. Try creating a new todo.
              <br />
              <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
                Review next step of this tutorial.
              </a>
            </div>
            <h1>{user?.signInDetails?.loginId}'s todos</h1>
            {/* <button onClick={() => likePost()}>Like Post</button> */}
            <button onClick={() => getSayHello()}>Say hello</button>
            <button onClick={signOut}>Sign out</button>
          </main>
        )
      }
    </Authenticator>

  );
}

export default App;
