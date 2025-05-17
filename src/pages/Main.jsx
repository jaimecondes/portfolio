import Footer from "../components/Footer";
import Header from "../components/Header";
import Right from "../components/Right";
import Stars from "../components/Stars";


export default function Main() {
    return(
    <>
    
       <div className="w-full flex flex-col md:flex-row">
        <Stars />
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