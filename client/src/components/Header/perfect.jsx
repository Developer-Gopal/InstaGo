// import { useState } from "react";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="w-full bg-white shadow-md">
//       <div className="max-w-[90%] mx-auto flex items-center justify-between px-4 py-3">
        
//         {/* Logo */}
//         <div className="text-xl font-bold">Cyber</div>

//         {/* Search bar (hidden on mobile) */}
//         <div className="hidden md:flex max-w-[400px] w-full mx-4">
//           <input
//             type="text"
//             placeholder="Search"
//             className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
//           />
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center gap-10">
//           <a href="#" className="hover:text-blue-600">Home</a>
//           <a href="#" className="hover:text-blue-600">About</a>
//           <a href="#" className="hover:text-blue-600">Contact</a>
//           <a href="#" className="hover:text-blue-600">Blog</a>
//         </nav>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {menuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Nav Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white px-6 pb-4">
//           <input
//             type="text"
//             placeholder="Search"
//             className="w-full mb-3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
//           />
//           <nav className="flex flex-col gap-4">
//             <a href="#" className="hover:text-blue-600">Home</a>
//             <a href="#" className="hover:text-blue-600">About</a>
//             <a href="#" className="hover:text-blue-600">Contact</a>
//             <a href="#" className="hover:text-blue-600">Blog</a>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
