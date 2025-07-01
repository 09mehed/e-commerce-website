import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

const SocialLinks = ({className, iconStyle}: {className?:string; iconStyle?:string}) => {

    const linksData = [
        {icon: <FaGithub></FaGithub>, href: "https://github.com/09mehed"},
        {icon: <FaYoutube></FaYoutube>, href: "https://www.youtube.com/"},
        {icon: <FaFacebook></FaFacebook>, href: "https://www.facebook.com/fs.foysalst/"},
        {icon: <FaLinkedin></FaLinkedin>, href: "https://www.linkedin.com/in/md-foysal-al-mamun"},
        {icon: <FaEnvelope></FaEnvelope>, href: "https://www.youtube.com/"}
    ]

  return (
    <div className='text-xl pt-2 text-white/50 flex items-center gap-x-2'>
        {
            linksData?.map((item, index) => (
                <Link key={index} href={item?.href} target='blank' className={twMerge("border border-white/20 inline-flex p-2 rounded-full hover:text-[#0989ff] duration-300 cursor-pointer", iconStyle)}>
                    {item?.icon}
                </Link>
            ))
        }
    </div>
  )
}

export default SocialLinks