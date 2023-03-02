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
      <div className="flex my-4 ml-4">
        <Input
          id="input-with-icon-adornment"
          value={props.search}
          className="w-3/4 mr-auto border-2 border-[#CECECE] border-solid rounded-md"
          onChange={(e) => {
            props.setSearch(e.currentTarget.value);
          }}
          endAdornment={
            <InputAdornment position="start">
              <Search htmlColor="#CECECE" />
            </InputAdornment>
          }
        />
        <button type="button" className="">
          <Sort
            htmlColor="#CECECE"
            className="border border-1 h-12 w-12 rounded-md"
          />
        </button>
      </div>
      <ul className="flex flex-col">
        {props.orders.map((order) => {
          return (
            <button
              key={order.value}
              type="button"
              className="hover:bg-[#37404F] 
              border-t-2 border-[#E4E4E4]
              font-sans py-5 hover:text-white
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
