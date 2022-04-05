import React from "react";
import { Route , Routes } from "react-router-dom";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Login from "./view/components/Auth/Login";
import Register from "./view/components/Auth/Register";
import ProtectedRoute from "./view/components/ProtectedRoute/ProtectedRoute";
import BookRentReceiveCreate from "./view/pages/BookRentReceive/BookRentReceiveCreate";
import Home from "./view/pages/home/Home";
import InvestigationAll from "./view/pages/Investigation/InvestigationAll";
import InvestigationCreate from "./view/pages/Investigation/InvestigationCreate";
import TheLayout from "./view/pages/TheLayout";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route  path="/" element={
            <ProtectedRoute>
              <TheLayout />
            </ProtectedRoute>
             }>
            <Route path="" element={ <Home/> }  />
            <Route path="book-rent-receive/index" element={ <BookRentReceiveCreate/> }  />
            <Route path="investigation/add" element={ <InvestigationCreate/> }  />
            <Route path="investigation/list" element={ <InvestigationAll/> }  />
          </Route>
          <Route path="/register" element={ <Register/> } />
          <Route path="/login" element={ <Login/> } />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
