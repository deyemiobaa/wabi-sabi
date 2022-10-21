/* eslint-disable react/button-has-type */
import React from 'react';

import { useRouter } from 'next/router';

const Home = () => {
  const { push } = useRouter();

  return (
    <>
      <nav className="navigation hidden sm:flex justify-between pl-[153px] pr-[156px] drop-shadow-3xl font-roboto  align-text-bottom p-[10px]">
        <div>
          <img src="/assets/Logo.svg" alt="Logo" height={63} width={144} />
        </div>
        <div className="text-xl flex flex-row gap-2 pt-[17px] ">
          <a
            href="/account/register"
            className="no-underline text-green-700 font-bold"
          >
            Sign up
          </a>
          <a
            href="/account/login"
            className="no-underline text-green-700 font-bold"
          >
            Log In
          </a>
        </div>
      </nav>

      <main className="relative isolate flex flex-col justify-between items-center bg-gray-100 w-full h-screen overflow-hidden text-base text-black font-roboto">
        <img
          src="/assets/Logo.svg"
          alt="Logo"
          className="sm:hidden text-4xl tracking-[0.02em] grid place-items-center w-full h-1/2 font-black font-inherit text-gray-300  text-center"
        />
        <img src="/assets/Logo2.svg" alt="Logo" className="hidden sm:block " />

        <div className="relative w-full flex flex-col flex-grow items-center">
          <div className=" bg-ellipse absolute -z-10 rounded-[50%] bottom-0 translate-y-1/4 left-1/2 -translate-x-1/2 w-[180%] lg:w-[120%] h-[150%]" />
          <section className="relative text-black w-[263px] lg:self-start lg:ml-[20%] lg:mt-[2%] flex-grow-0 flex flex-col gap-5">
            <article className="flex gap-5 items-center">
              <img
                className="w-[68px] h-[64px]"
                alt="Landscape"
                src="/assets/Group 79.svg"
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-2xl">Relive Memories</h3>
                <p className="text-base">
                  Walk down memory lane and create a habit of creating new
                  memories
                </p>
              </div>
            </article>
            <article className="flex gap-5 items-center">
              <img
                className="w-[68px] h-[64px]"
                alt="Camera"
                src="/assets/Group 78.svg"
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-2xl">Storytelling</h3>
                <p className="text-base">
                  Share your authentic stories to real memories that matter the
                  most
                </p>
              </div>
            </article>
            <article className="flex gap-5 items-center">
              <img
                className="w-[68px] h-[64px]"
                alt="Handshake Heart"
                src="/assets/Group 77.svg"
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-2xl">Discover Memories</h3>
                <p className="text-base">
                  View and be inspired by the stories of other people
                </p>
              </div>
            </article>

            <div className="flex flex-col gap-2.5 items-center w-full sm:hidden">
              <button
                onClick={() => push('/account/register')}
                className="cursor-pointer inline-block mt-10 border-0 text-white p-2.5 rounded-[15px] bg-green-200 w-full"
              >
                Get Started
              </button>

              <a
                href="account/login"
                className="text-lg sm:hidden tracking-[0.02em] text-[inherit] inline-block text-center text-black"
              >
                Sign in to existing account
              </a>
            </div>
          </section>
          {/* <section>
            <div className="bg-white rounded-3xl w-[266px] h-[285px] shadow-3xl"></div>
          </section> */}
        </div>
      </main>
    </>
  );
};

export default Home;
