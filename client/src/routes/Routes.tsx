import { createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import AdminLogin from "../screens/Box/sections/Admin/AdminLogin";
import AdminDashboard from "../screens/Box/sections/Admin/AdminDashBoard";
import ProtectedRoute from "../components/ui/Admin/ProtectedRoute";
import { Box } from "../screens/Box";
import { About } from "../screens/Box/About";
import { Outlet } from "react-router-dom";
import ErrorPage from "../screens/Box/sections/ErrorPage/ErrorPage";

// Create a layout component with AuthProvider
const RootLayout = () => (
  <AuthProvider>
    <Outlet /> {/* This renders the matched child route */}
  </AuthProvider>
);

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Box />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/admin/login",
        element: <AdminLogin />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/admin/dashboard",
        element: (
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "*", // 👈 catch-all route for undefined paths
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
