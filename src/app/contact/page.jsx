"use client";
import { useState } from "react";

const CONTACT_REASONS = [
  "Colis non reçu",
  "Colis endommagé",
  "Avis de passage",
  "Réclamation / remboursement",
  "Modification d'adresse",
  "Autre question",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    tracking: "",
    reason: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Nom requis";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "E-mail invalide";
    if (!form.reason) e.reason = "Veuillez choisir un motif";
    if (!form.message.trim() || form.message.length < 20)
      e.message = "Message trop court (min. 20 caractères)";
    return e;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  if (sent) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center animate-slideIn">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="font-display font-extrabold text-3xl text-laposte-blue mb-3">
          Message envoyé !
        </h1>
        <p className="text-gray-500 mb-2">
          Merci, <strong>{form.name}</strong>. Votre demande a bien été reçue.
        </p>
        <p className="text-gray-400 text-sm mb-8">
          Notre équipe vous répondra sous{" "}
          <strong className="text-laposte-blue">48 heures ouvrées</strong> à
          l'adresse <strong>{form.email}</strong>.
        </p>
        <button
          onClick={() => {
            setSent(false);
            setForm({ name: "", email: "", tracking: "", reason: "", message: "" });
          }}
          className="bg-laposte-blue text-white font-bold px-6 py-3 rounded-xl hover:bg-laposte-darkblue transition"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* En-tête */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-laposte-lightblue text-laposte-blue rounded-full px-4 py-1.5 mb-4 text-sm font-semibold">
          ✉️ Service client
        </div>
        <h1 className="font-display font-extrabold text-4xl text-laposte-blue mb-3">
          Contactez-nous
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto">
          Une question sur votre livraison ? Remplissez le formulaire
          ci-dessous ou utilisez un de nos canaux de contact directs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Infos contact */}
        <div className="space-y-4">
          {[
            {
              icon: "📞",
              title: "Téléphone",
              val: "36 31",
              sub: "Lun–Ven, 8h–18h (appel gratuit)",
            },
            {
              icon: "🏠",
              title: "Agence de Poste",
              val: "Trouvez votre agence",
              sub: "Horaires variables selon agence",
            },
            {
              icon: "💬",
              title: "Chat en ligne",
              val: "Chat disponible",
              sub: "Lun–Sam, 9h–20h",
            },
          ].map((c) => (
            <div key={c.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 card-hover flex gap-4">
              <div className="text-2xl">{c.icon}</div>
              <div>
                <div className="font-display font-bold text-laposte-blue text-sm">
                  {c.title}
                </div>
                <div className="font-semibold text-gray-800 text-sm">{c.val}</div>
                <div className="text-gray-400 text-xs">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Formulaire */}
        <div className="lg:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
          >
            <h2 className="font-display font-bold text-xl text-laposte-blue mb-6">
              Formulaire de contact
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              {/* Nom */}
              <Field
                label="Nom complet *"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Jean Dupont"
                error={errors.name}
              />
              {/* Email */}
              <Field
                label="Adresse e-mail *"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jean@exemple.fr"
                error={errors.email}
              />
            </div>

            {/* Numéro de suivi */}
            <div className="mb-5">
              <Field
                label="Numéro de suivi (optionnel)"
                name="tracking"
                type="text"
                value={form.tracking}
                onChange={handleChange}
                placeholder="6V12345678901"
                error={errors.tracking}
              />
            </div>

            {/* Motif */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Motif de la demande *
              </label>
              <select
                name="reason"
                value={form.reason}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition
                  bg-white appearance-none
                  ${errors.reason ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-laposte-blue"}`}
              >
                <option value="">— Sélectionnez un motif —</option>
                {CONTACT_REASONS.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
              {errors.reason && <p className="text-red-500 text-xs mt-1">{errors.reason}</p>}
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Message *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Décrivez votre situation en détail..."
                rows={5}
                className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition resize-none
                  ${errors.message ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-laposte-blue"}`}
              />
              <div className="flex justify-between items-center mt-1">
                {errors.message ? (
                  <p className="text-red-500 text-xs">{errors.message}</p>
                ) : (
                  <span />
                )}
                <span className="text-xs text-gray-400">
                  {form.message.length} caractères
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-laposte-blue text-white font-display font-bold py-3.5 rounded-xl
                hover:bg-laposte-darkblue transition disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Envoi en cours...
                </>
              ) : (
                "Envoyer le message →"
              )}
            </button>

            <p className="text-xs text-gray-400 text-center mt-4">
              * Champs obligatoires. Vos données sont traitées conformément à notre politique de confidentialité.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, type, value, onChange, placeholder, error }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition
          ${error ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-laposte-blue"}`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
