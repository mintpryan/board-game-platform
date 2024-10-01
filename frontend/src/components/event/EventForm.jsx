import { React, useState } from "react";
import { Formik, Field } from "formik";
import {
  Input,
  Button,
  Form as AntdForm,
  Flex,
  Col,
  Form,
  Switch,
  Select,
  InputNumber,
  Upload,
} from "antd";
import * as Yup from "yup";
import { PrimaryButton } from "../styled_components";
import { DatePicker } from "antd";
import en from "antd/es/date-picker/locale/en_US";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { UploadOutlined } from "@ant-design/icons";
import { useEventActions } from "../../hooks/event.actions";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../features/session/sessionSlice";
dayjs.extend(buddhistEra);

const buddhistLocale = {
  ...en,
  lang: {
    ...en.lang,
    fieldDateFormat: "YYYY/MM/DD",
    fieldDateTimeFormat: "YYYY/MM/DD HH:mm",
    yearFormat: "YYYY",
    cellYearFormat: "YYYY",
  },
};
function EventForm({onClose}) {
  const [isRecurring, setIsRecurring] = useState(false);
  const loggedIn = useSelector(selectIsLoggedIn)
  const eventAction = useEventActions();

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    start: Yup.date().required("Start date is required"),
    end: Yup.date().required("End date is required"),
    image: Yup.mixed()
      .test(
        "fileFormat",
        "Not supported format",
        (value) =>
          value &&
          ["image/jpg", "image/jpeg", "image/png", "image/webp"].includes(
            value.type
          )
      )
      .required("Image is required"),
  });


  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        start: null,
        end: null,
        is_recurring: false,
        recurring_days: [],
        recurrence_frequency: 1,
        recurrence_end_date: null,
        image: null,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("description", values.description);
        formData.append("start", values.start.format("YYYY-MM-DDTHH:mm:ssZ"));
        formData.append("end", values.end.format("YYYY-MM-DDTHH:mm:ssZ"));
        if (isRecurring) {
          formData.append("is_recurring", true);
          formData.append(
            "recurring_days",
            JSON.stringify(values.recurring_days)
          );
          formData.append("recurrence_frequency", values.recurrence_frequency);
          formData.append(
            "recurrence_end_date",
            values.recurrence_end_date.format("YYYY-MM-DD")
          );
        }

        formData.append("image", values.image);
        eventAction
          .createEvent(formData)
          .then(() => {
            onClose()
            if (loggedIn)
              eventAction.getAllEventsWithAuth()
            else
              eventAction.getAllEvents();
          })
          .catch((err) => {
            setErrors(err);
           
          });
          setSubmitting(false);
      }}
    >
      {({
        errors,
        touched,
        isSubmitting,
        dirty,
        setFieldValue,
        handleSubmit,
      }) => (
        <Form
          onFinish={handleSubmit}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
        >
          <Flex>
            <Col span={24}>
              <AntdForm.Item
                label="Title"
                validateStatus={touched.title && errors.title ? "error" : ""}
                help={touched.title && errors.title ? errors.title : ""}
              >
                <Field name="title">
                  {({ field }) => <Input {...field} />}
                </Field>
              </AntdForm.Item>

              <AntdForm.Item
                label="Description"
                validateStatus={
                  touched.description && errors.description ? "error" : ""
                }
                help={
                  touched.description && errors.description
                    ? errors.description
                    : ""
                }
              >
                <Field name="description">
                  {({ field }) => <Input.TextArea {...field} />}
                </Field>
              </AntdForm.Item>

              <AntdForm.Item
                label="Start"
                name="start"
                validateStatus={touched.start && errors.start ? "error" : ""}
                help={touched.start && errors.start ? errors.start : ""}
              >
                <DatePicker
                  name="start"
                  showTime
                  locale={buddhistLocale}
                  onChange={(date) => {
                    setFieldValue("start", date ? date : null);
                  }}
                />
              </AntdForm.Item>

              <AntdForm.Item
                label="End"
                validateStatus={touched.end && errors.end ? "error" : ""}
                help={touched.end && errors.end ? errors.end : ""}
              >
                <DatePicker
                  name="end"
                  showTime
                  locale={buddhistLocale}
                  onChange={(date) => setFieldValue("end", date ? date : null)}
                />
              </AntdForm.Item>

              <AntdForm.Item
                label="Is recurring"
                validateStatus={
                  touched.is_recurring && errors.is_recurring ? "error" : ""
                }
                help={
                  touched.is_recurring && errors.is_recurring
                    ? errors.is_recurring
                    : ""
                }
              >
                <Switch onChange={setIsRecurring} />
              </AntdForm.Item>

              <AntdForm.Item
                label="Recurring days"
                validateStatus={
                  touched.recurring_days && errors.recurring_days ? "error" : ""
                }
                help={
                  touched.recurring_days && errors.recurring_days
                    ? errors.recurring_days
                    : ""
                }
              >
                <Select
                  onChange={(values) => {
                    console.log(values);
                    setFieldValue("recurring_days", values ? values : []);
                  }}
                  disabled={!isRecurring}
                  mode="multiple"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please select days"
                  defaultValue={[]}
                  options={[
                    { label: "Monday", value: "MO" },
                    { label: "Tuesday", value: "TU" },
                    { label: "Wednesday", value: "WE" },
                    { label: "Thursday", value: "TH" },
                    { label: "Friday", value: "FR" },
                    { label: "Saturday", value: "SA" },
                    { label: "Sunday", value: "SU" },
                  ]}
                />
              </AntdForm.Item>

              <AntdForm.Item
                label="Recurrence frequency"
                validateStatus={
                  touched.recurrence_frequency && errors.recurrence_frequency
                    ? "error"
                    : ""
                }
                help={
                  touched.recurrence_frequency && errors.recurrence_frequency
                    ? errors.recurrence_frequency
                    : ""
                }
              >
                <InputNumber
                  onChange={(value) =>
                    setFieldValue(
                      "recurrence_frequency",
                      value ? parseInt(value) : 1
                    )
                  }
                  disabled={!isRecurring}
                  min={1}
                  max={50}
                  defaultValue={1}
                />
              </AntdForm.Item>

              <AntdForm.Item
                label="Recurrence end date"
                validateStatus={
                  touched.recurrence_end_date && errors.recurrence_end_date
                    ? "error"
                    : ""
                }
                help={
                  touched.recurrence_end_date && errors.recurrence_end_date
                    ? errors.recurrence_end_date
                    : ""
                }
              >
                <DatePicker
                  name="recurrence_end_date"
                  disabled={!isRecurring}
                  locale={buddhistLocale}
                  onChange={(date) =>
                    setFieldValue("recurrence_end_date", date ? date : null)
                  }
                />
              </AntdForm.Item>
              <AntdForm.Item
                label="Image"
                name="image"
                validateStatus={touched.image && errors.image ? "error" : ""}
                help={touched.image && errors.image ? errors.image : ""}
              >
                <Upload
                  name="image"
                  beforeUpload={(file) => {
                    setFieldValue("image", file);
                    return false;
                  }}
                >
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </AntdForm.Item>

              {errors.message && (
                <div style={{ color: "red" }}>{errors.message}</div>
              )}

              <PrimaryButton htmlType="submit" disabled={isSubmitting}>
                Create
              </PrimaryButton>
              {errors.message && (
                <div style={{ color: "red" }}>{errors.message}</div>
              )}
            </Col>
          </Flex>
        </Form>
      )}
    </Formik>
  );
}

export default EventForm;
