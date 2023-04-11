
import './App.css';
import Navbar from './components/Navbar';
import ProdDetails from './components/ProdDetails';
import Product from './components/Product';

function App() {
  return (
    <div className="">
      <Navbar />
      <div className='container'>
        <div className='row my-5'>
          <div className='col-6'>
            <Product />
          </div>
          <div className='col-6'>
            <ProdDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
