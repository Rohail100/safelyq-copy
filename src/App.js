import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Product from './components/businesses/SingleBusiness';
import Home from './components/Home';

function App() {
  return (
    <>
      <Header />
      <Product />
      <Home />
      <Footer />
    </>
  );
}

export default App;
