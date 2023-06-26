import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, fetchProducts } from "../store/action/actionCreator";
import LoadingScreen from "../components/LoadingScreen";

export default function DashboardPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchProducts());
  }, []);

  const { users, loading } = useSelector(
    (state) => state.user
  );

  const { products } = useSelector(
    (state) => state.product
  );

  return (
    <>
      <div
        className="row justify-content-center text-center gap-4 "
        style={{ fontFamily: "Poppins" }}
      >
        {loading ? <LoadingScreen /> : (
          <>
            <Card
              style={{ width: "16rem", height: "12rem", backgroundColor: "rgba(235,245,255,255)" }}
              className="gap-2"
            >
              <Card.Header style={{ backgroundColor: "rgba(235,245,255,255)" }}> Total Products</Card.Header>
              <Card.Body>
                <Card.Text style={{ fontSize: "80px" }}>{products.length}</Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{ width: "16rem", height: "12rem", backgroundColor: "rgba(235,245,255,255)" }}
              className="gap-2"
            >
              <Card.Header style={{ backgroundColor: "rgba(235,245,255,255)" }}>Total Users</Card.Header>
              <Card.Body>
                <Card.Text style={{ fontSize: "80px" }}>{users.length}</Card.Text>
              </Card.Body>
            </Card>
          </>
        )}
      </div>
    </>
  )

}
