import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import { shoes, statistics } from "../constants"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"
const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  return (
    <section id="home" 
    className="w-full p-2 flex xl:flex-row 
    flex-col justify-center
    min-h-screen max-container gap-10">
      <div className="relative xl:w-2/5 z-0 
      flex flex-col justify-center items-start w-full 
      max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer collections</p>
        <h1 
        className="mt-10 font-palanquin 
        text-8xl max-sm:text-[72px] 
        max-sm:leading-[82px] font-bold">
          <span 
          className="xl:bg-white xl:whitespace-nowrap
          relative z-10 pr-10">The New Arriaval</span>
          <br />
          <span className="text-coral-red inline-block mt-3"> Nike </span> Shoes
        </h1>
        <p 
        className="text-slate-gray font-montserrat text-lg leading-8 mt-6 mb-14">
          Discover stylish Nike arriavals, quality comfort, and innovation for your active life.</p>
        <Button label="Shop now" iconUrl={arrowRight}></Button>
        <div 
        className="flex justify-start 
        items-start flex-wrap w-full 
        mt-20 gap-16">
            {statistics.map((stat,index) => (
              <div key={index}>
                <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
              </div>
            ))}
        </div>
      </div>
      <div 
      className="relative flex xl:min-h-screen
      flex-1 items-center w-full
      justify-center max-xl:py-40
      bg-primary bg-hero bg-cover bg-no-repeat bg-center">
        <img src={bigShoeImg} alt="show collection" 
        width={610} height={500} 
        className="object-contain relative"/>
        <div className="flex sm:gap-6 gap-4 
        absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 z-11">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard imgUrl={shoe} 
              changeBigShoeImage={(shoe) => {setbigShoeImg(shoe)}}
              bigShoeImg={bigShoeImg}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero