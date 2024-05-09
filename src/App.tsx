import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import { Admin } from "./pages/admin/admin";
import { NotFound } from "./pages/notfound/notfound";
import { Private } from "./routes/private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <Private>
        <Admin />
      </Private>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export { router };
