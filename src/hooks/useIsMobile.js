import { useState, useEffect } from 'react'

const useIsMobile = () => {
  const initialWidth = typeof window !== 'undefined' ? window.innerWidth : 0

  const [width, setWidth] = useState(initialWidth)

  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const isMobile = width <= 480

  return [isMobile]
}

export default useIsMobile
