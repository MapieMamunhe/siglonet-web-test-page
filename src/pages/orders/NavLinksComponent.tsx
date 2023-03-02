import React from "react";
import Link from "next/link";
import { AccountCircle } from "@mui/icons-material";
type props = { otherPages: any[] };
export default function NavLinksComponent(props: props) {
  return (
    <header>
      <nav className="border-b-2 border-solid border-[#CECECE] grid grid-cols-5">
        <ul className="flex justify-end col-span-3">
          {props.otherPages.map((page) => (
            <Link href={page.link} key={page.name}>
              <li
                className={
                  "px-5 py-2 border-[#CECECE]" +
                  (page.active ? " border-b-4 " : " text-[#9098A6]")
                }
              >
                {page.name}
              </li>
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
