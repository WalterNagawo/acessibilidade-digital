import Image from "next/image";

const speakers = [
  {
    name: "Dr. João Silva",
    imageUrl: "/perfil-2.png",
    biography:
      "Dr. João Silva é especialista em acessibilidade digital e tem mais de 20 anos de experiência na área. É autor de diversos artigos e livros sobre o tema.",
    talk: "Abertura e Encerramento",
    summary:
      "Dr. João Silva fará a abertura do evento abordando a importância da acessibilidade digital na sociedade contemporânea e encerrará o evento com um resumo das discussões e encaminhamentos.",
  },
  {
    name: "Pedro Santos",
    imageUrl: "/perfil-1.png",
    biography:
      "Pedro Santos é consultor em tecnologias assistivas e tem colaborado com diversas empresas para tornar suas plataformas mais acessíveis.",
    talk: "Ferramentas de Inclusão",
    summary:
      "Este workshop apresentará ferramentas e recursos que podem ser utilizados para melhorar a acessibilidade de diferentes tipos de software e plataformas.",
  },
  {
    name: "Maria Pereira",
    imageUrl: "/perfil-5.png",
    biography:
      "Maria Pereira é desenvolvedora web com foco em acessibilidade. Trabalhou em projetos de inclusão digital para várias ONGs.",
    talk: "Acessibilidade Web",
    summary:
      "A palestra abordará as melhores práticas para desenvolver websites acessíveis, incluindo o uso de ferramentas e técnicas de design inclusivo.",
  },
  {
    name: "Ana Souza",
    imageUrl: "/perfil-3.png",
    biography:
      "Ana Souza é arquiteta de informação e trabalha com design universal para ambientes digitais.",
    talk: "Design Universal",
    summary:
      "A palestra discutirá os princípios do design universal e como eles podem ser aplicados para criar produtos e serviços que atendam a todas as pessoas.",
  },
  {
    name: "Carla Mendes",
    imageUrl: "/perfil-4.png",
    biography:
      "Carla Mendes é engenheira de software especializada em desenvolvimento de aplicativos móveis com foco em acessibilidade.",
    talk: "Acessibilidade em Apps",
    summary:
      "Este workshop abordará como implementar funcionalidades de acessibilidade em aplicativos móveis, desde o design até o desenvolvimento.",
  },
];

export default function Speakers() {
  return (
    <section className="text-gray-600 body-font bg-customBlueBg3">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10 mt-10">
          <h1 className="sm:text-4xl text-3xl font-semibold title-font text-customBlue">
            Conheça os especialistas do evento
          </h1>
        </div>
        <div className="flex flex-wrap -m-2">
          {speakers.map((speaker, index) => (
            <div key={index} className="p-2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white">
                <Image
                  alt={speaker.name}
                  src={speaker.imageUrl}
                  width={80}
                  height={80}
                  quality={100}
                  className="w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    {speaker.name}
                  </h2>
                  <p className="text-gray-500 mb-2">
                    <span className="font-semibold">Biografia:</span>{" "}
                    {speaker.biography}
                  </p>
                  <p className="text-gray-500 mb-2">
                    <span className="font-semibold">Palestra:</span>{" "}
                    {speaker.talk}
                  </p>
                  <p className="text-gray-500">
                    <span className="font-semibold">Resumo:</span>{" "}
                    {speaker.summary}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
