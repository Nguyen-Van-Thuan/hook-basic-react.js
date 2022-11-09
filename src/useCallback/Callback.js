import React, { useCallback, useState } from 'react'
import Content from './Content'

const Callback = () => {
  const [count, setCount] = useState(0)

  const handleCounter = useCallback(() => { //handle trực tiếp xử lý || on chờ đợi
    setCount(count => count + 1)
  }, [])
  return (
    <>
      <Content onCounter={handleCounter} />
      <h2>{count}</h2>
    </>

  )
}

export default Callback

// const a = () => {} => tham chiếu c

// const b = () => {} => tham chiếu d

// c === d: so sánh tham chiếu 