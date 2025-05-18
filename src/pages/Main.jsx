import Footer from "../components/Footer";
import Header from "../components/Header";
import Right from "../components/Right";
import Stars from "../components/Stars";
import { useEffect, useState } from "react";

export default function Main() {
    const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

    return(
    <>
        <Stars />
       <div className={`w-full flex flex-col md:flex-row  transition-all duration-1000 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
        
        <div className="w-full md:w-full">
          <Header />
        </div>
        <div className="w-full md:w-1/2">
          <Right />
        </div>
       
      </div>
       <Footer />
    </>)
}