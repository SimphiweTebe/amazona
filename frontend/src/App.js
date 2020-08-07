import React from 'react';

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
            <li>
              <div className="product">
                <img src="/images/bathu.webp" alt="" className="product__image" />
                <a href="product.html" className="product__name">Journey Edition - Yellow</a>
                <div className="product__brand">Bathu</div>
                <div className="product__price">R1,700</div>
                <div className="product__rating">4.5 stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img src="/images/bathu_green.webp" alt="" className="product__image" />
                <a href="product.html" className="product__name">Journey Edition - Army Green</a>
                <div className="product__brand">Bathu</div>
                <div className="product__price">R1,700</div>
                <div className="product__rating">4.5 stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img src="/images/bathu_red.webp" alt="" className="product__image" />
                <a href="product.html" className="product__name">Journey Edition - Red</a>
                <div className="product__brand">Bathu</div>
                <div className="product__price">R1,700</div>
                <div className="product__rating">4.5 stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img src="/images/bathu_red.webp" alt="" className="product__image" />
                <a href="product.html" className="product__name">Journey Edition - Red</a>
                <div className="product__brand">Bathu</div>
                <div className="product__price">R1,700</div>
                <div className="product__rating">4.5 stars (10 Reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">
        All rights reserved.
        </footer>
    </div>
  );
}

export default App;
