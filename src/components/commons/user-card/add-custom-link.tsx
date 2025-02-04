'use client'

import { addCustomLinks } from '@/actions/add-custom-links'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { TextInput } from '@/components/ui/text-input'
import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { startTransition, useState } from 'react'

export function AddCustomLink() {
  const router = useRouter()
  const { profileId } = useParams()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSavingCustomLinks, setIsSavingCustomLinks] = useState(false)

  const [link1, setLink1] = useState({
    title: '',
    url: '',
  })
  const [link2, setLink2] = useState({
    title: '',
    url: '',
  })
  const [link3, setLink3] = useState({
    title: '',
    url: '',
  })

  async function handleSaveCustomLinks() {
    setIsSavingCustomLinks(true)

    if (!profileId) return

    await addCustomLinks({
      profileId: profileId as string,
      link1,
      link2,
      link3,
    })

    startTransition(() => {
      setIsModalOpen(false)
      setIsSavingCustomLinks(false)
      router.refresh()
    })
  }

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]"
      >
        <Plus />
      </button>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <div className="bg-background-primary p-8 rounded-[20px] flex flex-col justify-between gap-10 w-[514px]">
          <p className="text-white font-bold text-xl">
            Adicionar links personalizados
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex flex-col w-full">
                <p>Título do link</p>
                <TextInput
                  placeholder="Digite o título"
                  value={link1.title}
                  onChange={(e) =>
                    setLink1({ ...link1, title: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col w-full">
                <p className="font-bold">Link</p>
                <TextInput
                  placeholder="Inserir URL"
                  value={link1.url}
                  onChange={(e) => setLink1({ ...link1, url: e.target.value })}
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex flex-col w-full">
                <p>Título do link</p>
                <TextInput
                  placeholder="Digite o título"
                  value={link2.title}
                  onChange={(e) =>
                    setLink2({ ...link2, title: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col w-full">
                <p className="font-bold">Link</p>
                <TextInput
                  placeholder="Inserir URL"
                  value={link2.url}
                  onChange={(e) => setLink2({ ...link2, url: e.target.value })}
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex flex-col w-full">
                <p>Título do link</p>
                <TextInput
                  placeholder="Digite o título"
                  value={link3.title}
                  onChange={(e) =>
                    setLink3({ ...link3, title: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col w-full">
                <p className="font-bold">Link</p>
                <TextInput
                  placeholder="Inserir URL"
                  value={link3.url}
                  onChange={(e) => setLink3({ ...link3, url: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-end">
            <button
              onClick={() => setIsModalOpen(false)}
              className="font-bold text-white"
            >
              Voltar
            </button>
            <Button
              onClick={handleSaveCustomLinks}
              disabled={isSavingCustomLinks}
            >
              Salvar
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
