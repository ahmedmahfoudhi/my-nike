import { copyrightSign } from '../assets/icons'
import { footerLinks, socialMedia } from '../constants'
import {footerLogo} from './../assets/images'
const Footer = () => {
  return (
    <footer id="footer" 
    className="max-container ">
      <div>
          <a href="/">
            <img src={footerLogo} alt=""/>
          </a>
        
        <p className='mt-6 text-base leading-7 font-montserrat sm:amx-w-sm text-white-400'>Get shoes ready for the new 
          term at your nearest Nike store. Find Your perfect Size in Store. Get Rewards
        </p>
        <div className='flex gap-5 mt-8 item-center'>
          {socialMedia.map((social, index) => (
            <div key={index} className='bg-white 
            rounded-full w-12 h-12 flex items-center justify-center'>

              <img 
              src={social.src} 
              alt={social.alt} 
              height={24} width={24} 
              />
            </div>

          ))}
        </div>
      </div>
      <div className='mt-5 flex flex-1 
      justify-between gap-20 lg:gap-10 flex-wrap'>
          {footerLinks.map((footerLink,index) => (
            <div key={index}>
              <h4 className='text-white 
              text-2xl font-montserrat 
              leading-normal font-medium mb-6'>{footerLink.title}</h4>
              <ul>
                {footerLink.links.map((link,index) => (
                  <li key={index} className='mt-3 text-white-400 font-montserrat text-base 
                  leading-normal hover:text-slate-gray'>
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
      <div className='mt-24 flex flex-1 text-white-400 justify-between max-sm:flex-col max-sm:items-center'>
          <div className='flex gap-2.5 items-center'>
            <img src={copyrightSign} 
            alt="copyright"
            height={20}
            width={20}
            className='rounded-full m-0' />
            <p>Copyrigth. All rights reserved.</p>
          </div>
          <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer