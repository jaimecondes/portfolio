
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'


export default function Footer(){
    return(<>

<footer class="m-3 bg-gray-900 text-white py-6 z-5">
  <div class="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
    <p class="text-sm">&copy; {new Date().getFullYear()}  Jaime Condes | jaimecondes537@gmail.com | +639610899830</p>
    <div class="flex space-x-4 mt-4 sm:mt-0">
      <a href="https://github.com/jaimecondes" target="_blank" class="hover:text-gray-400 transition">
        
       <img src={github} alt="" className='w-10 h-10'/>
      </a>
      <a href="https://linkedin.com/in/jaimecondes" target="_blank" class="hover:text-gray-400 transition">
       
        <img src={linkedin} alt="" className='w-10 h-10'/>
      </a>
    </div>
  </div>
</footer>
        </>);
}