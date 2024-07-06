import Image from "next/image";

const people = [
  {
    imageUrl: "/patrocinador-1.png",
  },
  {
    imageUrl: "/patrocinador-2.png",
  },
  {
    imageUrl: "/patrocinador-3.png",
  },
  {
    imageUrl: "/patrocinador-4.png",
  },
  {
    imageUrl: "/patrocinador-5.png",
  },
  {
    imageUrl: "/patrocinador-6.png",
  },
];

export default function Sponsors() {
  return (
    <div className="bg-white relative mb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center relative z-10">
        <ul role="list" className="flex gap-x-2 sm:gap-x-4 -mb-2 z-10">
          {people.map((person, index) => (
            <li key={index} className="flex-shrink-0">
              <div className="flex items-center justify-center">
                <Image
                  alt=""
                  src={person.imageUrl}
                  width={80}
                  height={80}
                  className="h-14 w-14 rounded-full"
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center relative z-0">
          <button className="flex items-center bg-customBlue text-white text-xl font-semibold py-4 px-9 rounded-xl shadow-lg hover:bg-customBlue2 focus:outline-none focus:ring-2 focus:ring-customBlue2 focus:ring-offset-2">
            Confira nossos patrocinadores que fazem a diferença!
          </button>
        </div>
      </div>
    </div>
  );
}
