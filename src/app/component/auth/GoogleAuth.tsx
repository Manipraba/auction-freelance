// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
// import { LogOut } from "lucide-react";

// interface GoogleAuthProps {
//   user: { name: string; picture: string } | null;
//   setUser: (user: { name: string; picture: string } | null) => void;
// }

// const GoogleAuth: React.FC<GoogleAuthProps> = ({ user, setUser }) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const handleLogout = () => {
//     setUser(null);
//     sessionStorage.removeItem("googleUser");
//     setDropdownOpen(false);
//   };

//   return (
//     <GoogleOAuthProvider clientId="267041393026-2vhpu1ejnadsiq0tjf2ecn0ge00uatip.apps.googleusercontent.com">
//       {!user ? (
//         <GoogleLogin
//           onSuccess={(credentialResponse) => {
//             if (!credentialResponse.credential) {
//               console.log("No credential received");
//               return;
//             }
//             const decoded = JSON.parse(
//               atob(credentialResponse.credential.split(".")[1])
//             );
//             const userData = {
//               name: decoded.name,
//               picture: decoded.picture,
//             };
//             setUser(userData);
//             sessionStorage.setItem("googleUser", JSON.stringify(userData));
//           }}
//           onError={() => {
//             console.log("Login Failed");
//           }}
//           theme="filled_blue" // Options: outline, filled_black
//           size="large" // Options: small, medium, large
//           shape="circle" // Options: rectangular, pill, circle, square
//           text="continue_with" // Options: signin_with, signup_with, continue_with, sign_in_with
//         />
//       ) : (
//         <div className="relative inline-block text-left z-50">
//           <div
//             className="flex items-center gap-3 cursor-pointer"
//             onClick={() => setDropdownOpen((prev) => !prev)}
//           >
//             <Image
//               src={user.picture}
//               alt="User Avatar"
//               width={36}
//               height={36}
//               className="rounded-full object-cover"
//             />
//             <div className="text-sm leading-tight">
//               <p className="text-green-500 font-semibold">Welcome</p>
//               <p className="text-white">{user.name}</p>
//             </div>
//             <svg
//               className="w-3 h-3 ml-1 text-white"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </div>

//           {dropdownOpen && (
//             <div className="absolute mt-3 right-0 w-72 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg overflow-hidden text-white text-sm">
//               <div className="p-4 border-b border-zinc-700">
//                 <p className="text-green-500 font-semibold">Welcome</p>
//                 <p className="truncate">{user.name}</p>
//               </div>

//               <ul className="px-2 py-2 space-y-1">
//                 <li className="hover:bg-zinc-800 px-3 py-2 rounded cursor-pointer">
//                   My Profile
//                 </li>
//                 <div className="bg-zinc-800 p-2 rounded">
//                   <li className="flex justify-between items-center hover:bg-zinc-700 px-3 py-2 rounded cursor-pointer">
//                     My Wallet
//                   </li>
//                   <li className="flex justify-between items-center hover:bg-zinc-700 px-3 py-2 rounded cursor-pointer">
//                     My Auction
//                     <span className="bg-yellow-500 text-black text-[10px] font-bold px-2 py-[2px] rounded">
//                       SELL
//                     </span>
//                   </li>
//                   <li className="flex justify-between items-center hover:bg-zinc-700 px-3 py-2 rounded cursor-pointer">
//                     My Bidding
//                     <span className="bg-yellow-500 text-black text-[10px] font-bold px-2 py-[2px] rounded">
//                       BUY
//                     </span>
//                   </li>
//                   <li className="flex justify-between items-center hover:bg-zinc-700 px-3 py-2 rounded cursor-pointer">
//                     My Finance
//                   </li>
//                 </div>

//                 <li className="hover:bg-zinc-800 px-3 py-2 rounded cursor-pointer">
//                   Check Vehicle Details
//                 </li>
//                 <li className="hover:bg-zinc-800 px-3 py-2 rounded cursor-pointer">
//                   AuctionWOW newsverse
//                 </li>

//                 <li className=" text-white px-3 py-2 rounded cursor-pointer">
//                   Contact Us
//                 </li>

//                 <li className="hover:bg-zinc-800 px-3 py-2 rounded cursor-pointer">
//                   FAQs
//                 </li>
//                 <li
//                   onClick={handleLogout}
//                   className="flex items-center gap-2 text-red-500 hover:bg-zinc-800 px-3 py-2 rounded cursor-pointer"
//                 >
//                   <LogOut size={16} />
//                   Log Out
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       )}
//     </GoogleOAuthProvider>
//   );
// };

// export default GoogleAuth;
