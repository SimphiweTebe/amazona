import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

function App() {

  const toggleMenu = () => {
    document.querySelector('.sidebar').classList.toggle('open');
  }

  return (
    <Router>
      <div className="grid-container">

        <header className="header">
          <nav className="nav">
            <div className="brand">
              <button onClick={toggleMenu}>&#9776;</button>
              <Link to="/">Amazona</Link>
            </div>
            <div className="header-links">
              <Link to="/">Cart</Link>
              <Link to="/">Sign In</Link>
            </div>
          </nav>
        </header>

        <aside className="sidebar">
          <h3>Shopping categories</h3>
          <button className="sidebar__button" onClick={toggleMenu}>&times;</button>
          <ul>
            <li><Link to="/">Sneakers</Link></li>
            <li><Link to="/">Pants</Link></li>
          </ul>
        </aside>

        <main className="main">
          <div className="content">

            <Switch>
              <Route path="/product/:id" component={ProductPage} />
              <Route path="/" exact component={HomePage} />
            </Switch>

          </div>
        </main>

        <footer className="footer">
          &copy; {new Date().getFullYear()} Amazona company. All rights reserved.
        </footer>

      </div>
    </Router>
  );
}

export default App;
