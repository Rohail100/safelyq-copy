import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import SingleBusiness from './components/businesses/SingleBusiness';
import Home from './components/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="business" element={ <SingleBusiness /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
