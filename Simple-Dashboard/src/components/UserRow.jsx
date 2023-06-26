import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiPencil } from "react-icons/bi";
import { Link } from "react-router-dom";
import { formatDate } from "../helpers/dateFormatter";

export default function UserRow({ user, idx }) {
  return (
    <>
      <tr className="">
        <td className="text-center py-4">{++idx}</td>
        <td className="text-center py-4">
          <img src={user?.image} height={"120px"} className="w-100 rounded-4 shadow-4" alt="" />
        </td>
        <td className="text-center px-3 py-4">{user?.firstName}</td>
        <td className="text-center px-3 py-4">{user?.lastName}</td>
        <td className="text-center py-4">{formatDate(user?.birthDate)}</td>
        <td className="text-center align-self-center py-4">{user?.email}</td>
        <td className="text-center align-self-center py-4">{user?.phone}</td>
        <td className="text-center align-self-center py-4">
          <Link>
            <BiPencil className="text-success" />
          </Link>
          <Link>
            <RiDeleteBin6Line className="ms-3 text-danger" />
          </Link>
        </td>
      </tr>
    </>
  );
}
