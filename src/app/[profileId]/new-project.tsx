'use client'

import { Modal } from '@/components/ui/modal'
import { Plus } from 'lucide-react'
import { useState } from 'react'

interface NewProjectProps {
  profileId: string
}

export function NewProject({ profileId }: NewProjectProps) {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenModal() {
    setIsOpen(true)
  }

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="w-[340px] h-[132px] rounded-[20px] bg-background-secondary flex items-center gap-2 justify-center hover:border border-dashed border-border-secondary"
      >
        <Plus className="size-10 text-accent-green" />
        <span>Novo projeto</span>
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        Hello {profileId}
      </Modal>
    </>
  )
}
