import React from 'react'

const Test = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  )
}

export default Test