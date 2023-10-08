import React from 'react'
import ErrorImage from '../../assets/404-error-not-found-page-lost.png'
const Error = () => {
  return (
    // for some unknown routed this error page will show up. 
    <center>
      <img src={ErrorImage} height={700} width='auto' alt="error" />
    </center>
  )
}

export default Error