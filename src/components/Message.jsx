import React from 'react'

const Message = ({ children, typeM }) => {
  return (
    //there are some type of message (error, message)
    //USE ` !!!! not ' or "
    <div className={`alerta ${typeM}`}>
      {children}
    </div>
  )
}

export default Message
