import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  DetailProductPage from './views/DetailProductPage'
import LandingPage from './views/LandingPage'

import NavBar from './Navbar'

function App  ()  {
 return(
   <>
   <NavBar/>
   <section>
   <BrowserRouter>
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route exact path="/" element={< LandingPage />} />
          <Route exact path="/:productId" element={< DetailProductPage />} />
          
        </Routes>
      </div>
    </BrowserRouter>

   </section>
   </>
 )
 };

export default App
