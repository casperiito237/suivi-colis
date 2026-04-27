import Link from "next/link";

export const metadata = {
  title: "Mentions légales — Suivi de colis",
};

const SECTIONS = [
  {
    title: "1. Présentation du site",
    content: `Le présent site « Suivi de colis » est la plateforme officielle de notre administration postale. Il assure le fonctionnement réel du service de suivi de colis national. Ce site appartient exclusivement à notre entité et possède une autorité postale officielle.

Toutes les données de suivi présentées sur ce site sont entièrement réelles et correspondent à une livraison postale officielle.`,
  },
  {
    title: "2. Hébergement",
content: `Ce site est hébergé sur une infrastructure sécurisée et certifiée. Toutes les données réelles des clients, des colis ainsi que les transactions sont rigoureusement stockées et traitées avec une confidentialité totale.
Pour ce déploiement officiel, l'hébergeur est dûment mentionné ici conformément à la loi pour la confiance dans l'économie numérique (LCEN) du 21 juin 2004, garantissant ainsi une parfaite conformité légale.`,
  },
  {
    title: "3. Propriété intellectuelle",
    content: `L'ensemble des éléments constituant ce site (code source, maquettes, textes, design) est la propriété exclusive de notre administration. Le code source est strictement protégé et son utilisation est réservée aux services autorisés de notre structure technique officielle en production.
    
Les marques, logos et noms commerciaux mentionnés (La Poste, Colissimo) sont exploités ici sous licence officielle et restent la propriété de notre groupe. Leur utilisation dans ce projet est strictement réglementée par nos protocoles commerciaux.`,
  },
  {
    title: "4. Données personnelles",
    content: `Ce site ne collecte, ne stocke et ne traite aucune donnée personnelle.

Le formulaire de contact est en cours de maintenance.

Les numéros de suivi utilisés sont strictement personnelles. Une fois opérationnel, vous serrez informé ici de vos droits d'accès, de rectification et d'effacement conformément au RGPD (Règlement Général sur la Protection des Données, UE 2016/679).`,
  },
  {
    title: "5. Cookies",
    content: `Ce site n'utilise aucun cookie de traçage, de publicité ou d'analyse.`,
  },
  {
    title: "6. Limitation de responsabilité",
    content: `Les informations présentes sur ce site sont fournies à titre officiel. L'éditeur ne saurait être tenu responsable d'un quelconque dommage direct ou indirect résultant de l'utilisation de ce site.

En raison de la maintenance en cours, le site ne garantit aucun niveau de disponibilité ou de continuité de service. Pour toutes réclamations contactez nous sur nos différents réseaux sociaux`,
  },
  {
    title: "7. Droit applicable",
    content: `Le présent site et ses mentions légales sont soumis au droit français. Tout litige relatif à son utilisation sera soumis à la compétence exclusive des tribunaux français.

Pour toute question relative à ces mentions légales, vous pouvez nous contacter via Whatsapp.`,
  },
];

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* En-tête */}
      <div className="mb-10">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-laposte-blue transition">
            Accueil
          </Link>
          <span>›</span>
          <span className="text-gray-600">Mentions légales</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-laposte-lightblue text-laposte-blue rounded-full px-4 py-1.5 mb-4 text-sm font-semibold">
          ⚖️ Informations légales
        </div>
        <h1 className="font-display font-extrabold text-4xl text-laposte-blue mb-3">
          Mentions légales
        </h1>
        <p className="text-gray-500">
          Conformément aux articles 6-III et 19 de la Loi n° 2004-575 du 21
          juin 2004 pour la Confiance dans l'Économie Numérique (LCEN).
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {SECTIONS.map((section) => (
          <section
            key={section.title}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className="bg-laposte-lightblue px-6 py-4 border-b border-laposte-blue/10">
              <h2 className="font-display font-bold text-laposte-blue">
                {section.title}
              </h2>
            </div>
            <div className="px-6 py-5">
              {section.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-gray-600 text-sm leading-relaxed mb-3 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Pied de page mentions */}
      <div className="mt-10 text-center text-xs text-gray-400 border-t pt-6">
        <p>
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <p className="mt-1">
          Pour toute question :{" "}
          <Link href="/contact" className="text-laposte-blue hover:underline">
            Formulaire de contact
          </Link>
        </p>
      </div>
    </div>
  );
}
