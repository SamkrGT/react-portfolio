import React from 'react'

const Education = () => {

    const details = [
        
        {
            id: 1,
            inst: 'Jspiders Java Training and Developement Center',
            date: 'Oct 2022 - Present',
            marks: 'Java FullStack Developer'
        },
        {
            id: 2,
            inst: 'Dr B C Roy Engineering College, Durgapur',
            date: '2016-2020',
            marks: 'GPA: 7.15'
        },
        {
            id: 3,
            inst: 'JJI, Asansol',
            date: '2013-2015',
            marks: 'Percent: 59'
        },
        {
            id: 4,
            inst: 'Raniganj Marwari Sanatan Vidiyalaya',
            date: '2013',
            marks: 'Percent: 58'
        }
    ]

  return (
    <div>
        <div name='education' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col  justify-center max-w-screen-lg mx-auto h-full'>
            {/* <table className=''>
                <tr className=''>
                    <td className=''>Dr B C Roy Engineering College, Durgapur</td>
                    <td>JJI, Asansol</td>
                    <td>Raniganj Marwari Sanatan Vidyalaya</td>
                </tr>
                <tr>
                    <td>2016-2020</td>
                    <td>2013-2015</td>
                    <td>2013</td>
                </tr>
                <tr>
                    <td>GPA: 7.15</td>
                    <td>Percentage: 59.6</td>
                    <td>Percentage: 58</td>
                </tr>
            </table> */}

            <div className='w-full grid grid-cols-none sm:grid-cols-4 gap-12 gap-x-10 text-center py-0 px-0 sm:px-0 '>
                
                {
                    details.map(({id, inst, date, marks}) => (
                        <div key={id} className= 'shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                    <p className='mt-0 text-left text-lg text-red-400'>{inst}</p>
                    <p className='mt-0 text-left'>{date}</p>
                    <p className='mt-0 text-left'>{marks}</p>
                </div>
                    ))
                }
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Education