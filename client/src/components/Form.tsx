import { Button, TextField, Paper, Box } from "@mui/material";
import { Formik } from "formik";
import InputMask from "react-input-mask";
import { object, string } from "yup";
import { User } from "../types";

type Props = {
  getData: (data: User) => Promise<any>;
};
const initialValues: User = { email: "", number: "" };
const userSchema = object({
  email: string().email("Email must contain @").required("E-mail is required"),
  number: string()
    .transform((value) => value.replace(/[^\d]/g, ""))
    .min(6, "Number must contain at least 6 numbers"),
});

const Form = ({ getData }: Props) => {
  const handleFormSubmit = (values: User) => {
    getData(values);
  };
  return (
    <Paper
      sx={{
        p: "16px",
        width: "320px",
      }}
    >
      <Formik
        onSubmit={(values, { resetForm }) => {
          handleFormSubmit(values);
          resetForm();
        }}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form className="customForm" noValidate onSubmit={handleSubmit}>
            <TextField
              label="e-mail"
              name="email"
              fullWidth
              type="email"
              variant="outlined"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              error={!!touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              size="small"
              sx={{
                m: "8px",
              }}
            />
            <InputMask
              mask="99-99-99"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.number}
            >
              <TextField
                label="number"
                name="number"
                type="text"
                variant="outlined"
                fullWidth
                error={!!touched.number && !!errors.number}
                helperText={touched.number && errors.number}
                size="small"
                sx={{
                  m: "8px",
                }}
              />
            </InputMask>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                m: "8px",
              }}
            >
              find
            </Button>
          </form>
        )}
      </Formik>
    </Paper>
  );
};

export default Form;
