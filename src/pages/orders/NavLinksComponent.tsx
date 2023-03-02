import React from "react";
import Link from "next/link";
type props = { otherPages: any[] };
export function NavLinksComponent(props: props) {
  return (
    <header>
      <nav className="border-b-2 border-solid border-black">
        <ul className="flex justify-center ">
          {props.otherPages.map((page) => (
            <Link href={page.link} key={page.name}>
              <li className="px-5 py-4">{page.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
