import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { SAMPLE_PRODUCTS } from '../lib/products';

export default function HomePage() {
  const featured = SAMPLE_PRODUCTS.filter(p => p.featured);
  const trending = SAMPLE_PRODUCTS.filter(p => p.trending);

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container hero-inner">
            <p className="eyebrow">OUTFITS HERE</p>
            <h1>Find your next favourite outfit.</h1>
            <p className="hero-copy">Curated fashion finds, trending styles and everyday deals — all in one place.</p>
            <a className="button" href="#products">Explore finds</a>
          </div>
        </section>

        <section className="section container" id="products">
          <div className="section-head">
            <div>
              <p className="eyebrow">CURATED FOR YOU</p>
              <h2>Featured finds</h2>
            </div>
            <a href="/trending">View all →</a>
          </div>
          <div className="grid">
            {featured.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </section>

        <section className="section muted">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">WHAT'S HOT</p>
                <h2>Trending now</h2>
              </div>
              <a href="/deals">Best deals →</a>
            </div>
            <div className="grid">
              {trending.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}