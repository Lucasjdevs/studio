import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteFormModal from "@/components/QuoteFormModal";

const WA_NUMBER = "551145518581";
const WA_BASE = `https://wa.me/${WA_NUMBER}?text=`;

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.524 5.849L0 24l6.335-1.502A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.493-5.19-1.357l-.37-.22-3.762.892.937-3.657-.242-.38A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  );
}

function ArrowRight({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--hijau-light)", flexShrink: 0, marginTop: "2px" }}>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

// ── Hero Section ──────────────────────────────────────────────────────────────
function HeroSection({ openQuoteFor }: { openQuoteFor: (product: string) => void }) {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
        paddingBottom: "0",
        background: "var(--travertino)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "40px",
            alignItems: "stretch",
          }}
          className="hero-grid"
        >
          {/* Copy */}
          <div style={{ paddingBottom: "70px" }}>
            <span className="eyebrow">Há mais de 15 anos no mercado</span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(2.6rem, 6vw, 4.8rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.01em",
                marginTop: "22px",
                color: "var(--basalt)",
              }}
            >
              Pedra natural{" "}
              <em style={{ fontStyle: "italic", fontWeight: 500, color: "var(--hijau)" }}>
                de verdade
              </em>{" "}
              para o seu projeto
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                maxWidth: "30em",
                margin: "24px 0 32px",
                color: "#3b362c",
                lineHeight: 1.65,
              }}
            >
              Bordas de Piscina, Pedra Hijau, Hitam, Lajinha Laminada, Travertino, Moledo e Banheiras em Pedra Natural.
              Entrega em todo o Brasil com assessoria técnica especializada.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center" }}>
              <button
                onClick={() => openQuoteFor("")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  background: "var(--hijau)",
                  color: "var(--osso)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "0.98rem",
                  padding: "16px 26px",
                  borderRadius: "2px",
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.25s ease, transform 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--basalt)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--hijau)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <WhatsAppIcon />
                Solicitar Orçamento
              </button>
              <a
                href="#produtos"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  border: "1px solid var(--basalt)",
                  color: "var(--basalt)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "0.98rem",
                  padding: "16px 26px",
                  borderRadius: "2px",
                  textDecoration: "none",
                  transition: "background 0.25s ease, color 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--basalt)";
                  (e.currentTarget as HTMLElement).style.color = "var(--osso)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "var(--basalt)";
                }}
              >
                Ver Produtos
              </a>
            </div>
            <p style={{ fontSize: "0.82rem", color: "#6a6356", marginTop: "22px", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: "var(--hijau)", fontWeight: 600 }}>✓</span>
              Pronta entrega · Assessoria técnica · Garantia de qualidade
            </p>
          </div>

          {/* Stacked Stone Visual */}
          <div
            style={{
              position: "relative",
              alignSelf: "stretch",
              minHeight: "440px",
              borderRadius: "3px",
              overflow: "hidden",
              boxShadow: "0 30px 60px -30px rgba(21,19,15,0.55)",
              border: "1px solid rgba(21,19,15,0.1)",
            }}
          >
            {/* Band 0 - Bordas de Piscina (DESTAQUE) */}
            <a
              href="#piscinas"
              aria-label="Ver Bordas de Piscina em pedra natural"
              style={{
                position: "relative",
                height: "20%",
                display: "flex",
                alignItems: "center",
                padding: "0 26px",
                color: "var(--osso)",
                cursor: "pointer",
                overflow: "hidden",
                background: "linear-gradient(120deg,#3b1f0f,#5c2d0e 55%,#4a1e08)",
                textDecoration: "none",
              }}
              className="core-band"
            >
              <span style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700 }}>
                Bordas de Piscina
              </span>
              <span style={{ marginLeft: "auto", textAlign: "right", fontSize: "0.74rem", letterSpacing: "0.06em", opacity: 0.85 }}>
                ★ Destaque · Premium
              </span>
            </a>
            {/* Band 1 - Hitam */}
            <a
              href="#piscinas"
              aria-label="Ver Pedra Hitam — piscinas e fachadas"
              style={{
                position: "relative",
                height: "16.66%",
                display: "flex",
                alignItems: "center",
                padding: "0 26px",
                color: "var(--osso)",
                cursor: "pointer",
                overflow: "hidden",
                background: "linear-gradient(120deg,#151714,#23271f 55%,#171a15)",
                textDecoration: "none",
              }}
              className="core-band"
            >
              <span style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600 }}>
                Pedra Hitam
              </span>
              <span style={{ marginLeft: "auto", textAlign: "right", fontSize: "0.74rem", letterSpacing: "0.06em", opacity: 0.8 }}>
                Piscinas · Fachadas
              </span>
            </a>
            {/* Band 2 - Hijau */}
            <a
              href="#piscinas"
              aria-label="Ver Pedra Hijau — piscinas e spas"
              style={{
                position: "relative",
                height: "16.66%",
                display: "flex",
                alignItems: "center",
                padding: "0 26px",
                color: "var(--osso)",
                cursor: "pointer",
                overflow: "hidden",
                background: "linear-gradient(120deg,#36432f,#4c5c40 55%,#3a4733)",
                textDecoration: "none",
              }}
              className="core-band"
            >
              <span style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600 }}>
                Pedra Hijau
              </span>
              <span style={{ marginLeft: "auto", textAlign: "right", fontSize: "0.74rem", letterSpacing: "0.06em", opacity: 0.8 }}>
                Piscinas · Spas
              </span>
            </a>
            {/* Band 3 - Moledo */}
            <a
              href="#produtos"
              aria-label="Ver Moledo — fachadas e muros"
              style={{
                position: "relative",
                height: "16.66%",
                display: "flex",
                alignItems: "center",
                padding: "0 26px",
                color: "#1d1b16",
                cursor: "pointer",
                overflow: "hidden",
                background: "linear-gradient(120deg,#7b7468,#948b7c 55%,#827a6c)",
                textDecoration: "none",
              }}
              className="core-band"
            >
              <span style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600 }}>
                Moledo
              </span>
              <span style={{ marginLeft: "auto", textAlign: "right", fontSize: "0.74rem", letterSpacing: "0.06em", opacity: 0.8 }}>
                Fachadas · Muros
              </span>
            </a>
            {/* Band 4 - Travertino */}
            <a
              href="#produtos"
              aria-label="Ver Travertino — pisos e fachadas"
              style={{
                position: "relative",
                height: "16.66%",
                display: "flex",
                alignItems: "center",
                padding: "0 26px",
                color: "#2a241a",
                cursor: "pointer",
                overflow: "hidden",
                background: "linear-gradient(120deg,#c2ac86,#d8c6a3 55%,#c7b18b)",
                textDecoration: "none",
              }}
              className="core-band"
            >
              <span style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600 }}>
                Travertino
              </span>
              <span style={{ marginLeft: "auto", textAlign: "right", fontSize: "0.72rem", letterSpacing: "0.06em", opacity: 0.8 }}>
                Pisos · Fachadas
              </span>
            </a>
            {/* Band 5 - Banheiras */}
            <a
              href="#produtos"
              aria-label="Ver Banheiras em Pedra Natural da Indonésia"
              style={{
                position: "relative",
                height: "16.66%",
                display: "flex",
                alignItems: "center",
                padding: "0 26px",
                color: "var(--osso)",
                cursor: "pointer",
                overflow: "hidden",
                background: "linear-gradient(120deg,#2c2825,#3d3530 55%,#302b28)",
                textDecoration: "none",
              }}
              className="core-band"
            >
              <span style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600 }}>
                Banheiras
              </span>
              <span style={{ marginLeft: "auto", textAlign: "right", fontSize: "0.72rem", letterSpacing: "0.06em", opacity: 0.8 }}>
                Indonésia · Exclusivo
              </span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
        .core-band { transition: flex 0.4s ease; }
        .core-band:hover { flex: 1.4 !important; }
      `}</style>
    </section>
  );
}

// ── Trust Strip ───────────────────────────────────────────────────────────────
function TrustStrip() {
  const stats = [
    { num: "15+", label: "Anos de experiência" },
    { num: "5.000+", label: "Projetos entregues" },
    { num: "100%", label: "Entrega em todo o Brasil" },
    { num: "7", label: "Linhas de pedra natural" },
  ];
  return (
    <div style={{ background: "var(--basalt)", color: "var(--osso)" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            padding: "34px 0",
          }}
          className="trust-grid"
        >
          {stats.map((s) => (
            <div key={s.num}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  fontWeight: 600,
                  color: "var(--areia)",
                  lineHeight: 1,
                }}
              >
                {s.num}
              </div>
              <div style={{ fontSize: "0.86rem", opacity: 0.82, marginTop: "6px" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) {
          .trust-grid { grid-template-columns: 1fr 1fr !important; gap: 26px 18px !important; }
        }
      `}</style>
    </div>
  );
}

// ── Products Grid ─────────────────────────────────────────────────────────────
function ProductsSection({ openQuoteFor }: { openQuoteFor: (product: string) => void }) {
  const products = [
    {
      id: 1,
      name: "Pedra Hijau",
      shortDescription: "Tons verdes sofisticados para piscinas e spas com visual tropical e elegante.",
      imageUrl: "/manus-storage/pedra-hijau-e-pedra-hitam-na-piscina-featured_033031ed.webp",
      whatsappMessage: "Olá! Gostaria de conhecer a Pedra Hijau da Studio Revestir.",
      category: "Piscinas",
    },
    {
      id: 2,
      name: "Pedra Hitam",
      shortDescription: "Estética escura e contemporânea para fachadas, piscinas e projetos premium.",
      imageUrl: "/manus-storage/pedra-hijau-e-pedra-hitam-na-piscina-featured_033031ed.webp",
      whatsappMessage: "Olá! Gostaria de conhecer a Pedra Hitam da Studio Revestir.",
      category: "Fachadas",
    },
    {
      id: 3,
      name: "Lajinha Laminada",
      shortDescription: "Superfície refinada e durável para revestimentos internos e externos.",
      imageUrl: "/manus-storage/LAJINHA-LAMINADA-5_419db146.jpg",
      whatsappMessage: "Olá! Gostaria de conhecer a Lajinha Laminada da Studio Revestir.",
      category: "Revestimento",
    },
    {
      id: 4,
      name: "Travertino",
      shortDescription: "Textura natural e charme clássico para ambientes de alto padrão.",
      imageUrl: "/manus-storage/fachada-residencial-com-pedra-natural-vale-a-pena-featured_b24817a3.webp",
      whatsappMessage: "Olá! Gostaria de conhecer o Travertino da Studio Revestir.",
      category: "Ambientes",
    },
  ];

  return (
    <section id="produtos" style={{ padding: "96px 0", background: "var(--travertino)" }}>
      <div className="container">
        <div style={{ maxWidth: "40em", marginBottom: "46px" }}>
          <span className="eyebrow">Nosso portfólio</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(2rem, 4.4vw, 3.2rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.01em",
              marginTop: "18px",
              color: "var(--basalt)",
            }}
          >
            Pedras protagonistas
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#4b463b", marginTop: "16px" }}>
            Cada pedra tem uma história, uma textura e uma aplicação ideal.
            Conheça as linhas que transformam projetos comuns em obras de referência.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "22px",
          }}
          className="prot-grid"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onOpenQuoteForm={openQuoteFor} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) {
          .prot-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ProductCard({ product, onOpenQuoteForm }: { product: { id: number; name: string; shortDescription: string | null; imageUrl: string; whatsappMessage: string | null; category: string }; onOpenQuoteForm: (product: string) => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "3px",
        overflow: "hidden",
        minHeight: "330px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "30px",
        color: "var(--osso)",
        isolation: "isolate",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "transform 0.35s ease",
        border: "1px solid rgba(21,19,15,0.08)",
        cursor: "pointer",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -2,
          backgroundImage: `url(${product.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: hovered ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.6s ease",
        }}
      />
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          background: "linear-gradient(to top, rgba(21,19,15,0.85) 0%, rgba(21,19,15,0.3) 50%, rgba(21,19,15,0.1) 100%)",
        }}
      />

      {/* Category badge */}
      <div
        style={{
          position: "absolute",
          top: "16px",
          left: "16px",
          background: "rgba(21,19,15,0.55)",
          backdropFilter: "blur(4px)",
          color: "var(--osso)",
          fontSize: "0.64rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          padding: "6px 11px",
          borderRadius: "2px",
        }}
      >
        {product.category}
      </div>

      {/* Content */}
      <div>
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(246,241,232,0.78)", marginBottom: "10px" }}>
          Pedra Natural
        </p>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.85rem",
            lineHeight: 1.04,
            fontWeight: 600,
          }}
        >
          {product.name}
        </h3>
        <p style={{ fontSize: "0.95rem", color: "rgba(246,241,232,0.86)", margin: "12px 0 18px", maxWidth: "24em" }}>
          {product.shortDescription}
        </p>
        <button
          onClick={() => onOpenQuoteForm(product.name)}
          aria-label={`Solicitar orçamento de ${product.name}`}
          style={{
            fontWeight: 600,
            fontSize: "0.92rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--osso)",
            background: "none",
            border: "none",
            borderBottom: "1.5px solid var(--areia)",
            paddingBottom: "3px",
            cursor: "pointer",
            padding: "0 0 3px 0",
          }}
        >
          Solicitar orçamento
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}

// ── Pool Feature Section ──────────────────────────────────────────────────────
function PoolSection({ openQuoteFor }: { openQuoteFor: (product: string) => void }) {
  return (
    <section
      id="piscinas"
      style={{
        background: "var(--basalt)",
        color: "var(--osso)",
        position: "relative",
        overflow: "hidden",
        padding: "96px 0",
      }}
    >
      <div className="container">
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "center" }}
          className="pool-grid"
        >
          {/* Copy */}
          <div>
            <span className="eyebrow on-dark">Piscinas de alto padrão</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(2rem, 4.4vw, 3.1rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.01em",
                margin: "18px 0 18px",
              }}
            >
              Pedra Hijau e Hitam:{" "}
              <em style={{ fontStyle: "italic", color: "var(--hijau-light)" }}>
                a escolha premium
              </em>{" "}
              para piscinas
            </h2>
            <p style={{ color: "rgba(246,241,232,0.82)", fontSize: "1.05rem", marginBottom: "14px", maxWidth: "32em" }}>
              Duas pedras naturais que definem o padrão de excelência em projetos de piscinas
              residenciais e comerciais de alto nível. Cada uma cria uma atmosfera única e
              incomparável.
            </p>
            <ul style={{ listStyle: "none", margin: "24px 0 32px", display: "grid", gap: "12px" }}>
              {[
                "Pedra Hijau: tons verdes que criam água tropical e sofisticada",
                "Pedra Hitam: estética sóbria e contemporânea com profundidade visual",
                "Ambas com resistência comprovada para áreas molhadas",
                "Assessoria técnica especializada para especificação correta",
                "Entrega garantida em todo o Brasil",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start", fontSize: "0.98rem", color: "rgba(246,241,232,0.9)" }}>
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => openQuoteFor("Pedra Hijau")}
              aria-label="Solicitar orçamento para piscina com Pedra Hijau ou Hitam"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "var(--hijau)",
                color: "var(--osso)",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "0.98rem",
                padding: "16px 26px",
                borderRadius: "2px",
                border: "none",
                cursor: "pointer",
                transition: "background 0.25s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#4c5c40")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--hijau)")}
            >
              <WhatsAppIcon />
              Consultar para Piscina
            </button>
          </div>

          {/* Visual */}
          <div
            style={{
              position: "relative",
              borderRadius: "3px",
              overflow: "hidden",
              minHeight: "480px",
              boxShadow: "0 30px 70px -30px rgba(0,0,0,0.6)",
            }}
          >
            <img
              src="/manus-storage/pedra-hijau-e-pedra-hitam-na-piscina-featured_033031ed.webp"
              alt="Piscina com Pedra Hijau e Pedra Hitam"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                inset: 0,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(21,19,15,0.5) 0%, transparent 50%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                right: "20px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              <div
                style={{
                  background: "rgba(21,19,15,0.6)",
                  backdropFilter: "blur(4px)",
                  padding: "12px 16px",
                  borderRadius: "2px",
                  border: "1px solid var(--line-dark)",
                }}
              >
                <b style={{ fontFamily: "var(--font-display)", fontSize: "1rem", display: "block", color: "var(--osso)" }}>
                  Pedra Hijau
                </b>
                <span style={{ fontSize: "0.74rem", color: "rgba(246,241,232,0.75)" }}>
                  Tons verdes · Tropical
                </span>
              </div>
              <div
                style={{
                  background: "rgba(21,19,15,0.6)",
                  backdropFilter: "blur(4px)",
                  padding: "12px 16px",
                  borderRadius: "2px",
                  border: "1px solid var(--line-dark)",
                }}
              >
                <b style={{ fontFamily: "var(--font-display)", fontSize: "1rem", display: "block", color: "var(--osso)" }}>
                  Pedra Hitam
                </b>
                <span style={{ fontSize: "0.74rem", color: "rgba(246,241,232,0.75)" }}>
                  Tons escuros · Sofisticado
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .pool-grid { grid-template-columns: 1fr !important; gap: 34px !important; }
        }
      `}</style>
    </section>
  );
}

// ── Lajinha Laminada Section ──────────────────────────────────────────────────
function LajinhaSection({ openQuoteFor }: { openQuoteFor: (product: string) => void }) {
  return (
    <section
      style={{
        background: "var(--osso)",
        position: "relative",
        overflow: "hidden",
        padding: "96px 0",
      }}
    >
      <div className="container">
        <div
          style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "54px", alignItems: "center" }}
          className="lamina-grid"
        >
          {/* Visual */}
          <div
            style={{
              position: "relative",
              minHeight: "460px",
              borderRadius: "3px",
              overflow: "hidden",
              boxShadow: "0 30px 70px -30px rgba(21,19,15,0.6)",
              border: "1px solid rgba(21,19,15,0.1)",
            }}
          >
            <img
              src="/manus-storage/LAJINHA-LAMINADA-5_419db146.jpg"
              alt="Lajinha Laminada"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                inset: 0,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(21,19,15,0.4) 0%, transparent 60%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "18px",
                left: "18px",
                background: "rgba(21,19,15,0.55)",
                backdropFilter: "blur(4px)",
                color: "var(--osso)",
                padding: "11px 15px",
                borderRadius: "2px",
                border: "1px solid var(--line-dark)",
              }}
            >
              <b style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", display: "block" }}>
                Lajinha Laminada
              </b>
              <span style={{ fontSize: "0.74rem", color: "rgba(246,241,232,0.74)" }}>
                Pedra natural brasileira
              </span>
            </div>
          </div>

          {/* Copy */}
          <div>
            <span className="eyebrow">Destaque da linha</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(2rem, 4.4vw, 3.1rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.01em",
                margin: "18px 0 16px",
                color: "var(--basalt)",
              }}
            >
              Lajinha Laminada:{" "}
              <em style={{ fontStyle: "italic", color: "var(--hijau)" }}>
                versatilidade
              </em>{" "}
              e beleza natural
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#4b463b", marginBottom: "8px", maxWidth: "32em" }}>
              A Lajinha Laminada é uma das pedras naturais mais versáteis do mercado brasileiro.
              Com espessura reduzida e acabamento rústico, ela se adapta a diferentes aplicações
              mantendo a autenticidade da pedra natural.
            </p>
            <ul style={{ listStyle: "none", margin: "22px 0 30px", display: "grid", gap: "12px" }}>
              {[
                "Ideal para pisos externos, calçadas e jardins",
                "Textura antiderrapante natural para maior segurança",
                "Resistente às variações climáticas e ao desgaste",
                "Fácil instalação com argamassa específica",
                "Beleza duradoura sem necessidade de manutenção intensiva",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start", fontSize: "0.98rem", color: "#3b362c" }}>
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => openQuoteFor("Lajinha Laminada")}
              aria-label="Solicitar orçamento de Lajinha Laminada"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "var(--hijau)",
                color: "var(--osso)",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "0.98rem",
                padding: "16px 26px",
                borderRadius: "2px",
                border: "none",
                cursor: "pointer",
                transition: "background 0.25s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--basalt)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--hijau)")}
            >
              <WhatsAppIcon />
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .lamina-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .lamina-grid > div:first-child { order: -1; }
        }
      `}</style>
    </section>
  );
}

// ── Why Natural Stone Section ─────────────────────────────────────────────────
function WhySection() {
  const cards = [
    {
      no: "01",
      title: "Beleza única e irrepetível",
      text: "Cada pedra natural é única. Veios, texturas e tonalidades que nenhum material artificial consegue reproduzir com a mesma autenticidade e profundidade visual.",
    },
    {
      no: "02",
      title: "Durabilidade de décadas",
      text: "Pedras naturais duram gerações. Com a manutenção correta, mantêm sua beleza e integridade estrutural por décadas, tornando-se um investimento de longo prazo.",
    },
    {
      no: "03",
      title: "Valorização do imóvel",
      text: "Revestimentos em pedra natural são reconhecidos como diferencial de alto padrão. Projetos bem especificados agregam valor significativo ao imóvel.",
    },
    {
      no: "04",
      title: "Sustentabilidade natural",
      text: "Material 100% natural, sem processos industriais agressivos. A pedra natural é uma escolha consciente para projetos que valorizam o meio ambiente.",
    },
    {
      no: "05",
      title: "Resistência comprovada",
      text: "Resistente a intempéries, variações de temperatura, umidade e desgaste. A pedra natural foi testada por milênios nas mais diversas condições climáticas.",
    },
    {
      no: "06",
      title: "Versatilidade de aplicação",
      text: "Piscinas, fachadas, pisos, revestimentos internos e externos. A pedra natural se adapta a qualquer ambiente com elegância e coerência estética.",
    },
  ];

  return (
    <section style={{ background: "var(--osso)", padding: "96px 0" }}>
      <div className="container">
        <div style={{ maxWidth: "40em", marginBottom: "46px" }}>
          <span className="eyebrow">Diferenciais do material</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(2rem, 4.4vw, 3.2rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.01em",
              marginTop: "18px",
              color: "var(--basalt)",
            }}
          >
            Por que escolher pedra natural?
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#4b463b", marginTop: "16px" }}>
            Em um mercado cheio de imitações, a pedra natural entrega o que nenhum outro
            material consegue: autenticidade, durabilidade e uma presença visual que
            define o caráter do projeto.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "26px",
          }}
          className="why-grid"
        >
          {cards.map((card) => (
            <div
              key={card.no}
              style={{
                background: "var(--travertino)",
                border: "1px solid var(--line)",
                borderRadius: "3px",
                padding: "30px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.9rem",
                  color: "var(--areia)",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                }}
              >
                {card.no}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  margin: "14px 0 10px",
                  color: "var(--basalt)",
                  lineHeight: 1.1,
                }}
              >
                {card.title}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#4b463b", lineHeight: 1.6 }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 820px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 821px) and (max-width: 1100px) {
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

// ── CTA Section ───────────────────────────────────────────────────────────────
function CTASection({ openQuoteFor }: { openQuoteFor: (product: string) => void }) {
  return (
    <section
      id="sobre"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "96px 0",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/manus-storage/fachada-residencial-com-pedra-natural-vale-a-pena-featured_b24817a3.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(21,19,15,0.88) 0%, rgba(60,74,62,0.75) 100%)",
          zIndex: 1,
        }}
      />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: "640px" }}>
          <span className="eyebrow on-dark">Studio Revestir</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(2rem, 4.4vw, 3.2rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.01em",
              marginTop: "18px",
              color: "var(--osso)",
            }}
          >
            Mais de 15 anos entregando{" "}
            <em style={{ fontStyle: "italic", color: "var(--areia)" }}>
              excelência
            </em>{" "}
            em pedra natural
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(246,241,232,0.82)", marginTop: "20px", marginBottom: "32px", maxWidth: "32em", lineHeight: 1.65 }}>
            Somos especialistas em pedra natural com entrega garantida para todo o Brasil.
            Nossa equipe técnica acompanha cada projeto, da especificação à instalação,
            garantindo o melhor resultado para o seu investimento.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <button
              onClick={() => openQuoteFor("")}
              aria-label="Abrir formulário de orçamento"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "var(--hijau)",
                color: "var(--osso)",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "0.98rem",
                padding: "16px 26px",
                borderRadius: "2px",
                border: "none",
                cursor: "pointer",
                transition: "background 0.25s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#4c5c40")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--hijau)")}
            >
              <WhatsAppIcon />
              Fale com um Especialista
            </button>
            <a
              href="#produtos"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                border: "1px solid var(--line-dark)",
                color: "var(--osso)",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "0.98rem",
                padding: "16px 26px",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "background 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--osso)";
                (e.currentTarget as HTMLElement).style.color = "var(--basalt)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--osso)";
              }}
            >
              Ver Todos os Produtos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── WhatsApp Float Button ─────────────────────────────────────────────────────
function WhatsAppFloat() {
  return (
    <a
      href={`${WA_BASE}${encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos da Studio Revestir.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale no WhatsApp"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 100,
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: "#25d366",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 6px 24px rgba(37,211,102,0.45)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(37,211,102,0.6)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(37,211,102,0.45)";
      }}
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Home() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState("");

  const openQuoteFor = (product: string) => {
    setQuoteProduct(product);
    setQuoteOpen(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--travertino)" }}>
      <Header onOpenQuoteForm={() => openQuoteFor("")} />
      <main>
        <HeroSection openQuoteFor={openQuoteFor} />
        <TrustStrip />
        <ProductsSection openQuoteFor={openQuoteFor} />
        <PoolSection openQuoteFor={openQuoteFor} />
        <LajinhaSection openQuoteFor={openQuoteFor} />
        <WhySection />
        <CTASection openQuoteFor={openQuoteFor} />
      </main>
      <Footer />
      <WhatsAppFloat />
      <QuoteFormModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        preselectedProduct={quoteProduct}
      />
    </div>
  );
}
