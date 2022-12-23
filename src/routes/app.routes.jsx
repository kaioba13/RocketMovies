import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { MoviesPreview } from "../pages/MoviesPreview";
import { Profile } from "../pages/Profile";
import { CreateMovie } from "../pages/CreateMovie";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/moviespreview/:id" element={<MoviesPreview />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/createmovie" element={<CreateMovie />} />
    </Routes>
  );
}
