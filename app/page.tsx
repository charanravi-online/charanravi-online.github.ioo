"use client";
import { Source_Code_Pro } from "@next/font/google";
import Image from "next/image"; // Importing image for using with your gallery

const sourceCodePro = Source_Code_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`min-h-screen animated-bg ${sourceCodePro.className}`}>
      {/* Hero Section */}
      <section
        className={`flex flex-col items-center justify-center  bg-black text-white h-screen p-8 pb-20 gap-16 sm:p-20`}
      >
        <main className="flex flex-col gap-8 items-center">
          <div className="flex flex-col items-center justify-center">
          <h1 className="text-custom-large mt-8 gradient-text">
          Charan Ravi
          </h1>
            <p className="text-sm mt-6">Software Development Engineer</p>
          </div>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            {/* Resume Button */}
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-12 px-5 min-w-[150px]"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>


            {/* Contact Button */}
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-12 px-5 min-w-[150px]"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact
            </a>
          </div>
        </main>

        {/* Scroll Down Indicator */}
        <div
        className="absolute bottom-10 animate-bounce cursor-pointer"
        onClick={() => {
          const section = document.getElementById("work");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <span>&darr;</span>
        </div>
      </section>


      {/* Work Section */}
      <section id="work" className="flex flex-col items-center justify-center bg-red-700 text-white p-16 gap-8">
      <h2 className="text-3xl mt-8">
            // WORK //
          </h2>
        <p className="text-center max-w-prose">
          
        </p>
        {/* <button className="rounded-full border border-solid border-black transition-colors flex items-center justify-center bg-transparent hover:bg-gray-200 text-sm sm:text-base h-12 px-5 min-w-[150px]">
          Let's Work Together
        </button> */}
      </section>

      {/* Gallery Section */}
      <section className="flex justify-around items-center p-16 bg-red-700 text-white">
        {/* Using next/image to optimize image loading */}
        <Image src="/image1.png" alt="Cactus Image" width={400} height={300} />
        <Image src="/image2.png" alt="Product Image" width={400} height={300} />
      </section>


      {/* Background Section */}
      <section id="background" className="flex flex-col items-center justify-center bg-black text-white p-16 gap-8">
      <h2 className="text-3xl mt-8">
          //BACKGROUND//
          </h2>
        <p className="text-center max-w-prose bg-black text-yellow-500">
        LG Soft India
        </p>
        <p className="text-center max-w-prose">
        I go the chance to work on several projects during my time at LG. Some of them include - webOS OSE, ATOM (a secret AI project I can't talk much about),
        and the prestigious H&A (Home Appliance & Air Solution) Division, where I go to work with firmwares for a lot of the products that LG has engineered. 
        </p>
        {/* <button className="rounded-full border border-solid border-black transition-colors flex items-center justify-center bg-transparent hover:bg-gray-200 text-sm sm:text-base h-12 px-5 min-w-[150px]">
          Let's Work Together
        </button> */}
      </section>
      <div className="h-64  bg-black"></div> {/* Creates a 4rem (64px) spacer */}

      
      {/* About Section */}
      <section id="about" className="flex flex-col items-center justify-center bg-red-700 text-white p-16 gap-8">
      <h2 className="text-3xl mt-8">
            // ABOUT //
          </h2>
        <p className="text-center max-w-prose">
        I'm a Software Developer with 3 years of experience across brand and product, at companies large and small. I'm currently actively looking for a new role.
        </p>
        <p className="text-left max-w-prose">
        I take pride in my craft, and love mentoring earlier career developers. I develop cross functional partnerships, and thrive in complex, ambiguous environments.
        </p> 
      


        
        {/* <button className="rounded-full border border-solid border-black transition-colors flex items-center justify-center bg-transparent hover:bg-gray-200 text-sm sm:text-base h-12 px-5 min-w-[150px]">
          Let's Work Together
        </button> */}
      </section>
      <div className="h-64  bg-red-700"></div> {/* Creates a 4rem (64px) spacer */}

      {/* Contact Section */}
      <section id="contact" className="flex flex-col items-center justify-center bg-black text-white p-16 gap-8">
      <h2 className="text-3xl mt-8">
            // CONTACT //
          </h2>
        <p className="text-center max-w-prose">
          charanravi.online@gmail.com
        </p>
        {/* <button className="rounded-full border border-solid border-black transition-colors flex items-center justify-center bg-transparent hover:bg-gray-200 text-sm sm:text-base h-12 px-5 min-w-[150px]">
          Let's Work Together
        </button> */}
      </section>
      <div className="h-64  bg-black"></div> {/* Creates a 4rem (64px) spacer */}

      

      {/* Footer */}
      <footer className="flex gap-6 flex-wrap items-center justify-center bg-gray-900 text-white p-8">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://instagram.com/charan.json"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://x.com/PyCharan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/charanravi-online"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
