import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiPencil } from "react-icons/bi";


export default function ProductRow({ product, idx }) {
  return (
    <>
      <tr className=" py-3">
        <td className="text-center py-4">{++idx}</td>
        <td className="text-center py-4">
          <img src={product?.images[0]} height={"150px"} className="w-100 rounded-4 shadow-4" alt="" />
        </td>
        <td className="text-center py-4">{product?.title}</td>
        <td className="text-center align-self-center py-4">{product?.stock}</td>
        <td className="text-center align-self-center py-4">$ {product?.price}</td>
        <td className="text-center align-self-center py-4">{product?.description}</td>
        <td className="text-center align-self-center py-4">
          <a href="">
            <BiPencil className="text-success" />
          </a>
          <a href="">
            <RiDeleteBin6Line className="ms-3 text-danger" />
          </a>
        </td>
      </tr>
    </>
  );
}
