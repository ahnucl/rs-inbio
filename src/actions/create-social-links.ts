'use server'

import { db } from '@/lib/firebase'
import { auth } from 'firebase-admin'
import { Timestamp } from 'firebase-admin/firestore'

export async function createSocialLinks({
  profileId,
  github,
  linkedin,
  instagram,
  twitter,
}: {
  profileId: string
  github: string
  linkedin: string
  instagram: string
  twitter: string
}) {
  const session = auth()

  if (!session) return

  try {
    await db.collection('profiles').doc(profileId).update({
      socialMedias: {
        github,
        linkedin,
        instagram,
        twitter,
      },
      updatedAt: Timestamp.now().toMillis(),
    })
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}
