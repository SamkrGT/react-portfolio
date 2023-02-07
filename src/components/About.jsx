import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>About</p>
            </div>
            <p className='text-xl mt-20'>Hi, I am Ghanashyam Thakur.</p>
            <br />
            <p className='text-xl'>I am a dynamic and skilled individual with a passion for software development
            I possess a unique blend of technical expertise and passion for software development. 
            With a strong foundation in Java, J2EE, HTML, CSS, JavaScript, ReactJS, NodeJS, MongoDB, and SQL,
             I am confident in my ability to bring value to any software development project. 
            </p>
            <br /> 

            <p className='text-xl'>
            I am eager to join a forward-thinking company where I can continue to grow and refine my skills, 
            while making a tangible impact through the creation of high-quality software. 
            I am a quick learner with a positive attitude, 
            and I am confident that my fresh perspective and eagerness 
            to succeed will make me a valuable asset to any team
            </p>
        </div>
    </div>
  )
}

export default About