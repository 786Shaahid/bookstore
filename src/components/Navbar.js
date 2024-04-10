import React from 'react'

function Navbar() {
  return (
    <nav className='w-full  sticky top-0  bg-slate-800 border-b-gray-500 border-b-2 shadow-xl  h-20 md:h-30 flex  justify-start   items-center md:text-center px-4 py-4' >
      <img src='https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?auto=compress&cs=tinysrgb&w=600'
       alt='pic'
       className='w-16 h-16  rounded-full border-2 border-gray-400  '
      />
      <div className='w-full  text-start md:text-center'>
     <span className="text-3xl text-white font-bold ml-5">
      Book Store
    </span>
    </div>
    </nav>
  )
}

export default Navbar;