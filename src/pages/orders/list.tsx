import React, { useState } from "react";
import Link from "next/link";
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
  return (
    <>
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
        <section className="col-span-3">
          {/* O header do Order notes */}
          <section className="flex justify-between">
            <p>Order Notes</p>
            <Link href="/">
              <span>New Order Note</span>
            </Link>
          </section>
          {/* Order Info */}
          <section id="hero">
            <div className="flex justify-between">
              <span>Order Info</span>
              <select name="status" id="status">
                <option value="">Status</option>
              </select>
            </div>
            {/* Basic info */}
            <div>
              <ul className="grid grid-cols-4">
                <li>
                  <span>DATE CREATED</span>
                  <span></span>
                </li>
                <li>
                  <span>RECEIVED FROM</span>
                  <span></span>
                </li>
                <li>
                  <span>ORDER NOTE NO.</span>
                  <span></span>
                </li>
                <li>
                  <span>QUANTITY</span>
                  <span></span>
                </li>
              </ul>
            </div>
            <table>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>BARCODE</th>
                  <th>MAKE</th>
                  <th>IMEI NO.</th>
                  <th>PRICE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Account: Person Name</td>
                  <td className="text-right" colSpan={2}>
                    Total
                  </td>
                  <td>R00000</td>
                </tr>
              </tfoot>
            </table>
          </section>
        </section>
      </main>
    </>
  );
};

export default OrdersList;
