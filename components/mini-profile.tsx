'use client'

import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

function MiniProfile() {
  const { data: session } = useSession()

  if (session)
    return (
      <div className="flex items-center justify-between mt-14 ml-10">
        <Image
          src={session?.user?.image!}
          alt={session?.user?.name!}
          width={0}
          height={0}
          sizes="100vw"
          className="w-16 h-16 rounded-full object-cover border p-1 cursor-pointer transform transition-all duration-150 ease-out hover:scale-110"
        />

        <div className="flex-1 mx-4">
          <h2 className="font-bold">ahmedbenali</h2>
          <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
        </div>

        <button
          className="text-sm font-semibold text-blue-400"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    )
}

export default MiniProfile
