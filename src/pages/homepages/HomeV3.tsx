import GetIcon from '@/components/appcomponents/GetIcon';
import  { useState } from 'react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen relative">
      <div className="wave-divider dark:bg-gray-800 absolute top-0 left-0 w-full">
      <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-blue-100 dark:fill-blue-900"
          />
        </svg>
      </div>
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <div className='pl-9'> 
            <img src='./public/umid-logo.png' alt="Your Logo" className="h-10" />
            </div>
         
          <div className="md:hidden"> 
            <button 
              className="text-gray-800 " 
              onClick={toggleMenu}
            >
             {<GetIcon icon={ isMenuOpen? 'x': "menu"}  />}
            </button>
          </div>
          <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              LogIn
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Guidelines
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Medical Info
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Dashboard
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Help Desk
            </a>
          </nav>
          <div className="flex space-x-4 pr-3">
          <img src='./public/RailTel_logo.png' alt="Your Logo" className="h-12" />
          <img src='./public/Railways_logo.png' alt="Your Logo" className="h-12" />
          </div>
        </div>
      </header>

      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-white/90 z-50 ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <button 
              className="text-gray-800 " 
              onClick={toggleMenu}
            >
             {<GetIcon icon={ isMenuOpen? 'x': "menu"}  />}
            </button>
        <div className="container mx-auto py-16">
          <nav className="flex flex-col space-y-4">
          <a href="#" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              LogIn
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Guidelines
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Medical Info
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Dashboard
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Help Desk
            </a>
          </nav>
        </div>
      </div>

      <div className="container mx-auto py-16 text-center mt-32"> 
        <h2 className="text-4xl font-bold text-blue-500 mb-4">Welcome to</h2>
        <h1 className="text-4xl font-bold mb-4">
          SMART HEALTH CARD SYSTEM IN INDIAN RAILWAYS
        </h1>
        <p className="text-lg text-green-500 mb-8">
          भारतीय रेल्वे मे स्मार्ट मेडिकल कार्ड सिस्टिम
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Register Here
        </button>
      </div>

      <div className="container mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-8"> 
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Lorem Ipsum Dolor</h3>
          <p className="text-gray-700">Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Lorem Ipsum Dolor</h3>
          <p className="text-gray-700">Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Lorem Ipsum Dolor</h3>
          <p className="text-gray-700">Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;