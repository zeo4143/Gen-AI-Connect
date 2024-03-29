

interface NavbarProps {
    isOpen: boolean
    handleNav: () => void 
}

const NavItems = ["Home", "Features", "About", "Pricing","Contact"]

const Navbar = ({isOpen, handleNav}: NavbarProps) => {

    const handleClose = () => {
        if(isOpen) {
            handleNav()
        }
    }
  return (
    <nav className={`${isOpen ? 'block w-full' : 'hidden'} lg:block`}>
      <ul className={`flex ${isOpen ? 'flex-col' : ''} items-center justify-center gap-1 text-xl text-center font-medium`}>
        {NavItems.map((item, index) => (
            <li title={item} key={index} className="w-full hover:text-[rgb(185,168,223)] hover:scale-125 transition-all px-4 py-2 rounded-md" onClick={handleClose}>
               <a href={`#${item.toLowerCase()}`} className="block w-full">{item}</a>
             </li>
        ))}
      </ul>
    </nav>
  );
};


export default Navbar;
