import React, { useReducer } from "react";
import { login } from "./apiService";
import {
  TextField,
  Button,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const loginReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, isLoading: true };
    case "error":
      return {
        ...state,
        isLoading: false,
        error: "Invalid username or password",
        isLoggedIn: false,
      };
    case "success":
      return {
        ...state,
        isLoading: false,
        error: "",
        isLoggedIn: true,
        password: "",
      };
    case "logout":
      return {
        ...state,
        isLoggedIn: false,
        username: "",
      };
    case "field":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};

const initialValue = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};

export default function LogInForm() {
  const [state, dispatch] = useReducer(loginReducer, initialValue);
  const navigate = useNavigate();
  const { username, password, isLoading, error, isLoggedIn } = state;

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "login" });
    try {
      await login({ username, password });
      dispatch({ type: "success" });
    } catch (error) {
      dispatch({ type: "error" });
    }
  };

  const navigatePage = () => {
    dispatch({ type: "logout" });
    navigate("/vinguyen");
  };

  return (
    <div>
      <div>
        {isLoggedIn ? (
          <>
            <Typography variant="h3" sx={{ mt: 10 }}>
              Welcome {username}!
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                bgcolor: "black",
                color: "white",
                "&:hover": {
                  bgcolor: "#333",
                },
              }}
              onClick={navigatePage}
            >
              Go to Home Page
            </Button>
          </>
        ) : (
          <form onSubmit={onSubmit}>
            <Typography sx={{ mt: 10 }} color="error">
              {error}
            </Typography>
            <Box>
              <TextField
                type="text"
                label="Username"
                value={username}
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    payload: { name: "username", value: e.currentTarget.value },
                  })
                }
                fullWidth
                margin="normal"
                sx={{ width: "33%" }}
              />
            </Box>
            <Box>
              <TextField
                type="password"
                label="Password"
                value={password}
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    payload: { name: "password", value: e.currentTarget.value },
                  })
                }
                fullWidth
                margin="normal"
                sx={{ width: "33%" }}
              />
            </Box>
            <Box>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "black",
                  color: "white",
                  "&:hover": {
                    bgcolor: "#333",
                  },
                }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <CircularProgress sx={{ color: "black" }} size={24} />
                ) : (
                  "Log In"
                )}
              </Button>
            </Box>
          </form>
        )}
      </div>
    </div>
  );
}
