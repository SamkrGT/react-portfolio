import React from 'react'
import FullStackTodo from "../assets/project/FullStackTodo.png"
import Keeper from "../assets/project/Keeper.png"
import RetroArcade from "../assets/project/RetroArcade.png"
import TinDog from "../assets/project/TinDog.png"
import Platformer from "../assets/project/Platformer.png"
import BoxCutter from "../assets/project/BoxCutter.png"



const Projects = () => {

    const projects = [
        {
            id: 1,
            src: FullStackTodo,
            // demolink: "", // Not Deployed
            codelink: "https://github.com/SamkrGT/FullStack-Todo-RestAPI-Application"
        },
        {
            id: 2,
            src: Keeper,
            demolink: "https://5qb3b8.csb.app/",
            codelink: "https://codesandbox.io/s/5qb3b8?file=/src/index.js"
        },
        {
            id: 3,
            src: TinDog,
            demolink: "https://samkrgt.github.io/TinDog/",
            codelink: "https://github.com/SamkrGT/TinDog.git"
        },
        {
            id: 3,
            src: Platformer,
            demolink: "https://play.unity.com/mg/other/2dplatformer-58",
            // codelink: "https://github.com/SamkrGT/"
        },
        {
            id: 5,
            src: RetroArcade,
            demolink: "https://samkrgt.github.io/Retro-Arcade/",
            codelink: "https://github.com/SamkrGT/Retro-Arcade.git"
        },
        
        {
            id: 6,
            src: BoxCutter,
            demolink: "https://play.unity.com/mg/other/box-cutter-1",
            // codelink: "https://github.com/SamkrGT/"
        }

    ]

  return (
    <div name="projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen/2'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>

            

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                projects.map(({id, src, demolink, codelink}) =>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg '>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <a href={demolink} target='_blank' rel="noreferrer"><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' 
                        >Demo</button>
                        </a>
                        <a href={codelink} target='_blank' rel="noreferrer">
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </a>
                    </div>
                </div>
                ))
            }
                
            </div>
        </div>
    </div>
  )
}

export default Projects