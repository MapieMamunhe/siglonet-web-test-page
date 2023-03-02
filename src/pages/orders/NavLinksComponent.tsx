import React from "react";
import Link from "next/link";
import { AccountCircle } from "@mui/icons-material";
type props = { otherPages: any[] };
export function NavLinksComponent(props: props) {
  return (
    <header>
      <nav className="border-b-2 border-solid border-black grid grid-cols-5">
        <ul className="flex justify-end col-span-3">
          {props.otherPages.map((page) => (
            <Link href={page.link} key={page.name}>
              <li className="px-5 py-4">{page.name}</li>
            </Link>
          ))}
        </ul>
        <span className="flex items-center justify-end px-20 col-span-2">
          <AccountCircle />
        </span>
      </nav>
    </header>
  );
}
