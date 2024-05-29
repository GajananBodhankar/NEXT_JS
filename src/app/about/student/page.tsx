"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Student() {
  const router = useRouter();
  return (
    <div>
      I am nested in about page
      <button onClick={() => router.back()}>Back</button>
    </div>
  );
}

export default Student;
