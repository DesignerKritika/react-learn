function HeroPart() {
  return (
    <div>
      <div class="hero">
        <div>
          <h1>Everyday things, delivered to your door.</h1>
          <p>
            Groceries, home goods and gadgets from local sellers. Free delivery
            on orders above ₹499.
          </p>
          <a class="btn" href="#shop">
            Start shopping
          </a>
        </div>
        <div className="hero-art" aria-hidden="true">
          🛍️<span>Up to 30% off</span>
        </div>
      </div>

      <div className="perks">
        <div>
          Free delivery<small>On orders above ₹499</small>
        </div>
        <div>
          7-day returns<small>If it isn’t right, send it back</small>
        </div>
        <div>
          Cash on delivery<small>Pay when it arrives</small>
        </div>
      </div>
    </div>
  );
}
export default HeroPart;
