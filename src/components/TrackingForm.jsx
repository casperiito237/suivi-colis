"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TrackingForm() {
  const router = useRouter();
  const [trackingId, setTrackingId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleaned = trackingId.trim().replace(/\s/g, "").toUpperCase();
    if (!cleaned) {
      setError("Veuillez saisir un numéro de suivi.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      router.push(`/tracking/${cleaned}`);
    }, 400);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              type="text"
              value={trackingId}
              onChange={(e) => { setTrackingId(e.target.value); setError(""); }}
              placeholder="Renseignez votre numéro de suivi"
              className={`tracking-input w-full pl-12 pr-4 py-4 text-lp-text bg-white outline-none
                ${error ? "border-red-400 bg-red-50" : ""}`}
              maxLength={30}
              autoComplete="off"
              spellCheck={false}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn-yellow px-8 py-4 text-base font-bold flex items-center gap-2 justify-center min-w-[180px] whitespace-nowrap disabled:opacity-60"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
                Recherche...
              </>
            ) : "suivre votre envoi"}
          </button>
        </div>
        {error && (
          <p className="mt-2 text-red-600 text-sm flex items-center gap-1">
            <span>⚠️</span> {error}
          </p>
        )}
      </form>
    </div>
  );
}
