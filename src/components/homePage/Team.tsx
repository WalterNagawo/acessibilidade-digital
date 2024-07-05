import Image from "next/image";

const people = [
  {
    imageUrl:
      "/perfil2.png",
  },
  {
    imageUrl:
      "/perfil1.png",
  },
  {
    imageUrl:
      "/perfil5.png",
  },
  {
    imageUrl:
      "/perfil3.png",
  },
  {
    imageUrl:
      "/perfil4.png",
  },
];

export default function Team() {
  return (
    <div className="bg-white relative mb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center relative z-10">
        <ul role="list" className="flex gap-x-2">
          {people.map((person, index) => (
            <li key={index} className="flex-shrink-0">
              <div className="flex items-center justify-center">
                <Image
                  alt=""
                  src={person.imageUrl}
                  width={80}
                  height={80}
                  className="h-16 w-16 rounded-full"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-9 relative z-0">
        <button className="flex items-center bg-customBlue text-white text-xl font-semibold py-5 px-9 rounded-xl shadow-lg hover:bg-customBlue2 focus:outline-none focus:ring-2 focus:ring-customBlue2 focus:ring-offset-2 -mt-12">
          Saiba mais detalhes sobre os nossos palestrantes
        </button>
      </div>
    </div>
  );
}
