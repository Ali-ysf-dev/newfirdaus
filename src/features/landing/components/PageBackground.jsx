/**
 * Fixed ambient background layer.
 * Pure CSS + SVG — no JS animation, zero layout impact.
 * Three warm orbs drift slowly via CSS keyframes; all motion
 * is suppressed when prefers-reduced-motion: reduce is set.
 */
function PageBackground() {
  return (
    <div aria-hidden className="page-bg pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Rich multi-stop base gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(170deg,#110e0a_0%,#0c0906_35%,#080604_65%,#050402_100%)]" />

      {/* Top-center spotlight — gold haze from above */}
      <div className="absolute inset-x-0 -top-12 h-[55vh] bg-[radial-gradient(70%_60%_at_50%_0%,rgba(250,195,60,0.13)_0%,transparent_75%)]" />

      {/* Orb A — left side, amber */}
      <div className="page-bg-orb page-bg-orb-a absolute left-[-10%] top-[5%] h-[min(55vw,560px)] w-[min(55vw,560px)] rounded-full bg-[radial-gradient(circle,rgba(245,175,50,0.2)_0%,rgba(200,120,20,0.08)_55%,transparent_75%)] blur-[70px]" />

      {/* Orb B — right side, burnt orange */}
      <div className="page-bg-orb page-bg-orb-b absolute right-[-8%] top-[30%] h-[min(46vw,480px)] w-[min(46vw,480px)] rounded-full bg-[radial-gradient(circle,rgba(220,100,30,0.15)_0%,rgba(180,70,10,0.06)_55%,transparent_75%)] blur-[80px]" />

      {/* Orb C — bottom center, pale gold */}
      <div className="page-bg-orb page-bg-orb-c absolute bottom-[8%] left-[25%] h-[min(42vw,430px)] w-[min(42vw,430px)] rounded-full bg-[radial-gradient(circle,rgba(240,200,80,0.12)_0%,rgba(180,130,20,0.05)_55%,transparent_75%)] blur-[90px]" />

      {/* Subtle geometric grid */}
      <div className="absolute inset-0 page-bg-grid" />

      {/* Diamond cross-hatch — very faint, echoes carpet weave */}
      <div className="absolute inset-0 page-bg-diamond" />

      {/* Film grain — SVG turbulence noise */}
      <div className="absolute inset-0 page-bg-grain" />

      {/* Edge vignette — pulls attention inward */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_130%_90%_at_50%_50%,transparent_30%,rgba(0,0,0,0.65)_100%)]" />

      {/* Bottom fade so footer blends */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(to_top,rgba(4,3,2,0.8)_0%,transparent_100%)]" />
    </div>
  )
}

export { PageBackground }
