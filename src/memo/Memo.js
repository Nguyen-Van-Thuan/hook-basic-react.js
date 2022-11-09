import React, { useState } from 'react'
import Content from './Content'

const Memo = () => {
  const [count, setCount] = useState(0)

  const handleCounter = () => {
    setCount(count + 1)
  }
  return (
    <>
      <Content />
      <h2>{count}</h2>
      <button onClick={handleCounter}>BUY PRODUCT</button>
    </>

  )
}

export default Memo