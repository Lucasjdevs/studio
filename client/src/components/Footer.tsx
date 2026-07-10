const WA_NUMBER = "551145518581";
const WA_BASE = `https://wa.me/${WA_NUMBER}?text=`;

export default function Footer() {
  return (
    <footer
      id="contato"
      style={{ background: "var(--basalt)", color: "var(--osso)" }}
    >
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-5">
              <img
                src="/manus-storage/cropped-logo-pequeno-w-e1707506486644_f3546c3b.png"
                alt="Studio Revestir"
                style={{ height: "40px", width: "auto", opacity: 0.9 }}
              />
            </div>
            <p
              style={{
                color: "rgba(246,241,232,0.75)",
                fontSize: "0.95rem",
                maxWidth: "32em",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              Há mais de 15 anos fornecendo pedra natural de verdade para todo o Brasil.
              Bordas de Piscina, Pedra Hijau, Hitam, Lajinha Laminada, Travertino, Moledo e Banheiras em Pedra Natural com
              entrega garantida e assessoria técnica especializada.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/studiorevestir/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Studio Revestir no Instagram"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "38px",
                  height: "38px",
                  borderRadius: "2px",
                  border: "1px solid var(--line-dark)",
                  color: "var(--osso)",
                  transition: "background 0.25s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--hijau)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/studiorevestir"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Studio Revestir no Facebook"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "38px",
                  height: "38px",
                  borderRadius: "2px",
                  border: "1px solid var(--line-dark)",
                  color: "var(--osso)",
                  transition: "background 0.25s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--hijau)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={`${WA_BASE}${encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos da Studio Revestir.")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com Studio Revestir pelo WhatsApp"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "38px",
                  height: "38px",
                  borderRadius: "2px",
                  border: "1px solid var(--line-dark)",
                  color: "var(--osso)",
                  transition: "background 0.25s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--hijau)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.524 5.849L0 24l6.335-1.502A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.493-5.19-1.357l-.37-.22-3.762.892.937-3.657-.242-.38A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "1rem",
                marginBottom: "1.25rem",
                color: "var(--osso)",
              }}
            >
              Produtos
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {["Bordas de Piscina", "Pedra Hijau", "Pedra Hitam", "Lajinha Laminada", "Travertino", "Moledo", "Banheira em Pedra Natural"].map((p) => (
                <li key={p}>
                  <a
                    href="#produtos"
                    style={{
                      color: "rgba(246,241,232,0.72)",
                      fontSize: "0.92rem",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--areia)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(246,241,232,0.72)")}
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "1rem",
                marginBottom: "1.25rem",
                color: "var(--osso)",
              }}
            >
              Contato
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <p style={{ color: "rgba(246,241,232,0.5)", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "4px" }}>
                  WhatsApp
                </p>
                <a
                  href={`${WA_BASE}${encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos da Studio Revestir.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--areia)", fontSize: "0.95rem", textDecoration: "none" }}
                >
                  (11) 4551-8581
                </a>
              </div>
              <div>
                <p style={{ color: "rgba(246,241,232,0.5)", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "4px" }}>
                  E-mail
                </p>
                <a
                  href="mailto:comercial@studiorevestir.com.br"
                  style={{ color: "rgba(246,241,232,0.72)", fontSize: "0.92rem", textDecoration: "none" }}
                >
                  comercial@studiorevestir.com.br
                </a>
              </div>
              <div>
                <p style={{ color: "rgba(246,241,232,0.5)", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "4px" }}>
                  Atendimento
                </p>
                <p style={{ color: "rgba(246,241,232,0.72)", fontSize: "0.92rem" }}>
                  Segunda a Sexta<br />08h às 18h
                </p>
              </div>
              <div>
                <p style={{ color: "rgba(246,241,232,0.5)", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "4px" }}>
                  Endereço
                </p>
                <p style={{ color: "rgba(246,241,232,0.72)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                  R. Nilo, 180 — Chácara Represinha<br />
                  Cotia — SP, CEP: 06717-700<br />
                  Brasil
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid var(--line-dark)" }}>
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-3 py-5">
          <p style={{ color: "rgba(246,241,232,0.45)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Studio Revestir. Todos os direitos reservados.
          </p>
          <p style={{ color: "rgba(246,241,232,0.45)", fontSize: "0.8rem" }}>
            Pedra natural premium para todo o Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
