import React from 'react'

const Content = ({ onCounter }) => {

  console.log('re-render');

  return (
    <>
      <h1>Hello</h1>
      <button onClick={onCounter}>BUY PRODUCT</button>
    </>
  )
}

export default React.memo(Content)
