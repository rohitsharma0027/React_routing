import {Route, Switch} from 'react-router-dom';
import Welcome from './components/Welcome';
import Products from './components/Products'
import MainHeader from './components/MainHeader';
import ProductDetail from './components/ProductDetail';
import './App.css';

function App() {
  return (
    <>
      <MainHeader/>
      <Switch>
        <Route path="/" exact>
          <h2>Lets' get started</h2>  
        </Route>
        <Route path="/welcome">
          <Welcome/>  
        </Route>
        <Route path="/products" exact>
          <Products/>  
        </Route> 
        <Route path="/products/:productId" exact>
          <ProductDetail/>  
        </Route> 
      </Switch>  
    </>
  );
}

export default App;
