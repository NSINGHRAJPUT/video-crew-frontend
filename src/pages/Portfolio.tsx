import React from 'react';
import v1 from '../assets/portfolio/1.jpeg';
import v2 from '../assets/portfolio/2.jpg';
import v3 from '../assets/portfolio/3.jpg';
import v4 from '../assets/portfolio/4.jpg';
import v5 from '../assets/portfolio/5.jpg';
import left from '../assets/portfolio/left.jpeg';
import right from '../assets/portfolio/right.jpeg';


const VideoPortfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Logistics Promo",
      image: "/api/placeholder/600/400",
      category: "logistics",
      description: "Container shipping and logistics promotional video"
    },
    {
      id: 2,
      title: "Chanel Promotion",
      image: "/api/placeholder/600/400",
      category: "luxury",
      description: "Luxury perfume commercial"
    },
    {
      id: 3,
      title: "Pizza Company",
      image: "/api/placeholder/600/400",
      category: "food",
      description: "Food and lifestyle promotional content"
    },
    {
      id: 4,
      title: "Nutella Recipe",
      image: "/api/placeholder/600/400",
      category: "recipe",
      description: "Dessert recipe and food styling"
    },
    {
      id: 5,
      title: "Hublot Watch",
      image: "/api/placeholder/600/400",
      category: "luxury",
      description: "Luxury watch commercial"
    }
  ];

  return (
    <div className="w-full text-white">
      {/* Header */}
      
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-6 overflow-hidden bg-black">
          {/* Left Background Image */}
           <img
            src={left}
            alt="Left background"
            className="absolute left-0 top-[50%] transform -translate-y-1/2 w-64 md:w-80 lg:w-[28rem] z-10 pointer-events-none mix-blend-overlay opacity-50"

          />
          {/* Right Background Image */}
          <img
            src={right}
            alt="Right background"
            className="absolute right-0 top-[50%] transform -translate-y-1/2 w-64 md:w-80 lg:w-[28rem] z-10 pointer-events-none mix-blend-overlay "

          />

          {/* Foreground Content */}
          <div className="text-center max-w-7xl mx-auto z-10">
            <p className="text-sm text-gray-400 mb-8 tracking-widest uppercase">
              Portfolio
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mb-16 leading-tight">
              We Create Beautiful,<br />
              <span className="text-blue-500">Practical Works</span>
            </h1>

            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-8 py-3 border border-gray-600 rounded-full text-sm hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
                광고 · 홍보 영상
              </button>
              <button className="px-8 py-3 border border-gray-600 rounded-full text-sm hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
                이러닝 영상
              </button>
              <button className="px-8 py-3 border border-gray-600 rounded-full text-sm hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
                기업 행사 영상
              </button>
            </div>
          </div>
        </section>



        {/* Portfolio Grid */}
        <div className="px-8 py-16">
          <div className="max-w-6xl mx-auto space-y-6">

            {/* Logistics Promo */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div className="aspect-[16/9] relative bg-gradient-to-br from-teal-800 to-orange-800">
                <img
                  src={v1}
                  alt="Container Port"
                  className="w-full h-full object-cover"
                />




                <div className="absolute bottom-6 right-6">
                  <button className="flex items-center bg-black/80 backdrop-blur-sm text-white rounded-full px-4 py-2 hover:bg-black/70 transition">
                    {/* Play Icon */}
                    <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs mr-3">
                      ▶
                    </div>

                    {/* Text content */}
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-semibold">Logistics Promo</span>
                      <span className="text-xs text-gray-300">Play Video</span>
                    </div>
                  </button>
                </div>

              </div>
            </div>

            {/* Chanel Promotion */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div className="aspect-[16/9] relative bg-gradient-to-br from-amber-900 to-black">
                <img
                  src={v2}
                  alt="Container Port"
                  className="w-full h-full object-cover"
                />



                <div className="absolute bottom-6 right-6">
                  <button className="flex items-center bg-black/80 backdrop-blur-sm text-white rounded-full px-4 py-2 hover:bg-black/70 transition">
                    {/* Play Icon */}
                    <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs mr-3">
                      ▶
                    </div>

                    {/* Text content */}
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-semibold">Chanel Promotion</span>
                      <span className="text-xs text-gray-300">Play Video</span>
                    </div>
                  </button>
                </div>

              </div>
            </div>

            {/* Pizza Company */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div className="aspect-[16/9] relative bg-gradient-to-br from-orange-900 to-red-900">
                <img
                  src={v3}
                  alt="Container Port"
                  className="w-full h-full object-cover"
                />


                <div className="absolute bottom-6 right-6">
                  <button className="flex items-center bg-black/80 backdrop-blur-sm text-white rounded-full px-4 py-2 hover:bg-black/70 transition">
                    {/* Play Icon */}
                    <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs mr-3">
                      ▶
                    </div>

                    {/* Text content */}
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-semibold">Pizza Company</span>
                      <span className="text-xs text-gray-300">Play Video</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Nutella Recipe */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div className="aspect-[16/9] relative bg-gradient-to-br from-amber-800 to-orange-900">
                <img
                  src={v4}
                  alt="Container Port"
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-6 right-6">
                  <button className="flex items-center bg-black/80 backdrop-blur-sm text-white rounded-full px-4 py-2 hover:bg-black/70 transition">
                    {/* Play Icon */}
                    <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs mr-3">
                      ▶
                    </div>

                    {/* Text content */}
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-semibold">Nutella Recipe</span>
                      <span className="text-xs text-gray-300">Play Video</span>
                    </div>
                  </button>
                </div>

              </div>
            </div>

            {/* Hublot Watch */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div className="aspect-[16/9] relative bg-gradient-to-br from-amber-900 to-black">
                <img
                  src={v5}
                  alt="Container Port"
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-6 right-6">
                  <button className="flex items-center bg-black/80 backdrop-blur-sm text-white rounded-full px-4 py-2 hover:bg-black/70 transition">
                    {/* Play Icon */}
                    <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs mr-3">
                      ▶
                    </div>

                    {/* Text content */}
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-semibold">Hublot Watch</span>
                      <span className="text-xs text-gray-300">Play Video</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105">
              Load More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoPortfolio;