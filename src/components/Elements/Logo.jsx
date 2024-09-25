
const Logo = () => {
  return (
    <div className="flex flex-row gap-1 items-end lg:items-start xl:items-end lg:min-w-[270px]">
        <img src="images/logo-sma.png" alt="" className='h-[23px] w-[23px] md:h-[35px] md:w-[35px]'/>
        <h2 className='text-xs md:text-base lg:text-xl text-primary font-semibold md:border-b-2 border-primary lg:max-w-[110px] xl:max-w-[240px] '>EduTaniMas Smansabri</h2>
    </div>
  )
}

export default Logo