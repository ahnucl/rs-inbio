'use client'

import { useState } from 'react'
import { Button } from './button'
import { TextInput } from './text-input'
import { signIn } from 'next-auth/react'

export function CreateNow() {
  const [link, setLink] = useState('')

  return (
    <div className="flex items-center gap-2 w-full mt-[10vh]">
      <span className="text-white text-xl">projectinbio.com/</span>
      <TextInput
        placeholder="Seu link"
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <Button
        variant="primary"
        onClick={() => {
          signIn('google', {
            redirectTo: `/criar?link=${link}`,
          })
        }}
      >
        Criar agora
      </Button>
    </div>
  )
}
