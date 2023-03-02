import React from "react";
import { Search, Sort } from "@mui/icons-material";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

// import { Container } from './styles';
type props = {
  search: unknown;
  setSearch: (arg0: string) => void;
  orders: any[];
};
export function SearchOrdersComponent(props: props) {
  return (
    <section className="flex flex-col">
      <div
        className="mx-2 h-fit flex flex-row justify-between
            py-5 mb-0
          "
      >
        <Input
          id="input-with-icon-adornment"
          value={props.search}
          className=" h-10 
            rounded-md border-solid mr-4"
          onChange={(e) => {
            props.setSearch(e.currentTarget.value);
          }}
          endAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
        />
        <button
          type="button"
          className="p-2 rounded-lg 
            border-2 border-slate-500 h-fit"
        >
          <Sort />
        </button>
      </div>
      <ul className="flex flex-col">
        {props.orders.map((order) => {
          return (
            <button
              key={order.value}
              type="button"
              className="hover:bg-slate-700 hover:text-white
                        hover:font-light"
            >
              <li
                className="border-t-2 
                      border-slate-500"
              >
                <div
                  className="flex justify-between mx-2
                         font-semibold text-md"
                >
                  <span>{order.date}</span>
                  <span>{order.value}</span>
                </div>
                <div
                  className="flex justify-between mx-2 
                        text-xs text-slate-500 hover:text-white"
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
