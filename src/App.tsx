import "./App.css";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const LazyInterestCalculator = lazy(() => import("./pages/InterestCalculator"));
const LazyCareerPage = lazy(() => import("./pages/CareerPage"));
const LazyLandingPage = lazy(() => import("./pages/LandingPage"));
const LazyHomePage = lazy(() => import("./pages/Homepage"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback="Loading...">
          <LazyHomePage />
        </Suspense>
      ),
    },
    {
      path: "/landing-page",
      element: (
        <Suspense fallback="Loading...">
          <LazyLandingPage />
        </Suspense>
      ),
    },
    {
      path: "/interest-calculator",
      element: (
        <Suspense fallback="Loading...">
          <LazyInterestCalculator />
        </Suspense>
      ),
    },
    {
      path: "/career-page",
      element: (
        <Suspense fallback="Loading...">
          <LazyCareerPage />
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
