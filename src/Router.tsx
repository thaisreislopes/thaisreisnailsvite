import { Route, Routes } from "react-router-dom";

import { Links } from "./pages/links";
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Links />} />
      <Route path="/links" element={<Links />} />
    </Routes>
  );
}
