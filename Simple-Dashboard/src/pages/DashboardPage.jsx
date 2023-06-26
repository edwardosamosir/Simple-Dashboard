import React from "react";
import Card from "react-bootstrap/Card";

export default function DashboardPage() {

  return (
    <>
      <div
        className="row justify-content-center text-center gap-4 "
        style={{ fontFamily: "Poppins" }}
      >
        <Card
          style={{ width: "16rem", height: "12rem", backgroundColor: "rgba(235,245,255,255)" }}
          className="gap-2"
        >
          <Card.Header style={{ backgroundColor: "rgba(235,245,255,255)" }}> Total Products</Card.Header>
          <Card.Body>
            <Card.Text style={{ fontSize: "80px" }}>0</Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "16rem", height: "12rem", backgroundColor: "rgba(235,245,255,255)" }}
          className="gap-2"
        >
          <Card.Header style={{ backgroundColor: "rgba(235,245,255,255)" }}>Total Users</Card.Header>
          <Card.Body>
            <Card.Text style={{ fontSize: "80px" }}>0</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  )

}
