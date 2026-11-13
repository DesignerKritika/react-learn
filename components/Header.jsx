const Header = () => {
  return (
    <div>
      <header>
        <div className="wrap bar">
          <a href="#top" className="logo">
            Haat
          </a>
          <nav aria-label="Main">
            <a href="#shop">Shop</a>
            <a href="#offers">Offers</a>
            <a href="#help">Help</a>
          </nav>
          <form className="search" role="search" id="searchForm">
            <input
              id="q"
              type="search"
              placeholder="Search products"
              aria-label="Search products"
            />
            <button type="submit">Search</button>
          </form>
          <button className="cart-btn" id="openCart" aria-label="Open cart">
            Cart <b id="count">0</b>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;