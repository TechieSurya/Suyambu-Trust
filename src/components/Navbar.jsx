import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import AOS from 'aos';
import 'aos/dist/aos.css';

import SuyambuBoomibalanTrustLogo from '../assets/images/SuyambuBoomibalanTrustLogo.png'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Our Story', href: '/ourstory' },
  { name: 'Current Projects', href: '/current-projects' },
  { name: 'Temple Science', href: '/temple-science' },
  // { name: 'Blogs', href: '/blogs' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="custom-color fixed w-full top-0 left-0 z-50 shadow-md">
      <nav className="flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo and Trust Name */}
        <a href="#" className="flex items-center gap-3">
          <img src={SuyambuBoomibalanTrustLogo} alt="Trust Logo" className="w-16 md:w-20" />
          <h1 className="text-xl md:text-base font-bold text-custom-color uppercase text-center">
            Sri Suyambu Boomibalan Trust
          </h1>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 ">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-lg font-medium text-custom-color hover:text-red-500 transition-all duration-300 
               after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-500 
               after:transition-all after:duration-300 hover:after:w-full "
            >
              {item.name}
            </a>
          ))}
          <a
            href="/donate"
            className="text-md font-semibold text-white bg-red-500 px-4 py-2 rounded-lg transition-all duration-300"
          >
            Donate Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden text-gray-700"
        >
          <Bars3Icon className="h-8 w-8" />
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 bg-black bg-opacity-30" />
        <DialogPanel className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-white shadow-lg p-6 transition-transform transform">
          <div className="flex justify-between items-center mb-6">
            {/* Mobile Logo */}
            <a href="#" className="flex items-center gap-2">
              <img src="/SuyambuBoomibalanTrustLogo.png" alt="Logo" className="w-14" />
              <h2 className="text-md font-bold text-white uppercase">Sri Suyambu Boomibalan Trust</h2>
            </a>

            {/* Close Button */}
            <button onClick={() => setMobileMenuOpen(false)} className="text-gray-700">
              <XMarkIcon className="h-7 w-7" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-lg font-medium text-gray-900 hover:text-yellow-500 transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/donate"
              className="block text-md font-semibold text-white bg-red-500 hover:bg-yellow-500 px-4 py-2 rounded-lg text-center transition-all duration-300"
            >
              Donate Now
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
