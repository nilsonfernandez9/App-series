import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom';

//Components
import Navbar from "./components/Navbar";

//Paginas
import Inicio from './pages/Inicio';
import About from './pages/About';
import Single from './pages/Single';

const App = () => {
  return (
    <Router>
      {/* Navbar */}
      <Navbar /> 
      <div className="container">
        <Switch>
          <Route exact path="/" component={Inicio}/>
          <Route exact path="/about" component={About}/>
          <Route path="/singleshow/:id" component={Single}/>
        </Switch>

      </div>
    </Router>
  )
};

export default App;