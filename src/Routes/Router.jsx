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
import ContestDetails from "../Pages/ContestDetails";
import PaymentSuccess from "../Pages/PaymentSuccess";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import CreatorRoute from "./CreatorRoute";
import AdminRoute from "./AdminRoute";
import ManageContest from "../Pages/Dashboard/ManageContest";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import Loading from "../Components/Loading";
import Error from "../Pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allcontest",
        Component: AllContests,
        errorElement: <Error></Error>
      },
      {
        path: "/aboutus",
        Component: Aboutus,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/contests/:id",
        Component: ContestDetails,
      },
      {
        path: "/payment-success",
        Component: PaymentSuccess,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        Component: DashboardHome,
      },
      {
        path: "/dashboard/myprofile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/dashboard/participatedcontest",
        Component: ParticipatedContest,
      },
      // Creator route
      {
        path: "/dashboard/editcontest",
        element: (
          <CreatorRoute>
            <EditContest></EditContest>
          </CreatorRoute>
        ),
      },
      {
        path: "/dashboard/addcontest",
        element: (
          <CreatorRoute>
            <AddContest></AddContest>
          </CreatorRoute>
        ),
      },

      {
        path: "/dashboard/mycreatedcontests",
        element: (
          <CreatorRoute>
            <MyCreatedContest> </MyCreatedContest>
          </CreatorRoute>
        ),
      },
      // this is admin route
      {
        path: "/dashboard/manageusers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managecontest",
        element: (
          <AdminRoute>
            <ManageContest></ManageContest>
          </AdminRoute>
        ),
      },
    ],
  },
]);
