import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-lp-blue text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="44" height="32" viewBox="0 0 44 32" fill="none">
                <rect width="44" height="32" rx="2" fill="#FFCD00"/>
                <path d="M8 22L18 10L24 16L32 8" stroke="#003189" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M28 8H32V12" stroke="#003189" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-black text-white text-xl uppercase">La Poste Annexe</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Service de suivi de colis
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-sm mb-4 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/" className="hover:text-white transition">Suivi de colis</Link></li>
              <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/mentions-legales" className="hover:text-white transition">Mentions légales</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Colissimo</li>
              <li>Chronopost</li>
              <li>Lettre recommandée</li>
              <li>Points Relais</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm mb-4 uppercase tracking-wider">Service client</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <span className="text-lp-yellow">📞</span> 36 31 (gratuit)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lp-yellow">🕐</span> Lun–Ven 8h–18h
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <span>© {new Date().getFullYear()} La Poste Annexe</span>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-white/70 transition">Mentions légales</Link>
            <span>Confidentialité</span>
            <span>CGU</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
