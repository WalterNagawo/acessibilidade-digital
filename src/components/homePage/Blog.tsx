"use client";

import Image from "next/image";
import React from "react";

const Blog = () => {
  const articles = [
    {
      description:
        "Transformar barreiras em pontes é o primeiro passo para uma sociedade mais justa e inclusiva.",
      authorName: "Dr. João Silva",
      authorImage: "/perfil2.png",
      authorRole: "Pioneiro em Tecnologia Assistiva",
    },
    {
      description:
        "Na acessibilidade digital, cada inovação representa uma vitória significativa para a inclusão, abrindo portas para todos.",
      authorName: "Pedro Santos",
      authorImage: "/perfil1.png",
      authorRole: "Consultor em Acessibilidade Web",
    },
    {
      description:
        "Acessibilidade não é apenas uma opção, é um direito de todos. Inovar é garantir que todos tenham oportunidades.",
      authorName: "Maria Oliveira",
      authorImage: "/perfil3.png",
      authorRole: "Especialista em Inclusão Digital",
    },
  ];

  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="flex flex-col text-center w-full mb-16">
        <h1 className="sm:text-4xl text-3xl font-semibold title-font text-customBlue">
          Informações do evento
        </h1>
      </div>
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full mb-20">
        {articles.map((article, index) => (
          <div
            key={index}
            className="p-8 bg-customBlueBg border rounded shadow-sm border-customBlueBorder"
          >
            <p className="mb-5 text-gray-700 text-center">
              {article.description}
            </p>
            <div className="flex items-center">
              <a href="/" aria-label="Author" title="Author" className="mr-3">
                <Image
                  src={article.authorImage}
                  alt="avatar"
                  width={80}
                  height={80}
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  {article.authorName}
                </a>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  {article.authorRole}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
