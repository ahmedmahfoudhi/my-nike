import {headerLogo} from './../assets/images';
import {hamburger, close} from './../assets/icons';
import { navLinks } from '../constants';
import { useState } from 'react';
const Nav = () => {
    const [openModal, setopenModal] = useState(false)
    const changeOpenModal = () => {
        console.log('clicked')
        console.log(openModal)
        setopenModal(oldState => {
            setopenModal(!oldState)
        })
    }
  return (
    <header className={`padding-x py-8 absolute z-10 w-full`}>
        <nav className={`flex justify-between  items-center max-container `}>
            <a href="/">
                <img src={headerLogo} alt="Logo" width={130} height={29} />
            </a>
            <ul className={`flex-1 flex justify-center 
            items-center gap-16 max-lg:flex-col max-lg:items-start
            max-lg:gap-9 max-lg:absolute max-lg:mt-4 max-lg:py-5
            ${!openModal ? 'max-lg:top-[-400%]' :'max-lg:top-[90%]'}
            max-lg:bg-white max-lg:w-[90%] max-lg:z-10 duration-500
            `}>
                {navLinks.map((navLink,index) => (
                    <li key={index}>
                        <a href={navLink.href} 
                        className='font-montserrat 
                        leading-normal text-lg 
                        text-slate-gray hover:text-coral-red'>{navLink.label}</a>
                    </li>
                ))}
            </ul>
            <div>
                <img src={openModal ? close : hamburger} alt={`${openModal ? 'close':'hamburger'}`} width={25} height={25} className='hidden max-lg:block max-lg:self-end cursor-pointer' onClick={changeOpenModal}/>
            </div>
            
        </nav>
        
    </header>
  )
}

export default Nav