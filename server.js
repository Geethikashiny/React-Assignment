import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000; // You can choose any available port

// CORS configuration to allow requests from any origin (for development purposes)
app.use(cors());

// Hardcoded data
const data = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

// Endpoint to get the data
app.get("/api/data", (req, res) => {
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
