function Navbar(){
    return(
       <>
 <div className="flex bg-black h-20 items-center px-6">
  <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
    <img src=".\src\assets\Header\HeaderHamburger.png" className="w-10" alt="hamburger" />


</div>

    <div className=" flex gap-x-10 mx-auto ">

 <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
    <img src=".\src\assets\Header\dog-house2.png" className="w-10" alt="icon1" />
  </div>
 <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
    <img src=".\src\assets\Header\HeaderHeart.png" className="w-10" alt="icon2" />
  </div>
  <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
    <img src=".\src\assets\Header\HeaderDog2.png" className="w-10" alt="icon3" />
  </div>
  <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
    <img src=".\src\assets\Header\HeaderNote.webp" className="w-10" alt="icon4" />
  </div>
   
    {/* <img  src=".\src\assets\Header\HeaderHouse.png" />
    <img  src=".\src\assets\Header\dog-house.png" />
    <img  src=".\src\assets\Header\dog-house2.png" /> */}

    </div>

    </div>
    </>
    )
}

export default Navbar;