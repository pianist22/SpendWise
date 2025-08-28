
// // import React from 'react'
// // import {
// //   SignedIn,
// //   SignedOut,
// //   SignInButton,
// //   SignUpButton,
// //   UserButton,
// // } from '@clerk/nextjs'
// // import Link from 'next/link';
// // import Image from 'next/image';
// // import { Button } from './ui/button';
// // import { LayoutDashboard, PenBox } from 'lucide-react';
// // import { checkUser } from '@/lib/checkUser';

// // const Header = async() => {
// //   // this function check whether the current clerk user entry is made to prisma DB or not 
// //   await checkUser();

// //   return (
// //     <header className="fixed top-0 p-4 w-full gap-4 h-16 bg-white/80 backdrop-blur-md z-50 border-b">
// //       <nav className='container mx-auto flex items-center justify-between'>
// //         <Link href="/">
// //           <Image src={"/logo.png"} alt='SpendWise' height={60} width={200} className='h-12 w-auto object-contain' />
// //         </Link>

// //         <div className='flex items-center space-x-4'>
// //           <SignedIn>
// //             <Link href={"/dashboard"}>
// //               <Button className="flex items-center gap-2" variant="outline">
// //                 <LayoutDashboard size={18} />
// //                 <span className='hidden md:inline'>Dashboard</span>
// //               </Button>
// //             </Link>
// //             <Link href={"/transaction/create"}>
// //               <Button className="flex items-center gap-2">
// //                 <PenBox size={18} />
// //                 <span className='hidden md:inline'>Add Transaction</span>
// //               </Button>
// //             </Link>
// //           </SignedIn>

// //           <SignedOut>
// //             <SignInButton forceRedirectUrl='/'>
// //               <Button variant="outline">Sign In</Button>
// //             </SignInButton>
// //             <SignUpButton>
// //               <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
// //                 Sign Up
// //               </button>
// //             </SignUpButton>
// //           </SignedOut>

// //           <SignedIn>
// //             <UserButton
// //               appearance={{
// //                 elements: {
// //                   avatarBox: "w-14 h-14",
// //                   userButtonAvatarBox: "w-14 h-14",
// //                   userButtonAvatarImage: "w-14 h-14",
// //                 },
// //               }}
// //             />
// //           </SignedIn>
// //         </div>
// //       </nav>
// //     </header>
// //   )
// // }

// // export default Header;

// "use client";

// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   SignUpButton,
//   UserButton,
// } from "@clerk/nextjs";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "./ui/button";
// import { LayoutDashboard, PenBox } from "lucide-react";

// const Header = () => {
//   return (
//     <header className="fixed top-0 p-4 w-full gap-4 h-20 bg-white/80 backdrop-blur-md z-50 border-b">
//       <nav className="container mx-auto flex items-center justify-between">
//         <Link href="/">
//           <Image
//             src={"/SpendWise.png"}
//             alt="SpendWise"
//             height={300}
//             width={500}
//             className="h-18 w-28  object-contain"
//           />
//         </Link>

//         <div className="flex items-center space-x-4">
//           <SignedIn>
//             <Link href={"/dashboard"}>
//               <Button className="flex items-center gap-2" variant="outline">
//                 <LayoutDashboard size={18} />
//                 <span className="hidden md:inline">Dashboard</span>
//               </Button>
//             </Link>
//             <Link href={"/transaction/create"}>
//               <Button className="flex items-center gap-2">
//                 <PenBox size={18} />
//                 <span className="hidden md:inline">Add Transaction</span>
//               </Button>
//             </Link>
//             <UserButton
//               appearance={{
//                 elements: {
//                   avatarBox: "w-14 h-14",
//                   userButtonAvatarBox: "w-14 h-14",
//                   userButtonAvatarImage: "w-14 h-14",
//                 },
//               }}
//             />
//           </SignedIn>

//           <SignedOut>
//             <SignInButton forceRedirectUrl="/">
//               <Button variant="outline">Sign In</Button>
//             </SignInButton>
//             <SignUpButton>
//               <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
//                 Sign Up
//               </button>
//             </SignUpButton>
//           </SignedOut>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 p-1 w-full gap-4 h-22 bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/SpendWise.png"}
            alt="SpendWise"
            height={80} // bigger height
            width={200} // bigger width
            className="h-14 md:h-20 w-auto md:w-32 object-contain" // responsive sizing
          />
        </Link>

        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href={"/dashboard"}>
              <Button className="flex items-center gap-2" variant="outline">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <Link href={"/transaction/create"}>
              <Button className="flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-14 h-14",
                  userButtonAvatarBox: "w-14 h-14",
                  userButtonAvatarImage: "w-14 h-14",
                },
              }}
            />
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/">
              <Button variant="outline">Sign In</Button>
            </SignInButton>
            <SignUpButton>
              <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};

export default Header;

