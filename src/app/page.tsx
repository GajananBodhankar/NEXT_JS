"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  async function name() {
    try {
      let resul = await fetch("https://jsonplaceholder.typicode.com/todos");
      let data = await resul.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
    console.log((document.cookie = "Name=Gajanan;secure"));
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => name()}>click</button>
    </main>
  );
}
