const Button = ({fullWidth, label, iconUrl, backgroundColor="bg-coral-red", textColor="text-primary", borderColor="border-coral-red"}) => {

  return (
    <button 
    className={`flex 
    justify-center items-center 
    gap-2 px-7 py-4 border 
    font-montserrat text-lg 
    ${fullWidth && 'w-full'}
    leading-none ${backgroundColor}
    rounded-full ${textColor} ${borderColor}`} 
    >
        {label}
        {iconUrl && <img src={iconUrl} alt="arrow right icon" 
        className="ml-2 rounded-full w-5 h-5" />}
    </button>
  )
}

export default Button