import { useState, useEffect } from 'react'
import { ProgressBar } from 'baseui/progress-bar'

const EXPECTED_TIME_SECONDS = 20

// 97 to stop progress bar if taking longer than EXPECTED_TIME_SECONDS
const multiplier = 97 / EXPECTED_TIME_SECONDS

export default function SearchLoading() {
  const [startTs] = useState(() => Date.now())
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      const currentTs = Date.now()
      const diffSeconds = (currentTs - startTs) / 1000
      const value = diffSeconds * multiplier
      setProgress(value)
    }, 200)

    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <div>
      <span>Pouring a drink... It can take {EXPECTED_TIME_SECONDS} seconds</span>
      <ProgressBar value={progress} size="medium" />
    </div>
  )
}
