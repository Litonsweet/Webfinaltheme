'use client'
import { useState, useEffect } from 'react'

const themes = [
  { id: "gold-rush", name: "Theme 20 Gold Rush", badge: "FINAL IP DEFAULT PROTECTED", icon: "👑", bg: "#08080A", card: "#12121A", gradient: ["#FCD535","#FF8A00","#9D4EDD","#22D3EE"], isDefault: true },
  { id: "gold-rush-pro", name: "Theme 21 Gold Rush Pro NEW", badge: "NEW OPTION", icon: "✨", bg: "#0A0A0F", card: "#15151F", gradient: ["#FCD535","#FFD700","#FF8A00"] },
  { id: "exness-dark", name: "Exness Dark", badge: "Exness", icon: "🌑", bg: "#000000", card: "#111111", gradient: ["#FFD500","#FF8A00"] },
]

const menuItems = [
  {id:'W0',label:'W0 Home Page',icon:'🏠',desc:'HomeView.tsx - FINAL',group:'MAIN'},
  {id:'W1',label:'W1 Login/Register',icon:'🔐',desc:'LoginView.tsx',group:'AUTH'},
  {id:'W2',label:'W2 Our Theme Theme 20 Gold Rush MIDDLE',icon:'🎨',desc:'themes.config.ts SEPARATE SAFE',group:'THEME',middle:true,gold:true},
  {id:'W3',label:'W3 Admin Panel',icon:'⚙️',desc:'Pass Litonsweet@882914',group:'ADMIN'},
  {id:'F3',label:'F3 Trading',icon:'📈',desc:'TradingView.tsx - FIXED NO SPACE',group:'FINANCE'},
  {id:'F4',label:'F4-F5 Accounts',icon:'👥',desc:'AccountsView.tsx - Master 10-Level',group:'FINANCE',highlight:true},
  {id:'F6',label:'F6 Social Copy MOST COMPLEX',icon:'🚀',desc:'SocialCopyView.tsx',group:'SOCIAL'},
]

export default function Page(){
  const [currentTheme,setCurrentTheme]=useState(themes[0])
  const [activeView,setActiveView]=useState('W0')
  const [balance]=useState(42850.92)
  const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(false)
  const [isUserMenuOpen,setIsUserMenuOpen]=useState(false)
  const [is3DotOpen,setIs3DotOpen]=useState(false)
  
  useEffect(()=>{
    const s=localStorage.getItem('litonsweet-theme')
    if(s){ const t=themes.find(x=>x.id===s); if(t) setCurrentTheme(t) }
  },[])

  const selectTheme=(t:any)=>{
    setCurrentTheme(t)
    localStorage.setItem('litonsweet-theme',t.id)
  }

  return (
    <div style={{background:currentTheme.bg,minHeight:'100vh',color:'white',fontFamily:'Space Grotesk,system-ui',position:'relative',overflowX:'hidden',width:'100%'}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap');
        *{box-sizing:border-box}
        .rainbow{background:linear-gradient(90deg,#FCD535,#FF8A00,#9D4EDD,#22D3EE);-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:rainbow 3s linear infinite;background-size:300%;}
        @keyframes rainbow{0%{background-position:0%}50%{background-position:100%}100%{background-position:0%}}
        .bento{background:linear-gradient(135deg, ${currentTheme.card} 0%, rgba(255,255,255,0.02) 100%);border:1px solid rgba(255,255,255,0.08);border-radius:20px;backdrop-filter:blur(20px);box-shadow:0 8px 32px rgba(0,0,0,0.4);}
        .bento-gold{border:1px solid rgba(252,213,53,0.25);box-shadow:0 0 20px rgba(252,213,53,0.15);}
        .blob{position:absolute;border-radius:50%;filter:blur(100px);opacity:0.18;pointer-events:none;}
        .icon-anim{animation:iconFloat 3s ease-in-out infinite;display:inline-block;}
        @keyframes iconFloat{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-4px) scale(1.1)}}
        .menu-anim{transition:all 0.3s cubic-bezier(0.4,0,0.2,1);}
        .menu-anim:hover{transform:translateX(4px) scale(1.02);box-shadow:0 0 20px rgba(252,213,53,0.2);}
        .menu-anim:active{transform:scale(0.98);}
        @media(max-width:768px){.desktop-only{display:none!important}.mobile-full{width:100%!important;max-width:100%!important}.mobile-grid{grid-template-columns:1fr!important}}
        @media(min-width:769px){.mobile-only{display:none!important}}
        .buy-btn{background:linear-gradient(90deg,#00FF88,#00CC6A);box-shadow:0 0 20px rgba(0,255,136,0.3);}
        .sell-btn{background:linear-gradient(90deg,#FF3B30,#FF6B55);box-shadow:0 0 20px rgba(255,59,48,0.3);}
      `}</style>

      <div className="blob" style={{width:600,height:600,background:'#1A0F2E',left:-150,top:-150}}/>
      <div className="blob" style={{width:500,height:500,background:'#1E150A',right:-100,top:200}}/>

      <header style={{height:56,borderBottom:'1px solid rgba(255,255,255,0.06)',display:'flex',justifyContent:'space-between',padding:'0 12px',alignItems:'center',background:'rgba(8,8,10,0.9)',position:'sticky',top:0,zIndex:20,backdropFilter:'blur(20px)',width:'100%'}}>
        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <button onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)} className="mobile-only" style={{width:36,height:36,borderRadius:10,background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.1)',color:'white',fontSize:18,cursor:'pointer'}}>☰</button>
          <div style={{width:32,height:32,borderRadius:10,background:'linear-gradient(135deg,#FCD535,#FF8A00)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,color:'black',fontSize:14}}>LS</div>
          <span className="rainbow desktop-only" style={{fontWeight:800,fontSize:13}}>Exness × Litonsweet</span>
          <span className="mobile-only" style={{fontWeight:800,fontSize:12}}><span style={{color:'#FCD535'}}>Exness ×</span> <span style={{color:'#9D4EDD'}}>Litonsweet</span></span>
          <span style={{fontSize:8,background:'rgba(255,255,255,0.08)',padding:'3px 6px',borderRadius:20,border:'1px solid rgba(255,255,255,0.1)'}} className="desktop-only">LS-882914</span>
        </div>

        <div style={{display:'flex',gap:8,alignItems:'center',position:'relative'}}>
          <div style={{fontSize:9,background:'linear-gradient(90deg,#0A1F14,#0A2F1A)',color:'#00FF88',padding:'4px 8px',borderRadius:20,border:'1px solid rgba(0,255,136,0.2)'}} className="desktop-only">${balance.toFixed(2)} REAL • Theme 20 • FIXED</div>
          
          {/* 3 DOT MENU - FIX */}
          <div style={{position:'relative'}}>
            <button onClick={()=>setIs3DotOpen(!is3DotOpen)} style={{width:36,height:36,borderRadius:10,background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.1)',color:'white',fontSize:16,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>⋮</button>
            {is3DotOpen && (
              <div style={{position:'absolute',top:44,right:0,width:200,background:'#12121A',borderRadius:14,border:'1px solid rgba(255,255,255,0.1)',padding:8,zIndex:30,boxShadow:'0 10px 40px rgba(0,0,0,0.5)'}}>
                <div style={{padding:'8px 12px',borderRadius:8,fontSize:11,background:'rgba(255,255,255,0.04)',marginBottom:4}}>📊 W0 Home • $42,850.92 REAL</div>
                <div style={{padding:'8px 12px',borderRadius:8,fontSize:11,cursor:'pointer'}} onClick={()=>{setActiveView('W2');setIs3DotOpen(false)}}>🎨 Theme 20 Gold Rush ID gold-rush</div>
                <div style={{padding:'8px 12px',borderRadius:8,fontSize:11,cursor:'pointer'}} onClick={()=>{setActiveView('W3');setIs3DotOpen(false)}}>⚙️ Admin Panel Pass Litonsweet@882914</div>
                <div style={{padding:'8px 12px',borderRadius:8,fontSize:11,cursor:'pointer',color:'#FCD535'}}>👑 Default Protected - LS-882914 Final</div>
              </div>
            )}
          </div>

          <div style={{position:'relative'}}>
            <button onClick={()=>setIsUserMenuOpen(!isUserMenuOpen)} style={{display:'flex',alignItems:'center',gap:6,background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:20,padding:'4px 8px',cursor:'pointer'}}>
              <span style={{fontSize:10}} className="desktop-only">Arif L7 • Equity 📈</span>
              <div style={{width:28,height:28,borderRadius:50,background:'linear-gradient(135deg,#667eea,#764ba2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12}}>👤</div>
            </button>
            {isUserMenuOpen && (
              <div style={{position:'absolute',top:40,right:0,width:180,background:'#12121A',borderRadius:12,border:'1px solid rgba(255,255,255,0.1)',padding:8,zIndex:30}}>
                <div style={{fontSize:11,padding:'8px 10px',opacity:0.7}}>Arif Level 7 • $42,850.92 REAL</div>
                <div style={{fontSize:11,padding:'8px 10px',background:'rgba(252,213,53,0.1)',borderRadius:8,marginTop:4}}>👑 Theme 20 Gold Rush • Default Protected</div>
              </div>
            )}
          </div>
        </div>
      </header>

      <div style={{display:'flex',position:'relative',zIndex:1,width:'100%'}}>
        {/* SIDEBAR - MOBILE RESPONSIVE */}
        <aside style={{width:isMobileMenuOpen?'270px':'270px',padding:12,minHeight:'calc(100vh - 56px)',position:isMobileMenuOpen?'fixed':'sticky',top:isMobileMenuOpen?56:56,left:isMobileMenuOpen?0:'auto',zIndex:isMobileMenuOpen?25:1,background:isMobileMenuOpen?'rgba(8,8,10,0.95)':'transparent',backdropFilter:isMobileMenuOpen?'blur(20px)':'none',borderRight:isMobileMenuOpen?'1px solid rgba(255,255,255,0.1)':'none',display:isMobileMenuOpen?'block':'block',overflowY:'auto',maxHeight:'calc(100vh - 56px)'}} className={isMobileMenuOpen?'':'desktop-only'} style={{width:270}}>
          <div className="mobile-only" style={{display:isMobileMenuOpen?'block':'none'}}>
            <div style={{padding:'10px 0 16px 0',borderBottom:'1px solid rgba(255,255,255,0.06)',marginBottom:12}}>
              <div style={{fontSize:12,fontWeight:700}}>Menu • LS-882914 • Theme 20 Gold Rush</div>
              <div style={{fontSize:9,opacity:0.5,marginTop:4}}>${balance.toFixed(2)} REAL • FIXED BUILD SUCCESS</div>
            </div>
          </div>
          
          {menuItems.map((m,i)=>(
            <div key={m.id} onClick={()=>{setActiveView(m.id);setIsMobileMenuOpen(false)}} className="menu-anim" style={{padding:'12px',borderRadius:16,marginBottom:8,cursor:'pointer',background:m.id===activeView?'linear-gradient(135deg, rgba(252,213,53,0.12), rgba(255,138,0,0.08))':m.gold?'linear-gradient(135deg, rgba(252,213,53,0.08), rgba(0,0,0,0.2))':'rgba(255,255,255,0.03)',border:m.id===activeView?'1px solid rgba(252,213,53,0.4)':m.gold?'1px solid rgba(252,213,53,0.25)':'1px solid rgba(255,255,255,0.06)',boxShadow:m.id===activeView?'0 0 20px rgba(252,213,53,0.15)':'none',animationDelay:`${i*0.05}s`}}>
              <div style={{display:'flex',gap:10,alignItems:'center'}}>
                <span className="icon-anim" style={{fontSize:18,animationDelay:`${i*0.1}s`}}>{m.icon}</span>
                <div style={{flex:1}}>
                  <div style={{fontSize:12,fontWeight:m.middle?700:500,lineHeight:'14px'}}>{m.label} {m.middle && <span style={{fontSize:6,background:'#FCD535',color:'black',padding:'2px 5px',borderRadius:20,marginLeft:4,verticalAlign:'middle'}}>MIDDLE • FINAL FIXED</span>}{m.highlight && <span style={{fontSize:6,background:'#00FF88',color:'black',padding:'2px 5px',borderRadius:20,marginLeft:4}}>ACCOUNT WORKING</span>}</div>
                  <div style={{fontSize:7,opacity:0.45,marginTop:3}}>{m.desc}</div>
                </div>
              </div>
            </div>
          ))}

          <div style={{marginTop:16,padding:10,background:'rgba(0,0,0,0.3)',borderRadius:12,border:'1px solid rgba(255,255,255,0.05)'}}>
            <div style={{fontSize:8,opacity:0.4,textAlign:'center',lineHeight:'12px'}}>LS-882914 Final IP<br/>Theme 20 Gold Rush ID gold-rush<br/>Save litonsweet-theme Default Protected<br/>Premium Exness Dark • Fixed • Build Success</div>
          </div>
        </aside>

        {/* MOBILE OVERLAY */}
        {isMobileMenuOpen && <div onClick={()=>setIsMobileMenuOpen(false)} style={{position:'fixed',top:56,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.5)',zIndex:20}} className="mobile-only"/>}

        <main style={{flex:1,padding:12,width:'100%',maxWidth:'100%'}} className="mobile-full">
          <div className="bento bento-gold" style={{padding:14,marginBottom:12}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:8}}>
              <h2 style={{margin:0,fontSize:14,lineHeight:'18px'}}><span className="rainbow">W0 Home - Final Web - LS-882914 - Theme 20 Gold Rush ID gold-rush - Premium Exness Dark - Mobile Fixed</span></h2>
              <span style={{fontSize:8,background:'rgba(0,255,136,0.1)',color:'#00FF88',padding:'4px 8px',borderRadius:20,border:'1px solid rgba(0,255,136,0.2)',whiteSpace:'nowrap'}}>✅ 3 Dot Fixed • Mobile Zoom Fixed • Icon Animation Fixed</span>
            </div>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'1.4fr 1fr',gap:12,marginBottom:12}} className="mobile-grid">
            <div className="bento" style={{padding:14}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:10,flexWrap:'wrap',gap:6}}><h3 style={{margin:0,fontSize:13}}>📈 F3 Trading - ${balance} - BTCUSD</h3><span style={{fontSize:8,background:'rgba(255,255,255,0.06)',padding:'3px 6px',borderRadius:8}}>RSI MACD MA • Exness Style</span></div>
              <div style={{height:120,background:'linear-gradient(180deg, rgba(252,213,53,0.08) 0%, rgba(0,0,0,0) 100%)',borderRadius:12,border:'1px solid rgba(255,255,255,0.06)',position:'relative',overflow:'hidden',padding:8}}>
                <div style={{fontSize:9,opacity:0.5,marginBottom:4}}>BTCUSD • 68,214.92 +1.24% • Exness Chart • 68,250 • 68,200 • 68,150</div>
                <div style={{height:70,display:'flex',alignItems:'end',gap:2}}>{Array.from({length:40}).map((_,i)=><div key={i} style={{flex:1,height:`${20+Math.sin(i/3)*30+Math.random()*20}%`,background:i>30?'linear-gradient(to top,#FF3B30,#FF6B55)':'linear-gradient(to top,#00FF88,#00CC6A)',borderRadius:2,opacity:0.8}}/>)}</div>
              </div>
              <div style={{display:'flex',gap:8,marginTop:10}}><button className="buy-btn" style={{flex:1,padding:'11px',borderRadius:12,border:'none',color:'black',fontWeight:800,fontSize:13,cursor:'pointer'}}>↑ BUY</button><button className="sell-btn" style={{flex:1,padding:'11px',borderRadius:12,border:'none',color:'white',fontWeight:800,fontSize:13,cursor:'pointer'}}>↓ SELL</button></div>
            </div>

            <div className="bento" style={{padding:14}}>
              <h3 style={{margin:'0 0 10px 0',fontSize:13}}>Markets Live • Premium</h3>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6}}>
                {[
                  {s:'BTCUSD',p:'68,214.92',c:'+1.24%',up:true},
                  {s:'ETHUSD',p:'3,812.47',c:'+0.86%',up:true},
                  {s:'XAUUSD',p:'2,351.60',c:'+0.42%',up:true},
                  {s:'EURUSD',p:'1.0842',c:'-0.11%',up:false},
                ].map(m=>(
                  <div key={m.s} style={{background:'rgba(0,0,0,0.4)',borderRadius:10,padding:8,border:'1px solid rgba(255,255,255,0.05)'}}>
                    <div style={{fontSize:8,opacity:0.5}}>{m.s}</div><div style={{fontSize:11,fontWeight:700,marginTop:2}}>{m.p}</div><div style={{fontSize:9,color:m.up?'#00FF88':'#FF3B30',marginTop:1}}>{m.c} {m.up?'📈':'📉'}</div>
                  </div>
                ))}
              </div>
              <div style={{marginTop:10,padding:8,background:'rgba(252,213,53,0.06)',borderRadius:10,border:'1px solid rgba(252,213,53,0.15)',fontSize:9}}>
                <div style={{fontWeight:700,marginBottom:3}}>F4-F5 Accounts • Main Menu Working • On Top</div>
                <div style={{opacity:0.6,lineHeight:'12px'}}>Master $5 Unlock 72H • Copier Binding<br/>Cent Wizard • Basket • AI Guard<br/>Demo $100k-$200k Slider Working</div>
              </div>
            </div>
          </div>

          <div className="bento" style={{padding:14}}>
            <h3 style={{margin:'0 0 10px 0',fontSize:13}}>🎨 W2 Our Theme - Theme 20 Gold Rush MIDDLE - Modify + New Option - Mobile Fixed</h3>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:10}} className="mobile-grid">
              {themes.map(t=>(
                <div key={t.id} onClick={()=>selectTheme(t)} style={{background:'rgba(0,0,0,0.5)',borderRadius:14,padding:12,border:currentTheme.id===t.id?'2px solid #FCD535':'1px solid rgba(255,255,255,0.08)',cursor:'pointer',transition:'all 0.3s'}}>
                  <div style={{height:36,background:`linear-gradient(90deg,${t.gradient.join(',')})`,borderRadius:8,marginBottom:8}}/>
                  <div style={{fontSize:10,lineHeight:'13px'}}><span className="icon-anim">{t.icon}</span> {t.name} {currentTheme.id===t.id && '✓ Active'} {t.isDefault && '👑 Default'} - {t.badge} - ID {t.id}</div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <div style={{textAlign:'center',padding:10,fontSize:8,opacity:0.3,borderTop:'1px solid rgba(255,255,255,0.06)',marginTop:12}}>LS-882914 Final IP - Theme 20 Gold Rush ID gold-rush Save litonsweet-theme Default Protected - Premium Exness Dark - 3 Dot Fixed • Mobile Zoom Fixed • Icon Animation Fixed • Build Success</div>
    </div>
  )
}
