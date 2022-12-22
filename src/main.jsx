import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Styles/global";
import theme from "./Styles/theme";
import { Home } from "./pages/Home";
import { MoviesPreview } from "./pages/MoviesPreview";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "../src/pages/SignUp";
import { Profile } from "./pages/Profile";
import { CreateMvoie } from "./pages/CreateMovie";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CreateMvoie />
    </ThemeProvider>
  </React.StrictMode>
);
