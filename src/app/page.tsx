"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => name()}>click</button>
      <br />
      <br />
      <button onClick={() => router.push("/about")}>About page</button>
    </main>
  );
}
