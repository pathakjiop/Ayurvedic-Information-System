import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DesktopTwo = React.lazy(() => import("pages/DesktopTwo"));
const HerbPage = React.lazy(() => import("pages/HerbPage"));
const Consultant = React.lazy(() => import("pages/Consultant"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/desktoptwo" element={<DesktopTwo />} />
          <Route path="/herbpage" element={<HerbPage />} />
          <Route path="/consultant" element={<Consultant />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
