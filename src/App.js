import Home from './components/Home';
import ItemDetails from './components/ItemDetails';
import Cart from './components/Cart';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {useState} from 'react';

function App() {  
  const [cartList, setCartList] = useState([]);
  return (
    <BrowserRouter>
      <section className="section-center">
        
        <Switch>

          <Route exact path="/" >
            <div className="title">
              <h2 style={{marginTop:'20px'}}>Our Products</h2>
              <div className="underline"></div>
            </div>
            <Home/>
          </Route>

          <Route exact path="/products/:productId">
            <ItemDetails addToCart={setCartList} cartItems={cartList}/>
          </Route>

          <Route exact path="/cart">
            <div className="title">
              <h2 style={{marginTop:'20px'}}>Your Cart</h2>
              <div className="underline"></div>
            </div>
            <Cart list={cartList}/>
          </Route>

        </Switch>
        
      </section>
    </BrowserRouter>
  );
}

export default App;
