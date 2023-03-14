
import React from 'react'

export default function Search() {

  const submitPlayer = () => {
    console.log('object');
  }

  return (
    <section className='search'>
      <form action={submitPlayer}>
        <input type="text" placeholder='Search player' />
      </form>
    </section>
  )
}



