import React, { useState } from "react";
import Link from "next/link";
import TableAutoComplete from "@mui/material/Autocomplete";
import { CalendarMonth, Place, Tag, Functions } from "@mui/icons-material";
import InputField from "@/components/InputField";
import TextField from "@mui/material/TextField";
import { randomUUID } from "crypto";
import { OrderInfoComponent } from "../../components/OrderInfoComponent";
import { SearchOrdersComponent } from "../../components/SearchOrdersComponent";
import { NavLinksComponent } from "./NavLinksComponent";

const OrdersList: React.FC = () => {
  const [otherPages, setOtherPages] = useState([
    {
      name: "Inventory",
      link: "inventory/list",
    },
    {
      name: "Vouchers",
      link: "vouchers/list",
    },
    {
      name: "Orders",
      link: "inventory/list",
    },
  ]);
  const [mainInfo, setMainInfo] = useState([
    {
      title: "DATE CREATED",
      icon: <CalendarMonth />,
      value: "DD / MM / YYYY",
    },
    {
      title: "RECEIVED FROM ",
      icon: <Place />,
      value: "MAIN HUB",
    },
    {
      title: "ORDER NOTE NO.",
      icon: <Tag />,
      value: "01292",
    },
    {
      title: "QUANTITY",
      icon: <Functions />,
      value: "4",
    },
  ]);
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState([
    {
      date: "DD/MM/YYYY",
      status: "status",
      quantity: "Quantity",
      value: "Value",
    },
    {
      date: "DD/MM/YYYY",
      status: "status",
      quantity: "Quantity",
      value: "Value",
    },
    {
      date: "DD/MM/YYYY",
      status: "status",
      quantity: "Quantity",
      value: "Value",
    },
    {
      date: "DD/MM/YYYY",
      status: "status",
      quantity: "Quantity",
      value: "Value",
    },
    {
      date: "DD/MM/YYYY",
      status: "status",
      quantity: "Quantity",
      value: "Value",
    },
  ]);
  const [products, setProducts] = useState([
    {
      name: "Prod1",
      barcode: "XXXXXX",
      make: "YYYYYY",
      imei: "111111",
      price: "AAAAAA",
    },
  ]);
  return (
    <body className="bg-white h-screen">
      <NavLinksComponent otherPages={otherPages} />
      <main className="grid grid-cols-5">
        <SearchOrdersComponent
          search={search}
          setSearch={setSearch}
          orders={orders}
        />
        <section className="col-span-4 px-5">
          {/* O header do Order notes */}
          <section className="font-bold flex justify-between py-5 ">
            <p className="">Order Notes</p>
            <Link href="/">
              <span className="border rounded-md p-2">New Order Note</span>
            </Link>
          </section>
          {/* Order Info */}
          <OrderInfoComponent mainInfo={mainInfo} products={products} />
        </section>
      </main>
    </body>
  );
};

export default OrdersList;
