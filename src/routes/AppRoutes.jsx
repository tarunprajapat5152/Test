import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import {
  Login,
  LoginContent,
  LoginWithOtp,
  UpdatePassword,
  ForgetPassword,
  Signup,
  Layout,
  Home,
  About,
  Event,
  Cart,
} from "./index";
import { appRoutesConstants } from "./appRoutesConstants";

function AppRoutes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path={appRoutesConstants.Home} element={<Home />} />
          <Route path={appRoutesConstants.About} element={<About />} />
          <Route path={appRoutesConstants.Event} element={<Event />} />
          <Route path={appRoutesConstants.Cart} element={<Cart />} />
        </Route>
        <Route path="/" element={<Login />}>
          <Route path={appRoutesConstants.Login} element={<LoginContent />} />
          <Route path={appRoutesConstants.UpdatePassword} element={<UpdatePassword />} />
          <Route path={appRoutesConstants.LoginWithOtp} element={<LoginWithOtp />} />
          <Route path={appRoutesConstants.ForgetPassword} element={<ForgetPassword />} />
          <Route path={appRoutesConstants.Signup} element={<Signup />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default AppRoutes;
