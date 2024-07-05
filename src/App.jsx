import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FrontPage from "./components/FrontPage";
import List from "./components/List";
import PageHeader from "./components/PageHeader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage />,
  },
  {
    path: "/list",
    element: <List />,
  },
]);

function App ()  {
  return (
    <div>
      <PageHeader />
      <div className="flex justify-center">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
