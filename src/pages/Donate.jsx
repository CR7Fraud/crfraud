import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Check,
  CircleDollarSign,
  Coins,
  Copy,
  ExternalLink,
  Heart,
  Wallet,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../components/ui/dialog";
import { useI18n } from "../lib/i18n";

const content = {
  en: {
    badge: "Crypto support",
    title: "Donate in crypto",
    subtitle:
      "Support the site directly with BTC, ETH or SOL. PayPal and Revolut are available below.",
    introTitle: "Direct wallets, no request step",
    introBody:
      "Use the addresses below directly. If you prefer PayPal or Revolut, use the links further down.",
    cryptoTitle: "Supported crypto",
    cryptoSubtitle: "Send to one of these addresses.",
    copyLabel: "Copy",
    copiedLabel: "Copied",
    qrLabel: "QR code",
    qrDialogBody:
      "Scan this QR code in your wallet app, or use the address shown below.",
    cryptoCards: [
      {
        label: "Bitcoin (BTC)",
        description: "Direct BTC wallet.",
        address:
          "bc1pj2mwmrgvjzg3dc8r2esrkq6r93el5m0dyuhrasez08rxxlqaxlesd3rycj",
      },
      {
        label: "Ethereum (ETH)",
        description: "Direct ETH wallet.",
        address: "0x82deb5ae01e0736784df7eda2111A49bF18CD912",
      },
      {
        label: "Solana (SOL)",
        description: "Direct SOL wallet.",
        address: "DiLyUUMVXQmG4LJUnJvnPKutrLDWQC93Hp777AUET8yB",
      },
    ],
    paymentTitle: "Other payment links",
    paymentSubtitle: "Use the direct PayPal or Revolut links.",
    openLabel: "Open",
    paymentCards: [
      {
        label: "PayPal",
        description: "Hosted donation button.",
        href: "https://www.paypal.com/donate/?hosted_button_id=7C4CTJLBRK378",
      },
      {
        label: "Revolut",
        description: "Direct Revolut.me link.",
        href: "https://revolut.me/pedrinilindo",
      },
    ],
  },
  pt: {
    badge: "Apoio cripto",
    title: "Doar em cripto",
    subtitle:
      "Apoia o site diretamente com BTC, ETH ou SOL. PayPal e Revolut estão abaixo.",
    introTitle: "Carteiras diretas, sem pedido",
    introBody:
      "Usa as moradas abaixo diretamente. Se preferires PayPal ou Revolut, usa os links mais abaixo.",
    cryptoTitle: "Cripto suportada",
    cryptoSubtitle: "Envia para uma destas moradas.",
    copyLabel: "Copiar",
    copiedLabel: "Copiado",
    qrLabel: "Código QR",
    qrDialogBody:
      "Lê este QR code na tua wallet ou usa a morada mostrada abaixo.",
    cryptoCards: [
      {
        label: "Bitcoin (BTC)",
        description: "Carteira BTC direta.",
        address:
          "bc1pj2mwmrgvjzg3dc8r2esrkq6r93el5m0dyuhrasez08rxxlqaxlesd3rycj",
      },
      {
        label: "Ethereum (ETH)",
        description: "Carteira ETH direta.",
        address: "0x82deb5ae01e0736784df7eda2111A49bF18CD912",
      },
      {
        label: "Solana (SOL)",
        description: "Carteira SOL direta.",
        address: "DiLyUUMVXQmG4LJUnJvnPKutrLDWQC93Hp777AUET8yB",
      },
    ],
    paymentTitle: "Outros links de pagamento",
    paymentSubtitle: "Usa os links diretos do PayPal ou da Revolut.",
    openLabel: "Abrir",
    paymentCards: [
      {
        label: "PayPal",
        description: "Botão de doação alojado.",
        href: "https://www.paypal.com/donate/?hosted_button_id=7C4CTJLBRK378",
      },
      {
        label: "Revolut",
        description: "Link direto Revolut.me.",
        href: "https://revolut.me/pedrinilindo",
      },
    ],
  },
  es: {
    badge: "Apoyo cripto",
    title: "Donar en cripto",
    subtitle:
      "Apoya el sitio directamente con BTC, ETH o SOL. PayPal y Revolut están abajo.",
    introTitle: "Wallets directas, sin pedirlas",
    introBody:
      "Usa las direcciones de abajo directamente. Si prefieres PayPal o Revolut, usa los enlaces más abajo.",
    cryptoTitle: "Cripto soportada",
    cryptoSubtitle: "Envía a una de estas direcciones.",
    copyLabel: "Copiar",
    copiedLabel: "Copiado",
    qrLabel: "Código QR",
    qrDialogBody:
      "Escanea este código QR en tu wallet o usa la dirección que aparece abajo.",
    cryptoCards: [
      {
        label: "Bitcoin (BTC)",
        description: "Wallet BTC directa.",
        address:
          "bc1pj2mwmrgvjzg3dc8r2esrkq6r93el5m0dyuhrasez08rxxlqaxlesd3rycj",
      },
      {
        label: "Ethereum (ETH)",
        description: "Wallet ETH directa.",
        address: "0x82deb5ae01e0736784df7eda2111A49bF18CD912",
      },
      {
        label: "Solana (SOL)",
        description: "Wallet SOL directa.",
        address: "DiLyUUMVXQmG4LJUnJvnPKutrLDWQC93Hp777AUET8yB",
      },
    ],
    paymentTitle: "Otros enlaces de pago",
    paymentSubtitle: "Usa los enlaces directos de PayPal o Revolut.",
    openLabel: "Abrir",
    paymentCards: [
      {
        label: "PayPal",
        description: "Botón de donación alojado.",
        href: "https://www.paypal.com/donate/?hosted_button_id=7C4CTJLBRK378",
      },
      {
        label: "Revolut",
        description: "Enlace directo de Revolut.me.",
        href: "https://revolut.me/pedrinilindo",
      },
    ],
  },
  fr: {
    badge: "Soutien crypto",
    title: "Faire un don en crypto",
    subtitle:
      "Soutiens le site directement avec BTC, ETH ou SOL. PayPal et Revolut sont ci-dessous.",
    introTitle: "Wallets directs, sans demande",
    introBody:
      "Utilise les adresses ci-dessous directement. Si tu préfères PayPal ou Revolut, utilise les liens plus bas.",
    cryptoTitle: "Crypto prise en charge",
    cryptoSubtitle: "Envoie vers l'une de ces adresses.",
    copyLabel: "Copier",
    copiedLabel: "Copié",
    qrLabel: "Code QR",
    qrDialogBody:
      "Scanne ce code QR dans ton wallet ou utilise l'adresse affichée ci-dessous.",
    cryptoCards: [
      {
        label: "Bitcoin (BTC)",
        description: "Wallet BTC direct.",
        address:
          "bc1pj2mwmrgvjzg3dc8r2esrkq6r93el5m0dyuhrasez08rxxlqaxlesd3rycj",
      },
      {
        label: "Ethereum (ETH)",
        description: "Wallet ETH direct.",
        address: "0x82deb5ae01e0736784df7eda2111A49bF18CD912",
      },
      {
        label: "Solana (SOL)",
        description: "Wallet SOL direct.",
        address: "DiLyUUMVXQmG4LJUnJvnPKutrLDWQC93Hp777AUET8yB",
      },
    ],
    paymentTitle: "Autres liens de paiement",
    paymentSubtitle: "Utilise les liens directs PayPal ou Revolut.",
    openLabel: "Ouvrir",
    paymentCards: [
      {
        label: "PayPal",
        description: "Bouton de don hébergé.",
        href: "https://www.paypal.com/donate/?hosted_button_id=7C4CTJLBRK378",
      },
      {
        label: "Revolut",
        description: "Lien direct Revolut.me.",
        href: "https://revolut.me/pedrinilindo",
      },
    ],
  },
};

const fallback = (copy, lang, key) => copy[lang]?.[key] || copy.en[key];

function WalletCard({
  icon: Icon,
  label,
  address,
  description,
  copyLabel,
  copiedLabel,
  qrLabel,
  onOpenQr,
  copied,
  onCopy,
}) {
  const isCopied = copied === address;

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-amber-500" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-semibold text-foreground text-sm">{label}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onCopy(address)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
            >
              {isCopied ? (
                <Check className="h-3.5 w-3.5 text-emerald-500" />
              ) : (
                <Copy className="h-3.5 w-3.5 text-amber-500" />
              )}
              {isCopied ? copiedLabel : copyLabel}
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <div className="min-w-0 flex-1 rounded-xl border border-dashed border-border/70 bg-background/60 px-4 py-3 font-mono text-sm break-all text-foreground">
              {address}
            </div>

            <button
              type="button"
              onClick={() => onOpenQr({ label, address })}
              title={qrLabel}
              aria-label={`${qrLabel} ${label}`}
              className="group flex w-28 flex-col items-center rounded-2xl border border-border bg-white p-2 shadow-inner transition-colors hover:border-amber-400/50"
            >
              <QRCodeSVG value={address} size={72} includeMargin />
              <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                {qrLabel}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentCard({ icon: Icon, label, href, description, openLabel }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-amber-400/50 hover:shadow-md"
    >
      <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-amber-500" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="font-semibold text-foreground text-sm">{label}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground transition-colors group-hover:bg-muted">
            {openLabel}
            <ExternalLink className="h-3.5 w-3.5 text-amber-500" />
          </span>
        </div>
      </div>
    </a>
  );
}

export default function Donate() {
  const { lang } = useI18n();
  const c = (key) => fallback(content, lang, key);
  const [copiedAddress, setCopiedAddress] = React.useState("");
  const [selectedWallet, setSelectedWallet] = React.useState(null);
  const cryptoCards = c("cryptoCards");
  const paymentCards = c("paymentCards");

  const handleCopy = async (address) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedAddress(address);
      window.setTimeout(() => {
        setCopiedAddress((current) => (current === address ? "" : current));
      }, 1400);
    } catch {
      setCopiedAddress("");
    }
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 pt-32 pb-20">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
          <Heart className="h-3.5 w-3.5" />
          {c("badge")}
        </div>
        <h1 className="font-playfair text-4xl md:text-5xl font-black text-foreground mb-4">
          {c("title")}
        </h1>
        <p className="text-muted-foreground text-base mb-10 leading-relaxed">
          {c("subtitle")}
        </p>

        <div className="mb-10 rounded-3xl border border-amber-400/15 bg-gradient-to-br from-amber-500/10 via-card to-card p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
              <Wallet className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400 mb-2">
                {c("introTitle")}
              </p>
              <p className="text-sm leading-relaxed text-foreground/80">
                {c("introBody")}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <section className="space-y-4">
            <div>
              <h2 className="font-playfair text-2xl font-bold text-foreground">
                {c("cryptoTitle")}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c("cryptoSubtitle")}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {cryptoCards.map((item) => (
                <WalletCard
                  key={item.label}
                  icon={Coins}
                  label={item.label}
                  address={item.address}
                  description={item.description}
                  copyLabel={c("copyLabel")}
                  copiedLabel={c("copiedLabel")}
                  qrLabel={c("qrLabel")}
                  onOpenQr={setSelectedWallet}
                  copied={copiedAddress}
                  onCopy={handleCopy}
                />
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <div>
              <h2 className="font-playfair text-2xl font-bold text-foreground">
                {c("paymentTitle")}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c("paymentSubtitle")}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {paymentCards.map((item) => (
                <PaymentCard
                  key={item.label}
                  icon={CircleDollarSign}
                  label={item.label}
                  description={item.description}
                  href={item.href}
                  openLabel={c("openLabel")}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Dialog
        open={selectedWallet !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedWallet(null);
          }
        }}
      >
        <DialogContent className="max-w-[92vw] border-white/10 bg-zinc-950 p-4 sm:max-w-lg">
          {selectedWallet && (
            <div className="flex flex-col items-center gap-4 pt-3">
              <DialogTitle className="text-center font-playfair text-2xl font-bold text-white">
                {selectedWallet.label}
              </DialogTitle>
              <DialogDescription className="text-center text-sm leading-relaxed text-zinc-400">
                {c("qrDialogBody")}
              </DialogDescription>

              <div className="rounded-3xl bg-white p-4 shadow-2xl shadow-black/40">
                <QRCodeSVG
                  value={selectedWallet.address}
                  size={260}
                  includeMargin
                />
              </div>

              <div className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-xs break-all text-white/85">
                {selectedWallet.address}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
