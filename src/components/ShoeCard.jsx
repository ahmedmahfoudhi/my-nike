const ShoeCard = ({imgUrl, changeBigShoeImage, bigShoeImg}) => {
  const handleClick = () => {
    if(bigShoeImg != imgUrl.bigShoe){
      console.log(imgUrl.bigShoe)
      changeBigShoeImage(imgUrl.bigShoe)
    }
  }
  return (
    <div 
    className={`bg-cover bg-center bg-primary rounded-xl border-2
    bg-hero ${bigShoeImg === imgUrl.bigShoe ? 'border-coral-red': 'border-transparent'}
    cursor-pointer max-sm:flex-1`} onClick={handleClick}>
      <div 
      className="flex justify-center items-center 
      bg-card bg-center bg-cover 
      sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img 
        className="object-contain" 
        width={127} height={103} src={imgUrl.thumbnail} alt="shoe img" />
      </div>
    </div>
  )
}

export default ShoeCard