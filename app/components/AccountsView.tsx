// F4-F5 Accounts - AccountsView.tsx - LS-882914 - Final - FIXED
'use client'
export default function AccountsView({currentTheme}:any){
  return (
    <div style={{background:currentTheme?.card||"#12121A",borderRadius:20,padding:16,marginTop:16,border:"1px solid rgba(255,255,255,0.08)"}}>
      <h3 style={{margin:0}}>👥 F4-F5 Accounts - Master 10-Level $5 Unlock 72H Anti-Bypass - LS-882914 - Final</h3>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))",gap:10,marginTop:12}}>
        {[1,2,3,4].map(i=>(<div key={i} style={{background:"#08080A",borderRadius:12,padding:12}}><div>Master Level {i}</div><div style={{fontSize:10,opacity:0.6}}>Copier Binding | Cent Wizard | Basket Protection | AI Guard</div></div>))}
      </div>
    </div>
  )
}
