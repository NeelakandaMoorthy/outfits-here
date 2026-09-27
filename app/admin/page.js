use client';
import {useState} from 'react';
export default function Admin(){
 const [name,setName]=useState(''); const [url,setUrl]=useState(''); const [msg,setMsg]=useState('');
 function add(){if(!name||!url){setMsg('Please enter product name and affiliate URL.');return} setMsg('Product form received. For production, connect this form to your chosen data store.');}
 return <main className="section container"><h1 style={{fontSize:48}}>Admin</h1><p>Add and manage your daily product workflow.</p>
 <div style={{maxWidth:600,display:'grid',gap:12}}>
 <input placeholder="Product name" value={name} onChange={e=>setName(e.target.value)} style={{padding:14,border:'1px solid #ddd',borderRadius:8}}/>
 <input placeholder="Affiliate URL" value={url} onChange={e=>setUrl(e.target.value)} style={{padding:14,border:'1px solid #ddd',borderRadius:8}}/>
 <button onClick={add} style={{padding:14,border:0,borderRadius:8,background:'#111',color:'#fff'}}>Add Product</button>
 <p>{msg}</p></div></main>;
}