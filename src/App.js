import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Componenentes
import Navbar from "./components/Navbar";

//Paginas
import Inicio from './pages/Inicio';
import About from './pages/About';
import Single from './pages/Single';

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <div className="container">
        <Routes>
          <Route exact path="/" component={Inicio}/>
          <Route exact path="/about" component={About}/>
          <Route path="/singleshow/:id" component={Single}/>
        </Routes>
      </div>
    </Router>
  )
};

export default App;