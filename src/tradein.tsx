import React from 'react'
import { useNavigate } from 'react-router-dom';

const Tradein = () => {

const navigate = useNavigate()

  return (
    <>
    <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime numquam asperiores, voluptatibus magni perspiciatis iusto. Ipsum culpa nobis voluptate voluptas similique quia officia molestias facere dolorum, cum dolore ad expedita.</div>
    <button className='bg-blue-400 text-white p-2 rounded-xl mt-4 m-6 hover:bg-blue-700' onClick={()=>navigate(-1)}>Back</button>
    </>
  )
}

export default Tradein