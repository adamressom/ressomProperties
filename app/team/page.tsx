"use client";
import { useState } from "react";
import Link from "next/link";

export default function TeamPage() {
  const [popup, setPopup] = useState(null);

  const team = [
    { id: 1, name: "Mike Ressom", role: "Property Owner · D.C. & Northern Virginia", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=900&q=80", bio: "Leads development execution, construction oversight, and project planning across the family portfolio.", phone: "+1 (202) 758-9876", email: "mike@ressomproperties.com", linkedin: null, instagram: null },
    { id: 2, name: "Moke Ressom", role: "Property Owner · D.C.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&q=80", bio: "Supports buyers, families, and partners with a direct, personal experience from first inquiry to final decision.", phone: "+1 (703) 969-2792", email: "moke@ressomproperties.com", linkedin: null, instagram: null },
    { id: 3, name: "Tom Ressom", role: "Property Owner · D.C. & Northern Virginia", image: "https://media.licdn.com/dms/image/v2/D4E03AQHgA8uiI7FHiQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721162456516?e=1779321600&v=beta&t=OSkI3C1TmU8bPLXgm-uhKwXeYHp-oudUy0IaHoJMWgU", bio: "Guides the long-term family vision behind Ressom Properties, with a focus on trust, legacy, and high-standard development.", phone: "+1 (703) 839-0823", email: "hwressom@gmail.com", linkedin: "https://www.linkedin.com/in/ressom/", instagram: "https://www.instagram.com/tomressom/" },
    { id: 4, name: "Adam Ressom", role: "Software Engineer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80", bio: "Built and maintains the Ressom Properties platform — designing the digital experience that connects families with their next home.", phone: "+1 (202) 876-5788", email: "adamressom@gmail.com", linkedin: "https://www.linkedin.com/in/adam-ressom/", instagram: "https://www.instagram.com/adamressom/" },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Properties", href: "/properties" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <main style={{ fontFamily: "'Outfit', sans-serif", background: "#F8F5F0", color: "#1A1A1A", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .serif { font-family: 'Cormorant Garamond', serif; }
        .nav-link { transition: color 0.2s ease; }
        .nav-link:hover { color: #1A1A1A !important; }
        .team-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .team-card:hover { transform: translateY(-6px); box-shadow: 0 22px 55px rgba(26,26,26,0.10); }
        .team-image { transition: transform 0.35s ease; }
        .team-card:hover .team-image { transform: scale(1.03); }
        .icon-btn { width: 40px; height: 40px; border-radius: 50%; background: #F2EDE5; border: 1px solid #EAE4DC; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s ease; text-decoration: none; }
        .icon-btn:hover { background: #1A1A1A; border-color: #1A1A1A; }
        .icon-btn:hover svg { stroke: #F8F5F0 !important; }
      `}</style>

      {popup && (
        <div onClick={() => setPopup(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: "#FFFFFF", borderRadius: 24, padding: "40px 44px", maxWidth: 380, width: "90%", textAlign: "center", position: "relative", border: "1px solid #EAE4DC", boxShadow: "0 32px 80px rgba(26,26,26,0.14)" }}>
            <button onClick={() => setPopup(null)} style={{ position: "absolute", top: 16, right: 18, background: "none", border: "none", fontSize: 22, color: "#8A8078", cursor: "pointer", lineHeight: 1, fontFamily: "'Outfit', sans-serif" }}>×</button>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#F2EDE5", border: "1px solid #EAE4DC", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B5E34" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l1.8-1.8a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </div>
            <p style={{ fontSize: 11, letterSpacing: "0.14em", color: "#B5A99A", textTransform: "uppercase", marginBottom: 8 }}>Contact directly</p>
            <h3 className="serif" style={{ fontSize: 22, fontWeight: 500, color: "#1A1A1A", marginBottom: 6 }}>{popup.name}</h3>
            <div style={{ fontSize: 26, fontWeight: 500, color: "#8B5E34", letterSpacing: "0.04em", margin: "16px 0 24px" }}>{popup.phone}</div>
            <a href={"tel:" + popup.phone.replace(/\D/g, "")} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", fontSize: 13, fontWeight: 500, background: "#1A1A1A", color: "#F8F5F0", borderRadius: 12, padding: "13px 0", textDecoration: "none", letterSpacing: "0.03em" }}>Call Now</a>
            <button onClick={() => setPopup(null)} style={{ marginTop: 12, fontSize: 12, color: "#8A8078", background: "none", border: "none", cursor: "pointer", fontFamily: "'Outfit', sans-serif" }}>Close</button>
          </div>
        </div>
      )}

      <nav style={{ display: "flex", alignItems: "center", padding: "20px 44px", background: "rgba(248,245,240,0.90)", backdropFilter: "blur(20px)", borderBottom: "1px solid #EAE4DC", position: "sticky", top: 0, zIndex: 100 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none", color: "inherit" }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: "#1A1A1A", color: "#F8F5F0", fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 600 }}>RP</div>
          <span className="serif" style={{ fontSize: 18, fontWeight: 500, letterSpacing: "0.06em" }}>Ressom Properties</span>
        </Link>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 30 }}>
          {navLinks.map((l) => (
            <Link key={l.label} href={l.href} className="nav-link" style={{ fontSize: 13, color: l.label === "Team" ? "#1A1A1A" : "#8A8078", textDecoration: "none", fontWeight: l.label === "Team" ? 500 : 400 }}>{l.label}</Link>
          ))}
          <Link href="/sign-up" style={{ fontSize: 12, fontWeight: 500, background: "#1A1A1A", color: "#F8F5F0", borderRadius: 8, padding: "10px 22px", letterSpacing: "0.03em", textDecoration: "none", display: "inline-block" }}>Sign Up</Link>
        </div>
      </nav>

      <section style={{ padding: "88px 44px 40px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <div style={{ width: 28, height: 1, background: "#C4A882" }} />
          <span style={{ fontSize: 11, fontWeight: 500, color: "#8A8078", letterSpacing: "0.14em", textTransform: "uppercase" }}>Our Team</span>
          <div style={{ width: 28, height: 1, background: "#C4A882" }} />
        </div>
        <h1 className="serif" style={{ fontSize: "clamp(46px,6vw,70px)", fontWeight: 400, lineHeight: 1.05, marginBottom: 16, letterSpacing: "-0.02em" }}>
          Meet the people<br /><em style={{ color: "#C4A882" }}>behind Ressom Properties</em>
        </h1>
        <p style={{ maxWidth: 760, margin: "0 auto", fontSize: 15, color: "#8A8078", lineHeight: 1.85, fontWeight: 300 }}>
          A dedicated, family-led team focused on property development, client relationships, and long-term value across Northern Virginia and Washington, D.C.
        </p>
      </section>

      <section style={{ padding: "20px 44px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {team.map((member) => (
            <div key={member.id} className="team-card" style={{ background: "#FFFFFF", borderRadius: 24, overflow: "hidden", border: "1px solid #EAE4DC", boxShadow: "0 10px 30px rgba(26,26,26,0.04)" }}>
              <div style={{ overflow: "hidden" }}>
                <img src={member.image} alt={member.name} className="team-image" style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#3E2E26", marginBottom: 5, lineHeight: 1.2 }}>{member.name}</h3>
                <p style={{ fontSize: 12, color: "#8B5E34", fontWeight: 500, marginBottom: 12, letterSpacing: "0.02em" }}>{member.role}</p>
                <p style={{ fontSize: 13, color: "#7D726A", lineHeight: 1.75, marginBottom: 18, fontWeight: 300 }}>{member.bio}</p>
                <div style={{ borderTop: "1px solid #EAE4DC", paddingTop: 16, display: "flex", gap: 10 }}>
                  <button className="icon-btn" onClick={() => setPopup({ name: member.name, phone: member.phone })} title={"Call " + member.name}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B5E34" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l1.8-1.8a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </button>
                  <a href={"mailto:" + member.email} className="icon-btn" title={"Email " + member.name}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B5E34" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
                  </a>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noreferrer" className="icon-btn" title={member.name + " on LinkedIn"}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B5E34" strokeWidth="1.8"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                  )}
                  {member.instagram && (
                    <a href={member.instagram} target="_blank" rel="noreferrer" className="icon-btn" title={member.name + " on Instagram"}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B5E34" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1.2" fill="#8B5E34" stroke="none" /></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}