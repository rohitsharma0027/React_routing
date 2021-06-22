import {Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import Products from './components/Products'
import './App.css';

function App() {
  return (
    <div>
      <Route path="/" exact>
        <h2>Lets' get started</h2>
      </Route>
      <Route path="/welcome">
         <Welcome/>  
      </Route>
      <Route path="/products">
         <Products/>  
      </Route>  
    </div>
  );
}

export default App;
