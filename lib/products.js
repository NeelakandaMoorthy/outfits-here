export const CATEGORIES = {
  mens:{name:"Men's Fashion",slug:"mens-fashion"},
  womens:{name:"Women's Fashion",slug:"womens-fashion"},
  shoes:{name:"Shoes",slug:"shoes"},
  accessories:{name:"Accessories",slug:"accessories"},
  watches:{name:"Watches",slug:"watches"},
  bags:{name:"Bags",slug:"bags"}
};

export const SAMPLE_PRODUCTS = [
  {id:"1",name:"Classic Casual Shirt",description:"Everyday casual shirt.",image:"https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=700&q=80",price:799,originalPrice:1299,category:"mens",brand:"Style Edit",affiliateUrl:"https://www.amazon.in/s?k=mens+casual+shirt",tags:["shirt","mens"],featured:true,trending:true},
  {id:"2",name:"Minimal White Sneakers",description:"Clean everyday sneakers.",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",price:1499,originalPrice:2499,category:"shoes",brand:"Street Edit",affiliateUrl:"https://www.amazon.in/s?k=white+sneakers",tags:["shoes"],featured:true,trending:true},
  {id:"3",name:"Women's Everyday Dress",description:"Simple versatile dress.",image:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80",price:999,originalPrice:1799,category:"womens",brand:"Style Edit",affiliateUrl:"https://www.amazon.in/s?k=womens+casual+dress",tags:["dress","womens"],featured:true,trending:true},
  {id:"4",name:"Everyday Analog Watch",description:"Classic watch styling.",image:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",price:1199,originalPrice:1999,category:"watches",brand:"Time Edit",affiliateUrl:"https://www.amazon.in/s?k=mens+analog+watch",tags:["watch"],featured:true,trending:false}
];

export function getProduct(id){return SAMPLE_PRODUCTS.find(p=>p.id===id);}
