import { React, createContext, useState } from "react";
import { Formik, Field } from "formik";
import { Input, Button, Form as AntdForm, Flex, Col, Grid } from "antd";
import * as Yup from "yup";
import { useUserActions } from "../../hooks/user.actions";
import { get_detail_from_error } from "../../helpers/error";
import {
  PrimaryButton,
  CustomForm,
  SimpleHref,
  Text,
} from "../styled_components";

const AuthErrorsContext = createContext(null);

function LoginForm() {
  const [authError, setAuthError] = useState(null);
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const userActions = useUserActions();

  return (
    <AuthErrorsContext.Provider value={authError}>
      <Formik
        initialValues={{
          password: "",
          username: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          const data = {
            username: values.username,
            password: values.password,
          };
          userActions.login(data).catch((err) => {
            if (err.request.response) {
              setAuthError(get_detail_from_error(err.request.response));
            } else {
              setErrors(err);
            }
            setSubmitting(false);
          });
        }}
      >
        {({ errors, touched, isSubmitting, dirty, isValid, handleSubmit }) => (
          <CustomForm onFinish={handleSubmit} labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}>
            <Text>Log in to continue</Text>

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

            {authError && <div style={{ color: "red" }}>{authError}</div>}
            {errors.message && (
              <div style={{ color: "red" }}>{errors.message}</div>
            )}

            <Flex justify="center" align="center">
              <PrimaryButton htmlType="submit"  disabled={isSubmitting}>
                Login
              </PrimaryButton>
              <SimpleHref href="/register">Register</SimpleHref>
            </Flex>
          </CustomForm>
        )}
      </Formik>
    </AuthErrorsContext.Provider>
  );
}

export default LoginForm;
