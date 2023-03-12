import React, { useEffect, useState } from 'react'
import axios from 'axios'

import PlayerContent from './components/player/PlayerContent'

export default function PlayerLayout() {

  const [status, setStatus] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      getStatus()
        .then(() => {
          setStatus(true)
          console.log('true');
        })
        .catch(() => setStatus(false))
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
    {status !== false ? <PlayerContent/> : <p>PUBG server is not available now</p>}
    </div>
  )
}

function getStatus() {
  return axios
    .get('https://api.pubg.com/status')
    .then(res => {
      if (res.status === 200) return true
      return false
    })
    .catch(() => {
      return false
    })
}