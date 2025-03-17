import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

import { ReactNode } from 'react'
import { getProfileId } from '../server/get-profile-data'

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await auth()

  if (!session) redirect('/')

  const profileId = await getProfileId(session.user?.id as string)

  if (profileId) redirect(`/${profileId}`)

  return <>{children}</>
}
