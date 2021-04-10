import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './components/style.css';
import Navbar from './components/Navbar';
import Page404 from './components/Page404';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/projects"><Projects /></Route>
        <Route path="/about"><About /></Route>
        <Route><Page404 /></Route>
      </Switch>
    </Router>
  );
}

export default App;