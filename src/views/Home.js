import React, { useState, useEffect } from "react";
// import { Container, Row, Col } from "shards-react";
import PropTypes from "prop-types";
import {
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormGroup,
    FormInput,
    FormSelect,
    FormTextarea,
    Button,
    Container,
    CardBody,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";

export default function Home() {
    return (
        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
                <PageTitle title="User Profile" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
            </Row>
            <Row>
                <Col lg="4">
                    {/* <UserDetails /> */}
                    {/* <UserAccountDetails />
                    
                    */}

                    <Card small className="mb-4">
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">Add new Course</h6>
                        </CardHeader>
                        <ListGroup flush>
                            <ListGroupItem className="p-3">
                                <Row>
                                    <Col>
                                        <Form>
                                            <Row form>
                                                {/* First Name */}
                                                <Col md="6" className="form-group">
                                                    <label htmlFor="feFirstName">First Name</label>
                                                    <FormInput
                                                        id="feFirstName"
                                                        placeholder="First Name"
                                                        value="Sierra"
                                                        onChange={() => { }}
                                                    />
                                                </Col>
                                                {/* Last Name */}
                                                <Col md="6" className="form-group">
                                                    <label htmlFor="feLastName">Last Name</label>
                                                    <FormInput
                                                        id="feLastName"
                                                        placeholder="Last Name"
                                                        value="Brooks"
                                                        onChange={() => { }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row form>
                                                {/* Email */}
                                                <Col md="6" className="form-group">
                                                    <label htmlFor="feEmail">Email</label>
                                                    <FormInput
                                                        type="email"
                                                        id="feEmail"
                                                        placeholder="Email Address"
                                                        value="sierra@example.com"
                                                        onChange={() => { }}
                                                        autoComplete="email"
                                                    />
                                                </Col>
                                                {/* Password */}
                                                <Col md="6" className="form-group">
                                                    <label htmlFor="fePassword">Password</label>
                                                    <FormInput
                                                        type="password"
                                                        id="fePassword"
                                                        placeholder="Password"
                                                        value="EX@MPL#P@$$w0RD"
                                                        onChange={() => { }}
                                                        autoComplete="current-password"
                                                    />
                                                </Col>
                                            </Row>
                                            <FormGroup>
                                                <label htmlFor="feAddress">Address</label>
                                                <FormInput
                                                    id="feAddress"
                                                    placeholder="Address"
                                                    value="1234 Main St."
                                                    onChange={() => { }}
                                                />
                                            </FormGroup>
                                            <Row form>
                                                {/* City */}
                                                <Col md="6" className="form-group">
                                                    <label htmlFor="feCity">City</label>
                                                    <FormInput
                                                        id="feCity"
                                                        placeholder="City"
                                                        onChange={() => { }}
                                                    />
                                                </Col>
                                                {/* State */}
                                                <Col md="4" className="form-group">
                                                    <label htmlFor="feInputState">State</label>
                                                    <FormSelect id="feInputState">
                                                        <option>Choose...</option>
                                                        <option>...</option>
                                                    </FormSelect>
                                                </Col>
                                                {/* Zip Code */}
                                                <Col md="2" className="form-group">
                                                    <label htmlFor="feZipCode">Zip</label>
                                                    <FormInput
                                                        id="feZipCode"
                                                        placeholder="Zip"
                                                        onChange={() => { }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row form>
                                                {/* Description */}
                                                <Col md="12" className="form-group">
                                                    <label htmlFor="feDescription">Description</label>
                                                    <FormTextarea id="feDescription" rows="5" />
                                                </Col>
                                            </Row>
                                            <Button theme="accent">Update Account</Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>                </Col>


                {/* //////////////////////////////////////////////table */}
                <Col lg="8">

                    <Card small className="mb-4">
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">Active Users</h6>
                        </CardHeader>
                        <CardBody className="p-0 pb-3">
                            <table className="table mb-0">
                                <thead className="bg-light">
                                    <tr>
                                        <th scope="col" className="border-0">
                                            #
                  </th>
                                        <th scope="col" className="border-0">
                                            First Name
                  </th>
                                        <th scope="col" className="border-0">
                                            Last Name
                  </th>
                                        <th scope="col" className="border-0">
                                            Country
                  </th>
                                        <th scope="col" className="border-0">
                                            City
                  </th>
                                        <th scope="col" className="border-0">
                                            Phone
                  </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Ali</td>
                                        <td>Kerry</td>
                                        <td>Russian Federation</td>
                                        <td>Gdańsk</td>
                                        <td>107-0339</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Clark</td>
                                        <td>Angela</td>
                                        <td>Estonia</td>
                                        <td>Borghetto di Vara</td>
                                        <td>1-660-850-1647</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Jerry</td>
                                        <td>Nathan</td>
                                        <td>Cyprus</td>
                                        <td>Braunau am Inn</td>
                                        <td>214-4225</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Colt</td>
                                        <td>Angela</td>
                                        <td>Liberia</td>
                                        <td>Bad Hersfeld</td>
                                        <td>1-848-473-7416</td>
                                    </tr>
                                </tbody>
                            </table>
                        </CardBody>
                    </Card>



                </Col>
            </Row>
        </Container>
    );
}
