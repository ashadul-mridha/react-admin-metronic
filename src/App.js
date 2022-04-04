import React from "react";
import { Route , Routes } from "react-router-dom";
import BookRentReceiveCreate from "./view/pages/BookRentReceive/BookRentReceiveCreate";
import Home from "./view/pages/home/Home";
import InvestigationAll from "./view/pages/Investigation/InvestigationAll";
import InvestigationCreate from "./view/pages/Investigation/InvestigationCreate";
import TheLayout from "./view/pages/TheLayout";

function App() {
  return (
    <>
      <Routes>
        <Route  path="/" element={ <TheLayout />}>
          <Route path="" element={ <Home/> }  />
          <Route path="book-rent-receive/index" element={ <BookRentReceiveCreate/> }  />
          <Route path="investigation/add" element={ <InvestigationCreate/> }  />
          <Route path="investigation/list" element={ <InvestigationAll/> }  />
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
