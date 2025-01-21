import React,{useState} from "react";
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
  History,
  Success,
  CreateEvent,
  Dashboard,
  Events,
  Payout,
  Approval,
  HistoryOrganizer
} from "./index";
import { appRoutesConstants } from "./appRoutesConstants";
import { createContext } from "react";
export const AppContext =createContext();

function AppRoutes() {
  const [update,setUpdate]=useState(false)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path={appRoutesConstants.Home} element={<Home />} />
          <Route path={appRoutesConstants.About} element={<About />} />
          <Route path={appRoutesConstants.Event} element={<Event />} />
          <Route path={appRoutesConstants.Cart} element={<Cart />} />
          <Route path={appRoutesConstants.History} element={<History />} />
          <Route path={appRoutesConstants.CreateEvent} element={<CreateEvent />} />
        </Route>

        <Route path={appRoutesConstants.Success} element={<Success />} />

        <Route path="/" element={<Login />}>
          <Route path={appRoutesConstants.Login} element={<LoginContent />} />
          <Route path={appRoutesConstants.UpdatePassword} element={<UpdatePassword />} />
          <Route path={appRoutesConstants.LoginWithOtp} element={<LoginWithOtp />} />
          <Route path={appRoutesConstants.ForgetPassword} element={<ForgetPassword />} />
          <Route path={appRoutesConstants.Signup} element={<Signup />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>

        <Route path="/" element={<Dashboard/>}>
          <Route path={appRoutesConstants.EventOrganizer} element={<Events/>}/>
          <Route path={appRoutesConstants.Payout} element={<Payout/>}/>
          <Route path={appRoutesConstants.Approval} element={<Approval/>}/>
          <Route path={appRoutesConstants.HistoryOrganizer} element={<HistoryOrganizer/>}/>
          <Route path={appRoutesConstants.AddEvent} element={<CreateEvent/>}/>
        </Route>
      </>
    )
  );

  return <AppContext.Provider value={{ update, setUpdate }}>
  <RouterProvider router={router} />
</AppContext.Provider>;
}

export default AppRoutes;
