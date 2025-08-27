// src/components/loader.jsx
'use client'
import React from 'react';

// const Loader = () => {
//   return (
//     // The main container that covers the entire viewport
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
//       <div className="flex flex-col items-center">
//         {/* The beautiful spinning loader */}
//         <div className="relative w-20 h-20 animate-[spin_1.5s_linear_infinite]">
//           {/* Inner circle of the loader */}
//           <div className="absolute w-full h-full border-4 border-t-transparent border-gray-900 rounded-full dark:border-gray-100"></div>
//           {/* Outer circle with a different color */}
//           <div className="absolute w-full h-full border-4 border-b-transparent border-blue-500 rounded-full animate-[spin_0.8s_linear_infinite_reverse]"></div>
//           {/* A small dot in the center for a finishing touch */}
//           <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
//         </div>

//         {/* Text providing context */}
//         <p className="mt-4 text-lg font-semibold text-gray-700">
//           Loading...
//         </p>
//       </div>
//     </div>
//   );
// };

const Loader = () => {
  return (
    // The main container that covers the entire viewport
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        {/* The beautiful spinning loader */}
        <div className="relative w-20 h-20 animate-[spin_1.5s_linear_infinite]">
          {/* Inner circle of the loader */}
          <div className="absolute w-full h-full border-4 border-t-transparent border-gray-900 rounded-full dark:border-gray-100"></div>
          {/* Outer circle with a different color */}
          <div className="absolute w-full h-full border-4 border-b-transparent border-blue-500 rounded-full animate-[spin_0.8s_linear_infinite_reverse]"></div>
          {/* A small dot in the center for a finishing touch */}
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* The animated loading text */}
        {/* We use a self-contained style block to define the custom CSS animations */}
        {/* This approach ensures the component is portable and the animation works reliably */}
        <style jsx>{`
          .cursor-text {
            position: relative;
            font-size: 1.5rem; /* Equivalent to text-lg */
            font-weight: 600;    /* Equivalent to font-semibold */
            color: #4b5563;      /* Equivalent to text-gray-700 */
            border-right: 2px solid rgba(75, 85, 99, 0.75);
            white-space: nowrap;
            overflow: hidden;
            width: 11ch; /* 8 for "Loading" + 3 for "..." */
          }
          .typewriter-animation {
            animation:
              typewriter 0.2s steps(11) 1s 1 normal both,
              blinkingCursor 500ms steps(11) infinite normal;
          }
          @keyframes typewriter {
            from { width: 0; }
            to { width: 11ch; }
          }
          @keyframes blinkingCursor {
            from { border-right-color: rgba(75, 85, 99, 0.75); }
            to { border-right-color: transparent; }
          }
        `}</style>
        <p className="mt-6 cursor-text typewriter-animation">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;