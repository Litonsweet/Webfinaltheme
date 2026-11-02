'use client'
import {useState,useEffect} from 'react'
export default function Page(){
const [t,setT]=useState({id:"gold-rush",bg:"#08080A",card:"#12121A"})
const [m,setM]=useState(false);const [d,setD]=useState(false);const [u,setU]=useState(false);const [v,setV]=useState('W0')
useEffect(()=>{const s=localStorage.getItem('litonsweet-theme');if(s&&s==="gold-rush-pro")setT({id:"gold-rush-pro",bg:"#0A0A0F",card:"#15151F"})},[])
return(
<div style={{background:t.bg,minHeight:'100vh',color:'white',fontFamily:'system-ui',overflowX:'hidden'}}>
<style>{`
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap');
.rainbow{background:linear-gradient(90deg,#FCD535,#FF8A00,#9D4EDD,#22D3EE);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.bento{background:${t.card};border:1px solid rgba(255,255,255,0.08);border-radius:20px}
.b-gold{border:1px solid rgba(252,213,53,0.3);box-shadow:0 0 20px rgba(252,213,53,0.15)}
.icon{animation:float 2.5s ease-in-out infinite;display:inline-block}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
@media(max-width:768px){.hide-m{display:none}.full-m{width:100%!important}}
`}</style>

<header style={{height:56,display:'flex',justifyContent:'space-between',padding:'0 10px',alignItems:'center',background:'rgba(8,8,10,0.9)',position:'sticky',top:0,zIndex:20,borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
<div style={{display:'flex',gap:8,alignItems:'center'}}>
<button onClick={()=>setM(!m)} style={{width:34,height:34,borderRadius:10,background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.1)',color:'white',fontSize:16}}>☰</button>
<div style={{width:30,height:30,borderRadius:8,background:'linear-gradient(135deg,#FCD535,#FF8A00)',display:'flex',alignItems:'center',justifyContent:'center',color:'black',fontWeight:800}}>LS</div>
<span className="rainbow" style={{fontWeight:800,fontSize:12}}>【entity-Exness¦canonical_name=Exness】 × Litonsweet</span>
<span style={{fontSize:8,background:'rgba(255,255,255,0.08)',padding:'2px 6px',borderRadius:10}} className="hide-m">LS-882914</span>
<span style={{fontSize:8,background:'#0A1F14',color:'#00FF88',padding:'3px 8px',borderRadius:10,border:'1px solid rgba(0,255,136,0.2)'}}>$42850.92 REAL • Theme 20 FIXED</span>
</div>
<div style={{display:'flex',gap:6,alignItems:'center'}}>
<div style={{position:'relative'}}>
<button onClick={()=>setD(!d)} style={{width:34,height:34,borderRadius:10,background:'rgba(252,213,53,0.12)',border:'1px solid rgba(252,213,53,0.3)',color:'#FCD535',fontSize:18,fontWeight:700}}>⋮</button>
{d&&<div style={{position:'absolute',top:40,right:0,width:200,background:'#12121A',borderRadius:12,border:'1px solid rgba(255,255,255,0.1)',padding:8,zIndex:30}}>
<div style={{fontSize:10,padding:'8px',background:'rgba(255,255,255,0.04)',borderRadius:8,marginBottom:4}}>📊 W0 Home $42,850.92 REAL</div>
<div style={{fontSize:10,padding:'8px',borderRadius:8}}>🎨 Theme 20 Gold Rush ID gold-rush</div>
<div style={{fontSize:10,padding:'8px',borderRadius:8}}>⚙️ Admin Pass Litonsweet@882914</div>
<div style={{fontSize:10,padding:'8px',borderRadius:8,color:'#FCD535'}}>👑 Default Protected LS-882914 Final</div>
</div>}
</div>
<button onClick={()=>setU(!u)} style={{width:30,height:30,borderRadius:50,background:'linear-gradient(135deg,#667eea,#764ba2)',border:'none',color:'white'}}>👤</button>
</div>
</header>

<div style={{display:'flex'}}>
<aside style={{width:260,padding:10,position:m?'fixed':'sticky',top:m?56:56,left:0,zIndex:15,background:m?'rgba(8,8,10,0.98)':'transparent',height:m?'calc(100vh - 56px)':'auto',overflowY:'auto',display:m?'block':undefined}} className={m?'':'hide-m'} style={{width:260,padding:10}}>
{[
{id:'W0',l:'W0 Home Page',i:'🏠',d:'HomeView.tsx - FINAL'},
{id:'W1',l:'W1 Login/Register',i:'🔐',d:'LoginView.tsx'},
{id:'W2',l:'W2 Our Theme Theme 20 Gold Rush MIDDLE',i:'🎨',d:'themes.config.ts SEPARATE SAFE',g:true},
{id:'W3',l:'W3 Admin Panel',i:'⚙️',d:'Pass Litonsweet@882914'},
{id:'F3',l:'F3 Trading',i:'📈',d:'TradingView.tsx - FIXED'},
{id:'F4',l:'F4-F5 Accounts',i:'👥',d:'AccountsView.tsx',h:true},
{id:'F6',l:'F6 Social Copy MOST COMPLEX',i:'🚀',d:'SocialCopyView.tsx'},
].map((x,idx)=>(
<div key={x.id} onClick={()=>{setV(x.id);setM(false)}} style={{padding:'11px',borderRadius:14,marginBottom:6,cursor:'pointer',background:v===x.id?'rgba(252,213,53,0.12)':x.g?'rgba(252,213,53,0.08)':'rgba(255,255,255,0.03)',border:v===x.id?'1px solid rgba(252,213,53,0.4)':x.g?'1px solid rgba(252,213,53,0.25)':'1px solid rgba(255,255,255,0.06)'}}>
<div style={{display:'flex',gap:8,alignItems:'center'}}><span className="icon" style={{fontSize:16,animationDelay:idx*0.1+'s'}}>{x.i}</span><div><div style={{fontSize:12,fontWeight:x.g?700:500}}>{x.l} {x.g&&<span style={{fontSize:6,background:'#FCD535',color:'black',padding:'1px 4px',borderRadius:10}}>MIDDLE FINAL</span>} {x.h&&<span style={{fontSize:6,background:'#00FF88',color:'black',padding:'1px 4px',borderRadius:10}}>ACCOUNT</span>}</div><div style={{fontSize:7,opacity:0.4}}>{x.d}</div></div></div>
</div>
))}
</aside>
{m&&<div onClick={()=>setM(false)} style={{position:'fixed',top:56,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.5)',zIndex:10}}/>}

<main style={{flex:1,padding:10}} className="full-m">
<div className="bento b-gold" style={{padding:12,marginBottom:10}}>
<div style={{fontSize:12}}><span className="rainbow">W0 Home - LS-882914 - Theme 20 Gold Rush - Premium Exness Dark - 3 Dot + Mobile + Animation Fixed</span> <span style={{fontSize:8,background:'rgba(0,255,136,0.1)',color:'#00FF88',padding:'3px 6px',borderRadius:10,border:'1px solid rgba(0,255,136,0.2)',marginLeft:6}}>✅ Fixed</span></div>
</div>

<div style={{display:'grid',gridTemplateColumns:'1.2fr 0.8fr',gap:10}} className="full-m" style={{display:'grid',gap:10}}>
<div className="bento" style={{padding:12}}>
<div style={{fontSize:12,fontWeight:700,marginBottom:8}}>📈 F3 Trading - Total Balance $42850.92 - BTCUSD Chart</div>
<div style={{height:100,background:'rgba(0,0,0,0.4)',borderRadius:10,display:'flex',alignItems:'end',gap:2,padding:8}}>
{Array.from({length:30}).map((_,i)=><div key={i} style={{flex:1,height:20+Math.random()*60+'%',background:i>20?'#FF3B30':'#00FF88',borderRadius:2}}/>) }
</div>
<div style={{display:'flex',gap:8,marginTop:10}}><button style={{flex:1,padding:10,borderRadius:10,background:'#00FF88',border:'none',color:'black',fontWeight:800}}>↑ BUY</button><button style={{flex:1,padding:10,borderRadius:10,background:'#FF3B30',border:'none',color:'white',fontWeight:800}}>↓ SELL</button></div>
</div>
<div className="bento" style={{padding:12}}>
<div style={{fontSize:11,fontWeight:700,marginBottom:8}}>Markets Live</div>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6}}>
<div style={{background:'rgba(0,0,0,0.4)',borderRadius:8,padding:8}}><div style={{fontSize:8,opacity:0.5}}>BTCUSD</div><div style={{fontSize:11,fontWeight:700}}>68,214.92</div><div style={{fontSize:9,color:'#00FF88'}}>+1.24% 📈</div></div>
<div style={{background:'rgba(0,0,0,0.4)',borderRadius:8,padding:8}}><div style={{fontSize:8,opacity:0.5}}>EURUSD</div><div style={{fontSize:11,fontWeight:700}}>1.0842</div><div style={{fontSize:9,color:'#FF3B30'}}>-0.11% 📉</div></div>
</div>
</div>
</div>

<div className="bento" style={{padding:12,marginTop:10}}>
<div style={{fontSize:11,fontWeight:700,marginBottom:8}}>🎨 W2 Our Theme - Theme 20 Gold Rush MIDDLE - Modify + New Option</div>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
<div style={{background:'rgba(0,0,0,0.5)',borderRadius:10,padding:10,border:'2px solid #FCD535'}}><div style={{height:30,background:'linear-gradient(90deg,#FCD535,#FF8A00,#9D4EDD,#22D3EE)',borderRadius:6,marginBottom:6}}/><div style={{fontSize:9}}>👑 Theme 20 Gold Rush ✓ Active 👑 Default - FINAL IP - ID gold-rush</div></div>
<div style={{background:'rgba(0,0,0,0.4)',borderRadius:10,padding:10,border:'1px solid rgba(255,255,255,0.08)'}}><div style={{height:30,background:'linear-gradient(90deg,#FCD535,#FFD700)',borderRadius:6,marginBottom:6}}/><div style={{fontSize:9}}>✨ Theme 21 Gold Rush Pro NEW - NEW OPTION - ID gold-rush-pro</div></div>
</div>
</div>

</main>
</div>
</div>
)
}
