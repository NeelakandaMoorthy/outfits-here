import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import {getProduct} from '../../../lib/products';
import {notFound} from 'next/navigation';

export default function ProductPage({params}){
  const product=getProduct(params.id);
  if(!product) notFound();
  return <>
    <Header/><main className="section container">
      <div style={{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)",gap:40}}>
        <img className="card-image" src={product.image} alt={product.name}/>
        <div>
          <p className="eyebrow">{product.brand}</p><h1 style={{fontSize:48,letterSpacing:-2}}>{product.name}</h1>
          <p>{product.description}</p><h2>₹{product.price.toLocaleString('en-IN')}</h2>
          <a className="button" href={product.affiliateUrl} target="_blank" rel="nofollow sponsored noopener">Shop Now</a>
        </div>
      </div>
    </main><Footer/>
  </>;
}