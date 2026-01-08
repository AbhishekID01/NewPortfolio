import React from 'react'
import { twMerge } from 'tailwind-merge'

const Card = ({className, children}) => {
  return (
    <div className={twMerge("bg-white text-black rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-black/20 ",className)}>
        <div className='absolute inset-0 -z-10 opacity-5 '>
        </div>
        {children}
    </div>
  )
}

export default Card 