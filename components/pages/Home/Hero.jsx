import Image from 'next/image'
import React from 'react'
import picture from '../../../public/images/hero.png'

const Hero = () => {
    return (
        <div className='bg-secondary'>
            <div className="lg:flex">
                <div className="flex items-center justify-center w-full px-6 py-8 lg:w-1/2">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Full-Stack <span className="text-blue-600 dark:text-blue-400">Developer</span></h2>

                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">I am energetic to learn new skills and very
                            ﬂexible with innovative ideas. I am punctual and
                            can work hard under pressure.</p>

                        <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                            <a href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700">Hire me</a>
                            <a href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300">Download Resume</a>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full lg:w-1/2 lg:h-auto">
                    <Image src={picture} alt="Picture" className='w-[700px] h-[400px]' />
                </div>
            </div>
        </div>
    )
}

export default Hero