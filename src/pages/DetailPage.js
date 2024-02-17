import React from "react";
import jobs from "../jobs.json";
import { useParams } from "react-router-dom";
import { Box, Chip, Container, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ApartmentIcon from "@mui/icons-material/Apartment";

function DetailPage() {
  const params = useParams();
  const jobId = params.id;
  const job = jobs.find((job) => job.id === jobId);
  const jobSkills = job.skills.slice(0, 4);

  if (!job)
    return (
      <Typography variant="h4" marginTop={3}>
        No Job found
      </Typography>
    );

  return (
    <Container maxWidth="sm" sx={{ marginTop: 3 }}>
      <Typography variant="h4" marginTop={3}>
        {job.title}
      </Typography>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {jobSkills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            variant="outlined"
            style={{ margin: "5px" }}
          />
        ))}
      </div>

      {job.skills.length > 4 && (
        <Typography variant="body2" color="text.secondary">
          {"..."}
        </Typography>
      )}

      <Typography variant="subtitle1" color="text.secondary">
        {job.description}
      </Typography>

      <Box
        marginTop={3}
        sx={{ display: "flex", justifyContent: "center" }}
        alignItems="center"
      >
        Year of Experience: {job.yrsXPExpected}
      </Box>

      <Box
        marginTop={3}
        sx={{ display: "flex", justifyContent: "center" }}
        alignItems="center"
      >
        <AttachMoneyIcon /> {job.salaryLow} - {job.salaryHigh}
      </Box>

      <Box
        marginTop={3}
        sx={{ display: "flex", justifyContent: "center" }}
        alignItems="center"
      >
        <ApartmentIcon /> {job.city}
      </Box>
    </Container>
  );
}

export default DetailPage;
