import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { Links } from "./pages/links";
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/links" element={<Links />} />
    </Routes>
  );
}
