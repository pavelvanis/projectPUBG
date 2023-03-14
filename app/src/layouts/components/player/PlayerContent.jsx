import React from 'react'

export default function PlayerContent({ status }) {

  return (
    <div>
      PlayerContent
      <br />
      {status !== null? status.toString() : null}
    </div>
  )
}
