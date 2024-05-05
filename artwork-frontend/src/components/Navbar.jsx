import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'


const navigation = [
  { name: 'Events', href: '#workshops' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'About Us', href: '#about' },
  
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
const [visible, setVisible] = useState(true);

const handleScroll = () => {
  const currentScrollPosition = window.scrollY;
   

  if (currentScrollPosition > prevScrollPosition && currentScrollPosition > 12 ) {
    setVisible(false);
  } else {
    setVisible(true);
  }
  setPrevScrollPosition(currentScrollPosition);
};

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


 
    

  return (
    
    <div className="bg-white">
      <div className="hidden md:flex absolute z-10 -top-0.5 left-0 w-[100%] overflow-hidden leading-0 transform rotate-180">
<svg className='relative block  h-32 ' style={{ width: 'calc(100% + 1.3px)' }} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-[#6B2323]"></path>
</svg>
</div> 
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-12 w-12 rounded-full"
                src="/brandlogo.png"
                alt="brandlogo"
              />
            </a>
          </div>
         
          <div className="flex  lg:hidden md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 text-gray-100" aria-hidden="true" />
            </button>
          </div>
          
          <div className={`hidden lg:flex md:flex lg:gap-x-12 md:gap-x-4 w-[30%] fixed justify-center ${
    visible ? '' : 'bg-[#6B2323] right-1 rounded-full bg-opacity-80 p-3 flex transition ease-out duration-400 justify-center items-center h-12'
}`}>

            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm text-white font-semibold leading-6 group  transition duration-300">
                {item.name}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sky-600"></span>
              </a>
            ))}
          </div>
          <div className="hidden lg:flex md:flex lg:flex-1 lg:justify-end">
            <Link to={'/yourworkshop'}>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-200">
            Your Workshop <span aria-hidden="true">&rarr;</span>
            
            </a>
            </Link>
          </div>
        </nav>
        
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#efbdbd] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-10 w-10 rounded-full" 
                  src="/brandlogo.png"
                  alt="brandlogo"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <Link to={'/yourworkshop'}>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Your Workshop
                  </a>
                  </Link>
                </div>
              </div>
            </div>
            
          </Dialog.Panel>
          
        </Dialog>
       
      </header>
    
    </div>

    
  )
}

export default Navbar;