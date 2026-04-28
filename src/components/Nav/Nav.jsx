import React from 'react'

const Nav = () => {
  return (
    <div className='z-999  w-full  px-[3vw] py-[2vw] pr-[4vw] fixed flex  justify-between text-[1.3vw] text-black'>
        <h4>Animatrix </h4>
        <div className='flex gap-[6vw]'>

          <div className='flex gap-[5vw]'>
          <a className='cursor-pointer'>Home </a>
          <a className='cursor-pointer'>Projects</a>
          <a className='cursor-pointer'>Services </a>
        </div>
        <div className='cursor-pointer'><i class="ri-menu-3-line"></i></div>
        

        </div>
    </div>
  )
}

export default Nav