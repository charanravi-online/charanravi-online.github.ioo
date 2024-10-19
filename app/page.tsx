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
        className={`flex flex-col items-center justify-center h-screen p-8 pb-20 gap-16 sm:p-20`}
      >
        <main className="flex flex-col gap-8 items-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl mt-8">Charan Ravi</h1>
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
              href="mailto:your-email@example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </div>
        </main>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 animate-bounce cursor-pointer">
          <span>&darr;</span>
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col items-center justify-center bg-white text-black p-16 gap-8">
        <p className="text-center max-w-prose">
          We're an award-winning creative design studio with a small team and big ideas. We pour passion into projects big and small, providing our expert clients with solutions to help them thrive. We specialize in transforming brands from the ordinary to the extraordinary.
        </p>
        <button className="rounded-full border border-solid border-black transition-colors flex items-center justify-center bg-transparent hover:bg-gray-200 text-sm sm:text-base h-12 px-5 min-w-[150px]">
          Let's Work Together
        </button>
      </section>

      {/* Gallery Section */}
      <section className="flex justify-around items-center p-16 bg-white text-black">
        {/* Using next/image to optimize image loading */}
        <Image src="/image1.png" alt="Cactus Image" width={400} height={300} />
        <Image src="/image2.png" alt="Product Image" width={400} height={300} />
      </section>

      {/* Footer */}
      <footer className="flex gap-6 flex-wrap items-center justify-center bg-gray-900 text-white p-8">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
