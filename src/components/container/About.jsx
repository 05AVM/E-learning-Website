import React from 'react'
import about from "../../assets/about.jpg"
const About = () => {
  return (
    <div className='section'id="about">
    <div className='grid md:grid-cols-2 gap-8 place-items-center'>
      <div className='border-[3px] border-solid border-Teal rounded-lg'>
      
        <img src={about} class='w-30 h-45' alt=""/>
      </div>
      <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-5'>
        We Provide the <br/> best <span className='text-Teal'>Online Courses</span><br/>
        <p className='text-sm text-gray leading-7 mb-4'>At SkillX, we believe that learning should be accessible to everyone, anytime, and anywhere. Our mission is to empower individuals with the knowledge and skills they need to succeed in their personal and professional lives.<br/><br/>
        
        Join our community of learners and unlock your full potential. Start your learning adventure today with SkillX E-Learning!<br/><br/>

Let's learn together!</p>
<button className='py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold   transition-colors duration-300 hover:bg-yellow-500 hover:text-teal-500
          transform hover:border-gray'>Know More</button>
      </div>
      </div>
    </div>
      
    
  )
}

export default About
