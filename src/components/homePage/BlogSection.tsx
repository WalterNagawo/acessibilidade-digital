export default function BlogSection() {
  const posts = [
    {
      title: "Oportunidades de Aprendizado e Networking",
      description:
        "Participe de workshops interativos, mesas-redondas e palestras inspiradoras com líderes do setor. Descubra as últimas tendências e inovações em acessibilidade digital e aprenda como aplicá-las em seu trabalho e comunidade.",
    },
    {
      title: "Venha Fazer Parte da Mudança!",
      description:
        "Junte-se a nós e contribua para um mundo digital mais acessível e inclusivo. Sua participação é essencial para moldarmos um futuro onde todos possam participar plenamente do universo digital.",
    },
    {
      title: "Motivação e Inclusão: O Futuro é para Todos!",
      description:
        "Transformar barreiras em pontes é o primeiro passo para uma sociedade mais justa e inclusiva.",
    },
  ];

  return (
    <section className="text-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {posts.map((post, index) => (
            <div key={index} className="p-4 lg:w-1/3">
              <div className="h-full bg-customBlue px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3 italic">
                  {post.title}
                </h1>
                <p className="leading-relaxed mb-3">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
