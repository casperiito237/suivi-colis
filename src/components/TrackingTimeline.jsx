"use client";
import { statusConfig } from "@/lib/mockData";

const STEPS = [
  { key: "accepted", label: "Pris en charge" },
  { key: "in_transit", label: "En transit" },
  { key: "out_for_delivery", label: "Livraison" },
  { key: "delivered", label: "Livré" },
];

const STEP_ORDER = {
  accepted: 0,
  in_transit: 1,
  out_for_delivery: 2,
  delivered: 3,
  issue: 2,
};

export default function TrackingTimeline({ parcel }) {
  const cfg = statusConfig[parcel.status] || statusConfig["in_transit"];
  const currentStep = STEP_ORDER[parcel.status] ?? 1;

  return (
    <div className="animate-slideIn">

      {/* ── Carte statut principal ── */}
      <div className={`rounded border-2 p-6 mb-6 ${
        parcel.status === "delivered"   ? "bg-green-50 border-green-200"
        : parcel.status === "issue"     ? "bg-red-50 border-red-200"
        : parcel.status === "out_for_delivery" ? "bg-lp-gray border-lp-blue/30"
        : "bg-orange-50 border-orange-200"
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{cfg.icon}</span>
              <span className={`font-bold text-xl ${cfg.color}`}>
                {parcel.statusLabel}
              </span>
            </div>
            <p className="text-lp-muted text-sm">{parcel.estimatedDelivery}</p>
            <p className="text-lp-muted text-xs mt-1 font-mono">N° {parcel.id}</p>
          </div>

          {parcel.status === "out_for_delivery" && (
            <div className="flex items-center gap-2 bg-lp-blue text-white px-4 py-2 rounded text-sm font-bold self-start">
              <span className="inline-block w-2 h-2 bg-lp-yellow rounded-full animate-pulse2" />
              En route
            </div>
          )}
          {parcel.status === "delivered" && (
            <div className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded text-sm font-bold self-start">
              ✓ Livré
            </div>
          )}
          {parcel.status === "issue" && (
            <div className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded text-sm font-bold self-start">
              ⚠️ Action requise
            </div>
          )}
        </div>

        {/* Barre de progression */}
        {parcel.status !== "issue" && (
          <div className="mt-5">
            <div className="flex items-center">
              {STEPS.map((step, idx) => {
                const done = idx <= currentStep;
                const active = idx === currentStep;
                return (
                  <div key={step.key} className="flex-1 flex items-center">
                    {idx > 0 && (
                      <div className={`flex-1 h-1.5 rounded-full transition-all duration-700 ${idx <= currentStep ? "bg-lp-blue" : "bg-lp-border"}`} />
                    )}
                    <div className="flex flex-col items-center">
                      <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all ${
                        active ? "bg-lp-blue border-lp-blue text-white ring-4 ring-lp-blue/20"
                        : done  ? "bg-lp-blue border-lp-blue text-white"
                        : "bg-white border-lp-border text-lp-muted"
                      }`}>
                        {done ? (
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                          </svg>
                        ) : idx + 1}
                      </div>
                      <span className={`text-xs mt-1 font-medium text-center leading-tight max-w-[60px] hidden sm:block ${done ? "text-lp-blue" : "text-lp-muted"}`}>
                        {step.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* ── Détails du colis ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <DetailCard icon="👤" label="Expéditeur"   value={parcel.sender} />
        <DetailCard icon="📍" label="Destinataire" value={`${parcel.recipient.name} — ${parcel.recipient.city} (${parcel.recipient.postalCode})`} />
        <DetailCard icon="⚖️" label="Poids"        value={parcel.weight} />
      </div>

      {/* ── Message avis de passage ── */}
      {parcel.status === "issue" && (
        <div className="bg-amber-50 border border-amber-200 rounded p-5 animate-slideIn">
          <div className="flex gap-3">
            <span className="text-2xl">📬</span>
            <div>
              <h3 className="font-bold text-amber-800 mb-1">
                Un avis de passage a été déposé
              </h3>
              <p className="text-amber-700 text-sm">
                Le facteur a tenté de livrer votre colis mais vous étiez absent.
                Vous pouvez récupérer votre colis dans votre bureau de Poste
                sous <strong>15 jours</strong>, ou reprogrammer une livraison.
              </p>
              <button className="mt-3 bg-lp-blue text-white text-sm font-bold px-5 py-2 rounded hover:bg-lp-darkblue transition">
                Reprogrammer la livraison
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

function DetailCard({ icon, label, value }) {
  return (
    <div className="bg-white rounded border border-lp-border p-4 hover:shadow-card transition">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">{icon}</span>
        <span className="text-xs text-lp-muted font-semibold uppercase tracking-wider">{label}</span>
      </div>
      <p className="text-sm font-semibold text-lp-blue leading-snug">{value}</p>
    </div>
  );
}
