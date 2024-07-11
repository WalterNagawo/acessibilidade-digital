import Head from "next/head";
import Image from "next/image";

const specialists = [
  {
    imgSrc: "/sponsors/sponsor-1.png",
    description:
      "TechCorp é líder em tecnologia acessível, oferecendo soluções inovadoras para tornar o mundo digital mais inclusivo.Website: www.techcorp.com",
  },
  {
    imgSrc: "/sponsors/sponsor-2.png",
    description:
      "InovaSoft desenvolve softwares que ajudam empresas a implementar acessibilidade em suas plataformas.Website: www.inovasoft.com",
  },
  {
    imgSrc: "/sponsors/sponsor-3.png",
    description:
      "AccessIT fornece consultoria e ferramentas para melhorar a acessibilidade de websites e aplicativos.Website: www.accessit.com",
  },
  {
    imgSrc: "/sponsors/sponsor-4.png",
    description:
      "Global Inclusion promove a inclusão digital através de treinamentos e certificações em acessibilidade.Website: www.globalinclusion.org",
  },
  {
    imgSrc: "/sponsors/sponsor-5.png",
    description:
      "InclusivaTech é uma startup dedicada a criar produtos tecnológicos acessíveis para todos.Website: www.inclusivatech.com",
  },
  {
    imgSrc: "/sponsors/sponsor-6.png",
    description:
      "EasyAccess desenvolve ferramentas que facilitam a navegação na web para pessoas com deficiência visual.Website: www.easyaccess.com",
  },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog page" />
      </Head>
      <section className="text-gray-600 body-font bg-customBlueBg3">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-10 mt-10">
            <h1 className="sm:text-4xl text-3xl font-semibold title-font text-customBlue">
              Conheça os especialistas do evento
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {specialists.map((specialist, index) => (
              <div key={index} className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white">
                  <Image
                    className="lg:h-64 md:h-36 w-full object-cover object-center"
                    width={500}
                    height={500}
                    src={specialist.imgSrc}
                    alt="blog"
                  />
                  <div className="p-6">
                    <p className="leading-relaxed mb-3 text-center text-black font-medium">
                      {specialist.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
