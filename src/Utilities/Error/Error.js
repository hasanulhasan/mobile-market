import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <main class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <img src="https://previews.123rf.com/images/alekseymartynov/alekseymartynov1611/alekseymartynov161100017/66466523-cartoon-cute-broken-mobile-phone.jpg?fj=1" alt=" broken mobile" className='h-56' />
        <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div class="bg-[#FF6A3D] px-2 text-lg text-white rounded rotate-12 absolute">
          Page Not Found
        </div>
        <button class="mt-5">
          <a class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
            <span
              class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
            ></span>
            <Link to="/" class="relative block px-8 py-3 bg-[#1A2238] border border-current">Go Home </Link>
          </a>
        </button>
      </main>
    </div>
  );
};

export default Error;