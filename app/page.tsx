import Link from "next/link";
import NavAuth from "@/components/NavAuth";

export default async function Home() {
  const stats = [
    { n: "15+", l: "Years of development" },
    { n: "13", l: "Properties completed" },
    { n: "$8M", l: "Portfolio value" },
    { n: "100%", l: "Family owned & operated" },
  ];

  const properties = [
    { badge: "Luxury", loc: "McLean, VA", name: "Ressom Estate at McLean", price: "$1,200,000", detail: "5 bd · 4 ba · 4,200 sqft", from: "#CBBFA8", to: "#A89880", size: "large" },
    { badge: "Affordable", loc: "Arlington, VA", name: "The Arlington Commons", price: "$485,000", detail: "3 bd · 2 ba · 1,800 sqft", from: "#B8C4CC", to: "#9AAAB4", size: "small" },
    { badge: "Mixed-Use", loc: "Alexandria, VA", name: "Ressom Quarter Alexandria", price: "Coming Q2 2026", detail: "Retail + Residential", from: "#C8B8A8", to: "#A89888", size: "small" },
  ];

  const team = [
    { initials: "TR", name: "Tom Ressom", role: "Property Owner", bg: "#4A3F35", color: "#C4A882" },
    { initials: "MR", name: "Mike Ressom", role: "Property Owner", bg: "#354A47", color: "#82C4B8" },
    { initials: "MK", name: "Moke Ressom", role: "Property Owner", bg: "#3A354A", color: "#A882C4" },
  ];

  const locations = ["Arlington", "Alexandria", "Fairfax", "Northeast DC", "Lorton", "Southeast DC", "Northwest DC"];

  return (
    <main style={{ fontFamily: "'Outfit', sans-serif", background: "#F8F5F0", color: "#1A1A1A" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .serif { font-family: 'Cormorant Garamond', serif; }
        .nav-link { transition: color 0.2s ease; }
        .nav-link:hover { color: #1A1A1A !important; }
        .prop-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .prop-card:hover { transform: translateY(-5px); box-shadow: 0 24px 60px rgba(26,26,26,0.12); }
        .hero-card:hover { box-shadow: 0 28px 70px rgba(26,26,26,0.16) !important; transform: translateY(-2px); }
        .hero-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { animation: marquee 22s linear infinite; }
      `}</style>

      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 44px", background: "rgba(248,245,240,0.90)", backdropFilter: "blur(20px)", borderBottom: "1px solid #EAE4DC", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: "#1A1A1A", color: "#F8F5F0", fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 600 }}>RP</div>
          <span className="serif" style={{ fontSize: 18, fontWeight: 500, letterSpacing: "0.06em" }}>Ressom Properties</span>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 30 }}>
          {["Properties", "About", "Team", "Contact"].map((l) => (
            <Link key={l} href={"/" + l.toLowerCase()} className="nav-link" style={{ fontSize: 13, color: "#8A8078", textDecoration: "none" }}>{l}</Link>
          ))}
          <NavAuth />
        </div>
      </nav>

      <section style={{ padding: "80px 44px 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <div style={{ width: 28, height: 1, background: "#C4A882" }} />
            <span style={{ fontSize: 11, fontWeight: 500, color: "#8A8078", letterSpacing: "0.14em", textTransform: "uppercase" }}>Northern Virginia · Est. 2009</span>
          </div>
          <h1 className="serif" style={{ fontSize: "clamp(44px,5vw,68px)", fontWeight: 400, lineHeight: 1.05, marginBottom: 20, letterSpacing: "-0.02em" }}>
            Where <em style={{ color: "#C4A882" }}>Legacy</em><br />Meets Modern<br />Living
          </h1>
          <p style={{ fontSize: 15, color: "#8A8078", lineHeight: 1.8, maxWidth: 400, marginBottom: 36, fontWeight: 300 }}>
            A family-built portfolio of luxury, affordable, and mixed-use properties across Northern Virginia, crafted with intention, built to endure.
          </p>
          <div style={{ display: "flex", gap: 12, marginBottom: 40 }}>
            <Link href="/properties" style={{ fontSize: 13, fontWeight: 500, background: "#1A1A1A", color: "#F8F5F0", borderRadius: 10, padding: "14px 30px", textDecoration: "none", display: "inline-flex", alignItems: "center" }}>Explore Properties</Link>
            <Link href="/team" style={{ fontSize: 13, background: "transparent", color: "#1A1A1A", border: "1.5px solid #EAE4DC", borderRadius: 10, padding: "14px 30px", textDecoration: "none", display: "inline-flex", alignItems: "center" }}>Meet the Team</Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ display: "flex" }}>
              {team.map((t, i) => (
                <div key={t.name} style={{ width: 32, height: 32, borderRadius: "50%", border: "2px solid #F8F5F0", background: t.bg, color: t.color, display: "grid", placeItems: "center", fontFamily: "'Cormorant Garamond', serif", fontSize: 12, fontWeight: 500, marginLeft: i === 0 ? 0 : -8 }}>{t.initials}</div>
              ))}
            </div>
            <span style={{ fontSize: 12, color: "#8A8078" }}><strong style={{ color: "#1A1A1A", fontWeight: 500 }}>The Ressom Family</strong> · 4 principals, 1 vision</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

          {/* Property card */}
          <Link href="/properties/laurel-ridge-townhome" style={{ textDecoration: "none", display: "block" }}>
            <div className="hero-card" style={{ background: "#fff", borderRadius: 24, overflow: "hidden", boxShadow: "0 20px 60px rgba(26,26,26,0.10)", border: "1px solid #EAE4DC" }}>
              <div style={{ height: 220, position: "relative", overflow: "hidden" }}>
                <img
                  src="https://photos.zillowstatic.com/fp/6c2f8896921cc9410e711532777e190e-uncropped_scaled_within_1536_1152.webp"
                  alt="Laurel Ridge Townhome"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <span style={{ position: "absolute", bottom: 12, left: 12, background: "rgba(26,26,26,0.78)", backdropFilter: "blur(8px)", color: "#fff", fontSize: 10, fontWeight: 500, letterSpacing: "0.08em", padding: "5px 12px", borderRadius: 20 }}>FOR RENT · FEATURED</span>
                <span style={{ position: "absolute", top: 12, right: 12, background: "rgba(30,30,30,0.72)", backdropFilter: "blur(10px)", color: "#F0ECE6", fontSize: 11, fontWeight: 500, letterSpacing: "0.05em", padding: "7px 13px", borderRadius: 999, display: "flex", alignItems: "center", gap: 7 }}>
  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E", display: "inline-block", flexShrink: 0 }} />
  Open
</span>
              </div>
              <div style={{ padding: "16px 20px 20px" }}>
                <div style={{ fontSize: 11, color: "#8A8078", marginBottom: 3 }}>Lorton, VA</div>
                <div className="serif" style={{ fontSize: 20, fontWeight: 500, marginBottom: 12, lineHeight: 1.2 }}>Laurel Ridge Townhome</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 18, fontWeight: 600 }}>$4,080<span style={{ fontSize: 13, fontWeight: 400, color: "#8A8078" }}>/mo</span></span>
                  <div style={{ display: "flex", gap: 6 }}>
                    <span style={{ fontSize: 10, fontWeight: 500, background: "#F2EDE5", color: "#5C4A3A", padding: "4px 9px", borderRadius: 6 }}>4 BD</span>
                    <span style={{ fontSize: 10, fontWeight: 500, background: "#F2EDE5", color: "#5C4A3A", padding: "4px 9px", borderRadius: 6 }}>4 BA</span>
                    <span style={{ fontSize: 10, fontWeight: 500, background: "#F2EDE5", color: "#5C4A3A", padding: "4px 9px", borderRadius: 6 }}>1,800 SQFT</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ flex: 1, height: 1, background: "#EAE4DC" }} />
            <span style={{ fontSize: 10, color: "#B5A99A", letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Portfolio at a glance</span>
            <div style={{ flex: 1, height: 1, background: "#EAE4DC" }} />
          </div>

          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            <div style={{ background: "#fff", border: "1px solid #EAE4DC", borderRadius: 16, padding: "16px 18px" }}>
              <div style={{ fontSize: 10, color: "#8A8078", marginBottom: 6, letterSpacing: "0.06em", textTransform: "uppercase" }}>Portfolio</div>
              <div className="serif" style={{ fontSize: 22, fontWeight: 500 }}>$8M+</div>
              <div style={{ fontSize: 10, color: "#8A8078", marginTop: 4, display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#4CAF50" }} />
                Growing
              </div>
            </div>
            <div style={{ background: "#1A1A1A", borderRadius: 16, padding: "16px 18px" }}>
              <div style={{ fontSize: 10, color: "rgba(248,245,240,0.45)", marginBottom: 6, letterSpacing: "0.06em", textTransform: "uppercase" }}>Properties</div>
              <div className="serif" style={{ fontSize: 22, fontWeight: 500, color: "#F8F5F0" }}>13</div>
              <div style={{ fontSize: 10, color: "rgba(248,245,240,0.4)", marginTop: 4 }}>Completed</div>
            </div>
            <div style={{ background: "#F2EDE5", border: "1px solid #EAE4DC", borderRadius: 16, padding: "16px 18px" }}>
              <div style={{ fontSize: 10, color: "#8A8078", marginBottom: 6, letterSpacing: "0.06em", textTransform: "uppercase" }}>Family</div>
              <div className="serif" style={{ fontSize: 22, fontWeight: 500 }}>100%</div>
              <div style={{ fontSize: 10, color: "#8A8078", marginTop: 4 }}>Owned</div>
            </div>
          </div>

        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderTop: "1px solid #EAE4DC", borderBottom: "1px solid #EAE4DC" }}>
        {stats.map((s, i) => (
          <div key={s.l} style={{ padding: "28px 44px", borderRight: i < 3 ? "1px solid #EAE4DC" : "none" }}>
            <div className="serif" style={{ fontSize: 40, fontWeight: 400, lineHeight: 1, color: "#1A1A1A" }}>{s.n}</div>
            <div style={{ fontSize: 12, color: "#8A8078", marginTop: 5, letterSpacing: "0.04em" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <div style={{ overflow: "hidden", borderBottom: "1px solid #EAE4DC", padding: "14px 0", background: "#F2EDE5" }}>
        <div className="marquee-track" style={{ display: "flex", gap: 48, whiteSpace: "nowrap", width: "max-content" }}>
          {[...locations, ...locations].map((loc, i) => (
            <span key={i} style={{ fontSize: 12, color: "#8A8078", letterSpacing: "0.1em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#C4A882", display: "inline-block" }} />
              {loc}
            </span>
          ))}
        </div>
      </div>

      <section style={{ padding: "72px 44px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 24, height: 1, background: "#C4A882" }} />
              <span style={{ fontSize: 11, letterSpacing: "0.14em", color: "#8A8078", textTransform: "uppercase" }}>Featured Developments</span>
            </div>
            <h2 className="serif" style={{ fontSize: 38, fontWeight: 400 }}>Current Properties</h2>
          </div>
          <Link href="/properties" style={{ fontSize: 12, color: "#8A8078", borderBottom: "1px solid #EAE4DC", paddingBottom: 2, textDecoration: "none" }}>View all →</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 16 }}>
          {properties.map((p) => (
            <div key={p.name} className="prop-card" style={{ background: "#fff", borderRadius: 18, overflow: "hidden", border: "1px solid #EAE4DC", cursor: "pointer" }}>
              <div style={{ height: p.size === "large" ? 280 : 200, background: "linear-gradient(160deg," + p.from + "," + p.to + ")", position: "relative" }}>
                <span style={{ position: "absolute", top: 14, left: 14, fontSize: 10, fontWeight: 500, letterSpacing: "0.08em", padding: "5px 12px", borderRadius: 20, background: "rgba(248,245,240,0.92)" }}>{p.badge}</span>
              </div>
              <div style={{ padding: 20 }}>
                <div style={{ fontSize: 11, color: "#8A8078", marginBottom: 5 }}>{p.loc}</div>
                <div className="serif" style={{ fontSize: 21, fontWeight: 500, marginBottom: 12, lineHeight: 1.2 }}>{p.name}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>{p.price}</span>
                  <span style={{ fontSize: 11, color: "#8A8078" }}>{p.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ margin: "0 44px 72px", background: "#1A1A1A", borderRadius: 24, padding: 64, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: "0.14em", color: "rgba(196,168,130,0.8)", textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 20, height: 1, background: "#C4A882" }} />
            Our Story
          </div>
          <h2 className="serif" style={{ fontSize: 40, fontWeight: 400, color: "#F8F5F0", lineHeight: 1.1, marginBottom: 16 }}>
            Built by family,<br /><em style={{ color: "#C4A882" }}>for families</em>
          </h2>
          <p style={{ fontSize: 14, color: "rgba(248,245,240,0.55)", lineHeight: 1.8, fontWeight: 300, marginBottom: 28 }}>
            Since 2009, the Ressom family has been transforming Northern Virginia&apos;s landscape, one thoughtfully designed property at a time. Every development carries our name, and our reputation.
          </p>
          <Link href="/team" style={{ fontSize: 13, fontWeight: 500, background: "#C4A882", color: "#1A1A1A", borderRadius: 10, padding: "13px 28px", textDecoration: "none", display: "inline-block" }}>Meet the Team</Link>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {team.map((t) => (
            <div key={t.name} style={{ display: "flex", alignItems: "center", gap: 14, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "16px 18px" }}>
              <div style={{ width: 46, height: 46, borderRadius: "50%", background: t.bg, color: t.color, display: "grid", placeItems: "center", fontFamily: "'Cormorant Garamond', serif", fontSize: 17, fontWeight: 500, flexShrink: 0 }}>{t.initials}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500, color: "#F8F5F0", marginBottom: 2 }}>{t.name}</div>
                <div style={{ fontSize: 11, color: "rgba(248,245,240,0.45)", letterSpacing: "0.04em" }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 44px 72px" }}>
        <div style={{ border: "1px solid #EAE4DC", borderRadius: 24, padding: 60, textAlign: "center", background: "linear-gradient(135deg,#FBF8F3,#F2EDE5)" }}>
          <h2 className="serif" style={{ fontSize: 44, fontWeight: 400, lineHeight: 1.1, marginBottom: 14 }}>
            Let&apos;s find your<br /><em style={{ color: "#C4A882" }}>perfect property</em>
          </h2>
          <p style={{ fontSize: 14, color: "#8A8078", lineHeight: 1.7, maxWidth: 420, margin: "0 auto 32px", fontWeight: 300 }}>
            Schedule a meeting with the Ressom family team. We&apos;ll walk you through every option personally, no middlemen, just family.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", alignItems: "center" }}>
            <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, fontWeight: 500, background: "transparent", color: "#1A1A1A", border: "1.5px solid #EAE4DC", borderRadius: 16, padding: "16px 32px", display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.8"><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M8 2v4" /><path d="M16 2v4" /><path d="M3 9h18" /></svg>
              Calendly
            </a>
            <a href="https://www.instagram.com/adamressom/" target="_blank" rel="noopener noreferrer" style={{ border: "1.5px solid #EAE4DC", borderRadius: 10, padding: "14px", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1.2" fill="#1A1A1A" stroke="none" /></svg>
            </a>
          </div>
        </div>
      </section>

      <footer style={{ padding: "24px 44px", borderTop: "1px solid #EAE4DC", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <div style={{ width: 28, height: 28, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", background: "#1A1A1A", color: "#F8F5F0", fontFamily: "'Cormorant Garamond', serif", fontSize: 13, fontWeight: 600 }}>RP</div>
          <div>
            <div className="serif" style={{ fontSize: 15 }}>Ressom Properties</div>
            <div style={{ fontSize: 11, color: "#8A8078", marginTop: 2 }}>© 2026 · Northern Virginia · Washington, D.C</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
          {[
            { label: "Properties", href: "/properties" },
            { label: "About", href: "/about" },
            { label: "Team", href: "/team" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link key={item.label} href={item.href} style={{ fontSize: 12, color: "#8A8078", textDecoration: "none" }}>{item.label}</Link>
          ))}
          <a href="https://www.instagram.com/adamressom/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A8078" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1.2" fill="#8A8078" stroke="none" /></svg>
          </a>
        </div>
      </footer>
    </main>
  );
}