import { useCallback, useEffect, useState } from 'react'
import { fetchContent } from './api'
import { CONTENT_DEFAULTS } from './content-defaults'
import { useStoreSync } from './useStoreSync'

export function usePageContent(section) {
  const [content, setContent] = useState(CONTENT_DEFAULTS[section] || {})

  const load = useCallback(async () => {
    const { data, error } = await fetchContent(section)
    if (error) {
      console.error(`Gagal memuat konten halaman "${section}":`, error)
      return
    }
    setContent({ ...(CONTENT_DEFAULTS[section] || {}), ...(data?.values || {}) })
  }, [section])

  useEffect(() => {
    load()
  }, [load])
  useStoreSync(load)

  return content
}
