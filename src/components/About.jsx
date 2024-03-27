import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>About</p>
            </div>
            <p className='text-xl mt-20'>Hi, I am Ghanashyam Thakur.</p>
            <br />
            <p className='text-xl'>I am a dynamic and skilled individual with a passion for software development and game development
            I possess a unique blend of technical expertise and passion for software development. 
            With a strong foundation in Java, Unity Engine, J2EE, C#, Hibernate, Spring Boot, HTML, CSS, JavaScript, ReactJS, NodeJS, MongoDB, AWS, and SQL,
             </p>
            <br /> 

            <p className='text-xl'>
            I am eager to join a forward-thinking company where I can continue to grow and refine my skills, 
            while making a tangible impact through the creation of high-quality software. 
            </p>
        </div>
    </div>
  )
}

export default About