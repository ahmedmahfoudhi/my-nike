import {reviews} from './../constants'
import ReviewCard from '../components/ReviewCard'
const CustomerReviews = () => {
  return (
    <section id="customer-reviews" className="max-container">
      <h3 className="font-bold text-4xl 
      font-palanquin text-center">
        What our 
        <span className="text-coral-red"> Customers </span>
        Say ?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center ">
        Hear genuine stories from our satsified
        customers about their excpetional experiences
        with us.
      </p>
      <div className="mt-24 flex flex-1 
      justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews