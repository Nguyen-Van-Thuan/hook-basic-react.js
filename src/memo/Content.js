import React from 'react'

const Content = () => {

  console.log('re-render');

  return (
    <h1>Hello</h1>
  )
}

export default React.memo(Content)

// memo
// Nhận 1 component
// Check props của components sau mỗi lần render có bị thay đổi?
