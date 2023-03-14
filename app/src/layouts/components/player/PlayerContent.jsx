import React, { createContext, useState } from 'react'

import Search from './search/Search'

export const PlayerContext = createContext()

export default function PlayerContent({ status }) {

  const [player, setPlayer] = useState()

  return (
    <PlayerContext.Provider>
      <Search />
      <br />
      {status !== null ? status.toString() : null}
    </PlayerContext.Provider>
  )
}
