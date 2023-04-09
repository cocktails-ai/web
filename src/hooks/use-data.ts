// useData.ts
import { useState, useCallback, useRef, useEffect } from 'react'

type Props<T> = {
  data: T | null
  loading: boolean
  error: Error | null
  call: () => void
}

export default function useData<T>(url: string, body: object, deps: any[]): Props<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)
  const abortControllerRef = useRef<AbortController | null>(null)

  const fetchData = useCallback(async () => {
    if (abortControllerRef.current) {
      // Abort the previous request if it's still running
      abortControllerRef.current.abort()
    }

    setLoading(true)
    // TODO keep old error until request done
    setError(null)

    const abortController = new AbortController()
    abortControllerRef.current = abortController
    const { signal } = abortController

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
        signal,
      })

      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }

      const data = await response.json()
      setData(data)
      // TODO better type
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.log('Fetch aborted')
      } else {
        setError(error)
      }
    } finally {
      setLoading(false)
    }
  }, [url, body])

  useEffect(() => {
    setData(null)
    setError(null)
  }, [...deps, URL, body])

  return { data, loading, error, call: fetchData }
}
