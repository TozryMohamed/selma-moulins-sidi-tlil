import { useState } from 'react'
import { LOGO_PATH } from '../data/siteData'

export default function Logo({ light = false, className = '', size = 'md' }) {
  const [imgError, setImgError] = useState(false)
  
  // Tailles responsives
  const sizeMap = {
    'sm': 'h-8 sm:h-10',
    'md': 'h-10 sm:h-12',
    'lg': 'h-12 sm:h-14',
    'xl': 'h-14 sm:h-16'
  }
  
  const heightClass = sizeMap[size] || sizeMap.md

  if (!imgError) {
    return (
      <img
        src={LOGO_PATH}
        alt="SELMA — Société des Moulins Sidi Tlil"
        className={`${heightClass} w-auto object-contain ${className}`}
        onError={() => setImgError(true)}
      />
    )
  }

  // Logo de secours
  const getIconSize = () => {
    if (size === 'sm') return { icon: 30, text: 'text-base sm:text-xl', sub: 'text-[8px] sm:text-[10px]' }
    if (size === 'lg') return { icon: 40, text: 'text-xl sm:text-3xl', sub: 'text-[10px] sm:text-[12px]' }
    if (size === 'xl') return { icon: 46, text: 'text-2xl sm:text-4xl', sub: 'text-[12px] sm:text-[14px]' }
    return { icon: 34, text: 'text-lg sm:text-2xl', sub: 'text-[8px] sm:text-[10px]' }
  }

  const { icon, text, sub } = getIconSize()

  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 ${className}`}>
      <svg width={icon} height={icon} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect width="64" height="64" rx="16" fill={light ? '#FFFFFF14' : '#0A2B4D'} />
        <path d="M32 12c6 6 6 12 0 18-6-6-6-12 0-18Z" fill="#E3AC3D" />
        <path d="M32 22c6 6 6 12 0 18-6-6-6-12 0-18Z" fill="#F0CE7C" />
        <path d="M32 32c6 6 6 12 0 18-6-6-6-12 0-18Z" fill="#E3AC3D" />
        <line x1="32" y1="10" x2="32" y2="54" stroke="#FDF8EC" strokeWidth="1.5" />
      </svg>
      <span
        className={`font-display ${text} font-bold tracking-tight leading-none ${
          light ? 'text-white' : 'text-indigo-950'
        }`}
      >
        SELMA
        <span className={`block ${sub} font-medium tracking-[0.25em] ${
          light ? 'text-white/70' : 'text-indigo-900/60'
        }`}>
          MOULINS SIDI TLIL
        </span>
      </span>
    </div>
  )
}