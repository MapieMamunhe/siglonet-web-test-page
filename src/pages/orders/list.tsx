import React, { useState } from "react";
import Link from "next/link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CalendarMonth, Place, Tag, Functions } from "@mui/icons-material";

// import { Container } from './styles';

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
  return (
    <body className="bg-white h-screen">
      <header>
        <nav className="border-b-2 border-solid border-black">
          <ul className="flex justify-center ">
            {otherPages.map((page) => (
              <Link href={page.link} key={page.name}>
                <li className="px-5 py-4">{page.name}</li>
              </Link>
            ))}
          </ul>
        </nav>
      </header>
      <main className="grid grid-cols-4">
        <section className="grid"></section>
        <section className="col-span-3 px-5">
          {/* O header do Order notes */}
          <section className="font-bold flex justify-between py-5 ">
            <p className="">Order Notes</p>
            <Link href="/">
              <span className="border rounded-md p-2">New Order Note</span>
            </Link>
          </section>
          {/* Order Info */}
          <section id="hero" className="bg-zinc-500 p-5 h-full">
            <div className="bg-white px-5">
              <div
                className="flex 
            justify-between  h-24 
            font-semibold text-lg text-center
            items-center
            "
              >
                <span>Order Info</span>
                <select name="status" id="status">
                  <option value="">Status</option>
                </select>
              </div>
              {/* Basic info */}
              <div className="">
                <ul className="grid grid-cols-4 gap-1 w-full">
                  {mainInfo.map((item) => {
                    return (
                      <li
                        key={item.title}
                        className="bg-zinc-500 py-5 flex flex-col font-semibold"
                      >
                        <span className="pl-7 flex justify-between pr-2">
                          <span className="text-gray-400 ">{item.title}</span>
                          <span>{item.icon}</span>
                        </span>
                        <span className="pl-7">{item.value}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Dessert (100g serving)</TableCell>
                      <TableCell align="right">Calories</TableCell>
                      <TableCell align="right">Fat&nbsp;(g)</TableCell>
                      <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                      <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody></TableBody>
                </Table>
              </TableContainer>
            </div>
          </section>
        </section>
      </main>
    </body>
  );
};

export default OrdersList;
