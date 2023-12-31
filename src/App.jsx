import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import City from "./components/City";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Form from "./components/Form";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Settings from "./pages/Settings";
import ProtectedRoute from "./pages/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import DestinationLayout from "./pages/DestinationLayout";
import DestinationForm from "./components/DestinationForm";
import Destinations from "./pages/Destinations";
import Flights from "./ui/Flights";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime:60 * 1000,
      staleTime: 0,
    },
  },
});

function Traveller() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="destinations" element={<DestinationLayout />}>
            <Route index element={<Navigate replace to="topcities" />} />
            <Route path="topcities" element={<Destinations />} />
            <Route path="flights" element={<Flights />} />
            <Route path="destinationform" element={<DestinationForm />} />
          </Route>
          <Route
            path="app"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="settings" element={<Settings />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-dark--0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default Traveller;
