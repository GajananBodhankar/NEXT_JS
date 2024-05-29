import React from "react";
// We can not use this approach in react because
// in react we can not import/export ASYNC function having
// JSX in it

async function getApicall() {
  let result = await fetch("https://jsonplaceholder.typicode.com/todos/");
  let data = await result.json();
  return data;
}

async function ServerSideFetch() {
  let data = await getApicall();
  return (
    
    <div>
      {data.map(
        (i: {
          title:
            | string
            | number
            | bigint
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | Promise<React.AwaitedReactNode>
            | null
            | undefined;
        }) => (
          <p>{i.title}</p>
        )
      )}
    </div>
  );
}

export default ServerSideFetch;
