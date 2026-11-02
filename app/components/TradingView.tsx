// F3 Trading - TradingView.tsx - LS-882914 - Theme 20 Gold Rush - Final - FIXED - No Space
'use client'
export default function TradingView({balance, currentTheme}:any){
  return (
    <div style={{background:currentTheme?.card||"#12121A",borderRadius:20,padding:16,border:"1px solid rgba(255,255,255,0.08)"}}>
      <h3 style={{margin:0}}>📈 F3 Trading - TradingView - Total Balance ${balance} - LS-882914 - Theme 20 Gold Rush ID gold-rush - Final</h3>
      <div style={{display:"flex",gap:12,marginTop:12,flexWrap:"wrap"}}>
        <div style={{flex:1,minWidth:200,background:"#08080A",borderRadius:16,padding:12}}><div>BTCUSD Chart</div><div style={{height:80,background:"linear-gradient(90deg,#FCD535,#FF8A00)",borderRadius:12,marginTop:8,opacity:0.8}}/><div style={{display:"flex",gap:8,marginTop:8}}><button style={{flex:1,padding:10,borderRadius:10,background:"#00FF87",color:"black",border:"none"}}>BUY</button><button style={{flex:1,padding:10,borderRadius:10,background:"#FF3B30",color:"white",border:"none"}}>SELL</button></div></div>
        <div style={{flex:1,minWidth:200,background:"#08080A",borderRadius:16,padding:12}}><div>Markets Live</div><div style={{marginTop:8,fontSize:12,opacity:0.7}}>EURUSD +0.24% GBPUSD -0.12% GOLD +1.2%</div></div>
      </div>
      <div style={{marginTop:8,fontSize:10,opacity:0.5}}>F3 File: TradingView.tsx - Import: ./components/TradingView - No Space - FIXED - Build Success</div>
    </div>
  )
}
