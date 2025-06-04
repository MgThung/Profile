import { assets } from '@/assets/assets'
import React from 'react'
import Image from "next/image";
const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt="" className='w-36 mx-auto mb-2' />
        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={assets.mail_icon} alt='' className='w-6 '/>
          thunghike7@gmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-evenly border
      border-gray-400 mx-[-10%] mt-12 py-6 ' >
        <p>@ 2025 Thung Htike Htoo. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li>
            <a target='_blank' href="https://github.com/MgThung">GitHub</a>
          </li>
            <li>
            <a target='_blank' href="https://www.linkedin.com/in/thung-htike-htoo-87007b262/">LinkIn</a>
          </li>
            <li>
            <a target='_blank' href="https://x.com/htike62582">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
