import React from "react"
import Header from "./component/Navbar/Header"
import Footer from "./component/Footer/Footer"
import { Auth0Provider } from "@auth0/auth0-react";
// import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllProduct from "./Pages/Renderingpage/AllProduct"
import Main from "./Pages/Main/Main"
import Search from "./component/Searchfearure/Search"
import Compare from "./Pages/Compareproduct/Compare";
import { CompareProvider } from './context/CompareContext.jsx';
import { ResultsProvider } from "./context/ResultContext";
import { BrandProvider } from "./context/BrandContext";
const App = () => {
  return (
    // <>
    <Auth0Provider
      domain="dev-kisjwrg5kx37ck8e.us.auth0.com"
      clientId="z8VMm01c9WhvjBakraSHn8jlgdRPtN9n"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <BrandProvider>    
        <ResultsProvider>
      <CompareProvider>
         <BrowserRouter>

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/allproducts' element={<AllProduct />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Compare' element={<Compare/>} />

        </Routes>
        <Footer />
      </BrowserRouter>
      </CompareProvider>
      </ResultsProvider>
      </BrandProvider>

    </Auth0Provider>
  )
}

export default App
