import Navbar from "../components/Navbar";
import prof from '../assets/rightimg.jpg'
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function About(){
    const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

 return(
    <>
    <Navbar />
    <div className={`w-full flex flex-col md:flex-row  transition-all duration-1000 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
       <div className="w-full md:w-full mt-20">
            <img src={prof} alt="" className="rounded-r-full"/>    
        </div>
        <div className="w-full md:w-full mt-20 p-5">
           <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-4xl">Hi, wanna know about me?</h1>    
            
            <p className="tracking-tight text-white mt-10">I’m an aspiring software engineer with 5+ years of experience building ERP systems for companies and small businesses.<span className="text-5xl font-semibold tracking-tight text-white sm:text-4xl">"Learn from your mistakes"</span> This phrase guides my work. I welcome challenges, enjoy debugging, and thrive on solving complex problems. With 5 + years in software development, 
                I specialize in React for both web and mobile applications—covering the full cycle from design → development → deployment → maintenance.<br/><br/>
                <span className="text-5xl font-semibold tracking-tight text-white sm:text-4xl">What drives me?</span>
                <p>“Learn from your mistakes.” This phrase fuels my growth. Every project has taught me valuable lessons that sharpen my craft.</p>
                <p>I thrive on solving complex problems, love debugging, and welcome challenges that push me beyond my comfort zone.</p>
                <ul className="list-disc ml-6 text-white">
                    <li>Fix small bugs early—they become big later.</li>
                    <li>Test thoroughly—never ship guesswork.</li>
                    <li>Decisions need proof, not assumptions.</li>
                    <li>Embrace feedback—it’s the fastest way to grow.</li>
                    
                </ul>
            </p>
        </div>
    </div>
    <Footer />
    </>
 )
}