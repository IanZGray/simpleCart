import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import products from './data/db';
import Cart from './components/cart/Cart';
import List from './components/list/List';
import Checkout from './components/checkout/Checkout';

function App() {
  return (

    <div className="backWin row">
      <List data={products}></List> <Cart data={products}></Cart> <Checkout></Checkout>
    </div>

  );
}

export default App;
