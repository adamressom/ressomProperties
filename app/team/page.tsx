import Link from "next/link";

export default function TeamPage() {
  const team = [
    {
      id: 1,
      name: "Tom Ressom",
      role: "Founder & Principal",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&q=80",
      bio: "Guides the long-term family vision behind Ressom Properties, with a focus on trust, legacy, and high-standard development.",
      sales: "$50M+ in portfolio leadership",
      linkedin: "#",
      email: "tom@ressomproperties.com",
    },
    {
      id: 2,
      name: "Mike Ressom",
      role: "Development Director",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=900&q=80",
      bio: "Leads development execution, construction oversight, and project planning across the family portfolio.",
      sales: "$75M+ in project oversight",
      linkedin: "#",
      email: "mike@ressomproperties.com",
    },
    {
      id: 3,
      name: "Moke Ressom",
      role: "Client Relations",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&q=80",
      bio: "Supports buyers, families, and partners with a direct, personal experience from first inquiry to final decision.",
      sales: "Client-first communication",
      linkedin: "#",
      email: "moke@ressomproperties.com",
    },
    {
      id: 4,
      name: "Ressom Advisory",
      role: "Luxury Property Consultant",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80",
      bio: "Focused on presentation, positioning, and premium market opportunities aligned with the Ressom brand.",
      sales: "High-end market strategy",
      linkedin: "#",
      email: "advisory@ressomproperties.com",
    },
  ];

  return (
    <main
      style={{
        fontFamily: "'Outfit', sans-serif",
        background: "#F8F5F0",
        color: "#1A1A1A",
        minHeight: "100vh",
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

        .team-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 55px rgba(26, 26, 26, 0.10);
        }

        .team-image {
          transition: transform 0.35s ease;
        }

        .team-card:hover .team-image {
          transform: scale(1.03);
        }

        .icon-link {
          transition: all 0.2s ease;
        }

        .icon-link:hover {
          background: #1A1A1A !important;
          color: #F8F5F0 !important;
        }

        .icon-link:hover svg {
          stroke: #F8F5F0 !important;
        }
      `}</style>

      <nav
        style={{
          display: "flex",
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
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 11,
            textDecoration: "none",
            color: "inherit",
          }}
        >
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
        </Link>

        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: 30,
          }}
        >
          {["Properties", "About", "Team", "Contact"].map((l) => (
            <Link
              key={l}
              href={`/${l.toLowerCase()}`}
              className="nav-link"
              style={{
                fontSize: 13,
                color: l === "Team" ? "#1A1A1A" : "#8A8078",
                textDecoration: "none",
              }}
            >
              {l}
            </Link>
          ))}

          <button
            style={{
              fontSize: 12,
              fontWeight: 500,
              background: "#1A1A1A",
              color: "#F8F5F0",
              border: "none",
              borderRadius: 8,
              padding: "10px 22px",
              cursor: "pointer",
              letterSpacing: "0.03em",
            }}
          >
            Sign Up
          </button>
        </div>
      </nav>

      <section style={{ padding: "88px 44px 40px", textAlign: "center" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 20,
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
            Our Team
          </span>
          <div style={{ width: 28, height: 1, background: "#C4A882" }} />
        </div>

        <h1
          className="serif"
          style={{
            fontSize: "clamp(46px,6vw,70px)",
            fontWeight: 400,
            lineHeight: 1.05,
            marginBottom: 16,
            letterSpacing: "-0.02em",
          }}
        >
          Meet the people
          <br />
          <em style={{ color: "#C4A882" }}>behind Ressom Properties</em>
        </h1>

        <p
          style={{
            maxWidth: 760,
            margin: "0 auto",
            fontSize: 15,
            color: "#8A8078",
            lineHeight: 1.85,
            fontWeight: 300,
          }}
        >
          A dedicated, family-led team focused on property development, client
          relationships, and long-term value across Northern Virginia.
        </p>
      </section>

      <section style={{ padding: "20px 44px 80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}
        >
          {team.map((member) => (
            <div
              key={member.id}
              className="team-card"
              style={{
                background: "#FFFFFF",
                borderRadius: 24,
                overflow: "hidden",
                border: "1px solid #EAE4DC",
                boxShadow: "0 10px 30px rgba(26,26,26,0.04)",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                  style={{
                    width: "100%",
                    height: 360,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              <div style={{ padding: 28 }}>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#3E2E26",
                    marginBottom: 8,
                    lineHeight: 1.2,
                  }}
                >
                  {member.name}
                </h3>

                <p
                  style={{
                    fontSize: 14,
                    color: "#8B5E34",
                    fontWeight: 500,
                    marginBottom: 14,
                    lineHeight: 1.5,
                  }}
                >
                  {member.role}
                </p>

                <p
                  style={{
                    fontSize: 14,
                    color: "#7D726A",
                    lineHeight: 1.8,
                    marginBottom: 12,
                    fontWeight: 300,
                  }}
                >
                  {member.bio}
                </p>

                <p
                  style={{
                    fontSize: 14,
                    color: "#8B5E34",
                    fontWeight: 600,
                    marginBottom: 18,
                  }}
                >
                  {member.sales}
                </p>

                <div
                  style={{
                    borderTop: "1px solid #EAE4DC",
                    paddingTop: 18,
                    display: "flex",
                    gap: 12,
                  }}
                >
                  <a
                    href={member.linkedin}
                    className="icon-link"
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      background: "#F2EDE5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#8B5E34"
                      strokeWidth="1.8"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>

                  <a
                    href={`mailto:${member.email}`}
                    className="icon-link"
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      background: "#F2EDE5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    aria-label={`Email ${member.name}`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#8B5E34"
                      strokeWidth="1.8"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}