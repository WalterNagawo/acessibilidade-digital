"use client";

import { useState } from "react";

export default function Enroll() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col items-center">
        {/* <div className="w-full lg:w-3/5 md:w-1/2 mb-10">
          <h1 className="title-font font-medium text-3xl text-gray-900 text-center">
            Slow-carb next level shoindcgoitch ethical authentic, poko scenester
          </h1>
          <p className="leading-relaxed mt-4 text-center">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify
            hammock starladder roathse. Craies vegan tousled etsy austin.
          </p>
        </div> */}
        <div className="w-full lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col items-center md:mt-0">
          <p className="leading-relaxed mt-4 text-center">
            Insira as suas informações pessoais abaixo para garantir a sua
            inscrição gratuita!
          </p>
          {/* <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign Up
          </h2> */}
          <div className="relative mb-4 w-full">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4 w-full">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
          <p className="text-xs text-gray-500 mt-3 text-center">
            Literally you probably havent heard of them jean shorts.
          </p>
        </div>
      </div>
    </section>
  );
}
