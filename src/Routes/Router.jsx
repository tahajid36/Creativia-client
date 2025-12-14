import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllContests from "../Pages/AllContests";
import Aboutus from "../Pages/Aboutus";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddContest from "../Pages/Dashboard/AddContest";
import MyProfile from "../Pages/Dashboard/MyProfile";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
import MyCreatedContest from "../Pages/Dashboard/MyCreatedContest";
import ParticipatedContest from "../Pages/Dashboard/ParticipatedContest";
import EditContest from "../Pages/Dashboard/EditContest";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: '/allcontest',
          Component: AllContests
        },
        {
          path: '/aboutus',
          Component: Aboutus
        },
        {
          path: '/login',
          Component: Login
        },
        {
          path: '/register',
          Component: Register
        }
    ],
  },
  {
    path: '/dashboard',
    Component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        Component: MyProfile
      },
      {
        path: '/dashboard/addcontest',
        Component: AddContest
      },
      {
        path: '/dashboard/mycreatedcontests',
        Component: MyCreatedContest
      },
      {
        path: '/dashboard/participatedcontest',
        Component: ParticipatedContest
      },
      {
        path: '/dashboard/editcontest',
        Component: EditContest
      }
    ]
  }
]);
