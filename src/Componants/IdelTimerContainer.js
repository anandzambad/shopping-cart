import React,{useRef} from 'react'
import {IdleTimerProvider} from 'react-idle-timer'

const IdelTimerContainer = () => {
    const idleTimerRef= useRef(null)
    const onIdle =()=>{
        console.log('User is idle')
    }
  return (
    <div>
        <IdleTimerProvider ref={idleTimerRef} timeout={5 * 1000} onIdle={onIdle} ></IdleTimerProvider>
    </div>
  )
}

export default IdelTimerContainer