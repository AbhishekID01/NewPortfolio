import React from 'react'
import arrowIcon from '../assets/icons/arrow-up-right.svg'

const footerLinks = [
    {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/abhishek-i-d-7a8020258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
        title: 'Instagram',
        href: 'https://www.instagram.com/abhishek_deshbhandari_/',
    },
    {
        title: 'Twitter',
        href: '#',
    },
]

const FooterSection = () => {
  return (
    <footer className='overflow-x-clip'>
        <div className='container'>
            <div className='border-t border-black/30 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-5'>
                <div className='text-black'>&copy; 2025</div>
                <nav className='flex  flex-col md:flex-row items-center gap-5'>
                    {footerLinks.map(link => (
                        <a href={link.href} key={link.title} className='inline-flex items-center gap-1.5'>
                            <span className='font-semibold text-black'>{link.title}</span>
                            <img src={arrowIcon} alt="" className='size-4' />
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    </footer>
  )
}

export default FooterSection