import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser, fetchDetailUser } from "../store/action/actionCreator";



export default function UserUpdateModal({ selectedUser, show, onHide }) {
    const userId = selectedUser?.id
    // console.log(userId)
      
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        dispatch(fetchDetailUser(userId));
    }, [userId, dispatch]);

    const { userDetail, loading, errorMessage, updateStatus } = useSelector(
        (state) => state.user
    );

    const [error, setError] = useState(null)

    useEffect(() => {
        if (userDetail) {
            setFirstName(userDetail.firstName);
            setLastName(userDetail.lastName);
            setAge(userDetail.age);
            setEmail(userDetail.email);
            setPhone(userDetail.phone);
            setUsername(userDetail.username);
            setPassword(userDetail.password);
            setImage(userDetail.image);
        }
    }, [userDetail]);


    const editUser = async (event) => {
        try {
            event.preventDefault();
            const objToSend = {
                firstName,
                lastName,
                age,
                email,
                phone,
                username,
                password,
                image
            };

            if (!objToSend.firstName) {
                setError("First name cannot be empty!")
            } else if (!objToSend.lastName) {
                setError("Last name cannot be empty!")
            } else if (!objToSend.age) {
                setError("Age cannot be empty!")
            } else if (!objToSend.email) {
                setError("Email cannot be empty!")
            } else if (!objToSend.phone) {
                setError("Phone number cannot be empty!")
            } else if (!objToSend.username) {
                setError("Username cannot be empty!")
            } else if (!objToSend.password) {
                setError("Password cannot be empty!")
            } else if (!objToSend.image) {
                setError("Image URL cannot be empty!")
            } else {
                await dispatch(updateUser(objToSend, userId))
                navigate('/users')
            }
        }
        catch (error) {
            console.log(error)
        }

    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Edit User
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
                <Form onSubmit={editUser}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            name="firstName"
                            type="text"
                            placeholder="Enter your first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            name="lastName"
                            type="password"
                            placeholder="Enter your last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            name="age"
                            type="number"
                            placeholder="Enter your age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            name="email"
                            type="text"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            name="username"
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control
                            name="image"
                            type="text"
                            placeholder="Enter your image URL"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </Form.Group>
                    {firstName && 
                        lastName && 
                        age && 
                        email && 
                        phone && 
                        username && 
                        password &&
                        image &&
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
