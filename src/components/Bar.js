import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Login } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Bar({ isLoggedIn }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchJob, setSearchJob] = useState("");

  const handleSignInClick = () => {
    navigate("/login");
  };

  const handleSignOutClick = () => {
    navigate("/");
  };

  const handleSearchJob = (e) => {
    setSearchJob(e.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchJob}
              onChange={handleSearchJob}
            />
          </Search>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Job Routing
          </Typography>

          {location.pathname === "/vinguyen" ? (
            <>
              <Button color="inherit" onClick={handleSignOutClick}>
                <Avatar sx={{ bgcolor: "pink", ml: 2 }}>VN</Avatar>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    ml: 1,
                    textTransform: "none",
                  }}
                  alignItems="center"
                >
                  Sign Out
                </Typography>
              </Button>
            </>
          ) : (
            <Button color="inherit" onClick={handleSignInClick}>
              <Login />
              <Typography
                variant="subtitle1"
                sx={{ ml: 1, textTransform: "none" }}
              >
                Sign In
              </Typography>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
