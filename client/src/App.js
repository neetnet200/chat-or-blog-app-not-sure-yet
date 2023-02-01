import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  // Route
} from "react-router-dom";
import Home from "./pages/Home" 
import Login from "./pages/Login" 
import Register from "./pages/Register" 
import Single from "./pages/Single"
import Write from "./pages/Write"  
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar />
      <Home />
      <Footer />
    </div>,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
  <div>
    <RouterProvider router={router} />
  </div>
  )}

export default App;
