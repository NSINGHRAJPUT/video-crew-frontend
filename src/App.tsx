import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import AdminSidebar from "./components/admin/AdminSidebar";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Process from "./pages/Process";
import Portfolio from "./pages/Portfolio";
import Differentiation from "./pages/Differentiation";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPortfolio from "./pages/admin/AdminPortfolio";
import AdminContact from "./pages/admin/AdminContact";

function Layout() {
  return (
    <div className="bg-[#080A0C] text-white font-sans">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function AdminLayout() {
  return (
    <ProtectedRoute>
      <div className="bg-black text-white font-sans flex">
        <AdminSidebar />
        <main className="flex-1 ml-64">
          <Outlet />
        </main>
      </div>
    </ProtectedRoute>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/process", element: <Process /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/differentiation", element: <Differentiation /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  {
    path: "/admin-login",
    element: <AdminLogin />
  },
  {
    element: <AdminLayout />,
    children: [
      { path: "/admin", element: <AdminDashboard /> },
      { path: "/admin/portfolio", element: <AdminPortfolio /> },
      { path: "/admin/contact", element: <AdminContact /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
