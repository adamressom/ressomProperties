import Link from "next/link";

export default function Home() {
  const stats = [
    { n: "15+", l: "Years of development" },
    { n: "42", l: "Properties completed" },
    { n: "$180M", l: "Portfolio value" },
    { n: "100%", l: "Family owned & operated" },
  ];

  const properties = [
    {
      badge: "Luxury",
      loc: "McLean, VA",
      name: "Ressom Estate at McLean",
      price: "$1,200,000",
      detail: "5 bd · 4 ba · 4,200 sqft",
      from: "#CBBFA8",
      to: "#A89880",
      size: "large",
    },
    {
      badge: "Affordable",
      loc: "Arlington, VA",
      name: "The Arlington Commons",
      price: "$485,000",
      detail: "3 bd · 2 ba · 1,800 sqft",
      from: "#B8C4CC",
      to: "#9AAAB4",
      size: "small",
    },
    {
      badge: "Mixed-Use",
      loc: "Alexandria, VA",
      name: "Ressom Quarter Alexandria",
      price: "Coming Q2 2026",
      detail: "Retail + Residential",
      from: "#C8B8A8",
      to: "#A89888",
      size: "small",
    },
  ];

  const team = [
    {
      initials: "TR",
      name: "Tom Ressom",
      role: "Founder & Principal",
      bg: "#4A3F35",
      color: "#C4A882",
    },
    {
      initials: "MR",
      name: "Mike Ressom",
      role: "Development Director",
      bg: "#354A47",
      color: "#82C4B8",
    },
    {
      initials: "MK",
      name: "Moke Ressom",
      role: "Client Relations",
      bg: "#3A354A",
      color: "#A882C4",
    },
  ];

  const locations = [
    "McLean",
    "Arlington",
    "Alexandria",
    "Fairfax",
    "Tysons",
    "Reston",
    "Herndon",
    "Vienna",
  ];

  return (
    <main
      style={{
        fontFamily: "'Outfit', sans-serif",
        background: "#F8F5F0",
        color: "#1A1A1A",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .serif {
          font-family: 'Cormorant Garamond', serif;
        }

        .nav-link {
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #1A1A1A !important;
        }

        .prop-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .prop-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 24px 60px rgba(26, 26, 26, 0.12);
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .marquee-track {
          animation: marquee 22s linear infinite;
        }
      `}</style>

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 44px",
          background: "rgba(248,245,240,0.90)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid #EAE4DC",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#1A1A1A",
              color: "#F8F5F0",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            RP
          </div>

          <span
            className="serif"
            style={{
              fontSize: 18,
              fontWeight: 500,
              letterSpacing: "0.06em",
            }}
          >
            Ressom Properties
          </span>
        </div>

        <div style={{
  marginLeft:"auto",
  display:"flex",
  alignItems:"center",
  gap:30
}}>
  {["Properties","About","Team","Contact"].map(l => (
    <Link
      key={l}
      href={`/${l.toLowerCase()}`}
      className="nav-link"
      style={{ fontSize:13, color:"#8A8078", textDecoration:"none" }}
    >
      {l}
    </Link>
  ))}

  <button style={{
    fontSize:12,
    fontWeight:500,
    background:"#1A1A1A",
    color:"#F8F5F0",
    border:"none",
    borderRadius:8,
    padding:"10px 22px",
    cursor:"pointer",
    display:"flex",
    alignItems:"center",
    gap:7,
    letterSpacing:"0.03em"
  }}>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F8F5F0" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <path d="M3 7l9 6 9-6"/>
    </svg>
    Sign Up
  </button>
</div>
      </nav>

      <section
        style={{
          padding: "90px 44px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
          minHeight: 520,
        }}
      >
        <div style={{ paddingBottom: 60 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 24,
            }}
          >
            <div style={{ width: 28, height: 1, background: "#C4A882" }} />
            <span
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: "#8A8078",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Northern Virginia · Est. 2009
            </span>
          </div>

          <h1
            className="serif"
            style={{
              fontSize: "clamp(44px,5vw,64px)",
              fontWeight: 400,
              lineHeight: 1.05,
              marginBottom: 20,
              letterSpacing: "-0.02em",
            }}
          >
            Where <em style={{ color: "#C4A882" }}>Legacy</em>
            <br />
            Meets Modern
            <br />
            Living
          </h1>

          <p
            style={{
              fontSize: 15,
              color: "#8A8078",
              lineHeight: 1.8,
              maxWidth: 400,
              marginBottom: 36,
              fontWeight: 300,
            }}
          >
            A family-built portfolio of luxury, affordable, and mixed-use
            properties across Northern Virginia, crafted with intention, built
            to endure.
          </p>

          <div style={{ display: "flex", gap: 12, marginBottom: 36 }}>
            <button
              style={{
                fontSize: 13,
                fontWeight: 500,
                background: "#1A1A1A",
                color: "#F8F5F0",
                border: "none",
                borderRadius: 10,
                padding: "14px 30px",
                cursor: "pointer",
              }}
            >
              Explore Properties
            </button>

            <button
              style={{
                fontSize: 13,
                background: "transparent",
                color: "#1A1A1A",
                border: "1.5px solid #EAE4DC",
                borderRadius: 10,
                padding: "14px 30px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Meet the Team
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ display: "flex" }}>
              {team.map((t, i) => (
                <div
                  key={t.name}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    border: "2px solid #F8F5F0",
                    background: t.bg,
                    color: t.color,
                    display: "grid",
                    placeItems: "center",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 12,
                    fontWeight: 500,
                    marginLeft: i === 0 ? 0 : -8,
                  }}
                >
                  {t.initials}
                </div>
              ))}
            </div>

            <span style={{ fontSize: 12, color: "#8A8078" }}>
              <strong style={{ color: "#1A1A1A", fontWeight: 500 }}>
                The Ressom Family
              </strong>{" "}
              · 3 principals, 1 vision
            </span>
          </div>
        </div>

        <div style={{ position: "relative", height: 480 }}>
          <div
            style={{
              position: "absolute",
              top: 70,
              left: 10,
              background: "#fff",
              borderRadius: 14,
              padding: "14px 18px",
              boxShadow: "0 12px 40px rgba(26,26,26,0.10)",
              border: "1px solid #EAE4DC",
              width: 155,
              zIndex: 2,
            }}
          >
            <div
              style={{
                fontSize: 10,
                color: "#8A8078",
                marginBottom: 4,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Portfolio Value
            </div>
            <div className="serif" style={{ fontSize: 22, fontWeight: 500 }}>
              $180M+
            </div>
            <div
              style={{
                fontSize: 10,
                color: "#8A8078",
                marginTop: 2,
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#4CAF50",
                }}
              />
              Active & growing
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 280,
              background: "#fff",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 24px 60px rgba(26,26,26,0.12)",
              border: "1px solid #EAE4DC",
              zIndex: 1,
            }}
          >
            <div
              style={{
                height: 200,
                background: "linear-gradient(135deg,#D4C8B8,#B8A898)",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  bottom: 12,
                  left: 12,
                  background: "rgba(26,26,26,0.75)",
                  backdropFilter: "blur(8px)",
                  color: "#fff",
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  padding: "5px 12px",
                  borderRadius: 20,
                }}
              >
                LUXURY · FEATURED
              </span>
            </div>

            <div style={{ padding: 18 }}>
              <div style={{ fontSize: 11, color: "#8A8078", marginBottom: 4 }}>
                McLean, VA
              </div>
              <div
                className="serif"
                style={{
                  fontSize: 19,
                  fontWeight: 500,
                  marginBottom: 12,
                  lineHeight: 1.2,
                }}
              >
                Ressom Estate
                <br />
                at McLean
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 15, fontWeight: 600 }}>
                  $1,200,000
                </span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 500,
                    background: "#EDE8E0",
                    color: "#5C4A3A",
                    padding: "4px 10px",
                    borderRadius: 6,
                    letterSpacing: "0.04em",
                  }}
                >
                  5 BED · 4,200 SQFT
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 60,
              left: -20,
              background: "#fff",
              borderRadius: 14,
              padding: "14px 18px",
              boxShadow: "0 12px 40px rgba(26,26,26,0.10)",
              border: "1px solid #EAE4DC",
              width: 165,
              zIndex: 2,
            }}
          >
            <div
              style={{
                fontSize: 10,
                color: "#8A8078",
                marginBottom: 4,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Properties Built
            </div>
            <div className="serif" style={{ fontSize: 22, fontWeight: 500 }}>
              42
            </div>
            <div style={{ fontSize: 10, color: "#8A8078", marginTop: 2 }}>
              Across Northern Virginia
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          borderTop: "1px solid #EAE4DC",
          borderBottom: "1px solid #EAE4DC",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={s.l}
            style={{
              padding: "28px 44px",
              borderRight: i < 3 ? "1px solid #EAE4DC" : "none",
            }}
          >
            <div
              className="serif"
              style={{
                fontSize: 40,
                fontWeight: 400,
                lineHeight: 1,
                color: "#1A1A1A",
              }}
            >
              {s.n}
            </div>
            <div
              style={{
                fontSize: 12,
                color: "#8A8078",
                marginTop: 5,
                letterSpacing: "0.04em",
              }}
            >
              {s.l}
            </div>
          </div>
        ))}
      </section>

      <div
        style={{
          overflow: "hidden",
          borderBottom: "1px solid #EAE4DC",
          padding: "14px 0",
          background: "#F2EDE5",
        }}
      >
        <div
          className="marquee-track"
          style={{
            display: "flex",
            gap: 48,
            whiteSpace: "nowrap",
            width: "max-content",
          }}
        >
          {[...locations, ...locations].map((loc, i) => (
            <span
              key={i}
              style={{
                fontSize: 12,
                color: "#8A8078",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "#C4A882",
                  display: "inline-block",
                }}
              />
              {loc}
            </span>
          ))}
        </div>
      </div>

      <section style={{ padding: "72px 44px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 36,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 12,
              }}
            >
              <div style={{ width: 24, height: 1, background: "#C4A882" }} />
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  color: "#8A8078",
                  textTransform: "uppercase",
                }}
              >
                Featured Developments
              </span>
            </div>

            <h2 className="serif" style={{ fontSize: 38, fontWeight: 400 }}>
              Current Properties
            </h2>
          </div>

          <Link
            href="/properties"
            style={{
              fontSize: 12,
              color: "#8A8078",
              borderBottom: "1px solid #EAE4DC",
              paddingBottom: 2,
              textDecoration: "none",
            }}
          >
            View all →
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: 16,
          }}
        >
          {properties.map((p) => (
            <div
              key={p.name}
              className="prop-card"
              style={{
                background: "#fff",
                borderRadius: 18,
                overflow: "hidden",
                border: "1px solid #EAE4DC",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  height: p.size === "large" ? 280 : 200,
                  background: `linear-gradient(160deg,${p.from},${p.to})`,
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    padding: "5px 12px",
                    borderRadius: 20,
                    background: "rgba(248,245,240,0.92)",
                  }}
                >
                  {p.badge}
                </span>
              </div>

              <div style={{ padding: 20 }}>
                <div style={{ fontSize: 11, color: "#8A8078", marginBottom: 5 }}>
                  {p.loc}
                </div>
                <div
                  className="serif"
                  style={{
                    fontSize: 21,
                    fontWeight: 500,
                    marginBottom: 12,
                    lineHeight: 1.2,
                  }}
                >
                  {p.name}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: 14, fontWeight: 600 }}>
                    {p.price}
                  </span>
                  <span style={{ fontSize: 11, color: "#8A8078" }}>
                    {p.detail}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          margin: "0 44px 72px",
          background: "#1A1A1A",
          borderRadius: 24,
          padding: 64,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.14em",
              color: "rgba(196,168,130,0.8)",
              textTransform: "uppercase",
              marginBottom: 16,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div style={{ width: 20, height: 1, background: "#C4A882" }} />
            Our Story
          </div>

          <h2
            className="serif"
            style={{
              fontSize: 40,
              fontWeight: 400,
              color: "#F8F5F0",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Built by family,
            <br />
            <em style={{ color: "#C4A882" }}>for families</em>
          </h2>

          <p
            style={{
              fontSize: 14,
              color: "rgba(248,245,240,0.55)",
              lineHeight: 1.8,
              fontWeight: 300,
              marginBottom: 28,
            }}
          >
            Since 2009, the Ressom family has been transforming Northern
            Virginia&apos;s landscape, one thoughtfully designed property at a
            time. Every development carries our name, and our reputation.
          </p>

          <button
            style={{
              fontSize: 13,
              fontWeight: 500,
              background: "#C4A882",
              color: "#1A1A1A",
              border: "none",
              borderRadius: 10,
              padding: "13px 28px",
              cursor: "pointer",
            }}
          >
            Meet the Ressoms
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {team.map((t) => (
            <div
              key={t.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 14,
                padding: "16px 18px",
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  background: t.bg,
                  color: t.color,
                  display: "grid",
                  placeItems: "center",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 17,
                  fontWeight: 500,
                  flexShrink: 0,
                }}
              >
                {t.initials}
              </div>

              <div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#F8F5F0",
                    marginBottom: 2,
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "rgba(248,245,240,0.45)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 44px 72px" }}>
        <div
          style={{
            border: "1px solid #EAE4DC",
            borderRadius: 24,
            padding: 60,
            textAlign: "center",
            background: "linear-gradient(135deg,#FBF8F3,#F2EDE5)",
          }}
        >
          <h2
            className="serif"
            style={{
              fontSize: 44,
              fontWeight: 400,
              lineHeight: 1.1,
              marginBottom: 14,
            }}
          >
            Let&apos;s find your
            <br />
            <em style={{ color: "#C4A882" }}>perfect property</em>
          </h2>

          <p
            style={{
              fontSize: 14,
              color: "#8A8078",
              lineHeight: 1.7,
              maxWidth: 420,
              margin: "0 auto 32px",
              fontWeight: 300,
            }}
          >
            Schedule a meeting with the Ressom family team. We&apos;ll walk you
            through every option personally, no middlemen, just family.
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
  href="https://calendly.com/" // put your actual calendly link
  target="_blank"
  rel="noopener noreferrer"
  style={{
    fontSize: 13,
    fontWeight: 500,
    background: "transparent",
    color: "#1A1A1A",
    border: "1.5px solid #EAE4DC",
    borderRadius: 16,
    padding: "16px 32px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 10,
  }}
>
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1A1A1A"
    strokeWidth="1.8"
  >
    <rect x="3" y="4" width="18" height="17" rx="2" />
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <path d="M3 9h18" />
  </svg>

  Calendly
</a>

            <Link
              href="#"
              style={{
                border: "1.5px solid #EAE4DC",
                borderRadius: 10,
                padding: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1A1A1A"
                strokeWidth="1.8"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1.2" fill="#1A1A1A" stroke="none" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <footer
        style={{
          padding: "24px 44px",
          borderTop: "1px solid #EAE4DC",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#1A1A1A",
              color: "#F8F5F0",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            RP
          </div>

          <div>
            <div className="serif" style={{ fontSize: 15 }}>
              Ressom Properties
            </div>
            <div style={{ fontSize: 11, color: "#8A8078", marginTop: 2 }}>
              © 2026 · Northern Virginia · Washington, D.C
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
          {["Properties", "About", "Team", "Contact"].map((l) => (
            <Link
              key={l}
              href="https://www.instagram.com/adamressom/" target="_blank"
              style={{
                fontSize: 12,
                color: "#8A8078",
                textDecoration: "none",
              }}
            >
              {l}
            </Link>
          ))}

          <Link
            href="https://www.instagram.com/adamressom/" target="_blank"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8A8078"
              strokeWidth="1.8"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r="1.2" fill="#8A8078" stroke="none" />
            </svg>
          </Link>
        </div>
      </footer>
    </main>
  );
}