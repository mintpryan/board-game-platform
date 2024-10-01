import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import {
  Input,
  Button,
  Form as AntdForm,
  Flex,
  Col,
  Grid,
  Row,
  Space,
} from "antd";
import { useUserActions } from "../../hooks/user.actions";
import { format_message } from "../../helpers/error";
import { CustomForm, PrimaryButton, Text } from "../styled_components";

function RegistrationForm() {
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    email: Yup.string().email().required("Email is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Enter password confirmation"),
  });

  const userActions = useUserActions();

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        first_name: "",
        email: "",
        confirm_password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        const data = {
          username: values.username,
          password: values.password,
          email: values.email,
          first_name: values.first_name,
        };
        userActions.register(data).catch((err) => {
          if (err.request.response) {
            setErrors(format_message(err.request.response));
          } else {
            setErrors(err);
          }
          setSubmitting(false);
        });
      }}
    >
      {({ errors, touched, isSubmitting, isValid, dirty, handleSubmit }) => (
        <CustomForm
          onFinish={handleSubmit}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Col>
            <AntdForm.Item
              label="First Name"
              validateStatus={
                touched.first_name && errors.first_name ? "error" : ""
              }
              help={
                touched.first_name && errors.first_name ? errors.first_name : ""
              }
            >
              <Field name="first_name">
                {({ field }) => <Input {...field} />}
              </Field>
            </AntdForm.Item>

            <AntdForm.Item
              label="Username"
              validateStatus={
                touched.username && errors.username ? "error" : ""
              }
              help={touched.username && errors.username ? errors.username : ""}
            >
              <Field name="username">
                {({ field }) => <Input {...field} />}
              </Field>
            </AntdForm.Item>

            <AntdForm.Item
              label="Email"
              validateStatus={touched.email && errors.email ? "error" : ""}
              help={touched.email && errors.email ? errors.email : ""}
            >
              <Field name="email">{({ field }) => <Input {...field} />}</Field>
            </AntdForm.Item>

            <AntdForm.Item
              label="Password"
              validateStatus={
                touched.password && errors.password ? "error" : ""
              }
              help={touched.password && errors.password ? errors.password : ""}
            >
              <Field name="password">
                {({ field }) => <Input.Password {...field} />}
              </Field>
            </AntdForm.Item>

            <AntdForm.Item
              label="Confirm password"
              validateStatus={
                touched.confirm_password && errors.confirm_password
                  ? "error"
                  : ""
              }
              help={
                touched.confirm_password && errors.confirm_password
                  ? errors.confirm_password
                  : ""
              }
            >
              <Field name="confirm_password">
                {({ field }) => <Input.Password {...field} />}
              </Field>
            </AntdForm.Item>

            {errors.message && (
              <div style={{ color: "red" }}>{errors.message}</div>
            )}

            <PrimaryButton
              variant="primary"
              htmlType="submit"
              disabled={isSubmitting}
            >
              Submit
            </PrimaryButton>
          </Col>
        </CustomForm>
      )}
    </Formik>
  );
}

export default RegistrationForm;
