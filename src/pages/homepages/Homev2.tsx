
function HomeV2 () {
  return (
    <div className="bg-blue-500 h-screen flex flex-col">
      <header className="bg-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src='./public/umid-logo.png' alt="UMID Logo" className="h-12" /> 
        
          <div className="text-xl font-bold">UNIQUE MEDICAL IDENTITY CARD</div>
          <div className="flex space-x-4">
            <img src='./public/Railways_logo.png' alt="Indian Railways Logo" className="h-10" /> 
          
            <img src='./public/Railtel_logo.png' alt="Indian Railways Logo" className="h-10" /> 
           
          </div>
        </div>
      </header>
      <div>
        <nav className="bg-blue-700 text-white py-2 m-2 rounded-full"> 
          <div className="container mx-auto flex justify-center h-9   text-center text-xl">
            <ul className="flex space-x-4 ">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            
          </div>
        </nav>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="text-white text-4xl font-bold mb-8">
          Welcome to
        </div>
        <div className="text-white text-2xl mb-4">
          SMART HEALTH CARD SYSTEM IN INDIAN RAILWAYS
        </div>
        <div className="text-white mb-8">
          भारतीय रेल्वे मे स्मार्ट मेडिकल कार्ड सिस्टिम
        </div>
        <button className="bg-white text-blue-500 px-4 py-2 rounded">
          Register Here...
        </button>
      </div>
    </div>
  );
};

export default HomeV2;
