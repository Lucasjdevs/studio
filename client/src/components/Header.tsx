import { useState, useEffect } from "react";

const WA_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.524 5.849L0 24l6.335-1.502A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.493-5.19-1.357l-.37-.22-3.762.892.937-3.657-.242-.38A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

const WA_NUMBER = "551145518581";
const WA_BASE = `https://wa.me/${WA_NUMBER}?text=`;

interface HeaderProps {
  onOpenQuoteForm?: () => void;
}

export default function Header({ onOpenQuoteForm }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Produtos", href: "#produtos" },
    { label: "Piscinas", href: "#piscinas" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div
        style={{ background: "var(--basalt)", color: "var(--osso)" }}
        className="text-xs tracking-wide"
      >
        <div className="container flex justify-between items-center h-9 gap-4">
          <span style={{ opacity: 0.82 }} className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.524 5.849L0 24l6.335-1.502A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.493-5.19-1.357l-.37-.22-3.762.892.937-3.657-.242-.38A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            (11) 4551-8581
          </span>
          <span style={{ opacity: 0.7 }} className="hidden sm:block">
            comercial@studiorevestir.com.br
          </span>
          <span style={{ opacity: 0.82 }} className="flex items-center gap-2">
            <span style={{ color: "var(--hijau-light)" }}>●</span>
            Entrega em todo o Brasil
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: scrolled ? "rgba(233,225,210,0.95)" : "rgba(233,225,210,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--line)",
          transition: "box-shadow 0.3s ease",
          boxShadow: scrolled ? "0 4px 24px rgba(21,19,15,0.1)" : "none",
        }}
      >
        <div className="container">
          <nav className="flex items-center justify-between" style={{ height: "72px" }}>
            {/* Brand / Logo */}
            <a
              href="/"
              aria-label="Studio Revestir — página inicial"
              style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}
            >
              <img
                src="/manus-storage/cropped-logo-pequeno-w-e1707506486644_f3546c3b.png"
                alt="Studio Revestir"
                style={{
                  height: "44px",
                  width: "auto",
                  filter: "invert(1)",
                  display: "block",
                }}
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    color: "var(--basalt)",
                    textDecoration: "none",
                    position: "relative",
                    padding: "4px 0",
                  }}
                  className="nav-link"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenQuoteForm}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "var(--hijau)",
                  color: "var(--osso)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  padding: "10px 20px",
                  borderRadius: "2px",
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.25s ease, transform 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--basalt)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--hijau)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {WA_ICON}
                Fale no WhatsApp
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              style={{ background: "none", border: "none", cursor: "pointer" }}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu de navegação"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              <span
                style={{
                  width: "24px",
                  height: "2px",
                  background: "var(--basalt)",
                  display: "block",
                  transition: "0.25s",
                  transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
                }}
              />
              <span
                style={{
                  width: "24px",
                  height: "2px",
                  background: "var(--basalt)",
                  display: "block",
                  transition: "0.25s",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  width: "24px",
                  height: "2px",
                  background: "var(--basalt)",
                  display: "block",
                  transition: "0.25s",
                  transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
                }}
              />
            </button>
          </nav>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div
            id="mobile-nav"
            role="navigation"
            aria-label="Menu mobile"
            style={{
              background: "var(--osso)",
              borderBottom: "1px solid var(--line)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
            }}
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    fontSize: "1rem",
                    color: "var(--basalt)",
                    textDecoration: "none",
                    padding: "12px 0",
                    borderBottom: "1px solid var(--line)",
                    display: "block",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { setMenuOpen(false); onOpenQuoteForm?.(); }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  background: "var(--hijau)",
                  color: "var(--osso)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  padding: "14px 20px",
                  borderRadius: "2px",
                  border: "none",
                  cursor: "pointer",
                  marginTop: "12px",
                  width: "100%",
                }}
              >
                {WA_ICON}
                Solicitar Orçamento
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
