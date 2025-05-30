const Navbar = ()=>{
    return(
    <div className="flex items-center justify-between bg-gray-800/40 px-4 py-2 h-[88px] max-h-screen w-full">
  {/* Hamburger sinistro */}
  <div className="w-[40px] h-[40px] flex-shrink-0">
    <img src="./src/assets/Header/HeaderHamburger.png" alt="Menu" className="w-full h-full object-contain" />
  </div>

  {/* Icone centrali */}
  <div className="flex gap-6 justify-center items-center flex-grow">
   <Link to="/" ><img src="./src/assets/Header/dog-house2.png" alt="Casa" className="w-[45x] h-[45x] object-contain" /></Link>
    <img src="./src/assets/Header/HeaderDog2.png" alt="Cane" className="w-[45x] h-[45x] object-contain" />
    <img src="./src/assets/Header/HeaderHeart.png" alt="Cuore" className="w-[45x] h-[45x] object-contain" />
    <img src="./src/assets/Header/HeaderNote.webp" alt="Nota" className="w-[45x] h-[45x] object-contain" />
  </div>
</div>

    )
};

export default Navbar;