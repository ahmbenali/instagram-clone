'use client'

import { faker } from '@faker-js/faker'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

function Suggestions() {
  const [suggestions, setSuggestions] = useState<Profile[]>([])

  const { data: session } = useSession()

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => {
      const {
        string: { uuid },
        internet: { email, password, userName },
        image: { avatar },
        date: { birthdate, past },
        company,
      } = faker

      return {
        // ...faker.helpers.contextualCard(),
        userId: uuid(),
        username: userName(),
        img: avatar(),
        email: email(),
        password: password(),
        birthdate: birthdate().toLocaleDateString(),
        registeredAt: past().toLocaleDateString(),
        company: company.name(),
      }
    })

    setSuggestions(suggestions)
    // console.log('suggestions: ', suggestions)
  }, [])

  if (session)
    return (
      <div className="mt-4 ml-10">
        <div className="flex justify-between text-sm mb-5">
          <h3 className="text-sm font-bold text-gray-400">
            Suggestions for you
          </h3>
          <button className="text-gray-600 font-semibold">See All</button>
        </div>

        {suggestions.map(({ userId, img, username, company }) => (
          <div
            key={userId}
            className="flex items-center justify-between mt-3"
          >
            <Image
              src={img}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-10 h-10 rounded-full border p-1 cursor-pointer transform transition-all duration-150 ease-out hover:scale-110"
            />
            <div className="flex-1 ml-4">
              <h2 className="font-semibold text-sm">{username}</h2>
              <h3 className="text-xs text-gray-400">Works at {company}</h3>
            </div>
            <button className="text-blue-400 text-xs font-bold">Follow</button>
          </div>
        ))}
      </div>
    )
}

export default Suggestions
