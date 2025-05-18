import prof from '../assets/rightimg.jpg'
import prof1 from '../assets/banner.webp'
import prof2 from '../assets/tech.jpg'
import prof3 from '../assets/profme2.jpg'
export default function Right() {
  return (
   <div className="flex flex-col md:flex-row flex-wrap gap-4 p-4">
     <div className="w-full md:w-[22rem] p-2 items-center justify-center" style={{ backgroundColor: '#0D1220' }}>
      <div className="w-50 h-50 rounded-full overflow-hidden mx-auto">
        <img src={prof3} alt="Profile" className="w-full h-full object-cover" />
      </div>
  </div>
<div className="w-full md:w-[30rem] p-2 flex gap-4 rounded" style={{ backgroundColor: '#0D1220' }} >
    <div className="w-18 h-18 rounded-full overflow-hidden mx-auto">
      <img src={prof} alt="Profile" className="w-full h-full object-cover" />
    </div>
    <p className="text-white">Aspiring Software Engineer Ready to take the challenge.<br/> Let's make your ideas come to life</p>
  </div>

    <div className="w-full md:w-[30rem] p-2 flex gap-4 rounded">
      <div className="w-18 h-18 rounded-full overflow-hidden">
        <img src={prof1} alt="Profile" className="w-full h-full object-cover" /> 
      </div>
       <p className="text-white">Over 7 years of experience as a full stack developer <br/> Develop new apps tailored to your needs</p>
    </div>

 

  <div className="w-full md:w-[30rem] p-2 flex gap-4 rounded" style={{ backgroundColor: '#0D1220' }}>
    <div className="w-18 h-18 rounded-full overflow-hidden">
      <img src={prof2} alt="Profile" className="w-full h-full object-cover" />
    </div>
     <p className="text-white">Maintainable clean code, Best practices, Security in mind <br/> Design, Develop, Deploy, Maintain</p>
  </div>

 
</div>
  )
}