import AnimatedText from "@/components/animatedtext";
import { GithubIcon } from "@/components/icons";
import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/transitioneffect";

const FramerImage = motion(Image);


const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border border-solid rounded-br-2xl
        border-dark bg-light shadow-2xl p-10 relative dark:bg-dark dark:border-light md:flex-col lg:p-8
        xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
    <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-x-hidden rounded-lg md:w-full"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto" 
         whileHover={{scale:0.9}}
         transition={{duration:0.2}}
          priority
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 md:w-full md:pl-0 md:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full text-left text-3xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="mt-1 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-2 rounded-lg bg-dark text-light 
                    p-2 px-6 text-md font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark
    bg-light p-6 relative shadow-2xl dark:bg-dark dark:border-light xs:p-4">
<div className='absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[1.5rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[100%] xs:h-[102%] xs:rounded-[1.5rem]'/>

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-x-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto" 
         whileHover={{scale:0.9}}
         transition={{duration:0.2}}/>
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full text-left text-2xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
        <Link
            href={link}
            target="_blank"
            className="ml-1 underline
                 text-lg font-semibold md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon /> {" "}
          </Link>
          
        </div>
      </div>
    </article>
  );
};

function Projects() {
  return (
    <>
      <Head>
        <title>Usama Khalid | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-12">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 lg:gap-x-16 md:gap-x-8 sm:gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                img={project1}
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="#"
                github="#"
                type="featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
                <Project
                img={project1}
                title="Crypto Screener Application"
                link="#"
                github="#"
                type="featured Project"
                />
            </div>
            <div className="col-span-6 sm:col-span-12"> <Project
                img={project1}
                title="Crypto Screener Application"
                link="#"
                github="#"
                type="featured Project"
                /></div>
            <div className="col-span-12"><FeaturedProject
                img={project1}
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="#"
                github="#"
                type="featured Project"
              /></div>
            <div className="col-span-6 sm:col-span-12"> <Project
                img={project1}
                title="Crypto Screener Application"
                link="#"
                github="#"
                type="featured Project"
                /></div>
            <div className="col-span-6 sm:col-span-12"> <Project
                img={project1}
                title="Crypto Screener Application"
                link="#"
                github="#"
                type="featured Project"
                /></div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default Projects;
