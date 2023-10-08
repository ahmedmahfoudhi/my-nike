import Button from '../components/Button'
import {offer} from './../assets/images'
import {arrowRight} from './../assets/icons'
const SpecialOffer = () => {
  return (
    <section id="special-offer"
    className="max-container flex flex-col
    justify-center max-lg:items-center xl:flex-row-reverse max-xl:gap-10">
      <div className="flex-1">
        <h2 className="font-palanquin font-bold 
        text-4xl"><span className="text-coral-red xl:max-w-lg">Special </span> Offer</h2>
          <p className='mt-4 info-text '>
            Embark on a shopping jouney that redefined your experience with unbeatable deals. From premier selections
            to incredible savings, we offer unparalleled value that sets us apart.
          </p>
          <p className='mt-6 info-text xl:max-w-lg'>Navigate a realm of possibilites
            designed to fulfill your unique desires, surpassing the latest
            expectations. Your journey with us is nothin short of exceptional.
          </p>
        <div className='mt-11 flex gap-4 flex-wrap'>
          <Button label="Shop now" iconUrl={arrowRight}/>
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
      <div>
        <img src={offer} alt="" width={773} height={687}
        className='object-contain w-full' />
      </div>
    </section>
  )
}

export default SpecialOffer