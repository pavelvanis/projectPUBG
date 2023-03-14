import React from 'react'
import Toast from '../my_components/toast/toast'

export default function MainLayout() {

  const createToast = () => {
    new Toast({
      text: "Some text",
      autoClose: false,
      position: Math.random() > .5 ? 'top-left' : 'top-right'
    })
  }

  console.count('main loaded');

  return (
    <div>
      Mainlayout
    </div>
  )
}
