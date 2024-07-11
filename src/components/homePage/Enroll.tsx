"use client";

export default function Enroll() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto flex flex-col items-center mb-10">
        <div className="w-full lg:w-3/6 md:w-1/2 text-gray-900 bg-customBlueBg2 rounded-lg p-8 flex flex-col items-center md:mt-0">
          <p className="leading-relaxed mt-4 text-center mb-8">
            Insira as suas informações pessoais abaixo para garantir a sua
            inscrição gratuita!
          </p>
          <div className="relative mb-4 w-full">
            <label
              htmlFor="full-name"
              className="leading-7 text-normal text-customBlue3 font-semibold m-1"
            >
              Nome Completo:
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="mt-2 w-full shadow-lg bg-white rounded-lg border border-gray-300 focus:border-customBlue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-10 w-full">
            <label
              htmlFor="email"
              className="leading-7 text-normal text-customBlue3 font-semibold m-1"
            >
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full shadow-lg bg-white rounded-lg border border-gray-300 focus:border-customBlue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-white bg-customBlue border-0 py-2 px-14 focus:outline-none hover:bg-customBlue2 rounded-2xl text-lg shadow-lg">
            Realizar inscrição
          </button>
        </div>
      </div>
    </section>
  );
}
