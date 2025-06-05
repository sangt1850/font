import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home.tsx";
import React from "react";




const Router: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default Router