const ServiceCard = ({imgURL, subtext, label}) => {
    console.log(imgURL)
    return (
    <div className="flex-1 sm:w-[350px] w-full rounded-[20px] shadow-3xl px-10
    py-16">
        <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
            <img src={imgURL} alt="service icon" width={24} height={24} />
        </div>
        <h2 className="font-bold font-palanquin text-3xl leading-normal mt-5">{label}</h2>
        <p className="text-slate-gray mt-3 break-words text-lg leading-normal font-montserrat">{subtext}</p>
    </div>
  )
}

export default ServiceCard