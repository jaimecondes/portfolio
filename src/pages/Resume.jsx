import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import resume from "../assets/resume2025.pdf";
import { useEffect, useState } from "react";

export default function Resume() {
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
        <div className="mt-20 px-5 text-white max-w-6xl mx-auto">
          <div id="pdfWrap" className="h-[600px] w-[800px] border">
            <iframe
              src={`${resume}#toolbar=0&navpanes=0`} 
              className="h-full w-full"
              loading="lazy"
              title="Resume PDF"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
