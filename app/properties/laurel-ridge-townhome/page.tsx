"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const images = [
  "https://photos.zillowstatic.com/fp/6c2f8896921cc9410e711532777e190e-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/4f2e9d4305ff3e6dcc5fdd5673049035-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/41329f55c5597654915a4e5caeecc046-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/acc0ffea568e2900436a63032105f099-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/b1f6d0eb494bb3eda0507039933497fe-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/9e140421323730b82ba72fb6b3ccc174-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/af684e5e722cb9e214de0ee65bdb27b1-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/a9d39b7841509b0cbbb572f2f3302852-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/36157203a35f6c218487302cd4a9923d-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/abc0abed21cf9e19a2a99189bbdac9c6-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/c8c04e1c564d46a332cb9e5e5f5a82dc-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/800a01cc89c2a2339f95b321983a113f-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/b5e09ae1ed4ee8b6e8a13639d83850b5-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/c33262d02abcac04fd7146c1caad9786-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/cb417cec43c20eb2e91d7ecb4fd6664a-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/0189a8eec74eaa3f5aa13dc05659a638-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/fe437a9289076c128b218d2604301c23-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/5913c3a4c3d6455fa70a42df7da39fdd-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/d3165d9cc532a4f1c49f4521aa18a07c-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/7430bb49eb766ddb9b364fbedb5be7a6-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/bd3437f0f7ac30e9d483af9cb2e8dda4-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/b80a5d105db74a84503832a5fd02868f-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/47751a7a9d81f73f688afe21bad7e31a-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/c2bdd4cd2d0d938e21c4e259ca721ac1-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/c0a83e6dc84885e6ff11b11d7f4bfbb0-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/13c7b713b20a7ff86f39e0065ae15bc0-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/5fa3f1c6f40109b110fdf335466d7701-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/23475a04d10cbd3a1a1c48ff4648e696-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/de4a2d365e373a23fa8aa697f91fb1d0-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/5afeb484900bb019b0158947b8f1a028-uncropped_scaled_within_1536_1152.webp",
  "https://photos.zillowstatic.com/fp/22f45fc62df940b277e92b12ad78275e-uncropped_scaled_within_1536_1152.webp",
];

export default function LaurelRidgePage() {
  const [activeThumb, setActiveThumb] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isFaved, setIsFaved] = useState(false);
  const [showFavPopup, setShowFavPopup] = useState(false);
  const isSignedIn = false;
  const thumbRefs = useRef<(HTMLDivElement | null)[]>([]);

  function handleFav() {
    if (!isSignedIn) {
      setShowFavPopup(true);
      return;
    }
    setIsFaved(!isFaved);
  }

  function openLightbox(index: number) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

  function goToPrevPhoto() {
    setActiveThumb((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function goToNextPhoto() {
    setActiveThumb((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  function goToPrevLightbox() {
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function goToNextLightbox() {
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  useEffect(() => {
    const activeEl = thumbRefs.current[activeThumb];
    if (activeEl) {
      activeEl.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeThumb]);

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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap');
        .serif { font-family: 'Cormorant Garamond', serif; }
        .thumb-row::-webkit-scrollbar { display: none; }
        .thumb-row { scrollbar-width: none; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 28px",
          borderBottom: "1px solid #EAE4DC",
          background: "#F8F5F0",
        }}
      >
        <Link href="/properties">
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              fontSize: 13,
              fontWeight: 500,
              background: "#1A1A1A",
              color: "#F8F5F0",
              border: "none",
              borderRadius: 20,
              padding: "9px 18px",
              cursor: "pointer",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            ← All Properties
          </button>
        </Link>

        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={() => navigator.clipboard?.writeText(window.location.href)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              fontWeight: 500,
              padding: "9px 18px",
              borderRadius: 20,
              cursor: "pointer",
              border: "none",
              background: "#EAE4DC",
              color: "#1A1A1A",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            Share
          </button>

          <button
            onClick={handleFav}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              fontWeight: 500,
              padding: "9px 18px",
              borderRadius: 20,
              cursor: "pointer",
              border: "none",
              background: isFaved ? "#E53935" : "#C4A882",
              color: isFaved ? "#fff" : "#1A1A1A",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            {isFaved ? "♥ Saved" : "♡ Save"}
          </button>
        </div>
      </nav>

      <div style={{ padding: "16px 28px" }}>
        <div
          style={{
            position: "relative",
            borderRadius: 16,
            overflow: "hidden",
            marginBottom: 10,
            background: "#fff",
            border: "1px solid #EAE4DC",
          }}
        >
          {images[activeThumb] && (
            <img
              onClick={() => openLightbox(activeThumb)}
              src={images[activeThumb]}
              alt={`Property photo ${activeThumb + 1}`}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: 720,
                display: "block",
                cursor: "pointer",
              }}
            />
          )}

          <button
            onClick={goToPrevPhoto}
            aria-label="Previous photo"
            style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              width: 46,
              height: 46,
              borderRadius: "50%",
              border: "none",
              background: "rgba(255,255,255,0.96)",
              color: "#1A1A1A",
              fontSize: 24,
              fontWeight: 500,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
            }}
          >
            ‹
          </button>

          <button
            onClick={goToNextPhoto}
            aria-label="Next photo"
            style={{
              position: "absolute",
              right: 14,
              top: "50%",
              transform: "translateY(-50%)",
              width: 46,
              height: 46,
              borderRadius: "50%",
              border: "none",
              background: "rgba(255,255,255,0.96)",
              color: "#1A1A1A",
              fontSize: 24,
              fontWeight: 500,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
            }}
          >
            ›
          </button>

          <div
            style={{
              position: "absolute",
              top: 14,
              left: 14,
              background: "rgba(26,26,26,0.75)",
              color: "#fff",
              fontSize: 12,
              fontWeight: 500,
              borderRadius: 999,
              padding: "8px 12px",
            }}
          >
            {activeThumb + 1} / {images.length}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleFav();
            }}
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.96)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: 20,
            }}
          >
            {isFaved ? "❤️" : "🤍"}
          </button>

          <button
            onClick={() => openLightbox(activeThumb)}
            style={{
              position: "absolute",
              bottom: 14,
              right: 14,
              fontSize: 12,
              fontWeight: 500,
              background: "rgba(26,26,26,0.82)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "8px 16px",
              cursor: "pointer",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            View all {images.length} photos
          </button>
        </div>

        <div
          className="thumb-row"
          style={{
            display: "flex",
            gap: 8,
            overflowX: "auto",
            padding: "2px 0 6px",
            scrollBehavior: "smooth",
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              ref={(el) => {
                thumbRefs.current[i] = el;
              }}
              onClick={() => setActiveThumb(i)}
              style={{
                position: "relative",
                width: 92,
                height: 62,
                borderRadius: 10,
                overflow: "hidden",
                flexShrink: 0,
                cursor: "pointer",
                border: activeThumb === i ? "2px solid #C4A882" : "2px solid transparent",
                transition: "all 0.2s ease",
                background: "#fff",
              }}
            >
              <img
                src={src}
                alt={`thumb-${i}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  opacity: activeThumb === i ? 1 : 0.86,
                }}
              />

              {activeThumb === i && (
                <div
                  style={{
                    position: "absolute",
                    left: 10,
                    right: 10,
                    bottom: 4,
                    height: 4,
                    borderRadius: 999,
                    background: "#C4A882",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "370px 1fr",
          gap: 18,
          padding: "0 28px 48px",
          alignItems: "start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              background: "#fff",
              border: "1px solid #EAE4DC",
              borderRadius: 18,
              padding: 22,
            }}
          >
            <div
              className="serif"
              style={{
                fontSize: 34,
                fontWeight: 500,
                lineHeight: 1.1,
                marginBottom: 8,
              }}
            >
              Laurel Ridge Townhome
            </div>

            <div
              style={{
                fontSize: 18,
                color: "#8A8078",
                display: "flex",
                alignItems: "flex-start",
                gap: 6,
                marginBottom: 18,
                lineHeight: 1.45,
              }}
            >
              📍 9249 Laurel Ridge Crossing Rd, Lorton, VA 22079
            </div>

            <div
              style={{
                background: "#F8F5F0",
                borderRadius: 14,
                padding: "18px 18px",
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#C4A882",
                  marginBottom: 4,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                For Rent
              </div>
              <div style={{ fontSize: 42, fontWeight: 600, lineHeight: 1 }}>
                $4,080
                <span style={{ fontSize: 24, fontWeight: 400 }}>/mo</span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
              {[{ v: "4", l: "Beds" }, { v: "3.5", l: "Baths" }, { v: "2,220", l: "Sq Ft" }].map((s) => (
                <div
                  key={s.l}
                  style={{
                    textAlign: "center",
                    background: "#F8F5F0",
                    borderRadius: 12,
                    padding: "16px 8px",
                  }}
                >
                  <div style={{ fontSize: 24, fontWeight: 600 }}>{s.v}</div>
                  <div style={{ fontSize: 13, color: "#8A8078", marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "#fff",
              border: "1px solid #EAE4DC",
              borderRadius: 18,
              padding: 22,
            }}
          >
            <div
              style={{
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#8A8078",
                marginBottom: 16,
              }}
            >
              Property Details
            </div>

            {[
              ["Year Built", "2006"],
              ["Lot Size", "0.04 acres"],
              ["HOA Fees", "$120/mo"],
              ["Parking", "2-car garage"],
              ["Heating", "Forced air"],
              ["Cooling", "Central AC"],
              ["Type", "End-unit townhouse"],
              ["County", "Fairfax County"],
            ].map(([k, v], i, arr) => (
              <div
                key={k}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 18,
                  padding: "12px 0",
                  borderBottom: i < arr.length - 1 ? "1px solid #EAE4DC" : "none",
                  gap: 14,
                }}
              >
                <span style={{ color: "#8A8078" }}>{k}</span>
                <span style={{ fontWeight: 600, textAlign: "right" }}>{v}</span>
              </div>
            ))}
          </div>

          <div
            style={{
              background: "#1A1A1A",
              borderRadius: 18,
              padding: "34px 22px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: "50%",
                background: "rgba(196,168,130,0.15)",
                border: "1px solid rgba(196,168,130,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 14px",
                fontSize: 24,
              }}
            >
              🎥
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 600,
                color: "#F8F5F0",
                marginBottom: 8,
              }}
            >
              Virtual Tour
            </div>
            <div
              style={{
                fontSize: 16,
                color: "rgba(248,245,240,0.55)",
                lineHeight: 1.6,
              }}
            >
              360° walkthrough coming soon — book a private showing below
            </div>
          </div>

          <div
            style={{
              background: "#1A1A1A",
              borderRadius: 18,
              padding: 22,
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: "#F8F5F0",
                marginBottom: 6,
              }}
            >
              Interested in this property?
            </div>
            <div
              style={{
                fontSize: 16,
                color: "rgba(248,245,240,0.55)",
                marginBottom: 18,
                lineHeight: 1.6,
              }}
            >
              Schedule a private tour with the Ressom team
            </div>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 7,
                width: "100%",
                fontSize: 18,
                fontWeight: 600,
                background: "#C4A882",
                color: "#1A1A1A",
                border: "none",
                borderRadius: 12,
                padding: 16,
                cursor: "pointer",
                textDecoration: "none",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              📅 Book via Calendly
            </a>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              background: "#fff",
              border: "1px solid #EAE4DC",
              borderRadius: 14,
              padding: 16,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>
              About This Property
            </div>
            <p
              style={{
                fontSize: 13,
                color: "#8A8078",
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              Welcome to this exceptional end-unit townhouse nestled in the
              sought-after South County School Pyramid in Lorton, VA. Spanning
              three levels and 2,220 sq ft of refined living space, this home
              blends modern elegance with everyday comfort. The gourmet kitchen
              features gleaming granite countertops, upgraded cabinetry, and
              stainless steel appliances. A dedicated home office and sunroom
              add versatility. Enjoy seamless connectivity to Route 123, I-95,
              Fort Belvoir, and Lorton VRE — all just minutes away.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              border: "1px solid #EAE4DC",
              borderRadius: 14,
              padding: 16,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>
              Key Highlights
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
              {[
                { icon: "🚗", val: "2-Car Garage", lbl: "Attached" },
                { icon: "🍳", val: "Gourmet Kitchen", lbl: "Granite counters" },
                { icon: "☀️", val: "Sunroom", lbl: "Natural light" },
                { icon: "📚", val: "Home Office", lbl: "Library/Study" },
                { icon: "🚇", val: "VRE Access", lbl: "Lorton Station" },
                { icon: "🛡️", val: "Fort Belvoir", lbl: "5 min drive" },
              ].map((h) => (
                <div
                  key={h.val}
                  style={{
                    background: "#F8F5F0",
                    borderRadius: 10,
                    padding: 10,
                    textAlign: "center",
                    border: "1px solid #EAE4DC",
                  }}
                >
                  <div style={{ fontSize: 16, marginBottom: 4 }}>{h.icon}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 2 }}>
                    {h.val}
                  </div>
                  <div style={{ fontSize: 10, color: "#8A8078" }}>{h.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "#fff",
              border: "1px solid #EAE4DC",
              borderRadius: 14,
              padding: 16,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>
              Open House Schedule
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { date: "Saturday, Apr 19", time: "12:00 PM – 3:00 PM" },
                { date: "Sunday, Apr 20", time: "1:00 PM – 4:00 PM" },
                { date: "Saturday, Apr 26", time: "11:00 AM – 2:00 PM" },
              ].map((o) => (
                <div
                  key={o.date}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 12px",
                    background: "#F8F5F0",
                    borderRadius: 10,
                    border: "1px solid #EAE4DC",
                  }}
                >
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600 }}>{o.date}</div>
                    <div style={{ fontSize: 11, color: "#8A8078" }}>{o.time}</div>
                  </div>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      background: "#E8F5E9",
                      color: "#2E7D32",
                      padding: "4px 10px",
                      borderRadius: 6,
                    }}
                  >
                    Upcoming
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "#fff",
              border: "1px solid #EAE4DC",
              borderRadius: 14,
              padding: 16,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>
              Listing Agent
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: "#F8F5F0",
                border: "1px solid #EAE4DC",
                borderRadius: 12,
                padding: 12,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "#C4A882",
                  color: "#1A1A1A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 16,
                  flexShrink: 0,
                }}
              >
                AR
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Adam Ressom</div>
                <div style={{ fontSize: 11, color: "#8A8078", marginTop: 2 }}>
                  Ressom Properties
                </div>
                <div style={{ fontSize: 11, color: "#8A8078", marginTop: 6 }}>
                  (703) 555-0148
                </div>
                <div style={{ fontSize: 11, color: "#8A8078" }}>
                  adam@ressomproperties.com
                </div>
              </div>

              <a
                href="mailto:adam@ressomproperties.com"
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  background: "#1A1A1A",
                  color: "#F8F5F0",
                  borderRadius: 8,
                  padding: "10px 12px",
                  textDecoration: "none",
                  flexShrink: 0,
                }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            style={{
              position: "absolute",
              top: 20,
              right: 28,
              fontSize: 28,
              color: "#fff",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            ✕
          </button>

          <button
            onClick={goToPrevLightbox}
            style={{
              position: "absolute",
              left: 28,
              top: "50%",
              transform: "translateY(-50%)",
              width: 52,
              height: 52,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.1)",
              color: "#fff",
              fontSize: 28,
              cursor: "pointer",
            }}
          >
            ‹
          </button>

          <img
            src={images[lightboxIndex]}
            alt="full"
            style={{
              maxWidth: "88%",
              maxHeight: "74vh",
              borderRadius: 12,
              objectFit: "contain",
            }}
          />

          <button
            onClick={goToNextLightbox}
            style={{
              position: "absolute",
              right: 28,
              top: "50%",
              transform: "translateY(-50%)",
              width: 52,
              height: 52,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.1)",
              color: "#fff",
              fontSize: 28,
              cursor: "pointer",
            }}
          >
            ›
          </button>

          <div style={{ marginTop: 16, color: "rgba(255,255,255,0.72)", fontSize: 13 }}>
            Photo {lightboxIndex + 1} of {images.length}
          </div>
        </div>
      )}

      {showFavPopup && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 20,
              padding: "32px 28px",
              maxWidth: 340,
              width: "90%",
              textAlign: "center",
              position: "relative",
            }}
          >
            <button
              onClick={() => setShowFavPopup(false)}
              style={{
                position: "absolute",
                top: 14,
                right: 16,
                background: "none",
                border: "none",
                fontSize: 20,
                color: "#8A8078",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <div style={{ fontSize: 36, marginBottom: 12 }}>🤍</div>
            <h3 style={{ fontSize: 18, fontWeight: 500, marginBottom: 8 }}>
              Sign in to save properties
            </h3>
            <p
              style={{
                fontSize: 13,
                color: "#8A8078",
                marginBottom: 22,
                lineHeight: 1.65,
              }}
            >
              Create a free account to save your favourite listings and get
              notified about new properties.
            </p>

            <button
              style={{
                width: "100%",
                fontSize: 13,
                fontWeight: 500,
                background: "#1A1A1A",
                color: "#F8F5F0",
                border: "none",
                borderRadius: 12,
                padding: 13,
                cursor: "pointer",
                marginBottom: 8,
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Sign In / Create Account
            </button>

            <button
              onClick={() => setShowFavPopup(false)}
              style={{
                fontSize: 12,
                color: "#8A8078",
                cursor: "pointer",
                background: "none",
                border: "none",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Maybe later
            </button>
          </div>
        </div>
      )}
    </main>
  );
}