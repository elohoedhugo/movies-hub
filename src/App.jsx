import React from "react";
import "./App.css";
import MovieFinder from "./components/MovieFinder";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Recommendations from "./components/Recommendations";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<MovieFinder/>}/>
      <Route path="recommendations" element={<Recommendations/>}/>
    </Route>
  )
)

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
