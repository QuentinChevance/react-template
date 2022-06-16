import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Loader from "../Loader";

const Applications = lazy(() => import("../../pages/Applications"));

const App = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col justify-center h-screen items-center">
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route
            path="/applications"
            element={
              <Suspense
                fallback={<Loader value="Chargement des applications..." />}
              >
                <Applications />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
