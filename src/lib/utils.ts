import imageCompression from 'browser-image-compression'
import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes))
}

export function sanitizeLink(link?: string) {
  if (!link) return ''

  return link
    .replace(/\s/g, '')
    .replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,ˆ.<>\/?]+/, '')
    .toLocaleLowerCase()
}

export async function compressFiles(files: File[]) {
  const compressPromises = files.map(async (file) => {
    try {
      return await compressImage(file)
    } catch (error) {
      console.error(error)
      return null
    }
  })

  return (await Promise.all(compressPromises)).filter((file) => file !== null)
}

export const compressImage = (file: File): Promise<File> => {
  return new Promise((resolve) => {
    imageCompression(file, {
      maxSizeMB: 0.2, // 200KB
      maxWidthOrHeight: 900,
      useWebWorker: true,
      fileType: 'image/png',
    }).then((compressedFile) => {
      resolve(compressedFile)
    })
  })
}

export function formatURL(url: string) {
  return url.startsWith('http') ? url : `https://${url}`
}
