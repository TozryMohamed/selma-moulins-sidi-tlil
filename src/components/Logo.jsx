import { useState } from 'react'
import { LOGO_PATH } from '../data/siteData'

// Tente d'afficher /public/logo.png (asset officiel SELMA à déposer par
// l'entreprise). Si le fichier n'existe pas encore, affiche un repère
// de marque dessiné (grain stylisé + nom) en attendant l'asset réel.
export default function Logo({ light = false, className = '' }) {
  const [imgError, setImgError] = useState(false)

  if (!imgError) {
    return (
      <img
        src={LOGO_PATH}
        alt="SELMA — Société des Moulins Sidi Tlil"
        className={`h-14 w-auto object-contain ${className}`}
        onError={() => setImgError(true)}
      />
    )
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect width="64" height="64" rx="16" fill={light ? '#FFFFFF14' : '#0A2B4D'} />
        <path d="M32 12c6 6 6 12 0 18-6-6-6-12 0-18Z" fill="#E3AC3D" />
        <path d="M32 22c6 6 6 12 0 18-6-6-6-12 0-18Z" fill="#F0CE7C" />
        <path d="M32 32c6 6 6 12 0 18-6-6-6-12 0-18Z" fill="#E3AC3D" />
        <line x1="32" y1="10" x2="32" y2="54" stroke="#FDF8EC" strokeWidth="1.5" />
      </svg>
      <span
        className={`font-display text-xl font-bold tracking-tight leading-none ${
          light ? 'text-white' : 'text-indigo-950'
        }`}
      >
        SELMA
        <span className={`block text-[10px] font-medium tracking-[0.25em] ${light ? 'text-white/70' : 'text-indigo-900/60'}`}>
          MOULINS SIDI TLIL
        </span>
      </span>
    </div>
  )
}
