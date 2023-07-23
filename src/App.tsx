// FirstPage.tsx
import SecondPage from "./SecondPage.tsx"
import React, { useRef, useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

const FirstPage: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const [userDetails, setUserDetails] = useState<any>(null);

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const phoneNumber = phoneNumberRef.current?.value;
    const email = emailRef.current?.value;

    // Perform form validation
    if (!name || !phoneNumber || !email) {
      alert("Please fill in all the fields before proceeding to the second page.");
    } else {
      // Save user details in localStorage
      const userDetails = {
        name,
        phoneNumber,
        email,
      };
      localStorage.setItem("userDetails", JSON.stringify(userDetails));

      // Store user details in state for conditional rendering
      setUserDetails(userDetails);
    }
  };

  return (
    <Container maxWidth="sm" sx={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}>
      {userDetails ? (
        // Show second page content if userDetails is available
        <SecondPage />
      ) : (
        // Show first page form otherwise
        <Box mt={10}>
          <Box display="flex" justifyContent="center"></Box>
        <Typography variant="h4" component="h1" gutterBottom>
          First Page
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            fullWidth
            inputRef={nameRef}
            required
            margin="normal"
          />
          <TextField
            label="Phone number"
            fullWidth
            inputRef={phoneNumberRef}
            required
            margin="normal"
          />
          <TextField
            label="Email"
            fullWidth
            inputRef={emailRef}
            required
            margin="normal"
          />
          <Box display="flex" justifyContent="center" mt={2}></Box>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
    )}
  </Container>
);
};



export default FirstPage;