import Navbar from "../components/Navbar";
import prof from '../assets/rightimg.jpg'
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Skills(){
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
       <div className="w-full md:w-full mt-20 p-5 text-white bg-white/10 rounded-lg backdrop-blur mr-10">
           <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-4xl">These are my skills right now!</h1>    
           <br/>  
           <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-2xl">🌟 Web Development</h1>    
             
             <br/> 
             <ul className="list-disc ml-6 text-white">
                    <li>React + Vite, Next.js</li>
                    <li>Tailwind CSS, Bootstrap</li>
                    <li>Nodejs + express</li>
                    <li>Fastify - API</li>
                    <li>PHP(Laravel),PHP vanilla </li>
                    <li>Python Django </li>
                    
                </ul>
            <br/> 
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-2xl">🌟 Deployment</h1>    
             
             <br/> 
             <ul className="list-disc ml-6 text-white">
                    <li>Github, github actions</li>
                    <li>Docker</li>
                    <li>Linux server</li>
                    <li>Kubernetes</li>
                    <li>AWS ec2, lamda, route53, load balancers, RDBMS</li>
                    <li>Nginx</li>
                </ul>    
        </div>
        <div className="w-full md:w-full mt-20 p-5 bg-white/10 rounded-lg backdrop-blur">
           <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-2xl mt-20">🌟 Mobile App Development</h1>    
             
             <br/> 
             <ul className="list-disc ml-6 text-white">
                    <li>React-native expo</li>
                    <li>Android Studio</li>
                    <li>Java</li>
                </ul> 

            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-2xl mt-10">🌟 AI Integration</h1>    
             
             <br/> 
             <ul className="list-disc ml-6 text-white ">
                    <li>OpenAI, Chatgpt, Copilot</li>
                    <li>Machine learning: PyTorch, TensorFlow / Keras , scikit-learn, Pandas,matplotlib</li>
                    
                </ul>

              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-2xl mt-10">🌟 Database Management</h1>    
             
             <br/> 
             <ul className="list-disc ml-6 text-white ">
                    <li>Database schema</li>
                    <li>MySQL, PosgreSQL, MongoDB</li>   
                    <li>ETL(Extract Transfer Load)</li>   
                    <li>Saas: RDS,DynamoDB</li>   
                </ul>
                  
        </div>
    </div>
    <Footer />
    </>
 )
}