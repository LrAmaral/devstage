import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'
import React from 'react'

export default function Stats() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="bg-gray-700 relative border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          1042
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Acesso ao link
        </span>

        <MousePointerClick className="text-purple absolute left-3 top-3" />
      </div>

      <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          1042
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Incrições feitas
        </span>
        <BadgeCheck className="text-purple absolute left-3 top-3" />
      </div>

      <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          1042
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Posição no ranking
        </span>
        <Medal className="text-purple absolute left-3 top-3" />
      </div>
    </div>
  )
}
