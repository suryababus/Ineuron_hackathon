import React from 'react'

type Props = {}

function Loading({}: Props) {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        margin: 'auto',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
        <img src='https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif'/>
    </div>
  )
}

export default Loading
