import { useState, useEffect, useCallback, useRef } from 'react'
import { cachedGet, buildQueryStringFromParams, cacheSet, type VideoParams } from './useVideoDetail'
import { type Comment } from '@/types'
import { DEFAULT_TTL_MS, API_ENDPOINT, API_ACTIONS } from '@/const'

// Types
interface ApiResponse {
  success: boolean
  message?: string
  data?: any
}

interface CommentsPayload {
  comments?: Comment[]
  data?: Comment[]
  list?: Comment[]
  cursor?: number
  next_cursor?: number
  has_more?: boolean
  hasMore?: boolean
}

interface CachedCommentsData {
  comments: Comment[]
  cursor?: number
  has_more?: boolean
}

const commentsCache = new Map<string, { ts: number, data: CachedCommentsData }>()

export function useVideoComments(
  params: VideoParams | null,
  opts?: { initialCount?: number, initialCursor?: number }
): {
  comments: Comment[]
  loading: boolean
  error: string | null
  cursor: number | null
  hasMore: boolean
  loadMore: () => void
  reload: () => void
} {
  const initialCount = opts?.initialCount ?? 20
  const initialCursor = opts?.initialCursor ?? 0

  const [comments, setComments] = useState<Comment[]>([])
  const [cursor, setCursor] = useState<number | null>(null)
  const [hasMore, setHasMore] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const mountedRef = useRef(true)
  const fetchingRef = useRef(false)

  useEffect(() => {
    mountedRef.current = true
    return () => { mountedRef.current = false }
  }, [])

  // reset cuando cambia el video
  useEffect(() => {
    setComments([])
    setCursor(null)
    setHasMore(false)
    setError(null)
  }, [params])

  const loadpage = useCallback(async (nextCursor = 0, count = initialCount) => {
    if (params == null) {
      setError('Faltan parámetros (videoUrl o aweme_id)')
      return
    }
    const qs = buildQueryStringFromParams(params)
    if (qs.length === 0) {
      setError('Faltan parámetros (videoUrl o aweme_id)')
      return
    }

    const cacheKey = `comments:${qs}:cursor:${nextCursor}:count:${count}`
    const cached = cachedGet(commentsCache, cacheKey, DEFAULT_TTL_MS)
    if (cached != null) {
      setComments(prev => (nextCursor === 0 ? cached.comments : [...prev, ...cached.comments]))
      setCursor(cached.cursor ?? null)
      setHasMore(Boolean(cached.has_more))
      return
    }

    if (fetchingRef.current) return
    fetchingRef.current = true
    setLoading(true)
    setError(null)

    const controller = new AbortController()
    try {
      const res = await fetch(
        `${API_ENDPOINT}?action=${API_ACTIONS.COMMENTS}&${qs}&cursor=${nextCursor}&count=${count}`,
        { signal: controller.signal }
      )

      if (!res.ok) {
        throw new Error(`HTTP ${res.status} - ${res.statusText}`)
      }

      const json: ApiResponse = await res.json()

      if (!json.success) {
        throw new Error(json.message ?? 'Error desconocido')
      }

      const payload: CommentsPayload = json.data ?? json

      // Extraemos lista de comentarios y campos de paginación
      const serverComments: Comment[] = payload.comments ?? payload.data ?? payload.list ?? []
      const serverCursor: number | undefined = payload.cursor ?? payload.next_cursor
      const serverHasMore: boolean = payload.has_more ?? payload.hasMore ?? serverComments.length >= count

      // Guardamos en caché y actualizamos el estado
      cacheSet(commentsCache, cacheKey, {
        comments: serverComments,
        cursor: serverCursor,
        has_more: serverHasMore
      })

      setComments(prev => (nextCursor === 0 ? serverComments : [...prev, ...serverComments]))
      setCursor(serverCursor ?? null)
      setHasMore(serverHasMore)
    } catch (err) {
      if (!mountedRef.current) return

      const error = err as Error
      if (error.name === 'AbortError') return

      setError(error.message ?? String(err))
    } finally {
      if (mountedRef.current) {
        setLoading(false)
      }
      fetchingRef.current = false
    }
  }, [params, initialCount])

  // carga inicial (al cambiar el video)
  useEffect(() => {
    if (params == null) return
    void loadpage(initialCursor, initialCount)
  }, [params, initialCursor, initialCount, loadpage])

  const loadMore = useCallback(() => {
    if (!hasMore) return
    const next = cursor ?? 0
    void loadpage(next, initialCount)
  }, [hasMore, cursor, initialCount, loadpage])

  return { comments, loading, error, cursor, hasMore, loadMore, reload: () => { void loadpage(0, initialCount) } }
}
