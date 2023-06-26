import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import UserRow from "../components/UserRow";
import LoadingScreen from '../components/LoadingScreen'
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, searchQuery } from "../store/action/actionCreator";

export default function UsersPage() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchUsers()), []);
  const { users, loading } = useSelector(
    (state) => state.user
  );

  const { query } = useSelector(
    (state) => state.custom
  );

  return (
    <>
      <div className="mb-3 my-2">
        {loading ? <LoadingScreen /> : (
          <>
            <div className="w-full d-flex justify-content-end mb-2">
              <Button className="" variant="primary">
                {" "}
                + Add New Account
              </Button>
            </div>
            <Table
              bordered
              hover
              size="sm"
              className="w-100 align-items-center justify-center"
              style={{ fontFamily: "Poppins" }}
            >
              <thead>
                <tr className="text-center bg-dark text-white py-3 px-3">
                  <th className="px-2">No.</th>
                  <th className="px-2">First Name</th>
                  <th className="px-2">Last Name</th>
                  <th className="px-3 ">Birth Date</th>
                  <th className="px-3">Email</th>
                  <th className="px-3 ">Phone Number</th>
                  <th className="px-3 ">Actions</th>
                </tr>
              </thead>
              <tbody className="">
                {users?.filter((el) =>
                    el.firstName.toLowerCase().includes(query.toLowerCase()) ||
                    el.lastName.toLowerCase().includes(query.toLowerCase())
                  )
                  .map((user, idx) => {
                    return <UserRow user={user} idx={idx} key={user.id} />;
                  })}
              </tbody>
            </Table>
          </>
        )}
      </div>
    </>
  )

}
