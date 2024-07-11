import Head from "next/head";
import Image from "next/image";

const specialists = [
  {
    imgSrc: "/sponsors/sponsor-1.png",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    imgSrc: "/sponsors/sponsor-2.png",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    imgSrc: "/sponsors/sponsor-3.png",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    imgSrc: "/sponsors/sponsor-4.png",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    imgSrc: "/sponsors/sponsor-5.png",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    imgSrc: "/sponsors/sponsor-6.png",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
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
                    <p className="leading-relaxed mb-3">
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
