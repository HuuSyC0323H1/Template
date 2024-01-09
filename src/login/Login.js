import {Link} from "react-router-dom";
import React from "react";
import './Login.css';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {Button, Checkbox, TextField} from "@mui/material";
import Weather from "../component/extenstion/Weather";



const Login = () => {



    return (
        <div className="row ht-100v flex-row-reverse no-gutters">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="signup-form">
                    <div className="auth-logo text-center mb-5">
                        <div className="row">
                            <div className="col-md-2">
                                <img src={"Img"} className="logo-img" alt="Logo"/>
                            </div>
                            <div className="col-md-7">
                                <p>SoundSculpt</p>
                                <span>Enjoy the sublime</span>
                            </div>
                        </div>
                    </div>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                            rememberMe: false,
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
                                )
                        })}
                        onSubmit={(values, {setSubmitting}) => {
                            setSubmitting(false);
                        }}
                    >
                        {(formikProps) => (
                            <Form>
                                <div className="row">
                                    <div className="col-md-12 mb-3">
                                        <div className="form-group">
                                            <Field className="form-control"
                                                   type="email"
                                                   id="email"
                                                   name="email"
                                                   label="Email"
                                                   as={TextField}
                                                   autoComplete="email"
                                            />
                                            <ErrorMessage name="email" component="div" className="error-message"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-2">
                                        <div className="form-group">
                                            <Field className="form-control"
                                                   type="password"
                                                   id="password"
                                                   name="password"
                                                   label="Password"
                                                   as={TextField}
                                                   autoComplete="current-password"
                                                   variant="outlined"
                                            />
                                            <ErrorMessage name="password" component="div" className="error-message"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <a>Forgot password?</a>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="custom-control material-checkbox">
                                            <Field
                                                type="checkbox"
                                                id="rememberMe"
                                                name="rememberMe"
                                                as={Checkbox}
                                                label="Remember Me"
                                            />
                                            <span className="material-control-indicator"></span>
                                            <span className="material-control-description">Remember Me</span>
                                        </label>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <div className="form-group">
                                            <Button type="submit" variant="contained" color="primary">
                                                Sign In
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center mt-4">
                                        <p className="text-muted">Start using your fingerprint</p>
                                        <a className="btn btn-outline-primary btn-smsign-up" data-toggle="modal"
                                           data-target="#fingerprintModal">
                                            Use Fingerprint
                                        </a>
                                    </div>
                                    <div className="col-md-12 text-center mt-5">
                                          <span className="go-login">
                                            Not yet a member? <Link to="/register">Sign Up</Link>
                                          </span>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <div className="col-md-6 auth-bg-image d-flex justify-content-center align-items-center">
                <div className="auth-left-content mt-5 mb-5 text-center">
                    <Weather/>
                    <div className="text-white mt-5 mb-5">
                        <h2 className="create-account mb-3">Welcome Back</h2>
                        <p>Thank you for joining. Updates and new features are released daily.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;