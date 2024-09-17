
import Link from 'next/link'
import React from 'react'



export default function Home() {
  return (
    <div className="h-[100vh] flex items-center justify-center bg-gray-100 translate-y-4 ">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to My Blog Website
        </h1>
        <p className="text-gray-600 text-lg">
          A space where I share my thoughts, ideas, and experiences.
        </p>

          <div className='translate-y-7'>
             <Link href='/blogs' className='bg-blue-500 p-4 text-white pl-10 pr-10 font-bold rounded hover:bg-blue-600 hover:pl-12 hover:pr-12 duration-700 group hover:font-extrabold '>Blogs content </Link>
          </div>
           
        
        
      </div>
    </div>
  )
}
