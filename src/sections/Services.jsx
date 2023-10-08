import {services} from './../constants'
import ServiceCard from '../components/ServiceCard'
const Services = () => {
  return (
    <section id="services" className="max-container flex justify-center
    flex-wrap gap-9">
      {services.map(service => (
        <ServiceCard {...service} key={service.label}/>
      ))}
    </section>
  )
}

export default Services