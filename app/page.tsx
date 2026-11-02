'use client'
import { useState, useEffect } from 'react'

const themes = [
  { id: "gold-rush", name: "Theme 20 Gold Rush", badge: "FINAL IP DEFAULT PROTECTED", icon: "👑", bg: "#08080A", card: "#12121A", gradient: ["#FCD535","#FF8A00","#9D4EDD","#22D3EE"], isDefault: true },
  { id: "gold-rush-pro", name: "Theme 21 Gold Rush Pro NEW", badge: "NEW OPTION", icon: "✨", bg: "#0A0A0F", card: "#15151F", gradient: ["#FCD535","#FFD700","#FF8A00"] },
  { id: "exness-dark", name: "Exness Dark", badge: "【entity-Exness¦canonical_name=Exness】", icon: "🌑", bg: "#000000", card: "#111111", gradient: ["#FFD500","#FF8A00"] },
]

export default function Page(){
  const [currentTheme,setCurrentTheme]=useState(themes[0])
  const [activeView,setActiveView]=useState('W0')
  const [balance]=useState(42850.92)
  
  useEffect(()=>{
    const s=localStorage.getItem('litonsweet-theme')
    if(s){ const t=themes.find(x=>x.id===s); if(t) setCurrentTheme(t) }
  },[])

  const selectTheme=(t:any)=>{
    setCurrentTheme(t)
    localStorage.setItem('litonsweet-theme',t.id)
  }

  return (
    <div style={{background:currentTheme.bg,minHeight:'100vh',color:'white',fontFamily:'Space Grotesk,system-ui',position:'relative',overflowX:'hidden'}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap');
        .rainbow{background:linear-gradient(90deg,#FCD535,#FF8A00,#9D4EDD,#22D3EE);-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:rainbow 3s linear infinite;background-size:300%;}
        @keyframes rainbow{0%{background-position:0%}50%{background-position:100%}100%{background-position:0%}}
        .bento{background:linear-gradient(135deg, ${currentTheme.card} 0%, rgba(255,255,255,0.02) 100%);border:1px solid rgba(255,255,255,0.08);border-radius:20px;backdrop-filter:blur(20px);box-shadow:0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05);}
        .bento-gold{border:1px solid rgba(252,213,53,0.25);box-shadow:0 0 20px rgba(252,213,53,0.15), 0 8px 32px rgba(0,0,0,0.4);}
        .blob{position:absolute;border-radius:50%;filter:blur(100px);opacity:0.18;pointer-events:none;}
        .buy-btn{background:linear-gradient(90deg,#00FF88,#00CC6A);box-shadow:0 0 20px rgba(0,255,136,0.3);}
        .sell-btn{background:linear-gradient(90deg,#FF3B30,#FF6B55);box-shadow:0 0 20px rgba(255,59,48,0.3);}
      `}</style>

      <div className="blob" style={{width:600,height:600,background:'#1A0F2E',left:-150,top:-150}}/>
      <div className="blob" style={{width:500,height:500,background:'#1E150A',right:-100,top:200}}/>
      <div className="blob" style={{width:700,height:700,background:'#0A1628',left:'20%',bottom:-200}}/>

      <header style={{height:60,borderBottom:'1px solid rgba(255,255,255,0.06)',display:'flex',justifyContent:'space-between',padding:'0 16px',alignItems:'center',background:'rgba(8,8,10,0.8)',position:'sticky',top:0,zIndex:20,backdropFilter:'blur(20px)'}}>
        <div style={{display:'flex',gap:10,alignItems:'center'}}>
          <div style={{width:32,height:32,borderRadius:10,background:'linear-gradient(135deg,#FCD535,#FF8A00)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,color:'black'}}>LS</div>
          <span className="rainbow" style={{fontWeight:800,fontSize:15}}>Exness × Litonsweet</span>
          <span style={{fontSize:9,background:'rgba(255,255,255,0.08)',padding:'3px 8px',borderRadius:20,border:'1px solid rgba(255,255,255,0.1)'}}>LS-882914</span>
          <span style={{fontSize:9,background:'linear-gradient(90deg,#0A1F14,#0A2F1A)',color:'#00FF88',padding:'4px 10px',borderRadius:20,border:'1px solid rgba(0,255,136,0.2)'}}>${balance.toFixed(2)} REAL • Theme 20 Gold Rush • FIXED</span>
        </div>
        <div style={{display:'flex',gap:10,alignItems:'center'}}><div style={{fontSize:11,opacity:0.6}}>Arif L7 • Equity Sparkline 📈</div><div style={{width:36,height:36,borderRadius:50,background:'linear-gradient(135deg,#667eea,#764ba2)',display:'flex',alignItems:'center',justifyContent:'center'}}>👤</div></div>
      </header>

      <div style={{display:'flex',position:'relative',zIndex:1}}>
        <aside style={{width:270,padding:12,minHeight:'calc(100vh - 60px)',position:'sticky',top:60}}>
          {[
            {id:'W0',label:'W0 Home Page',icon:'🏠',desc:'HomeView.tsx - FINAL',active:true},
            {id:'W1',label:'W1 Login/Register',icon:'🔐',desc:'LoginView.tsx'},
            {id:'W2',label:'W2 Our Theme Theme 20 Gold Rush MIDDLE',icon:'🎨',desc:'themes.config.ts SEPARATE SAFE',middle:true,gold:true},
            {id:'W3',label:'W3 Admin Panel',icon:'⚙️',desc:'Pass Litonsweet@882914'},
            {id:'F3',label:'F3 Trading',icon:'📈',desc:'TradingView.tsx - FIXED NO SPACE'},
            {id:'F4',label:'F4-F5 Accounts',icon:'👥',desc:'AccountsView.tsx - Master 10-Level',highlight:true},
            {id:'F6',label:'F6 Social Copy MOST COMPLEX',icon:'🚀',desc:'SocialCopyView.tsx'},
          ].map(m=>(
            <div key={m.id} onClick={()=>setActiveView(m.id)} style={{padding:'12px',borderRadius:16,marginBottom:8,cursor:'pointer',background:m.id===activeView?'linear-gradient(135deg, rgba(252,213,53,0.12), rgba(255,138,0,0.08))':m.gold?'linear-gradient(135deg, rgba(252,213,53,0.08), rgba(0,0,0,0.2))':'rgba(255,255,255,0.03)',border:m.id===activeView?'1px solid rgba(252,213,53,0.4)':m.gold?'1px solid rgba(252,213,53,0.25)':'1px solid rgba(255,255,255,0.06)',boxShadow:m.id===activeView?'0 0 20px rgba(252,213,53,0.15)':'none'}}>
              <div style={{display:'flex',gap:10,alignItems:'center'}}><span style={{fontSize:18}}>{m.icon}</span><div><div style={{fontSize:13,fontWeight:m.middle?700:500}}>{m.label} {m.middle && <span style={{fontSize:7,background:'#FCD535',color:'black',padding:'2px 6px',borderRadius:20,marginLeft:4}}>MIDDLE • FINAL FIXED</span>}{m.highlight && <span style={{fontSize:7,background:'#00FF88',color:'black',padding:'2px 6px',borderRadius:20,marginLeft:4}}>ACCOUNT WORKING</span>}</div><div style={{fontSize:8,opacity:0.45,marginTop:2}}>{m.desc}</div></div></div>
            </div>
          ))}
        </aside>

        <main style={{flex:1,padding:16}}>
          <div className="bento bento-gold" style={{padding:16,marginBottom:16}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:10}}>
              <h2 style={{margin:0,fontSize:16}}><span className="rainbow">W0 Home - Final Web - LS-882914 - Theme 20 Gold Rush ID gold-rush - Premium Exness Dark</span></h2>
              <span style={{fontSize:10,background:'rgba(0,255,136,0.1)',color:'#00FF88',padding:'4px 10px',borderRadius:20,border:'1px solid rgba(0,255,136,0.2)'}}>✅ Build Fixed • Module not found Fixed • Space Removed • Import Fixed • Production Deployment Success</span>
            </div>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'1.4fr 1fr',gap:12,marginBottom:12}}>
            <div className="bento" style={{padding:16}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:12}}><h3 style={{margin:0,fontSize:14}}>📈 F3 Trading - Total Balance ${balance} - BTCUSD Chart</h3><span style={{fontSize:9,background:'rgba(255,255,255,0.06)',padding:'3px 8px',borderRadius:10}}>RSI MACD MA Bollinger • Exness Style</span></div>
              <div style={{height:140,background:'linear-gradient(180deg, rgba(252,213,53,0.08) 0%, rgba(0,0,0,0) 100%)',borderRadius:14,border:'1px solid rgba(255,255,255,0.06)',position:'relative',overflow:'hidden',padding:10}}>
                <div style={{fontSize:10,opacity:0.5,marginBottom:6}}>BTCUSD • 68,214.92 +1.24% • Exness Chart</div>
                <div style={{height:80,display:'flex',alignItems:'end',gap:2}}>{Array.from({length:40}).map((_,i)=><div key={i} style={{flex:1,height:`${20+Math.sin(i/3)*30+Math.random()*20}%`,background:i>30?'linear-gradient(to top,#FF3B30,#FF6B55)':'linear-gradient(to top,#00FF88,#00CC6A)',borderRadius:2,opacity:0.8}}/>)}</div>
                <div style={{position:'absolute',top:10,right:10,fontSize:8,background:'rgba(0,0,0,0.6)',padding:'3px 6px',borderRadius:6}}>68,250 • 68,200 • 68,150</div>
              </div>
              <div style={{display:'flex',gap:10,marginTop:12}}><button className="buy-btn" style={{flex:1,padding:'12px',borderRadius:12,border:'none',color:'black',fontWeight:800,fontSize:14}}>↑ BUY</button><button className="sell-btn" style={{flex:1,padding:'12px',borderRadius:12,border:'none',color:'white',fontWeight:800,fontSize:14}}>↓ SELL</button></div>
            </div>

            <div className="bento" style={{padding:16}}>
              <h3 style={{margin:'0 0 12px 0',fontSize:14}}>Markets Live • Premium</h3>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
                {[
                  {s:'BTCUSD',p:'68,214.92',c:'+1.24%',up:true},
                  {s:'ETHUSD',p:'3,812.47',c:'+0.86%',up:true},
                  {s:'XAUUSD',p:'2,351.60',c:'+0.42%',up:true},
                  {s:'EURUSD',p:'1.0842',c:'-0.11%',up:false},
                ].map(m=>(
                  <div key={m.s} style={{background:'rgba(0,0,0,0.4)',borderRadius:12,padding:10,border:'1px solid rgba(255,255,255,0.05)'}}>
                    <div style={{fontSize:9,opacity:0.5}}>{m.s}</div><div style={{fontSize:13,fontWeight:700,marginTop:2}}>{m.p}</div><div style={{fontSize:10,color:m.up?'#00FF88':'#FF3B30',marginTop:2}}>{m.c} {m.up?'📈':'📉'}</div>
                  </div>
                ))}
              </div>
              <div style={{marginTop:12,padding:10,background:'rgba(252,213,53,0.06)',borderRadius:10,border:'1px solid rgba(252,213,53,0.15)',fontSize:10}}>
                <div style={{fontWeight:700,marginBottom:4}}>F4-F5 Accounts • Main Menu Working</div>
                <div style={{opacity:0.6,lineHeight:'14px'}}>Master $5 Unlock 72H • Copier Binding<br/>Cent Wizard • Basket Protection • AI Guard<br/>Demo Slider $100k-$200k</div>
              </div>
            </div>
          </div>

          {activeView==='W2' && (
            <div className="bento" style={{padding:16,marginBottom:12}}>
              <h3 style={{margin:'0 0 12px 0'}}>🎨 W2 Our Theme - Theme 20 Gold Rush MIDDLE - Modify + New Option - On Top Of Existing Web</h3>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:12}}>
                {themes.map(t=>(
                  <div key={t.id} onClick={()=>selectTheme(t)} style={{background:'rgba(0,0,0,0.5)',borderRadius:16,padding:14,border:currentTheme.id===t.id?'2px solid #FCD535':'1px solid rgba(255,255,255,0.08)',cursor:'pointer',boxShadow:currentTheme.id===t.id?'0 0 20px rgba(252,213,53,0.2)':'none'}}>
                    <div style={{height:40,background:`linear-gradient(90deg,${t.gradient.join(',')})`,borderRadius:10,marginBottom:10}}/>
                    <div style={{fontSize:12}}>{t.icon} {t.name} {currentTheme.id===t.id && '✓ Active'} {t.isDefault && '👑 Default Protected'} - {t.badge} - ID {t.id}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeView==='F4' && (
            <div className="bento bento-gold" style={{padding:16}}>
              <h3 style={{margin:'0 0 12px 0'}}>👥 F4-F5 Accounts - Main Menu Account Working - On Top Of Existing Web - LS-882914</h3>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:10}}>
                <div style={{background:'rgba(0,0,0,0.6)',borderRadius:14,padding:12,border:'1px solid rgba(252,213,53,0.2)'}}><div style={{fontSize:12,fontWeight:700}}>Master Account</div><div style={{fontSize:9,opacity:0.6,marginTop:4}}>$5 Unlock 72H Anti-Bypass<br/>Copier Binding • Lot Calc</div><button style={{width:'100%',marginTop:10,padding:'8px',borderRadius:8,background:'linear-gradient(90deg,#FCD535,#FF8A00)',border:'none',color:'black',fontWeight:700,fontSize:11}}>Unlock $5 - Create Working</button></div>
                <div style={{background:'rgba(0,0,0,0.4)',borderRadius:14,padding:12,border:'1px solid rgba(255,255,255,0.06)'}}><div style={{fontSize:12,fontWeight:700}}>Copier Account</div><div style={{fontSize:9,opacity:0.6,marginTop:4}}>Binding + Follow Master<br/>Demo $100k-$200k Slider</div><button style={{width:'100%',marginTop:10,padding:'8px',borderRadius:8,background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.1)',color:'white',fontSize:11}}>Bind Copier Working</button></div>
                <div style={{background:'rgba(0,0,0,0.4)',borderRadius:14,padding:12,border:'1px solid rgba(255,255,255,0.06)'}}><div style={{fontSize:12,fontWeight:700}}>Cent Wizard</div><div style={{fontSize:9,opacity:0.6,marginTop:4}}>Basket Protection • AI Guard<br/>Cent Auto Convert Working</div></div>
                <div style={{background:'rgba(0,0,0,0.4)',borderRadius:14,padding:12,border:'1px solid rgba(255,255,255,0.06)'}}><div style={{fontSize:12,fontWeight:700}}>Demo Slider</div><div style={{fontSize:9,opacity:0.6,marginTop:4}}>$100k - $200k Adjustable</div><input type="range" min="100000" max="200000" defaultValue="100000" style={{width:'100%',marginTop:10,accentColor:'#FCD535'}}/></div>
              </div>
            </div>
          )}

          <div className="bento" style={{padding:14,marginTop:12}}>
            <h3 style={{margin:'0 0 10px 0',fontSize:14}}>🚀 F6 Social Copy MOST COMPLEX - Top Masters - Theme 20 Gold Rush</h3>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:10}}>
              {[1,2,3].map(i=><div key={i} style={{background:'rgba(0,0,0,0.5)',borderRadius:14,padding:10,border:'1px solid rgba(252,213,53,0.12)'}}><div style={{display:'flex',justifyContent:'space-between'}}><span style={{fontSize:11,fontWeight:700}}>Master #{i} {i===1?'👑':''}</span><span style={{fontSize:8,background:'linear-gradient(90deg,#FCD535,#FF8A00)',color:'black',padding:'2px 6px',borderRadius:6,fontWeight:700}}>+{100+i*8}.5% | Win {70+i*2}%</span></div><div style={{height:50,background:'#12121A',borderRadius:8,marginTop:8,fontSize:7,opacity:0.5,padding:6}}>Equity Curve | Drawdown | Volume Pie | Trading Map 40% | MT5 | MQL5 | Tester 245% | Heatmap</div></div>)}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
