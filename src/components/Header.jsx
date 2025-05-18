import { Link } from "react-router-dom"

const links = [
  { name: 'Main page', href: '/' },  
  { name: 'About me', href: '/about' },
  { name: 'Skill sets', href: '/skills' },
  { name: 'Apps Developed', href: '/apps' },
  { name: 'My Resume', href: '/resume' },
]
const stats = [


  { name: 'Years of Experience', value: '7+' },
  { name: 'Expertise Languages', value: '7' },
  { name: 'Education', value: '2' },
  
]

export default function Header() {
  return (
    <div className="relative rounded-r-full isolate overflow-hidden bg-gray-900 py-24 sm:py-32 ">
      
      <div
        aria-hidden="true"
        className="max-w-100% hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="max-w-100% aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="rounded-sm absolute -z-10  transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="max-w-100% aspect-1024/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-4xl">Hi there!</h2>
          <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">I'm <span className="text-3xl font-semibold tracking-tight text-white sm:text-7xl">Jaime</span>,</p>
          <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Welcome to my Porfolio 
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
           
            {links.map((link) => (
             <Link 
             to={link.href}
             
             > 
                <span key={link.name} className="p-2 hover:p-2 rounded-full hover:bg-violet-500 text-white transition-all duration-300">
                    {link.name} <span aria-hidden="true">&rarr;</span>
                </span>
             </Link>
             
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}