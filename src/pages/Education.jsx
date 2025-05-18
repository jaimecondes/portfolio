import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import evsu from "../assets/evsu.jpeg";
import evsug from "../assets/evsug.jpeg";
import { useEffect, useState } from "react";

export default function Education() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />

      <div
        className={`w-full flex flex-col md:flex-row transition-all duration-1000 ease-out transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <section class="max-w-5xl mx-auto px-4 py-12">
  <h2 class="text-white text-3xl font-bold text-center mb-10 mt-35">Education</h2>

  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

    <article
      class="relative overflow-hidden rounded-xl shadow-lg bg-white/5 backdrop-blur
             flex flex-col text-white
             h-[420px] sm:h-[360px] md:h-[320px] lg:h-[300px]">
      
      <img
        src={evsu}
        alt="Eastern Visayas State University seal"
        class="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />

      
      <div class="relative p-6 flex flex-col flex-1">
        <header class="mb-4">
          <h3 class="text-lg sm:text-xl font-semibold">
            Bachelor of Science in Information Technology
          </h3>
          <p class="text-xs sm:text-sm opacity-80">
            Eastern Visayas State University · 2017 – 2021
          </p>
        </header>

        <ul class="mt-auto space-y-1 text-xs sm:text-sm list-disc list-inside opacity-90">
          <li>Specialized in full-stack web development</li>
          <li>Started Freelancing (2017)</li>
          <li>Capstone: “Rescue Tracking and Monitoring System”</li>
        </ul>
      </div>
    </article>

   
    <article
      class="relative overflow-hidden rounded-xl shadow-lg bg-white/5 backdrop-blur
             flex flex-col text-white
             h-[420px] sm:h-[360px] md:h-[320px] lg:h-[300px]"
    >
      <img
        src={evsug}
        alt="Eastern Visayas State University grad school"
        class="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />

      <div class="relative p-6 flex flex-col flex-1">
        <header class="mb-4">
          <h3 class="text-lg sm:text-xl font-semibold">
            Master of Science in Information Technology
          </h3>
          <p class="text-xs sm:text-sm opacity-80">
            Eastern Visayas State University (Graduate Studies)
          </p>
        </header>

        <ul class="mt-auto space-y-1 text-xs sm:text-sm list-disc list-inside opacity-90">
          <li>Focus on data analytics &amp; machine learning</li>
          <li>Ongoing</li>
          <li>Thesis: Ongoing</li>
        </ul>
      </div>
    </article>

  </div>
</section>
</div>
      <Footer />
    </>
  );
}
