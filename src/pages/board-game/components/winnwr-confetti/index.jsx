// src/common/components/board-game/components/winner-confetti/src/WinnerConfetti.jsx
import React, {useState, useEffect} from 'react'
import Confetti from 'react-confetti'

export default function WinnerConfetti() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  )
  const height = 327

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div
      style={{
        width: '100%',

        overflow: 'hidden',
      }}
    >
      <Confetti
        width={width}
        height={height}
        style={{position: 'absolute', top: 0, left: 0}}
      />
    </div>
  )
}
