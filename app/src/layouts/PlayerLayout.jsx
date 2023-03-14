import React, { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import { ToastPortal } from '../my_components'

import PlayerContent from './components/player/PlayerContent'


export default function PlayerLayout() {

  const load = useRef(false)
  const toastRef = useRef()
  const loadedToast = useRef(false)
  const [status, setStatus] = useState(null)

  const addToast = (toast) => {
    toastRef.current.addMessage(toast)
  }

  const handleStatus = async () => {
    const serverStatus = await getStatusSync();
    console.log(serverStatus);
    if (serverStatus === false && loadedToast.current === false) {
      addToast({
        mode: 'error',
        message: 'PUBG api is not working',
        canClose: true
      })
      loadedToast.current = true
    }
    else {
      loadedToast.current = false
    }
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
    <main>
      <PlayerContent status={status} />
      <ToastPortal ref={toastRef} />
    </main>
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
