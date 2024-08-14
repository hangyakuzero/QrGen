import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 flex justify-between items-center p-4">
      <a className="btn btn-ghost text-xl">Generate QR Code!</a>
   
     <Link href="https://x.com/imHangyaku">
     <div className="btn btn-ghost text-3xl">
     𝕏
     </div>
     </Link> 
        
    
    </div>
  );
}
