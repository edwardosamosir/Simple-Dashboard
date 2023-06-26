import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiPencil } from "react-icons/bi";


export default function ProductRow() {

  return (
    <>
      <tr className=" py-3">
        <td className="text-center py-4">No.</td>
        <td className="text-center py-4">
        <img src={"https://i.dummyjson.com/data/products/1/1.jpg"} width={"30px"} height={"50px"} className="w-100 rounded-4 shadow-4"
          alt="" />
        </td>
        <td className="px-3  py-4 ">Title</td>
        <td className="align-self-center">Stock</td>
        <td className="text-center py-4">Price</td>
        <td className="text-center align-self-center py-4"> Description</td>
        <td className="text-center align-self-center py-4 ">
          <a href="" >
            <BiPencil className="text-success" />
          </a>
          <a href="" >
            <RiDeleteBin6Line className="ms-3 text-danger" />
          </a>
        </td>
      </tr>
    </>
  );
}
