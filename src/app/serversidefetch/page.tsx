import React from "react";

async function getApicall() {
  let result = await fetch("https://jsonplaceholder.typicode.com/todos/");
  let data = await result.json();
  return data;
}

async function ServerSideFetch() {
  let data = await getApicall();
  return (
    <div>
      {data.map((i) => (
        <p>{i.title}</p>
      ))}
    </div>
  );
}

export default ServerSideFetch;
