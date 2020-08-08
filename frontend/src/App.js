import React from 'react';
import data from './data'

function App() {

  const toggleMenu = () => {
    document.querySelector('.sidebar').classList.toggle('open');
  }

  return (
    <div className="grid-container">

      <header className="header">
        <nav className="nav">
          <div className="brand">
            <button onClick={toggleMenu}>&#9776;</button>
            <a href="index.html">Amazona</a>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
          </div>
        </nav>
      </header>

      <aside className="sidebar">
        <h3>Shopping categories</h3>
        <button className="sidebar__button" onClick={toggleMenu}>&times;</button>
        <ul>
          <li><a href="index.html">Sneakers</a></li>
          <li><a href="index.html">Pants</a></li>
        </ul>
      </aside>

      <main className="main">
        <div className="content">
          <ul className="products">
            {
              data.products.map(product => (
                <li key={product.id}>
                  <div className="product">
                    <img src={product.imageUrl} alt="" className="product__image" />
                    <a href="product.html" className="product__name">{product.name}</a>
                    <div className="product__brand">{product.brand}</div>
                    <div className="product__price">{product.price}</div>
                    <div className="product__rating">{product.rating} ({product.numReviews} Reviews)</div>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </main>
      <footer className="footer">
        &copy; {new Date().getFullYear()} Amazona company. All rights reserved.
        </footer>
    </div>
  );
}

export default App;
