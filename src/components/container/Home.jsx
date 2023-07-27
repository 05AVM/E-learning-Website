import React from 'react'
import hero3 from '../../assets/hero3.jpg'
import { logos } from '../../data'
const Home = () => {
  return (
    <div className='section'id="home">
    <div className='md:flex items-center justify-center'>
    <div>
      <div className='font-bold text-xs text-teal-400 mb-4'>your E-learning Partner
      </div>
      <div className='sm:text-[2.5 rem] text-[1.825rem] font-bold'>
      This is <br/> the new way <br/> to learn Online

      </div>
      <p className='text-sm leading-7 text-gray max-w-sm'>
        Lorem,ipsum dolor

      </p>
      <div className='mt-6'>
        <button className='px-6 py-3 font-bold text-white bg-teal-800 rounded-lg mr-4 text-sm'>GET STARTED</button>

        <button className='px-6 py-3 fonr-bold border border-solid border-gray rounded-lg text-sm'>DISCOVER</button>
      </div>
      <div className='md:w-[160%]'>
      <br></br>
      <img src={hero3} alt=""/>

      
      </div>
    
      
      </div>
    
    </div> 
    <div><br></br>
        <p className='text-center text-xl'> We Collaborate with{" "}
        <span className='text-Teal'>100+ leading Universities and Companies</span>
        </p>
        <div className='flex items-center justify-center flex-wrap gap-8 p-2'>
          {logos.map((logo,index)=>(
            <div className='w-28' key={index}>
              <img src={logo} alt="" className='w-full object-cover'/>
            </div>
          ))}
        </div>
    </div>
    </div>
  )
}

export default Home
