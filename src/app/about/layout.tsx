import Link from "next/link";
import React from "react";
// layout is something that will be available throughout its childrens
function Layout({ children }: any) {
  return (
    <div>
      {children}
      <Link href={"/"}>Home</Link>
    </div>
  );
}

export default Layout;
