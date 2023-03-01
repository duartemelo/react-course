import React, { useContext} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartContext from './store/cart-context';

function App() {
  const ctx = useContext(CartContext);

  return (
    <React.Fragment>
      {ctx.cartStatus && <Cart />}
      <Header/>
      <Meals/>
    </React.Fragment>
  );
}

export default App;
