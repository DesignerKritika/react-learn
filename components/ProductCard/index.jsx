function ProductCard() {
  return (
    <div>
      <article className="card">
        <div className="thumb" style={{ background: "#f5e6b8" }} aria-hidden="true">
          🍚
        </div>
        <div className="info">
          <span className="cat-name">Grocery</span>
          <h4>Basmati rice 5 kg</h4>
          <div className="row">
            <span className="price">
              ₹549<s>₹620</s>
            </span>
            <button className="add">Add</button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProductCard;
