import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiPencil } from "react-icons/bi";
import { Link } from "react-router-dom";
import { formatDate } from "../helpers/dateFormatter";



export default function UserRow({user, idx}) {

  return (
    <>
      <tr className=" ">
        <td className="text-center">{++idx}</td>
        <td className="px-3">{user?.firstName}</td>
        <td className="px-3">{user?.lastName}</td>
        <td className="text-center">{formatDate(user?.birthDate)}</td>
        <td className="text-center align-self-center ">{user?.email}</td>
        <td className="text-center align-self-center ">{user?.phone}</td>
        <td className="text-center align-self-center  ">
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
