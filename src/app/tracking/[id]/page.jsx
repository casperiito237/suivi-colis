import { getParcel } from "@/lib/mockData";
import TrackingTimeline from "@/components/TrackingTimeline";
import TrackingForm from "@/components/TrackingForm";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const parcel = getParcel(params.id);
  return {
    title: parcel
      ? `Suivi ${params.id} — ${parcel.statusLabel}`
      : `Numéro introuvable — ${params.id}`,
  };
}

export default function TrackingPage({ params }) {
  const parcel = getParcel(params.id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Fil d'Ariane */}
      <nav className="flex items-center gap-2 text-sm text-lp-muted mb-6">
        <Link href="/" className="hover:text-lp-blue transition">Accueil</Link>
        <span>›</span>
        <span className="text-lp-text">Suivi de colis</span>
        {parcel && (
          <>
            <span>›</span>
            <span className="text-lp-blue font-mono font-semibold">{params.id}</span>
          </>
        )}
      </nav>

      {parcel ? (
        <>
          <div className="mb-6">
            <h1 className="font-bold text-2xl text-lp-text mb-1">Suivi de votre envoi</h1>
            <p className="text-lp-muted text-sm">
              Numéro de suivi :{" "}
              <span className="font-mono font-bold text-lp-blue bg-lp-gray px-2 py-0.5 rounded">
                {parcel.id}
              </span>
              {" "}· {parcel.service}
            </p>
          </div>

          <TrackingTimeline parcel={parcel} />

          {/* Nouvelle recherche */}
          <div className="mt-10 bg-lp-gray border border-lp-border rounded p-6">
            <h2 className="font-bold text-lp-text mb-4">Suivre un autre envoi</h2>
            <TrackingForm />
          </div>
        </>
      ) : (
        /* ── Numéro introuvable ── */
        <div className="text-center py-16">
          <div className="text-6xl mb-6">🔍</div>
          <h1 className="font-bold text-2xl text-lp-text mb-3">
            Aucun résultat trouvé
          </h1>
          <p className="text-lp-muted mb-2">
            Le numéro{" "}
            <span className="font-mono font-bold text-lp-blue bg-lp-gray px-2 py-0.5 rounded">
              {params.id}
            </span>{" "}
            ne correspond à aucun envoi dans notre système.
          </p>
          <p className="text-lp-muted text-sm mb-8">
            Vérifiez votre numéro et réessayez, ou contactez l'expéditeur.
          </p>

          <div className="bg-lp-gray border border-lp-border rounded p-6 max-w-lg mx-auto mb-6">
            <h2 className="font-bold text-lp-text mb-4 text-sm">Effectuer une nouvelle recherche</h2>
            <TrackingForm />
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-lp-blue font-semibold hover:underline text-sm"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      )}
    </div>
  );
}
