import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <Link to="/home">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/company">Company</Link>
          <Link to="/newproject">Novo projeto</Link>
        </ul>
      </div>
        <Switch>
          <Container customClass="min-height">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/company">
              <Company />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/newProject">
              <NewProject />
            </Route>
          </Container>
        </Switch>
      <p>Footer</p>
    </Router>
  );
}

export default App;
