import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import InterestCalculator from "./pages/InterestCalculator";
import CareerPage from "./pages/CareerPage";
import LandingPage from "./pages/LandingPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/landing-page",
      element: <LandingPage />,
    },
    {
      path: "/interest-calculator",
      element: <InterestCalculator />,
    },
    {
      path: "/career-page",
      element: <CareerPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
