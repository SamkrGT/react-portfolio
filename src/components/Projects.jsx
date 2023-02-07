import React from 'react'
import Beyondtech from "../assets/project/Beyondtech.png"
import Keeper from "../assets/project/Keeper.png"
import RetroArcade from "../assets/project/RetroArcade.png"
import TinDog from "../assets/project/TinDog.png"
import ToDoList from "../assets/project/ToDoList.png"
import usermanagementsystem from "../assets/project/usermanagementsystem.png"



const Projects = () => {

    const projects = [
        {
            id: 1,
            src: Beyondtech,
            demolink: "https://samkrgt.github.io/Beyondtech/",
            codelink: "https://github.com/SamkrGT/Beyondtech.git"
        },
        {
            id: 2,
            src: Keeper,
            demolink: "https://5qb3b8.csb.app/",
            codelink: "https://codesandbox.io/s/5qb3b8?file=/src/index.js"
        },
        {
            id: 3,
            src: usermanagementsystem,
            // demolink: "", // Not yet Deployed
            codelink: "https://github.com/SamkrGT/UserManagementSystem"
        },
        {
            id: 4,
            src: RetroArcade,
            demolink: "https://samkrgt.github.io/Retro-Arcade/",
            codelink: "https://github.com/SamkrGT/Retro-Arcade.git"
        },
        {
            id: 5,
            src: TinDog,
            demolink: "https://samkrgt.github.io/TinDog/",
            codelink: "https://github.com/SamkrGT/TinDog.git"
        },
        {
            id: 6,
            src: ToDoList,
            demolink: "https://samkrgt.github.io/To-Do-List/",
            codelink: "https://github.com/SamkrGT/To-Do-List"
        }

    ]

  return (
    <div name="projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
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