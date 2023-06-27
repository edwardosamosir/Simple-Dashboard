import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiPencil } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { formatDate } from "../helpers/dateFormatter";
import { baseUrl } from "../config/api";
import Swal from "sweetalert2";
import UserUpdateModal from "./UserUpdateModal";

export default function UserRow({ user, idx }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const deleteHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    fetch(`${baseUrl}/users/${user.id}`, {
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
          text: "User Data Succesfully Deleted",
          icon: "success",
          iconColor: '#8d9399',
          title: 'Deletion of User Data',
          showConfirmButton: false,
          timer: 1500,
        }).then((result) => {
            navigate("/users");
        });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const updateUserHandler = async(e) => {
    try {
      if (!user) {
        console.log("No user selected");
        return;
      }
      setSelectedUser(user);
      setShow(true);
    } catch (error) {
      console.log(error)
    }
  };
  

  return (
    <>
      <tr className="">
        <td className="text-center py-4">{idx+1}</td>
        <td className="text-center py-4">
          <img src={user?.image} height={"120px"} className="w-100 rounded-4 shadow-4" alt="" />
        </td>
        <td className="text-center px-3 py-4">{user?.firstName}</td>
        <td className="text-center px-3 py-4">{user?.lastName}</td>
        <td className="text-center py-4">{formatDate(user?.birthDate)}</td>
        <td className="text-center align-self-center py-4">{user?.email}</td>
        <td className="text-center align-self-center py-4">{user?.phone}</td>
        <td className="text-center align-self-center py-4">
            <BiPencil className="text-success" onClick={updateUserHandler}/>
            <RiDeleteBin6Line className="ms-3 text-danger" onClick={deleteHandler} disabled={loading}/>
        </td>
      </tr>
      <UserUpdateModal selectedUser={selectedUser} show={show} onHide={handleClose}/>
    </>
  );
}
