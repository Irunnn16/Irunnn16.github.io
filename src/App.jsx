import { RouterProvider } from "react-router-dom"
import { createHashRouter } from "react-router-dom"
import MainLayouts from "./layouts/MainLayouts";
import ContactPage from "./pages/Contactpage";
import ProjectPage from "./pages/Projectpage";
import ProfilePage from "./pages/ProfilePage";

const router = createHashRouter ([
  { path: "/",
    element: <MainLayouts />,
    children: [
      {
      index: true,
      path: '/Contact',
      element: <ContactPage />,
    },
    {
      path: "/Project",
      element: <ProjectPage />,
    },
    {
      path: "/Profile",
      element: <ProfilePage />,
    },
    ],
    
  },
])
const App = () => {
  return <RouterProvider router={router} />;
};

export default App
