import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Process from "./pages/Process";
import Portfolio from "./pages/Portfolio";
import Differentiation from "./pages/Differentiation";
import Contact from "./pages/Contact";

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
]);

export default function App() {
  return <RouterProvider router={router} />;
}
