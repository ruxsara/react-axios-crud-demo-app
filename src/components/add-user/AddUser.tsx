import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";
import { object, string } from "yup";

let validationSchema = yup.object ({
  name: yup.string().required("Name is required"),
  username: yup.string().required("Username is required"),
  email: yup.string().required("Enter a valid email "),
  address: yup.string().required("Address is required"),
  phone: yup.string().required("Phone is required"),
});

export function AddUser() {
  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      address: "",
      phone: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
    validationSchema: validationSchema,
  });
  return (
    <div className="AddUser">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="name"
          name="name"
          label="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name) }
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextField
          id="username"
          name="username"
          label="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username) }
          helperText={formik.touched.username && formik.errors.username}
        />

        <TextField
          id="email"
          name="email"
          label="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email) }
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          id="address"
          name="address"
          label="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address) }
          helperText={formik.touched.address && formik.errors.address}
        />

        <TextField
          id="phone"
          name="phone"
          label="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone) }
          helperText={formik.touched.phone && formik.errors.phone}
        />

        <Button type="submit" variant="outlined">
          ADD
        </Button>
      </form>
    </div>
  );
}
