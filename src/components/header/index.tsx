
const Header  =()=>{
    return (
        <div className="flex flex-row justify-between w-100 max-w-[1440px] lg:p-[80px] w-100 p-[30px] bg-[yellow]">
            <img src='assets/vercel.svg' alt="logo" className='w-[86px] h-[30px]'/>
            <div className="flex flex-col">
                <div className="w-[35px] h-[3px] bg-[#fffffa] mb-[5px]"></div>
                <div className="w-[35px] h-[3px] bg-[#fffffa] mb-[5px]"></div>
                <div className="w-[35px] h-[3px] bg-[#fffffa] mb-[5px]"></div>
            </div>
        </div>
    )
}

export default Header;