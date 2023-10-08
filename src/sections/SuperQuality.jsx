import Button from './../components/Button'
import {shoe8} from './../assets/images'
const SuperQuality = () => {
  return (
    <section id="about-us" 
    className="flex max-container 
    max-lg:flex-col w-full
    justify-between items-center gap-10">
      <div className="flex flex-1 flex-col items-start">
        <h2 className="font-bold
        font-palanquin capitalizelg lg:max-w-lg
        text-4xl">
          We Provide You <span className="text-coral-red">Super Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience.
          providing you with unmatched quality, innovation, 
          and a touch of elegance
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className='mt-11'>
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center 
      items-center 
      bg-card bg-center">
        <img className="object-contain" src={shoe8} alt="shoe8" width={570} height={522}/>
      </div>
    </section>
  )
}

export default SuperQuality