// F6 Social Copy MOST COMPLEX - SocialCopyView.tsx - LS-882914 - Theme 20 Gold Rush - Final - FIXED
'use client'
export default function SocialCopyView({currentTheme}:any){
  return (
    <div style={{background:currentTheme?.card||"#12121A",borderRadius:20,padding:16,marginTop:16,border:"1px solid rgba(255,255,255,0.08)"}}>
      <h3 style={{margin:0}}>🚀 F6 Social Copy MOST COMPLEX - Top 10/100 Masters - LS-882914 - Theme 20 Gold Rush - Final</h3>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:12,marginTop:12}}>
        {[1,2,3].map(i=>(<div key={i} style={{background:"#08080A",borderRadius:16,padding:12,border:"1px solid rgba(252,213,53,0.2)"}}>
          <div style={{display:"flex",justifyContent:"space-between"}}><span>Master #{i}</span><span style={{background:"linear-gradient(90deg,#FCD535,#FF8A00)",color:"black",padding:"2px 6px",borderRadius:6,fontSize:10}}>+124.5% | Win 78% | Risk 3/10</span></div>
          <div style={{height:60,background:"#12121A",borderRadius:10,marginTop:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,opacity:0.6}}>Equity Curve | Drawdown | Volume Circle Pie 3D | Trading Map EURUSD 40% | MT5 Data | MQL5 Image | Tester Report Video 245% Profit | Live Trades Heatmap</div>
          <button style={{width:"100%",marginTop:8,padding:8,borderRadius:8,background:"linear-gradient(90deg,#FCD535,#FF8A00)",border:"none",color:"black"}}>View Journey - Aurora X Pro</button>
        </div>))}
      </div>
    </div>
  )
}
