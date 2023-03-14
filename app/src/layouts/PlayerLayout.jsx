import React, { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import { ToastPortal } from '../my_components'

import PlayerContent from './components/player/PlayerContent'


export default function PlayerLayout() {

  const load = useRef(false)
  const toastRef = useRef()
  const [status, setStatus] = useState(null)

  const addToast = (mode, text) => {
    toastRef.current.addMessage({ mode: 'error', message: 'text' })
  }

  const handleStatus = async () => {
    const serverStatus = await getStatusSync();
    console.log(serverStatus);
    addToast('error', 'Some Toast')
    setStatus(serverStatus);
  }

  useEffect(() => {
    if (load.current === true) handleStatus();

    const interval = setInterval(() => {
      handleStatus()
    }, 7000)

    return () => {
      clearInterval(interval)
      load.current = true
    }
  }, [])


  return (
    <div>
      <PlayerContent status={status} />
      <ToastPortal ref={toastRef} addToast={addToast} />
    </div>
  )
}

async function getStatusSync() {
  try {
    const res = await axios.get('https://api.pubg.com/status');
    return res.status === 200;
  } catch (err) {
    return false;
  }
}
