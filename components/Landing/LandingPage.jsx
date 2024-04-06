import React from 'react'
import { Link } from 'react-router-dom'



const HeroSection = () => {
  return (
    <>
    <div className="h-24 bg-skincol flex flex-row">
        <div className="bg-skincol p-2  w-1/12"><img src="../src/assets/goldenemb.png"></img></div>
        <div className="bg-skincol w-10/12 flex flex-col justify-center items-center">
            <div className='text-2xl font-bold'>Jal jeewan Mission - Har Ghar Jal</div>
            <div className=''>Functional Household Tap Connection (FHTC) in every rural home</div>
        </div>
        <div className="flex items-center pr-4 gap-4">
        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        <Link to="/login" className="">Login</Link>
        </button>

        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        <Link to="/complaint" className="">makecomplaint</Link>
        </button>

        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        <Link to="/main" className="">main</Link>
        </button>
        </div>
        
    </div>
    
    <main class="dark:bg-gray-800 bg-white relative overflow-hidden h-100">
    
    <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div class="container mx-auto px-6 flex relative py-16">
            <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                </span>
                <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                    Be on
                    <span class="text-5xl sm:text-7xl">
                        Time
                    </span>
                </h1>
                <p class="text-sm sm:text-base text-gray-700 dark:text-white">
                    Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                </p>
                <div class="flex mt-8">
                    <a href="#" class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                        Get started
                    </a>
                    <a href="#" class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                        Read more
                    </a>
                </div>
            </div>
            <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative bg-red-500">
              <img src="https://jjmuphelpline.co/resources/index/img/abc.jpg" class="max-w-full h-auto object-cover"/>
            </div>

        </div>
    </div>
</main>

<div className="bg-gray-200 py-12">
  <div className="container mx-auto ml-4">
    <h2 className="text-2xl font-bold mb-4">Guidelines / Manuals</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      {/* Example guideline cards with images */}
      <div className="bg-white p-6 rounded-lg shadow-md h-110 w-60 flex flex-col items-center justify-center">
        <img
          src="https://jaljeevanmission.gov.in/sites/default/files/manual_image/booklet-reforms.jpg"
          alt="Guideline Image 1"
          className="h-100 w-50 rounded-lg mb-4"
        />
        <h3 className="text-xl font-bold mb-2">Guideline 1</h3>
        <p className="text-gray-700 p-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          fermentum diam sit amet massa aliquet, eget ultricies ipsum
          fermentum.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md h-110 w-60 flex flex-col items-center justify-center">
        <img
          src="https://jaljeevanmission.gov.in/sites/default/files/manual_image/booklet-reforms.jpg"
          alt="Guideline Image 1"
          className="h-100 w-50 rounded-lg mb-4"
        />
        <h3 className="text-xl font-bold mb-2">Guideline 1</h3>
        <p className="text-gray-700 p-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          fermentum diam sit amet massa aliquet, eget ultricies ipsum
          fermentum.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md h-110 w-60 flex flex-col items-center justify-center">
        <img
          src="https://jaljeevanmission.gov.in/sites/default/files/manual_image/booklet-reforms.jpg"
          alt="Guideline Image 1"
          className="h-100 w-50 rounded-lg mb-4"
        />
        <h3 className="text-xl font-bold mb-2">Guideline 1</h3>
        <p className="text-gray-700 p-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          fermentum diam sit amet massa aliquet, eget ultricies ipsum
          fermentum.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md h-110 w-60 flex flex-col items-center justify-center">
        <img
          src="https://jaljeevanmission.gov.in/sites/default/files/manual_image/booklet-reforms.jpg"
          alt="Guideline Image 1"
          className="h-100 w-50 rounded-lg mb-4"
        />
        <h3 className="text-xl font-bold mb-2">Guideline 1</h3>
        <p className="text-gray-700 p-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          fermentum diam sit amet massa aliquet, eget ultricies ipsum
          fermentum.
        </p>
      </div>
     
      {/* Add more guideline cards with images as needed */}
    </div>
  </div>
</div>

    </>
    
  );
};

export default HeroSection;


// export default function LandingPage() {
//   return (
//     <div className="h-24 bg-skincol flex flex-row">
//     <div className="bg-skincol p-2  w-1/12"></div>
//     <div className="bg-skincol w-10/12 flex flex-col justify-center items-center">
//         <div className='text-2xl font-bold'>Jal jeewan Mission - Har Ghar Jal</div>
//         <div className=''>Functional Household Tap Connection (FHTC) in every rural home</div>
//         </div>
//     <div className="bg-red-400 p-2 flex justify-center items-center">
//     <Link to="/login" className="">Login</Link>
//     <Link to="/register" className="">Register</Link>

//     </div>
//     {/* <div>Header</div> */}
// </div>
//   )
// }
