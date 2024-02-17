import React, { useState } from "react";
import { Container, Grid, Button, Box } from "@mui/material";
import JobCard from "../components/JobCard";
import jobs from "../jobs.json";
import ColorMode from "./ColorMode";

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {currentJobs.map((job) => (
          <Grid key={job.id} item xs={12} md={4} lg={3}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button
          variant="contained"
          disabled={currentPage === 1}
          onClick={prevPage}
          sx={{
            bgcolor: "black",
            color: "white",
            "&:hover": {
              bgcolor: "#333",
            },
          }}
        >
          Previous
        </Button>
        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="contained"
          disabled={currentPage === totalPages}
          onClick={nextPage}
          sx={{
            bgcolor: "black",
            color: "white",
            "&:hover": {
              bgcolor: "#333",
            },
          }}
        >
          Next
        </Button>
      </div>
      <Box sx={{ mt: 2, mb: 2 }}>
        <ColorMode />
      </Box>
    </Container>
  );
}

export default HomePage;
