Here’s a complete React form using **Material-UI (MUI)** with full validation, error handling, and form submission—**without using Formik or Yup**.

### **Features:**

✅ Uses MUI components (`TextField`, `Button`, `Box`)  
✅ Manages form state manually (`useState`)  
✅ Implements validation for:

-   **Full Name** (Required, min 3 characters)
-   **Email** (Valid format)
-   **Password** (Min 6 characters, at least one number)
-   **Phone Number** (10-digit format)  
    ✅ Displays error messages only for touched fields  
    ✅ Marks all fields as touched on submit

---

### **📌 Full Code:**

```jsx
import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const validateForm = (values) => {
	const errors = {};

	if (!values.fullName.trim()) {
		errors.fullName = "Full Name is required";
	} else if (values.fullName.length < 3) {
		errors.fullName = "Full Name must be at least 3 characters";
	}

	if (!values.email) {
		errors.email = "Email is required";
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
		errors.email = "Invalid email format";
	}

	if (!values.password) {
		errors.password = "Password is required";
	} else if (values.password.length < 6) {
		errors.password = "Password must be at least 6 characters";
	} else if (!/\d/.test(values.password)) {
		errors.password = "Password must contain at least one number";
	}

	if (!values.phone) {
		errors.phone = "Phone number is required";
	} else if (!/^\d{10}$/.test(values.phone)) {
		errors.phone = "Phone number must be exactly 10 digits";
	}

	return errors;
};

export default function CustomMUIForm() {
	const [values, setValues] = useState({
		fullName: "",
		email: "",
		password: "",
		phone: "",
	});
	const [errors, setErrors] = useState({});
	const [touched, setTouched] = useState({});

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });

		if (touched[e.target.name]) {
			setErrors(
				validateForm({ ...values, [e.target.name]: e.target.value })
			);
		}
	};

	const handleBlur = (e) => {
		setTouched({ ...touched, [e.target.name]: true });
		setErrors(validateForm(values));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Mark all fields as touched
		const allTouched = Object.keys(values).reduce(
			(acc, key) => ({ ...acc, [key]: true }),
			{}
		);
		setTouched(allTouched);

		// Run validation
		const validationErrors = validateForm(values);
		setErrors(validationErrors);

		if (Object.keys(validationErrors).length === 0) {
			alert("Form submitted successfully!");
		}
	};

	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			sx={{
				maxWidth: 400,
				mx: "auto",
				mt: 5,
				p: 3,
				boxShadow: 3,
				borderRadius: 2,
			}}
		>
			<Typography variant="h5" mb={2}>
				Register
			</Typography>

			<TextField
				label="Full Name"
				name="fullName"
				value={values.fullName}
				onChange={handleChange}
				onBlur={handleBlur}
				error={touched.fullName && Boolean(errors.fullName)}
				helperText={touched.fullName && errors.fullName}
				fullWidth
				margin="normal"
			/>

			<TextField
				label="Email"
				name="email"
				type="email"
				value={values.email}
				onChange={handleChange}
				onBlur={handleBlur}
				error={touched.email && Boolean(errors.email)}
				helperText={touched.email && errors.email}
				fullWidth
				margin="normal"
			/>

			<TextField
				label="Password"
				name="password"
				type="password"
				value={values.password}
				onChange={handleChange}
				onBlur={handleBlur}
				error={touched.password && Boolean(errors.password)}
				helperText={touched.password && errors.password}
				fullWidth
				margin="normal"
			/>

			<TextField
				label="Phone Number"
				name="phone"
				type="tel"
				value={values.phone}
				onChange={handleChange}
				onBlur={handleBlur}
				error={touched.phone && Boolean(errors.phone)}
				helperText={touched.phone && errors.phone}
				fullWidth
				margin="normal"
			/>

			<Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
				Submit
			</Button>
		</Box>
	);
}
```

---

### **🔹 How It Works**

1. **Manages Form State** – Stores user input in `useState`.
2. **Validates Input** – Runs `validateForm()` function on blur and submit.
3. **Handles Errors** – Displays messages only for touched fields.
4. **Handles Submission** – Marks all fields as touched, validates again, and submits if no errors.

This gives you **Formik-like behavior** with MUI but without external packages. 🚀 Want any modifications? 😊
