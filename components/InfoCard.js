import React from 'react'
import Image from 'next/image'
import {HeartIcon} from '@heroicons/react/outline'
import {StarIcon} from '@heroicons/react/solid'

const InfoCard = ({img,location,title,description,star,price,total}) => {
    return (
        <div className='flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-400 ease-out first:border-t'>
            <div className='relative h-32 w-40 md:h-52 md:w-80 flex-shrink-0'>
                <Image 
                    src={img}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-2xl'
                />
            </div>
            <div className='flex flex-col flex-grow pl-5'>
                <div className='flex justify-between'>
                    <p className='text-xs md:text-lg'>{location}</p>
                    <HeartIcon className='h-7 cursor-pointer ml-4'/>
                </div>
                <h4 className='text-sm md:text-2xl font-semibold'>{title}</h4>
                <div className='border-b w-10 pt-2'/>
                <p className='pt-2 text-xs md:text-sm text-gray-500 flex-grow'>{description}</p>
                <div className='flex justify-between items-end pt-2'>
                    <p className='flex items-center'>
                        <StarIcon className='h-4 text-red-400'/>
                        <span className='text-xs md:text-sm'>{star}</span>
                    </p>

                    <div>
                        <p className='text-sm  font-semibold pb-2 md:text-2xl'>{price}</p>
                        <p className='text-xs text-right font-light md:font-extralight md:text-lg'>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
