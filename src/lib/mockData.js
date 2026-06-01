// src/lib/mockData.js

export const mockParcels = {

  // ── Gerard Mickael ──────────────────────────────────────

  "6V10000000001": {
    id: "6V10000000001",
    status: "accepted",
    statusLabel: "Pris en charge",
    sender: "Gilles",
    recipient: { name: "Gerard Mickael", city: "4 Rue des Sources - Remomeix", postalCode: "88000" },
    weight: "117 g",
    dimensions: "85,60 mm × 53,98 mm",
    service: "Colissimo",
  },

  // ── Betis Cedric Roger JM ────────────────────────────────

  "6V20000000001": {
    id: "6V20000000001",
    status: "accepted",
    statusLabel: "Pris en charge",
    sender: "Gilles",
    recipient: { name: "Betis Cedric Roger JM", city: "Créteil", postalCode: "94000" },
    weight: "117 g",
    dimensions: "85,60 mm × 53,98 mm",
    service: "Colissimo",
  },

  // ── Zebardi Adrien ─────────────────────────────────────

  "6V30000000001": {
    id: "6V30000000001",
    status: "delivered",
    statusLabel: "Livré",
    sender: "Gilles",
    recipient: { name: "Zebardi Adrien", city: "Toulon", postalCode: "83100" },
    weight: "117 g",
    dimensions: "85,60 mm × 53,98 mm",
    service: "Colissimo",
  },

  // ── Benamer Nourdine ─────────────────────────────────────

"6V40000000001": {
    id: "6V40000000001",
    status: "delivered",
    statusLabel: "Livré",
    sender: "Gilles",
    recipient: { name: "Benamer Nourdine", city: "Alsace", postalCode: "92330" },
    weight: "117 g",
    dimensions: "85,60 mm × 53,98 mm",
    service: "Colissimo",
  },
};

export const getParcel = (id) => {
  return mockParcels[id] || null;
};

export const statusConfig = {
  accepted: {
    label: "Pris en charge",
    icon: "📦",
    color: "text-gray-600",
    bg: "bg-gray-100",
  },
  in_transit: {
    label: "En transit",
    icon: "🚚",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  out_for_delivery: {
    label: "En cours de livraison",
    icon: "🛵",
    color: "text-lp-blue",
    bg: "bg-lp-gray",
  },
  delivered: {
    label: "Livré",
    icon: "✅",
    color: "text-green-700",
    bg: "bg-green-50",
  },
  issue: {
    label: "Avis de passage",
    icon: "⚠️",
    color: "text-red-600",
    bg: "bg-red-50",
  },
};
