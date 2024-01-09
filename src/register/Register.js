import {Link, useNavigate} from "react-router-dom";

import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button, TextField} from "@mui/material";
import React from "react";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Weather from "../component/extenstion/Weather";

const Register = () => {
    const navigate = useNavigate();
    const handleRegister = (values) => {
        // register(values).then(() => {
        //         toast.success("Registered successfully", {
        //             onClose: () => {
        //                 navigate('/login');
        //             },
        //         });
        //     }).catch((error) => {
        //         if (error.response && error.response.data) {
        //             toast.error(error.response.data);
        //         } else {
        //             console.error('Unexpected error:', error);
        //             toast.error('An unexpected error occurred.');
        //         }
        //     });
    };

    return (
        <>
            <ToastContainer
                position="top-center" autoClose={1000} hideProgressBar={false} newestOnTop={false}
                closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"
            />
            <div className="row ht-100v flex-row-reverse no-gutters">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="signup-form">
                        <div className="auth-logo text-center mb-2">
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={"Img"} className="logo-img" alt="Logo"/>
                                </div>
                                <div className="col-md-7">
                                    <p>SoundSculpt</p>
                                    <span>Enjoy The Sublime</span>
                                </div>
                            </div>
                        </div>
                        <Formik
                            initialValues={{
                                firstName: "",
                                lastName: "",
                                email: "",
                                password: "",
                                confirmPassword: "",
                            }}
                            validationSchema={Yup.object({
                                email: Yup.string()
                                    .required('Required')
                                    .matches(
                                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(gmail\.com|example\.com\.vn|microsoft\.com\.vn)$/,
                                        'Invalid email format. Should end with @gmail.com, @example.com.vn, or @microsoft.com.vn'
                                    ),
                                password: Yup.string()
                                    .required('Required')
                                    .min(8, 'Password should be at least 8 characters long')
                                    .matches(
                                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-])[A-Za-z\d@$!%*?&]{8,}$/,
                                        'Password must meet the following criteria:\n- Requires at least one lowercase letter.\n- Requires at least one capital letter.\n- Requires at least one digit.\n- Requires at least one special character from the list.\n- Requires a minimum length of 8 characters and can contain letters, numbers, and special characters from the list'
                                    ),
                                confirmPassword: Yup.string()
                                    .required('Required')
                                    .oneOf([Yup.ref('password')], 'Passwords must match'),
                            })}
                            onSubmit={(values, {setSubmitting}) => {
                                handleRegister(values)
                                setSubmitting(false);
                            }}
                        >
                            <Form className="pt-5">
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="form-group">
                                            <Field type="text" name="firstName" placeholder="FirstName"
                                                   className="form-control" as={TextField} label="FirstName"
                                                   variant="outlined"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="form-group">
                                            <Field type="text" name="lastName" placeholder="LastName"
                                                   className="form-control" as={TextField} label="LastName"
                                                   variant="outlined"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <div className="form-group">
                                            <Field type="text" name="email" placeholder="Email" className="form-control"
                                                   as={TextField} label="Email" variant="outlined"/>
                                            <ErrorMessage name="email" component="div" className="error-message"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <div className="form-group">
                                            <Field
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                className="form-control" autoComplete="new-password"
                                                as={TextField} label="Password" variant="outlined"
                                            />
                                            <ErrorMessage name="password" component="div" className="error-message"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Field
                                                type="password"
                                                name="confirmPassword"
                                                placeholder="ConfirmPassword" autoComplete="new-password"
                                                className="form-control"
                                                as={TextField} label="ConfirmPassword" variant="outlined"
                                            />
                                            <ErrorMessage name="confirmPassword" component="div"
                                                          className="error-message"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <p className="agree-privacy">By clicking the Sign Up button below you agreed to
                                            our privacy policy and terms of use of our website.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="go-login">Already a member? <Link
                                            to="/login">Sign In</Link></span>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <div className="form-group">
                                            <Button type="submit" variant="contained" color="primary">
                                                Sign Up
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
                <div className="col-md-6 auth-bg-image d-flex justify-content-center align-items-center">
                    <div className="auth-left-content mt-5 mb-5 text-center">
                        <Weather/>
                        <div className="text-white mt-5 mb-5">
                            <h2 className="create-account mb-3">Create Account</h2>
                            <p>Enter your personal details and start journey with us.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Register;