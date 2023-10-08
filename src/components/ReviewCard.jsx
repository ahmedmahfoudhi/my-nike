import {star} from './../assets/icons'
const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center gap-4 items-center flex-col">
       <img src={imgURL} alt="customer" height={120} width={120} 
       className='rounded-full object-cover'/>
       <p className="mt-6 max-w-sm info-text text-center">
        {feedback}
       </p>
       <div className="flex gap-x-2.5 justify-self-center">
        <img src={star} alt="start" height={24} width={24} />
        <span className='text-slate-gray text-xl font-montserrat'>({rating})</span>
       </div>
       <h3 className="font-bold mt-1 text-center 
       text-3xl 
       font-palanquin">{customerName}</h3> 

    </div>
  )
}

export default ReviewCard