import Link from "next/link";
import React from "react";

function Layout({ children }: any) {
  return (
    <div>
      {children}
      <Link href={"/"}>Home</Link>
    </div>
  );
}

export default Layout;
