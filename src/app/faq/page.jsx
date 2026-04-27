"use client";
import { useState } from "react";
import Link from "next/link";

const FAQ_CATEGORIES = [
  {
    category: "Suivi de colis",
    icon: "📦",
    questions: [
      {
        q: "Où trouver mon numéro de suivi ?",
        a: "Votre numéro de suivi figure sur votre bon de commande, dans l'e-mail de confirmation d'expédition envoyé par l'expéditeur, ou sur le message émis lors de la transaction effectuée. Il est généralement composé de 13 caractères alphanumériques (ex : 6V12345678901).",
      },
      {
        q: "À quelle fréquence les informations de suivi sont-elles mises à jour ?",
        a: "Les informations de suivi sont mises à jour à chaque étape de traitement : lors de la prise en charge, du passage dans les centres de tri, de l'arrivée au centre de distribution, et lors de la tentative de livraison. En moyenne, vous pouvez observer 3 à 6 mises à jour par jour ouvré.",
      },
      {
        q: "Mon numéro de suivi n'est pas reconnu, que faire ?",
        a: "Vérifiez que vous avez saisi le numéro correctement (sans espaces, majuscules ou minuscules — les deux sont acceptés). Si le colis vient d'être expédié, les informations peuvent prendre jusqu'à 24 h pour apparaître dans notre système. Au-delà, contactez l'expéditeur ou notre service client.",
      },
      {
        q: "Puis-je suivre plusieurs colis en même temps ?",
        a: "Actuellement, le suivi se fait colis par colis. Vous pouvez ouvrir plusieurs onglets dans votre navigateur pour consulter plusieurs numéros simultanément. Une fonctionnalité de suivi groupé est en cours de développement.",
      },
    ],
  },
  {
    category: "Livraison",
    icon: "🚚",
    questions: [
      {
        q: "Que se passe-t-il si je suis absent lors de la livraison ?",
        a: "Si vous êtes absent lors du passage du facteur, un avis de passage est déposé dans votre boîte aux lettres. Vous disposez alors de 15 jours calendaires pour retirer votre colis dans le bureau de Poste indiqué. Vous pouvez également reprogrammer une livraison via notre site ou l'application mobile.",
      },
      {
        q: "Mon colis est indiqué « livré » mais je ne l'ai pas reçu.",
        a: "Vérifiez d'abord votre boîte aux lettres et les zones de dépôt habituelles (chez un voisin, en point relais). Si le colis est introuvable, contactez votre bureau de Poste local dans les 48 h suivant la date de livraison indiquée, en munissant votre numéro de suivi.",
      },
      {
        q: "Dans quels délais mon colis sera-t-il livré ?",
        a: "Les délais varient selon le service choisi : Colissimo standard est livré en J+2 ouvrés pour la France métropolitaine. Les livraisons en zone rurale ou dans les DOM-TOM peuvent nécessiter un délai supplémentaire de 1 à 3 jours ouvrés.",
      },
      {
        q: "Puis-je modifier l'adresse de livraison après expédition ?",
        a: "La modification d'adresse est possible sous certaines conditions et dans un délai limité après l'expédition, uniquement si le colis n'est pas encore en cours de livraison. Contactez notre service client dès que possible pour vérifier si cette option est encore disponible.",
      },
    ],
  },
  {
    category: "Problèmes & réclamations",
    icon: "⚠️",
    questions: [
      {
        q: "Mon colis est endommagé, que faire ?",
        a: "En cas de colis endommagé, refusez-le si possible lors de la livraison (en faisant noter la réserve par le facteur), ou contactez notre service client dans les 3 jours ouvrés suivant la réception. Gardez le colis et l'emballage pour toute expertise. Une photo des dommages est recommandée.",
      },
      {
        q: "Comment faire une réclamation ?",
        a: "Vous pouvez déposer une réclamation directement depuis la page Contact de ce site, par téléphone au 36 31 (service gratuit, du lundi au vendredi de 8h à 18h), ou en vous rendant dans n'importe quel bureau de Poste. Munissez-vous de votre numéro de suivi et d'une pièce d'identité.",
      },
      {
        q: "Mon colis est bloqué depuis plusieurs jours, que faire ?",
        a: "Un colis peut être temporairement retenu en centre de tri en cas de volume important (périodes de fêtes, mouvements sociaux, intempéries). Si aucune mise à jour n'apparaît depuis plus de 5 jours ouvrés, contactez notre service client en fournissant votre numéro de suivi.",
      },
    ],
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item py-5 cursor-pointer`} onClick={() => setOpen(!open)}>
      <div className="flex items-start justify-between gap-4">
        <h3 className={`font-body font-semibold text-sm sm:text-base leading-snug transition ${open ? "text-laposte-blue" : "text-gray-800"}`}>
          {q}
        </h3>
        <div
          className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all
            ${open ? "bg-laposte-blue border-laposte-blue text-white rotate-180" : "border-gray-300 text-gray-400"}`}
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      <div className={`faq-answer ${open ? "open" : ""}`}>
        <p className="pt-3 text-gray-600 text-sm leading-relaxed pr-10">{a}</p>
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* En-tête */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-laposte-lightblue text-laposte-blue rounded-full px-4 py-1.5 mb-4 text-sm font-semibold">
          ❓ Centre d'aide
        </div>
        <h1 className="font-display font-extrabold text-4xl text-laposte-blue mb-3">
          Foire aux questions
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto">
          Retrouvez les réponses aux questions les plus fréquentes sur le suivi
          de colis, les livraisons et les réclamations.
        </p>
      </div>

      {/* Catégories */}
      <div className="space-y-8">
        {FAQ_CATEGORIES.map((cat) => (
          <div key={cat.category} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* En-tête catégorie */}
            <div className="bg-laposte-blue px-6 py-4 flex items-center gap-3">
              <span className="text-2xl">{cat.icon}</span>
              <h2 className="font-display font-bold text-white text-lg">
                {cat.category}
              </h2>
              <span className="ml-auto bg-white/20 text-white/80 text-xs font-bold px-2 py-0.5 rounded-full">
                {cat.questions.length} questions
              </span>
            </div>

            {/* Questions */}
            <div className="px-6">
              {cat.questions.map((item, i) => (
                <FaqItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA contact */}
      <div className="mt-10 bg-laposte-lightblue rounded-2xl p-8 text-center">
        <div className="text-3xl mb-3">💬</div>
        <h3 className="font-display font-bold text-laposte-blue text-xl mb-2">
          Vous n'avez pas trouvé votre réponse ?
        </h3>
        <p className="text-gray-500 text-sm mb-5">
          Notre équipe est disponible du lundi au vendredi de 8h à 18h.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-laposte-blue text-white font-bold px-6 py-3 rounded-xl hover:bg-laposte-darkblue transition"
        >
          Nous contacter →
        </Link>
      </div>
    </div>
  );
}
