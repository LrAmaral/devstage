import Image from 'next/image'

import cooper from '../../assets/medal-cooper.svg'
import gold from '../../assets/medal-gold.svg'
import silver from '../../assets/medal-silver.svg'

export default function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="rounded-xl gap-2 relative bg-gray-700 border border-gray-600 p-6 flex flex-col">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Lucas Amaral
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>
          <Image
            src={gold}
            alt="cooper"
            className="rounded-full absolute top-0 right-8"
          />
        </div>
        <div className="rounded-xl gap-2 relative bg-gray-700 border border-gray-600 p-6 flex flex-col">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Diego Fernandes
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>
          <Image
            src={silver}
            alt="cooper"
            className="rounded-full absolute top-0 right-8"
          />
        </div>
        <div className="rounded-xl gap-2 relative bg-gray-700 border border-gray-600 p-6 flex flex-col">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | Mayki Brito
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>
          <Image
            src={cooper}
            alt="cooper"
            className="rounded-full absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  )
}
