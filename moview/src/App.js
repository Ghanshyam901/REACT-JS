import Movies from './Components/Movies';
// import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
  return (
 <BrowserRouter>
 <Switch>
   <Route exact path ='/' component={Home}/>
   <Route path ='/movies' component={Movies}/>
   <Route path ='/about' component={About}/>
 </Switch>
 </BrowserRouter>

  );
}

export default App;
