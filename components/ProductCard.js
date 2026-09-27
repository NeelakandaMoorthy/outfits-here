export default function ProductCard({product}){
  return <article className="card">
    <a href={`/product/${product.id}`}>
      <img className="card-image" src={product.image} alt={product.name} loading="lazy"/>
    </a>
    <div className="card-body">
      <div className="card-brand">{product.brand}</div>
      <div className="card-title">{product.name}</div>
      <div className="price">₹{product.price.toLocaleString('en-IN')}
        {product.originalPrice ? <span className="old">₹{product.originalPrice.toLocaleString('en-IN')}</span> : null}
      </div>
      <a className="shop" href={product.affiliateUrl} target="_blank" rel="nofollow sponsored noopener">Shop Now</a>
    </div>
  </article>;
}