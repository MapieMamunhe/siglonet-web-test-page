import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableFooter } from "@mui/material";

type props = {
  mainInfo: any[];
  products: any[];
};
export function OrderInfoComponent(props: props) {
  return (
    <section id="hero" className="bg-[#F4F6F6] p-5 h-full">
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
            {props.mainInfo.map((item) => {
              return (
                <li
                  key={item.title}
                  className="bg-[#F8F8F8] py-5 flex flex-col font-semibold"
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
          <Table
            sx={{
              minWidth: 650,
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>NAME</TableCell>
                <TableCell align="right">BARCODE</TableCell>
                <TableCell align="right">MAKE</TableCell>
                <TableCell align="right">IMEI NO.</TableCell>
                <TableCell align="right">PRICE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.products.map((product) => (
                <TableRow key={product.name}>
                  <TableCell scope="row">{product.name}</TableCell>
                  <TableCell align="right">{product.barcode}</TableCell>
                  <TableCell align="right">{product.make}</TableCell>
                  <TableCell align="right">{product.imei}</TableCell>
                  <TableCell align="right">{product.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4}>
                  <caption className="flex justify-between w-full">
                    <span>Account: Person Name</span>
                    <div className="flex justify-end font-bold">
                      <span>Total:</span>
                    </div>
                  </caption>
                </TableCell>
                <TableCell>
                  <div className="flex justify-end ">
                    <span className="font-bold text-sm text-black">
                      R:00000
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
}
