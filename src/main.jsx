import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Rootpage from './components/Rootpage';
import Profilepage from './components/profile/Profilepage';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Blogs from './components/blogs/Blogs';
import Contacts from './components/contacts/Contacts';
import Resume from './components/resume/Resume';


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
      {
        path: "/blogs",
        element: <Blogs/>,
      },
      {
        path: "/contacts",
        element: <Contacts/>,
      },
      {
        path: "/resume",
        element: <Resume/>,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
