import React, { useState } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Container, Grid, TextField, Typography } from "@mui/material/";
import SuccessToast from "./SuccessToast";

const validationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, "Please enter a valid name")
    .max(50, "Please enter a valid name")
    .required("Please specify your first name"),
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address")
    .required("Email is required."),
  message: yup
    .string()
    .trim()
    .max(250, "Message Limit")
    .required("Please specify your message"),
});

const Contact = () => {
  const [openToast, setOpenToast] = useState(false);

  const handleCloseToast = () => {
    setOpenToast(false);
  };

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const onSubmit = async (values, { resetForm }) => {
    try {
      await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify(values),
      });
      resetForm();
      setOpenToast(true);
    } catch (err) {
      console.log(err);
      alert("Error sending message");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ padding: { xs: 2, lg: 0 } }}
      >
        <Grid
          item
          container
          lg={6}
          direction="column"
          sx={{ maxWidth: { xs: 550, lg: 1 }, pb: { xs: 5, lg: 0 } }}
        >
          <Grid item mb={1}>
            <Typography
              variant="h5"
              color="primary"
              fontWeight="bold"
              gutterBottom
              sx={{ letterSpacing: "0.15rem" }}
            >
              CONTACT
            </Typography>

            <Typography variant="subtitle1" color="primary">
              What do you do? 
            </Typography>
          </Grid>

          <Grid item mb={1}>
            <TextField
              id="name"
              label="Name"
              name="name"
              fullWidth
              variant="standard"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item mb={4}>
            <TextField
              id="email"
             label="Email"
              type="email"
              name="email"
              variant="standard"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item mb={3}>
            <Typography variant="body1" color="secondary" gutterBottom>
              Message
            </Typography>
            <TextField
              id="message"
              name="message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </Grid>
          <Grid item>
            <SuccessToast
              open={openToast}
              handleCloseToast={handleCloseToast}
            />
          </Grid>

          <Grid item align="center">
            <Button variant="outlined" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>

        <Grid item lg={6} sx={{ display: { xs: "none", md: "block" } }}>
          <Container maxWidth="sm">
            <Image
              src="/images/profile-shot.jpg"
              alt="profile"
              justify="center"
              priority
            />
          </Container>
        </Grid>
      </Grid>
    </form>
  );
};

export default Contact;
