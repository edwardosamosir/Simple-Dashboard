import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { baseUrl }  from "../config/api"
import { useNavigate } from "react-router-dom";
import MyAlert from "../components/Alert";
import '../css/LoginPage.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username) {
      setErrorMessage("Username is required!");
      setShowAlert(true);
      return;
    }

    if (!password) {
      setErrorMessage("Password is required!");
      setShowAlert(true);
    }

    const obj = {
      username,
      password,
    };

    setLoading(true);
    fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          switch (response.status) {
            case 401:
              throw new Error("Username / Password salah");
            case 403:
              throw new Error("Anda tidak memiliki hak akses");
            default:
              throw new Error("Internal server error");
          }
        }
      })
      .then((data) => {
        const { token, firstName, lastName, image } = data;
        localStorage.setItem("access_token", token);
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("image", image);
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error?.message);
        setShowAlert(true);
        return;
      })
      .finally((_) => {
        setLoading(false);
      });
  };

  return (
    <Container className="login-container">
        <div className="logo-container text-center">
          <img className="branding-menu-logo my-4" src="https://cdn-icons-png.flaticon.com/512/5230/5230364.png" alt="logo" />
        </div>
        <h3 className="text-center text-black mb-4">Administration System</h3>
        <h3 className="text-center text-black">Login</h3>
        {showAlert && <MyAlert title={errorMessage} setShow={setShowAlert} />}
        <Form className="login-form" onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-black">Username</Form.Label>
            <Form.Control 
              type="username" 
              placeholder="Enter Username" 
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-black">Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button className="btn btn-secondary w-100" type="submit">
          {loading && <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
              &nbsp;
          </>
          }
          {!loading && <span>Log in</span>}
          {loading && <span>Loading ...</span>}
          </Button>
        </Form>
    </Container>
  );
}
