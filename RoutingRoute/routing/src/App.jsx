import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Layout from "./components/Layout"
const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About/>,
       
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    element: <Layout/>,
  },
]);
function App() {
  return (<>
     <RouterProvider router={router} />;

  </>
    
    
  )
}

export default App