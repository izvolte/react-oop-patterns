import { useState } from 'react'

export const useIterator = <T>(data: T[]) => {
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex(prevIndex => (prevIndex + 1) % data.length)
  }

  const previous = () => {
    setIndex(prevIndex => (prevIndex - 1 + data.length) % data.length)
  }

  const current = data[index]

  return { current, next, previous, index }
}
