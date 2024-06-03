'use client'

import FooterMain from '@/components/local/FooterMain'
import Nav from '@/components/local/Nav'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [counter, setCounter] = useState(5); // Initial countdown value

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000); // Decrease the counter every second

    const redirectTimeout = setTimeout(() => {
      window.location.href = 'https://discord.com/oauth2/authorize?client_id=810192936472936480&scope=bot&permissions=7168'; // Replace with your target URL
    }, 5000); // Redirect after 5 seconds

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimeout);
    }; // Cleanup timers on component unmount
  }, []);

  return (
    <div>
      <Nav />
      <div className='h-screen mx-auto flex justify-center items-center align-middle text-center'>
        <div>
          <h1 className='text-4xl font-bold text-gray-800 mb-4'>Redirecting...</h1>
          <p className='text-xl text-gray-600'>You will be redirected in {counter} seconds.</p>
        </div>
      </div>
      <FooterMain />
    </div>
  );
}

export default Page;
