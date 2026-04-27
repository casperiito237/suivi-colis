import TrackingForm from "@/components/TrackingForm";
import Link from "next/link";

const PROMO_CARDS = [
  {
    bg: "bg-lp-lightgreen",
    accent: false,
    tag: "RECOMMANDÉ EN LIGNE",
    title: "Vos résiliations facilitées",
    icon: "💻",
  },
  {
    bg: "bg-lp-green",
    accent: true,
    tag: "EN CE MOMENT",
    title: "Les jours déménagement",
    icon: "🚛",
  },
  {
    bg: "bg-lp-lightgreen",
    accent: false,
    tag: "PROMOTION",
    title: "Découvrez nos kits déménagement",
    icon: "📦",
  },
];

const SERVICES = [
  { icon: "📬", label: "Colissimo" },
  { icon: "⚡", label: "Chronopost" },
  { icon: "✉️", label: "Lettre recommandée" },
  { icon: "📍", label: "Points Relais" },
  { icon: "🌍", label: "International" },
  { icon: "🏢", label: "Entreprises" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Section suivi principal ── */}
      <section className="bg-white border-b border-lp-border py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-lp-text mb-2">
            Suivre un courrier ou un colis
          </h1>
          <p className="text-lp-muted text-sm mb-6">
            Saisissez votre numéro de suivi pour connaître l'état de votre envoi en temps réel.
          </p>
          <TrackingForm />
          <p className="text-xs text-lp-muted mt-3">
            Votre numéro de suivi figure sur votre avis de passage, ou votre message de confirmation avec un conseiller.
          </p>
        </div>
      </section>

      {/* ── Cartes promo ── */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROMO_CARDS.map((card) => (
            <div
              key={card.tag}
              className={`promo-card p-6 flex items-center justify-between gap-4 ${card.bg}`}
            >
              <div>
                <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${card.accent ? "text-white/80" : "text-lp-muted"}`}>
                  {card.tag}
                </p>
                <h3 className={`font-bold text-lg leading-snug mb-3 ${card.accent ? "text-white" : "text-lp-text"}`}>
                  {card.title}
                </h3>
                <button className={`text-sm font-semibold flex items-center gap-1 underline underline-offset-2 ${card.accent ? "text-white" : "text-lp-green"}`}>
                  {card.cta} →
                </button>
              </div>
              <div className="text-5xl flex-shrink-0">{card.icon}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Nos services ── */}
      <section className="bg-lp-gray border-t border-lp-border py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold text-lp-text mb-6">Nos services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {SERVICES.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded border border-lp-border p-4 flex flex-col items-center gap-2 cursor-pointer hover:border-lp-blue hover:shadow-card transition text-center"
              >
                <span className="text-3xl">{s.icon}</span>
                <span className="text-xs font-semibold text-lp-text">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Informations utiles ── */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-lp-text mb-6">Informations utiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              icon: "🔍",
              title: "Où trouver mon numéro de suivi ?",
              desc: "Il figure sur votre avis de passage, votre bon de commande ou dans l'e-mail de confirmation d'expédition.",
              link: "/faq",
              cta: "En savoir plus",
            },
            {
              icon: "📬",
              title: "Avis de passage",
              desc: "Vous étiez absent lors de la livraison ? Récupérez votre colis en bureau de Poste ou reprogrammez une livraison.",
              link: "/faq",
              cta: "Que faire ?",
            },
            {
              icon: "⚠️",
              title: "Colis endommagé ou non reçu ?",
              desc: "Contactez notre service client pour déposer une réclamation. Nous traitons votre demande sous 48h ouvrées.",
              link: "/contact",
              cta: "Nous contacter",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-lp-border rounded p-5 hover:shadow-card transition">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-lp-text mb-2 text-base">{item.title}</h3>
              <p className="text-lp-muted text-sm leading-relaxed mb-4">{item.desc}</p>
              <Link href={item.link} className="text-lp-blue text-sm font-semibold hover:underline">
                {item.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bandeau service client ── */}
      <section className="bg-lp-blue py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-bold text-white text-xl mb-1">Besoin d'aide ?</h2>
            <p className="text-white/70 text-sm">
              Notre service client est disponible du lundi au vendredi de 8h à 18h.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="btn-yellow px-6 py-3 text-sm"
            >
              Nous contacter
            </Link>
            <Link
              href="/faq"
              className="border border-white text-white px-6 py-3 text-sm font-bold rounded hover:bg-white/10 transition"
            >
              Consulter la FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
