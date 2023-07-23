import React, { useState } from "react";
import { Container, Typography, List, ListItem, ListItemText, Collapse, Box } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const HardcodedData: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  // Hardcoded JSON data
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

  const handleExpand = (department: string) => {
    setExpanded((prev) => (prev === department ? null : department));
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Departments
        </Typography>
        <List>
          {data.map((item) => (
            <div key={item.department}>
              <ListItem button onClick={() => handleExpand(item.department)}>
                <ListItemText primary={item.department} />
                {expanded === item.department ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={expanded === item.department} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.sub_departments.map((subDept) => (
                    <ListItem key={subDept} sx={{ pl: 4 }}>
                      <ListItemText primary={subDept} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </div>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default HardcodedData;
