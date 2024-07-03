import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Rootpage from './components/Rootpage';
import Profile from './components/profile/Profile';
import Profilepage from './components/profile/Profilepage';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootpage/>,
    children:[
      {
        path: "/",
        element: <Profilepage/>,
      },
      {
        path: "/skills",
        element: <Skills/>,
      },
      {
        path: "/projects",
        element: <Projects/>,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
