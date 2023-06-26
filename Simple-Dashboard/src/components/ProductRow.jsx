
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiPencil } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../config/api";
import Swal from "sweetalert2";

export default function ProductRow({ product, idx }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const deleteHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    fetch(`${baseUrl}/products/${product.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("something is wrong");
        }
      })
      .then((data) => {
        console.log(data)
        setLoading(false);
        Swal.fire({
          text: "Product Data Succesfully Deleted",
          icon: "success",
          iconColor: '#8d9399',
          title: 'Deletion of Product Data',
          showConfirmButton: false,
          timer: 1500,
        }).then((result) => {
            navigate("/products");
        });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
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
          <Link>
            <BiPencil className="text-success" />
          </Link>
          <Link href="">
            <RiDeleteBin6Line className="ms-3 text-danger" onClick={deleteHandler} disabled={loading} />
          </Link>
        </td>
      </tr>
    </>
  );
}
