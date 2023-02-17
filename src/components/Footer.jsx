import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
// import {BsFillPersonLinesFill} from "react-icons/bs"

const Footer = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/ghanashyam-thakur-7b95b31a9/',
            style: 'text-blue-600'
        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/SamkrGT',
        },
        {
            id: 3,
            child: (
                <>
                    <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:ghanashyamkr1997@gmail.com',
            style: 'text-red-600'
        },
        // {
        //     id: 4,
        //     child: (
        //         <>
        //             Resume <BsFillPersonLinesFill size={30}/>
        //         </>
        //     ),
        //     href: '/GTResume.pdf',
        //     download: false,
        // },
    ]
  return (
    <div className='sm:hidden bg-gray-200 '>
        <div className='flex justify-center'>
        
        {links.map(({id, child, href, style, download}) =>(
            <li key={id} className={`flex justify-between items-center w-10 h-14  ml-[10px]`}>
                <a href={href} 
                className={`flex justify-between items-center w-full ${style}`}
                download={download}
                target='_blank'
                rel="noreferrer"
                >
                {child}
                </a>
            </li>
        ))}
        
        </div>
    </div>
  )
}

export default Footer