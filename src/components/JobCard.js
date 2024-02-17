import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";

export default function JobCard({ job }) {
  const navigate = useNavigate();

  const jobSkills = job.skills.slice(0, 4);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        onClick={() => navigate(`/job/${job.id}`)}
        sx={{ maxWidth: 345, width: "100%" }}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {job.title}
            </Typography>
            <Divider />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
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
            <Typography variant="body2" color="text.secondary">
              {job.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}
