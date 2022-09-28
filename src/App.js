import React from "react";
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import SingleBusiness from './components/businesses/SingleBusiness';
import Home from './components/Home';
import { ContextProvider } from "./Context";

function App() {
  return (
    <ContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="business/:id" element={ <SingleBusiness /> } />
      </Routes>
      <Footer />
    </ContextProvider>
  );
}

export default App;
