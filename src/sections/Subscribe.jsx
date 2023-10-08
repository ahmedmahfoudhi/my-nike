import Button from './../components/Button'
const Subscribe = () => {
  return (
    <section id="contact-us" className="flex flex-col justify-center items-center max-container">
      <h3 className="font-bold text-center text-4xl 
      lg-max-w-md leading-[68px] font-palanquin">Sign Up for 
        <span className="text-coral-red"> Updates </span>
           
        & Newsletter
      </h3>
      <div className='lg:max-w-[50%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 
      sm:border sm:border-slate-gray rounded-full'>
        <input className="input" type="text" placeholder="subscribe@nike.com" />
        <div className='flex max-sm:justify-end 
        items-center max-sm:w-full'>
          <Button label="Sign Up" fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe