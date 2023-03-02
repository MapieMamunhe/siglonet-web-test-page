import React from "react";
import { Search, Sort } from "@mui/icons-material";
import Input from "@mui/material/Input";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { randomBytes } from "crypto";

// import { Container } from './styles';
type props = {
  search: string;
  setSearch: (arg0: string) => void;
  orders: any[];
};
export default function SearchOrdersComponent(props: props) {
  return (
    <section className="flex flex-col">
      <div className="flex my-3 ml-4 ">
        <TextField
          id="outlined-search"
          label="Search"
          type="search"
          size="small"
          value={props.search}
          onChange={(e) => {
            props.setSearch(e.currentTarget.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Search htmlColor="#CECECE" />
              </InputAdornment>
            ),
          }}
        />

        <button
          type="button"
          className="ml-2 h-10 w-12 border border-1 rounded-md"
        >
          <Sort htmlColor="#CECECE" className="" />
        </button>
      </div>
      <ul className="flex flex-col ">
        {props.orders.map((order) => {
          return (
            <button
              key={randomBytes(4).toString("hex")}
              type="button"
              className=" hover:bg-[#37404F] 
              border-t-2 border-[#E4E4E4] 
              font-sans py-5 hover:text-white pl-4
                        hover:font-light"
            >
              <li>
                <div
                  className="flex justify-between mx-2
                         font-semibold text-md mb-2"
                >
                  <span>{order.date}</span>
                  <span>{order.value}</span>
                </div>
                <div
                  className="flex justify-between mx-2 
                        text-s text-[#9098A6] hover:text-white"
                >
                  <span>{order.status}</span>
                  <span>{order.quantity}</span>
                </div>
              </li>
            </button>
          );
        })}
      </ul>
    </section>
  );
}
