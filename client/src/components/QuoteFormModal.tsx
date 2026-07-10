import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const WA_NUMBER = "551145518581";

const PRODUCTS = [
  "Bordas de Piscina",
  "Pedra Hijau",
  "Pedra Hitam",
  "Lajinha Laminada",
  "Travertino",
  "Moledo",
  "Banheira em Pedra Natural",
  "Outro / Não sei ainda",
];

interface QuoteFormModalProps {
  open: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export default function QuoteFormModal({
  open,
  onClose,
  preselectedProduct = "",
}: QuoteFormModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState(preselectedProduct);
  const [area, setArea] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Keep preselectedProduct in sync when modal opens for a specific product
  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setProduct(preselectedProduct || "");
    } else {
      onClose();
    }
  };

  function validate() {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Informe seu nome.";
    if (!phone.trim()) errs.phone = "Informe seu telefone/WhatsApp.";
    else if (!/^[\d\s()\-+]{8,20}$/.test(phone.trim()))
      errs.phone = "Telefone inválido.";
    if (!product) errs.product = "Selecione um produto.";
    if (!area.trim()) errs.area = "Informe a metragem aproximada.";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    const msg = [
      `Olá! Gostaria de solicitar um orçamento.`,
      ``,
      `👤 *Nome:* ${name.trim()}`,
      `📱 *Telefone:* ${phone.trim()}`,
      `🪨 *Produto de interesse:* ${product}`,
      `📐 *Metragem aproximada:* ${area.trim()} m²`,
      ``,
      `Aguardo o contato. Obrigado!`,
    ].join("\n");

    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );

    // Reset form and close
    setName("");
    setPhone("");
    setProduct("");
    setArea("");
    onClose();
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    border: "1px solid rgba(21,19,15,0.2)",
    borderRadius: "3px",
    fontFamily: "var(--font-body)",
    fontSize: "0.95rem",
    color: "var(--basalt)",
    background: "#fff",
    outline: "none",
    transition: "border-color 0.2s ease",
    boxSizing: "border-box",
  };

  const errorStyle: React.CSSProperties = {
    color: "#c0392b",
    fontSize: "0.78rem",
    marginTop: "4px",
    display: "block",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    fontSize: "0.82rem",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "#6a6356",
    marginBottom: "6px",
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        style={{
          maxWidth: "520px",
          padding: "0",
          borderRadius: "4px",
          overflow: "hidden",
          border: "none",
          boxShadow: "0 24px 80px rgba(21,19,15,0.35)",
        }}
      >
        {/* Header strip */}
        <div
          style={{
            background: "var(--basalt)",
            padding: "28px 32px 22px",
          }}
        >
          <DialogHeader>
            <DialogTitle
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "1.65rem",
                color: "var(--osso)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Solicitar Orçamento
            </DialogTitle>
            <DialogDescription
              style={{
                color: "rgba(246,241,232,0.65)",
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                marginTop: "6px",
              }}
            >
              Preencha os dados abaixo e enviaremos sua mensagem diretamente
              para o nosso WhatsApp.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Form body */}
        <form
          onSubmit={handleSubmit}
          noValidate
          style={{
            padding: "28px 32px 32px",
            background: "var(--travertino)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Name */}
          <div>
            <label htmlFor="quote-name" style={labelStyle}>
              Nome completo *
            </label>
            <input
              id="quote-name"
              type="text"
              autoComplete="name"
              placeholder="Ex.: João Silva"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "quote-name-error" : undefined}
              style={{
                ...inputStyle,
                borderColor: errors.name ? "#c0392b" : "rgba(21,19,15,0.2)",
              }}
              onFocus={(e) => {
                if (!errors.name) (e.target as HTMLInputElement).style.borderColor = "var(--hijau)";
              }}
              onBlur={(e) => {
                if (!errors.name) (e.target as HTMLInputElement).style.borderColor = "rgba(21,19,15,0.2)";
              }}
            />
            {errors.name && <span id="quote-name-error" role="alert" style={errorStyle}>{errors.name}</span>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="quote-phone" style={labelStyle}>
              Telefone / WhatsApp *
            </label>
            <input
              id="quote-phone"
              type="tel"
              autoComplete="tel"
              placeholder="Ex.: (11) 99999-9999"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "quote-phone-error" : undefined}
              style={{
                ...inputStyle,
                borderColor: errors.phone ? "#c0392b" : "rgba(21,19,15,0.2)",
              }}
              onFocus={(e) => {
                if (!errors.phone) (e.target as HTMLInputElement).style.borderColor = "var(--hijau)";
              }}
              onBlur={(e) => {
                if (!errors.phone) (e.target as HTMLInputElement).style.borderColor = "rgba(21,19,15,0.2)";
              }}
            />
            {errors.phone && <span id="quote-phone-error" role="alert" style={errorStyle}>{errors.phone}</span>}
          </div>

          {/* Product */}
          <div>
            <label htmlFor="quote-product" style={labelStyle}>
              Produto de interesse *
            </label>
            <select
              id="quote-product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              aria-required="true"
              aria-invalid={!!errors.product}
              aria-describedby={errors.product ? "quote-product-error" : undefined}
              style={{
                ...inputStyle,
                appearance: "none",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
                paddingRight: "36px",
                cursor: "pointer",
                borderColor: errors.product ? "#c0392b" : "rgba(21,19,15,0.2)",
              }}
              onFocus={(e) => {
                if (!errors.product) (e.target as HTMLSelectElement).style.borderColor = "var(--hijau)";
              }}
              onBlur={(e) => {
                if (!errors.product) (e.target as HTMLSelectElement).style.borderColor = "rgba(21,19,15,0.2)";
              }}
            >
              <option value="">Selecione um produto…</option>
              {PRODUCTS.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            {errors.product && (
              <span id="quote-product-error" role="alert" style={errorStyle}>{errors.product}</span>
            )}
          </div>

          {/* Area */}
          <div>
            <label htmlFor="quote-area" style={labelStyle}>
              Metragem aproximada (m²) *
            </label>
            <input
              id="quote-area"
              type="text"
              inputMode="decimal"
              placeholder="Ex.: 25"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              aria-required="true"
              aria-invalid={!!errors.area}
              aria-describedby={errors.area ? "quote-area-error" : "quote-area-hint"}
              style={{
                ...inputStyle,
                borderColor: errors.area ? "#c0392b" : "rgba(21,19,15,0.2)",
              }}
              onFocus={(e) => {
                if (!errors.area) (e.target as HTMLInputElement).style.borderColor = "var(--hijau)";
              }}
              onBlur={(e) => {
                if (!errors.area) (e.target as HTMLInputElement).style.borderColor = "rgba(21,19,15,0.2)";
              }}
            />
            <span id="quote-area-hint" style={{ fontSize: "0.75rem", color: "#8a7f72", marginTop: "4px", display: "block" }}>Informe o valor em metros quadrados (m²)</span>
            {errors.area && <span id="quote-area-error" role="alert" style={errorStyle}>{errors.area}</span>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.6rem",
              background: "#25d366",
              color: "#fff",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "1rem",
              padding: "16px 24px",
              borderRadius: "3px",
              border: "none",
              cursor: "pointer",
              transition: "background 0.2s ease, transform 0.15s ease",
              marginTop: "4px",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#1da851";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#25d366";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
            onMouseDown={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(0.97)";
            }}
            onMouseUp={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-1px)";
            }}
          >
            <WhatsAppSendIcon />
            Enviar pelo WhatsApp
          </button>

          <p
            style={{
              fontSize: "0.78rem",
              color: "#8a7f72",
              textAlign: "center",
              marginTop: "-8px",
              lineHeight: 1.5,
            }}
          >
            Ao clicar, você será redirecionado ao WhatsApp com a mensagem já
            preenchida.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function WhatsAppSendIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.524 5.849L0 24l6.335-1.502A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.493-5.19-1.357l-.37-.22-3.762.892.937-3.657-.242-.38A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}
