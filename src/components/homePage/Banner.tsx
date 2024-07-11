import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Banner() {
  return (
    <div>
      <div className="flex flex-col text-center w-full mb-10">
        <h1 className="sm:text-4xl text-3xl font-semibold title-font text-customBlue">
          Inscreva-se Agora
        </h1>
      </div>
      <div className="relative flex items-center justify-center bg-customBluePanel px-6 py-10">
        <p className="text-lg leading-6 text-white font-medium text-center">
          Não perca essa oportunidade única de aprendizado e conexão. Garanta já
          a sua vaga no 23º Simpósio Nacional de Acessibilidade Digital e faça
          parte dessa transformação.
        </p>
      </div>
    </div>
  );
}
