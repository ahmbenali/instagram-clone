'use client'

import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'
import Story from './story'

function Stories() {
  const [suggestions, setSuggestions] = useState<Profile[]>([])

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => {
      const {
        string: { uuid },
        internet: { email, password, userName },
        image: { avatar },
        date: { birthdate, past },
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
      }
    })

    setSuggestions(suggestions)
    console.log('suggestions: ', suggestions)
  }, [])

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black ">
      {suggestions.map(({ userId, img, username }) => (
        <Story
          key={userId}
          img={img}
          username={username}
        />
      ))}
    </div>
  )
}

export default Stories
