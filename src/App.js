import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Switch,
  Route,
  Link,
  BrowserRouter,
  useParams,
} from "react-router-dom";
import Top250Movies from "./Components/Top250Movies";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <main>
        <div className="App">
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Joe Bushnell Test</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">
                    <Link to="/Top250">Top 250</Link>
                  </Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Switch>
            <Route exact path="/"></Route>
            <Route path="/Top250">
              <Top250Movies />
            </Route>
            <Route path="/movies/:id">
              <MovieDetails />
            </Route>
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default App;
