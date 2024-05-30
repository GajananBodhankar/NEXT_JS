"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function About() {
  const router = useRouter();
  return (
    <div>
      <h1>I am About page</h1>
      <Link href={"/"}>Back</Link>
      <button onClick={() => router.back()}>Back</button>
    </div>
  );
}

export default About;
