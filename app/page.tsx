'use client'
import { useState, useEffect } from 'react'
import { themes as initialThemes, Theme } from './themes/themes.config'
import TradingView from './components/TradingView'
import AccountsView from './components/AccountsView'
import SocialCopyView from './components/SocialCopyView'

export default function Page(){
  const [currentTheme,setCurrentTheme]=useState<Theme>(initialThemes[0])
  const [themes,setThemes]=useState<Theme[]>(initialThemes)
  const [activeView,setActiveView]=useState('W0')
  const [balance,setBalance]=useState(42850.92)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  
  useEffect(()=>{
    const s=localStorage.getItem('litonsweet-theme')
    if(s){
      const t=themes.find(x=>x.id===s)
      if(t) setCurrentTheme(t)
    }
  },[])

  const selectTheme=(t:Theme)=>{
    setCurrentTheme(t)
    localStorage.setItem('litonsweet-theme',t.id)
  }

  const menuItems = [
    {id:'W0',label:'Home Page',icon:'🏠',file:'HomeView.tsx', group: 'MAIN'},
    {id:'MARKET',label:'Marketplace',icon:'🛒',file:'MarketplaceView.tsx', group: 'TRADING'},
    {id:'VPS',label:'VPS Hosting',icon:'🖥️',file:'VPSView.tsx', group: 'TRADING'},
    {id:'BROKERS',label:'Top Brokers',icon:'🏆',file:'BrokersView.tsx', group: 'TRADING'},
    {id:'W1',label:'Login / Register',icon:'🔐',file:'LoginView.tsx', group: 'AUTH'},
    {id:'W2',label:'Our Theme Gold Rush',icon:'🎨',file:'themes.config.ts SEPARATE SAFE', middle:true, group: 'THEME'},
    {id:'W3',label:'Admin Panel',icon:'⚙️',file:'AdminView.tsx', group: 'ADMIN'},
    {id:'F3',label:'F3 Trading',icon:'📈',file:'TradingView.tsx - FIXED', group: 'FINANCE'},
    {id:'F4',label:'F4-F5 Accounts',icon:'👥',file:'AccountsView.tsx', group: 'FINANCE'},
    {id:'F6',label:'Social Copy',icon:'🚀',file:'SocialCopyView.tsx', group: 'SOCIAL'},
    {id:'ABOUT',label:'About',icon:'ℹ️',file:'AboutView.tsx', group: 'INFO'},
    {id:'F9',label:'F9 Wallet',icon:'💰',file:'WalletView.tsx', group: 'FINANCE'},
  ]

  const handleMenuClick = (id: string) => {
    setActiveView(id)
    setIsSidebarOpen(false) // mobile e click korle auto close
  }

  return (
    <div style={{background:currentTheme.bg,minHeight:'100vh',color:'white',fontFamily:'Space Grotesk, system-ui'}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap'); 
        .rainbow{background:linear-gradient(90deg,#FCD535,#FF8A00,#9D4EDD,#22D3EE);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
        .scrollbar-none::-webkit-scrollbar{display:none}
        @keyframes float { 0%,100% {transform: translateY(0)} 50% {transform: translateY(-4px)} }
        .icon-animate:hover { animation: float 0.6s ease-in-out infinite; }
      `}</style>
      
      {/* HEADER - Upor er menu */}
      <header style={{height:60,borderBottom:'1px solid rgba(255,255,255,0.08)',display:'flex',justifyContent:'space-between',padding:'0 16px',alignItems:'center',background:'rgba(8,8,10,0.8)',backdropFilter:'blur(10px)',position:'sticky',top:0,zIndex:30}}>
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <button onClick={()=>setIsSidebarOpen(!isSidebarOpen)} style={{width:36,height:36,borderRadius:10,background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.1)',color:'white',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>
            {isSidebarOpen ? '✕' : '☰'}
          </button>
          <span className="rainbow" style={{fontWeight:800,fontSize:14}}>Litonsweet Forex Final</span>
          <span style={{fontSize:10,background:'rgba(255,255,255,0.1)',padding:'3px 8px',borderRadius:8, display: window.innerWidth < 600 ? 'none' : 'block'}}>LS-882914</span>
          <span style={{fontSize:9,background:'#0A1F14',color:'#00FF87',padding:'3px 8px',borderRadius:8, display: window.innerWidth < 900 ? 'none' : 'block'}}>W0 Home - ${balance.toFixed(2)} REAL - BUILD SUCCESS</span>
        </div>
        
        {/* Dan pashe 3 dot + User Box */}
        <div style={{display:'flex',alignItems:'center',gap:12, position:'relative'}}>
          <div style={{fontSize:12, background:'rgba(255,255,255,0.06)', padding:'6px 12px', borderRadius:20, border:'1px solid rgba(255,255,255,0.1)'}}>👤 Arif L7</div>
          
          {/* 3 dot menu button */}
          <button onClick={()=>setIsUserMenuOpen(!isUserMenuOpen)} style={{width:36,height:36,borderRadius:10,background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.1)',color:'white',cursor:'pointer'}}>
            ⋮
          </button>

          {isUserMenuOpen && (
            <div style={{position:'absolute', top:50, right:0, width:180, background:'#18181B', borderRadius:14, border:'1px solid rgba(255,255,255,0.1)', padding:8, zIndex:50, boxShadow:'0 10px 30px rgba(0,0,0,0.5)'}}>
              <div style={{padding:'8px 12px', fontSize:12, opacity:0.7, borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Arif L7 - Admin</div>
              <div style={{padding:'10px 12px', fontSize:13, cursor:'pointer', borderRadius:8}} onClick={()=>handleMenuClick('W3')}>⚙️ Settings</div>
              <div style={{padding:'10px 12px', fontSize:13, cursor:'pointer', borderRadius:8}} onClick={()=>handleMenuClick('W1')}>🚪 Logout</div>
            </div>
          )}
        </div>
      </header>

      <div style={{display:'flex'}}>
        {/* SIDEBAR - Sliding Animation */}
        <aside className="scrollbar-none" style={{
          width:280,
          borderRight:'1px solid rgba(255,255,255,0.08)',
          padding:12,
          minHeight:'calc(100vh - 60px)',
          position:'fixed',
          top:60,
          left:0,
          bottom:0,
          background:'#0F0F10',
          zIndex:20,
          overflowY:'auto',
          transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.35s cubic-bezier(0.32,0.72,0,1)',
          boxShadow: isSidebarOpen ? '10px 0 30px rgba(0,0,0,0.5)' : 'none'
        }}>
          {/* User box inside sidebar top */}
          <div style={{background:'linear-gradient(135deg, rgba(252,213,53,0.15), rgba(255,138,0,0.1))', border:'1px solid rgba(252,213,53,0.2)', padding:14, borderRadius:16, marginBottom:14}}>
            <div style={{display:'flex', gap:10, alignItems:'center'}}>
              <div style={{width:40,height:40, borderRadius:12, background:'linear-gradient(135deg,#FCD535,#FF8A00)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, color:'black'}}>A</div>
              <div><div style={{fontSize:13, fontWeight:700}}>Arif L7</div><div style={{fontSize:10, opacity:0.6}}>LS-882914 • Gold Rush</div></div>
            </div>
          </div>

          {['MAIN','TRADING','AUTH','THEME','FINANCE','SOCIAL','INFO','ADMIN'].map(group => (
            <div key={group} style={{marginBottom:12}}>
              <div style={{fontSize:9, opacity:0.4, letterSpacing:'1px', margin:'12px 8px 6px', fontWeight:700}}>{group}</div>
              {menuItems.filter(m=>m.group===group).map(m=>(
                <div key={m.id} onClick={()=>handleMenuClick(m.id)} 
                  style={{
                    padding:'12px 12px',
                    borderRadius:14,
                    marginBottom:6,
                    cursor:'pointer',
                    background: activeView===m.id ? 'rgba(252,213,53,0.15)' : 'rgba(255,255,255,0.04)',
                    border: activeView===m.id ? '1px solid rgba(252,213,53,0.3)' : '1px solid rgba(255,255,255,0.06)',
                    transition:'all 0.2s ease',
                    transform: activeView===m.id ? 'scale(1.02)' : 'scale(1)'
                  }}>
                  <div style={{display:'flex',gap:10,alignItems:'center'}}>
                    <span className="icon-animate" style={{fontSize:18, display:'inline-block', transition:'transform 0.2s'}}>{m.icon}</span>
                    <span style={{fontSize:13, fontWeight: activeView===m.id ? 700 : 400}}>{m.label}</span>
                    {m.middle && <span style={{fontSize:7,background:'#FCD535',color:'black',padding:'2px 5px',borderRadius:20, fontWeight:800}}>FINAL</span>}
                  </div>
                  <div style={{fontSize:8,opacity:0.5, marginLeft:28, marginTop:2}}>{m.file}</div>
                </div>
              ))}
            </div>
          ))}
        </aside>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div onClick={()=>setIsSidebarOpen(false)} style={{position:'fixed', inset:0, top:60, background:'rgba(0,0,0,0.5)', backdropFilter:'blur(2px)', zIndex:10}} />
        )}

        {/* MAIN CONTENT - margin left when open on desktop */}
        <main style={{
          flex:1, 
          padding:16, 
          maxWidth:'100%', 
          marginLeft: isSidebarOpen ? (typeof window !== 'undefined' && window.innerWidth > 768 ? '280px' : '0') : '0', 
          transition:'margin-left 0.35s cubic-bezier(0.32,0.72,0,1)',
          width:'100%'
        }}>
          {activeView==='W0' && <div>
            <h1 style={{fontSize:20,marginBottom:12, fontWeight:800}}>W0 Home - Final Web - LS-882914 - Theme 20 Gold Rush ID gold-rush - FIXED BUILD SUCCESS</h1>
            <div style={{background:currentTheme.card,padding:12,borderRadius:12,marginBottom:16,border:'1px solid rgba(252,213,53,0.3)',fontSize:12}}>✅ Build Fixed - Module not found - Can't resolve ./components/TradingView - Space Removed - Import Fixed - Production Deployment Success - Final IP</div>
            <TradingView balance={balance} currentTheme={currentTheme}/>
            <AccountsView currentTheme={currentTheme}/>
            <SocialCopyView currentTheme={currentTheme}/>
          </div>}
          
          {activeView==='MARKET' && <div style={{background:currentTheme.card,padding:24,borderRadius:20}}><h1 style={{fontSize:20}}>🛒 Marketplace - VPS, Brokers, Signals</h1><p style={{opacity:0.6, marginTop:8}}>Ekhane tumar marketplace er product gulo asbe. Edit korte parba.</p></div>}
          {activeView==='VPS' && <div style={{background:currentTheme.card,padding:24,borderRadius:20}}><h1 style={{fontSize:20}}>🖥️ VPS Hosting</h1><p style={{opacity:0.6, marginTop:8}}>Low latency Forex VPS list.</p></div>}
          {activeView==='BROKERS' && <div style={{background:currentTheme.card,padding:24,borderRadius:20}}><h1 style={{fontSize:20}}>🏆 Top Brokers - Exness, IC Markets</h1><p style={{opacity:0.6, marginTop:8}}>Broker comparison table ekhane add korba.</p></div>}
          {activeView==='ABOUT' && <div style={{background:currentTheme.card,padding:24,borderRadius:20}}><h1 style={{fontSize:20}}>ℹ️ About - Litonsweet Forex</h1></div>}

          {activeView==='W1' && <div style={{background:currentTheme.card,padding:24,borderRadius:20,maxWidth:400}}><h1>W1 Login / Register</h1><input placeholder="Email" style={{width:'100%',padding:12,borderRadius:12,marginTop:12,background:'#08080A',color:'white',border:'1px solid rgba(255,255,255,0.1)'}}/><input placeholder="Password" type="password" style={{width:'100%',padding:12,borderRadius:12,marginTop:8,background:'#08080A',color:'white',border:'1px solid rgba(255,255,255,0.1)'}}/><button style={{width:'100%',padding:12,borderRadius:12,marginTop:12,background:'linear-gradient(90deg,#FCD535,#FF8A00)',color:'black',border:'none',fontWeight:700}}>Login - W1 - Final - FIXED BUILD SUCCESS</button></div>}
          {activeView==='W2' && <div><h1>W2 Our Theme - Theme 20 Gold Rush - ID gold-rush - Click to Change Full Website Theme</h1><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:12,marginTop:12}}>{themes.map(t=>(<div key={t.id} onClick={()=>selectTheme(t)} style={{background:t.card,borderRadius:20,padding:16,border:currentTheme.id===t.id?'2px solid #FCD535':'1px solid rgba(255,255,255,0.08)',cursor:'pointer', transition:'transform 0.2s'}}><div style={{height:40,background:`linear-gradient(90deg,${t.gradient.join(',')})`,borderRadius:12,marginBottom:12}}/><div style={{fontSize:12}}>{t.icon} {t.name} - {t.mood} - {t.badge} {currentTheme.id===t.id && '✓ Active'} {t.isDefault && '👑 Default Protected Final'} - ID {t.id}</div></div>))}</div></div>}
          {activeView==='W3' && <div style={{background:currentTheme.card,padding:16,borderRadius:20}}><h1>W3 Admin Panel - Pass Litonsweet@882914 - Theme On Off Delete Add Edit + Default Crown - Final</h1></div>}
          {activeView==='F3' && <TradingView balance={balance} currentTheme={currentTheme}/>}
          {activeView==='F4' && <AccountsView currentTheme={currentTheme}/>}
          {activeView==='F6' && <SocialCopyView currentTheme={currentTheme}/>}
          {activeView==='F9' && <div style={{background:currentTheme.card,padding:16,borderRadius:20}}><h1>💰 F9 Wallet - USDT bKash/Nagad - Final</h1></div>}
        </main>
      </div>
    </div>
  )
}
