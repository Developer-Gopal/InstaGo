// import hero1 from "../../Assests/HeroSection/Images/hero1.png";
// import airpodsmax from "../../Assests/HeroSection/Images/airpod.png";
// import visionpro from "../../Assests/HeroSection/Images/visionpro.png";
// import macbook from "../../Assests/HeroSection/Images/m3.jpg";
// import iphone14promax from "../../Assests/HeroSection/Images/iphone14.png";
// import ps5 from "../../Assests/HeroSection/Images/ps5.jpg";
// import { DevicePhoneMobile } from "../../Assests/Icons/Icons.jsx";
// import React from "react";
// import ReactDom from "react-dom";
// import f1 from "../../Assests/HeroSection/Images/four1.png";
// import f2 from "../../Assests/HeroSection/Images/four2.png";
// import f3 from "../../Assests/HeroSection/Images/four3.png";
// import f4 from "../../Assests/HeroSection/Images/four4.png";

// const products = [
//     {
//         id: 1,
//         name: "Apple iPhone 14 Pro Max 128Gb Deep Purple (MQHIW/3J)",
//         price: "₹1,39,000",
//         image: iphone14promax,
//     },
//     {
//         id: 2,
//         name: "Apple iPhone 14 Pro Max 128Gb Deep Purple (MQHIW/3J)",
//         price: "₹1,39,000",
//         image: iphone14promax,
//     },
//     {
//         id: 3,
//         name: "Apple iPhone 14 Pro Max 128Gb Deep Purple (MQHIW/3J)",
//         price: "₹1,39,000",
//         image: iphone14promax,
//     },
//     {
//         id: 4,
//         name: "Apple iPhone 14 Pro Max 128Gb Deep Purple (MQHIW/3J)",
//         price: "₹1,39,000",
//         image: iphone14promax,
//     }
//     ,
//     {
//         id: 5,
//         name: "Apple iPhone 14 Pro Max 128Gb Deep Purple (MQHIW/3J)",
//         price: "₹1,39,000",
//         image: iphone14promax,
//     },
//     {
//         id: 6,
//         name: "Apple iPhone 14 Pro Max 128Gb Deep Purple (MQHIW/3J)",
//         price: "₹1,39,000",
//         image: iphone14promax,
//     },
//     {
//         id: 7,
//         name: "Apple iPhone 14 Pro Max 128Gb Deep Purple (MQHIW/3J)",
//         price: "₹1,39,000",
//         image: iphone14promax,
//     },
//     {
//         id: 8,
//         name: "Apple iPhone 14 Pro Max 128Gb Deep Purple (MQHIW/3J)",
//         price: "₹1,39,000",
//         image: iphone14promax,
//     },

//     //{Add more images},

// ];

// const HeroSection = () => {
//     return (
//         <>
//             {/* Page 1 */}
//             <div className="w-full mx-auto bg-white">
//                 <div
//                     className="w-full h-screen  bg-cover bg-center flex flex-col justify-center"
//                     style={{ backgroundImage: `url(${hero1})` }}
//                 >
//                     <div className="text-white ml-[10%]  ">
//                         <p className="text-lg md:text-xl text-gray-300">Pro. Beyond</p>

//                         <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight">
//                             IPhone 14 <span className="font-normal">Pro</span>
//                         </p>

//                         <p className="text-sm sm:text-md md:text-lg text-gray-300 max-w-md">
//                             Created to change everything for the better.
//                             For everyone.
//                         </p>

//                         <button className="mt-2 py-2 px-4 border border-white rounded-md w-fit hover:bg-white hover:text-black transition">
//                             <a href="#">Shop Now</a>
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* page 2 */}

//             <div className="w-full mx-auto bg-white">
//                 <div className="w-full h-screen grid grid-cols-2 ">
//                     {/* left */}
//                     <div className="grid grid-rows-2">
//                         <div className="w-full text-white  bg-cover bg-center flex flex-row items-center justify-center "
//                             style={{ backgroundImage: `url(${ps5})` }}>
//                             <div className=" ml-[50%] space-y-2">
//                                 <p className="text-2xl sm:text-3xl md:text-4xl font-medium">Playstation 5</p>
//                                 <p className=" sm:text-md md:text-md max-w-[80%]">Incredibly powerful CPUs, GPUs and an SSD with integreted I/O will redefine your PlayStaton experience</p>

//                             </div>



//                         </div>
//                         {/* left bottom */}
//                         <div className="grid grid-cols-2">

//                             <div className="w-full bg-cover bg-center flex flex-col justify-center items-end"
//                                 style={{ backgroundImage: `url(${airpodsmax})` }}>
//                                 <div className="text-black p-2 md:pr-6 space-y-4">
//                                     <div className="space-y-2">
//                                         <p className="text-2xl sm:text-3xl md:text-3xl ">Apple</p>
//                                         <p className="text-2xl sm:text-3xl md:text-3xl">AirPods <span className="font-bold">Max</span></p>
//                                     </div>
//                                     <div className="text-gray-500">
//                                         <p className=" sm:text-sm md:text-sm">Computational audio.</p>
//                                         <p className=" sm:text-md md:text-md max-w-[80%]">Listen, it's powerful</p>
//                                     </div>
//                                 </div>


//                             </div>
//                             <div className="w-full bg-cover bg-center flex flex-col justify-center items-end"
//                                 style={{ backgroundImage: `url(${visionpro})` }}>

//                                 <div className="text-white p-4 ">
//                                     <div className="P-2 space-y-2">
//                                         <p className=" sm:text-3xl md:text-3xl ">Apple</p>
//                                         <p className="sm:text-3xl md:text-3xl">Vision <span className="font-bold">Pro</span></p>
//                                     </div >
//                                     <div className="text-white p-1">
//                                         <p className=" sm:text-md md:text-md ">An immersive way to</p>
//                                         <p className=" sm:text-md md:text-md ">experience entertainment</p>
//                                     </div>
//                                 </div>

//                             </div>

//                         </div >

//                         {/* Right */}
//                     </div>

//                     <div className="w-full  bg-cover bg-center flex flex-col items-center "
//                         style={{ backgroundImage: `url(${macbook})` }}>

//                         <div className="text-black max-w-[300px] bg-yellow- text-center mt-[30%] space-y-2">
//                             <p className="text-4xl sm:text-3xl md:text-5xl">Macbook <span className="font-bold">Air</span></p>
//                             <p className="text-gray-500 sm:text-md md:text-md ">The new 15-inch  MacBook Air makes room for more of what you love with a spacious Liquid Retina display. </p>

//                             <button className="mt-2 py-2 px-4 border border-black rounded-md w-fit hover:bg-black hover:text-white transition">
//                                 <a href="#">Shop Now</a>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* page 3 */}
//             <div className="mx-auto w-full bg-[] ">
//                 <div className="md:w-[90%] mx-auto p-4 md:py-20 md:px-10">
//                     <div className="py-6 md:py-0 lg:py-0">
//                         <div className="flex flex-row justify-between items-center">
//                             <p className="pb-4 text-2xl">
//                                 Browse By Category
//                             </p>
//                             <p className="text-4xl pb-4"> &lt; &gt;</p>

//                         </div>

//                         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">

//                             <a href="">
//                                 <div className="flex flex-col justify-center items-center py-4 px-8 bg-[#ededed] rounded-lg">
//                                     <DevicePhoneMobile className="w-18 h-18" />
//                                     <p >Phone</p>
//                                 </div>
//                             </a>
//                             <a href="">
//                                 <div className="flex flex-col justify-center items-center py-4 bg-[#ededed] rounded-lg">
//                                     <DevicePhoneMobile className="w-18 h-18" />
//                                     <p className="text-center">Smart Watches</p>
//                                 </div>

//                             </a>
//                             <a href="">
//                                 <div className="flex flex-col justify-center items-center py-4 px-8 bg-[#ededed] rounded-lg">
//                                     <DevicePhoneMobile className="w-18 h-18" />
//                                     <p>Camera</p>
//                                 </div>

//                             </a>

//                             <a href="">
//                                 <div className="flex flex-col justify-center items-center py-4 px-8 bg-[#ededed] rounded-lg">
//                                     <DevicePhoneMobile className="w-18 h-18" />
//                                     <p>Headphones</p>
//                                 </div>
//                             </a>
//                             <a href="">
//                                 <div className="flex flex-col justify-center items-center py-4 px-8 bg-[#ededed] rounded-lg">
//                                     <DevicePhoneMobile className="w-18 h-18" />
//                                     <p>Computers</p>
//                                 </div>
//                             </a>
//                             <a href="">
//                                 <div className="flex flex-col justify-center items-center py-4 px-8 bg-[#ededed] rounded-lg">
//                                     <DevicePhoneMobile className="w-18 h-18" />
//                                     <p>Gaming</p>
//                                 </div>
//                             </a>


//                         </div>
//                     </div>


//                 </div>
//             </div>

//             {/* page-4 */}

//             <div className="mx-auto w-full bg-[white] ">

//                 <div className="flex flex-row p-6 gap-6 w-[90%] mx-auto ">
//                     <a href=""><p className="text-xl hover:underline hover:text-bold">New Arrival</p></a>

//                     <a href=""><p className="text-xl hover:underline hover:text-bold">Bestseller</p></a>
//                     <a href=""><p className="text-xl hover:underline hover:text-bold">Featured Products</p></a>

//                 </div>

//                 <div className="mx-auto w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
//                     {products.map((product) => (
//                         <div key={product.id} className="shadow-lg rounded-lg flex flex-col items-center justify-center my-6 md:mx-6 ">
//                             <img src={product.image} alt={product.name} className="" />
//                             <div className="flex flex-col items-center justify-center gap-2 p-4">
//                                 <p className="text-center text-sm">{product.name}</p>
//                                 <p className="text-center text-md font-bold">{product.price}</p>
//                                 <a href="#">
//                                     <button className="bg-black text-white py-2 px-6 rounded-lg text-sm hover:px-7 hover:py-3 transition-all">
//                                         Buy Now
//                                     </button>
//                                 </a>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* page 5 */}

//             <div className="w-full mx-auto my-6">
//                 <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-3 gap-4">

//                     <div className="bg-[#fafafa]">

//                         <img src={f1} alt="" className="w-80 h-80" />
//                         <div className="text-start p-4 space-y-2">
//                             <div className="space-y-4">
//                             <p className="text-light text-2xl md:text-3xl text-start">Popular Products</p>
//                             <p className="text-gray-400 text-md">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
//                             </div>
                            
//                                 <button className="bg-transparent text-bold border border-black text-black py-2 px-6 rounded-lg text-sm hover:px-7 hover:py-3 transition-all">
//                                 <a href="#">Buy Now</a>
//                                 </button>
                            
//                         </div>


//                     </div>

//                     <div className="bg-[#efefef]" >

//                         <img src={f2} alt="" className="w-80 h-80" />
//                         <div className="text-start p-4 space-y-2">
//                             <div className="space-y-4">
//                             <p className="text-light text-2xl md:text-3xl text-start">Ipad Pro</p>
//                             <p className="text-gray-400 text-md">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
//                             </div>
                            
//                                 <button className="bg-transparent text-bold border border-black text-black py-2 px-6 rounded-lg text-sm hover:px-7 hover:py-3 transition-all">
//                                 <a href="#">Buy Now</a>
//                                 </button>
                            
//                         </div>


//                     </div>

//                     <div className="bg-[#cdcdcd]">

//                         <img src={f3} alt="" className="w-80 h-80" />
//                         <div className="text-start p-4 space-y-2">
//                             <div className="space-y-4">
//                             <p className="text-light text-2xl md:text-3xl text-start">Samsung Galaxy</p>
//                             <p className="text-gray-500 text-md">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
//                             </div>
                            
//                                 <button className="bg-transparent text-bold border border-black text-black py-2 px-6 rounded-lg text-sm hover:px-7 hover:py-3 transition-all">
//                                 <a href="#">Buy Now</a>
//                                 </button>
                            
//                         </div>


//                     </div>

//                     <div className="bg-[#797979]" >

//                         <img src={f4} alt="" className="w-80 h-80" />
//                         <div className="text-start p-4 space-y-2">
//                             <div className="space-y-4">
//                             <p className="text-light text-white text-3xl text-start">Macbook Pro</p>
//                             <p className="text-gray-300 text-md">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
//                             </div>
                            
//                                 <button className="bg-transparent text-bold border border-white text-white py-2 px-6 rounded-lg text-sm hover:px-7 hover:py-3 transition-all">
//                                 <a href="#">Buy Now</a>
//                                 </button>
                            
//                         </div>


//                     </div>

//                 </div>
//             </div>








//         </>
//     );
// };

// export default HeroSection;
