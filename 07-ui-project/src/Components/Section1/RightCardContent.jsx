import React from 'react'

function RightCardContent(props) {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id}</h2>
            <div>
                <p className='text-lg leading-normal text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reprehenderit ad distinctio facilis quaerat ipsa.</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-2 rounded-full text-lg'>{props.tag}</button>
                    <button className=' text-white font-medium px-4 py-2 rounded-full text-lg'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>

        </div>
  )
}

export default RightCardContent