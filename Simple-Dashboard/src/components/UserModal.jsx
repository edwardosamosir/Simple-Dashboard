import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../store/action/actionCreator";



export default function AddUserModal({ show, onHide }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        phone: "",
        username: "",
        password: "",
        image: ""
    });

    const [error, setError] = useState(null)

    const userDataHandler = (event) => {
        const { name, value } = event.target;
        const obj = { ...userData, [name]: value };

        // console.log(obj)
        setUserData(obj);
    };

    const submitNewUser = async (event) => {
        try {
            event.preventDefault();

            if (!userData.firstName) {
                setError("First name cannot be empty!")
            } else if (!userData.lastName) {
                setError("Last name cannot be empty!")
            } else if (!userData.age) {
                setError("Age cannot be empty!")
            } else if (!userData.email) {
                setError("Email cannot be empty!")
            } else if (!userData.phone) {
                setError("Phone number cannot be empty!")
            } else if (!userData.username) {
                setError("Username cannot be empty!")
            } else if (!userData.password) {
                setError("Password cannot be empty!")
            } else if (!userData.image) {
                setError("Image URL cannot be empty!")
            } else {
                await dispatch(addUser(userData))
                navigate('/users')
            }

            // console.log(userData)
        }
        catch (error) {
            console.log(error)
        }
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Add New User
                </Modal.Title>      
            </Modal.Header>
            <Modal.Body>
            <div>
            {error && (
                <div
                  id="alert-2"
                  className="alert alert-danger d-flex p-4 mb-4 rounded-lg"
                  role="alert"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 me-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 17a7 7 0 110-14 7 7 0 010 14zm0-11a1 1 0 00-1 1v5a1 1 0 002 0V9a1 1 0 00-1-1z"
                    ></path>
                  </svg>
                  <div className="text-sm">
                    <strong>Alert!</strong> {error}
                  </div>
                </div>
              )}
            </div>
                <Form onSubmit={submitNewUser}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            name="firstName"
                            type="text"
                            placeholder="Enter your first name"
                            value={userData.firstName}
                            onChange={userDataHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            name="lastName"
                            type="password"
                            placeholder="Enter your last name"
                            value={userData.lastName}
                            onChange={userDataHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            name="age"
                            type="number"
                            placeholder="Enter your age"
                            value={userData.age}
                            onChange={userDataHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            name="email"
                            type="text"
                            placeholder="Enter your email"
                            value={userData.email}
                            onChange={userDataHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <div>
                            <Form.Label>Phone Number</Form.Label>
                        </div>
                        <Form.Control
                            name="phone"
                            type="text"
                            placeholder="Enter your phone number"
                            value={userData.phone}
                            onChange={userDataHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            name="username"
                            type="text"
                            placeholder="Enter your username"
                            value={userData.username}
                            onChange={userDataHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            value={userData.password}
                            onChange={userDataHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control
                            name="image"
                            type="text"
                            placeholder="Enter your image URL"
                            value={userData.image}
                            onChange={userDataHandler}
                        />
                    </Form.Group>
                    {userData.firstName && 
                     userData.lastName && 
                     userData.age && 
                     userData.email && 
                     userData.phone && 
                     userData.username && 
                     userData.password &&
                     userData.image &&
                     (
                        <Button type="submit" variant="primary" onClick={onHide}>
                            Submit
                        </Button>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
