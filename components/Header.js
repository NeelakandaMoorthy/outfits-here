export default function Header(){
  return <header className="header"><div className="container nav">
    <a className="logo" href="/">Outfits Here</a>
    <nav className="navlinks">
      <a href="/category/mens-fashion">Men</a>
      <a href="/category/womens-fashion">Women</a>
      <a href="/trending">Trending</a>
      <a href="/deals">Deals</a>
    </nav>
  </div></header>;
}