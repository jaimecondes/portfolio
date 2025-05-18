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
           <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-4xl">Hi, Wanna know about me?</h1>    
            
            <p className="tracking-tight text-white mt-10">I’m an aspiring software engineer who builds ERP systems for companies and small businesses. I specialize in creating web and mobile applications with React—from design and development through deployment and maintenance. 
                My past projects have taught me a lot, and each lesson fuels my growth. <span className="text-5xl font-semibold tracking-tight text-white sm:text-4xl">"Learn from your mistakes"</span> This phrase guides my work. I welcome challenges, enjoy debugging, and thrive on solving complex problems. With 5 + years in software development, 
                I’ve gained experience across every phase of the SDLC.
                life cycle.<br/><br/>
                <span className="text-5xl font-semibold tracking-tight text-white sm:text-4xl">My go-to techniques</span>
                <ul className="list-disc ml-6 text-white">
                    <li>Never ignore a small bug—fix it early.</li>
                    <li>Always test your work thoroughly.</li>
                    <li>Don’t approve anything without proof.</li>
                    <li>Base decisions on evidence, not hearsay.</li>
                    <li>Embrace feedback; it helps you grow.</li>
                </ul>
            </p>
        </div>
    </div>
    <Footer />
    </>
 )
}