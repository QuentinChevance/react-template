import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import DarkMode from "../DarkMode";
import Loader from "../Loader";

const Applications = lazy(() => import("../../pages/Applications"));

const App = () => {
  return (
    <div className="bg-slate-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 flex flex-col justify-center h-screen items-center">
        <DarkMode />
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
    </div>
  );
};

export default App;
