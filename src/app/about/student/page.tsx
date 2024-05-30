"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Student() {
  const router = useRouter();
  return (
    <div>
      <h1>I am nested in about page</h1>
      <button onClick={() => router.back()}>Back</button>
    </div>
  );
}

export default Student;
