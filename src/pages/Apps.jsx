import Navbar from "../components/Navbar";
import rescue from '../assets/ormoc.webp'
import pic from '../assets/pic.png'
import ikea from '../assets/ikea.png'
import stonino from '../assets/stonino.png'
import Footer from "../components/Footer";
import { useEffect, useState } from "react";



export default function Apps(){
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
       <div className="mt-20 px-5 text-white max-w-6xl mx-auto">

 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

    
        <section className="space-y-6 order-2 md:order-1">
        <h2 className="text-2xl font-semibold">Quick facts</h2>

        <div className="grid sm:grid-cols-2 gap-4">
            <article className="p-4 bg-white/10 rounded-lg backdrop-blur">
            <h3 className="font-medium text-lg">Real-time Tracking</h3>
            <p className="text-sm opacity-80">
                Follow every dispatched unit live on the map, down to street level.
            </p>
            </article>

            <article className="p-4 bg-white/10 rounded-lg backdrop-blur">
            <h3 className="font-medium text-lg">Incident History</h3>
            <p className="text-sm opacity-80">
                Review past responses, crew actions, and resolution times.
            </p>
            </article>

            <article className="p-4 bg-white/10 rounded-lg backdrop-blur">
            <h3 className="font-medium text-lg">Analytics</h3>
            <p className="text-sm opacity-80">
                Identify bottlenecks with automated KPI dashboards.
            </p>
            </article>

            <article className="p-4 bg-white/10 rounded-lg backdrop-blur">
            <h3 className="font-medium text-lg">Offline Sync</h3>
            <p className="text-sm opacity-80">
                Field devices keep logging even when the signal drops.
            </p>
            </article>
        </div>
        </section>

        {/* ────────── RIGHT  – Title + hero image ────────── */}
        <aside className="flex flex-col items-center order-1 md:order-2">
        <h1 className="text-center md:text-right text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Rescue&nbsp;<br className="hidden md:block" />
            Tracking&nbsp;<br className="hidden md:block" />
            &amp; Monitoring&nbsp;<br className="hidden md:block" />
            System
        </h1>

        {/* Image width is responsive; max-w keeps it from overflowing */}
        <img
            src={rescue}
            alt="Rescue team illustration"
            className="w-1/2 max-w-[420px] mt-6 md:mt-10"
        />
        </aside>

    </div>
    </div>
    </div>

    {/* another system*/}
     <div className={`w-full flex flex-col md:flex-row  transition-all duration-1000 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
       <div className="mt-20 px-5 text-white max-w-6xl mx-auto">

 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

    
        <section className="space-y-6 order-2 md:order-1">
        <h2 className="text-2xl font-semibold">Quick facts</h2>

        <div className="grid sm:grid-cols-2 gap-4">
            <article className="p-4 bg-white/10 rounded-lg backdrop-blur">
            <h3 className="font-medium text-lg">Real-time Attendance Tracking</h3>
            <p className="text-sm opacity-80">
                Live tracking of breaks and time logs of the employees.
            </p>
            </article>

            <article className="p-4 bg-white/10 rounded-lg backdrop-blur">
            <h3 className="font-medium text-lg">Admin Access</h3>
            <p className="text-sm opacity-80">
                Admin can do all the settings of an employee profiles.
            </p>
            </article>

            <article className="p-4 bg-white/10 rounded-lg backdrop-blur">
            <h3 className="font-medium text-lg">Payroll</h3>
            <p className="text-sm opacity-80">
                Payroll Integrated, Realtime payslip auto calculated when employee log's out.
            </p>
            </article>

            <article className="p-4 bg-white/10 rounded-lg backdrop-blur">
            <h3 className="font-medium text-lg">Perfomance Management</h3>
            <p className="text-sm opacity-80">
                Supervisors are able to manage the performance of an employee
            </p>
            </article>
        </div>
        </section>

        {/* ────────── RIGHT  – Title + hero image ────────── */}
        <aside className="flex flex-col items-center order-1 md:order-2">
        <h1 className="text-center md:text-right text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Company&nbsp;<br className="hidden md:block" />
            Omnichannel System&nbsp;<br className="hidden md:block" />
           
        </h1>

        {/* Image width is responsive; max-w keeps it from overflowing */}
        <img
            src={pic}
            alt=""
            className="w-full max-w-[420px] mt-6 md:mt-10"
        />
        </aside>

    </div>
    </div>
    </div>

    {/* another system*/}
     <div className={`w-full flex flex-col md:flex-row  transition-all duration-1000 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
       <div className="mt-20 px-5 text-white max-w-6xl mx-auto">

 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

    
        <section className="space-y-6 order-2 md:order-1">
        <h2 className="text-2xl font-semibold">Quick facts</h2>

        <div className="grid sm:grid-cols-2 gap-4">
            <article className="p-4 bg-white/10 rounded-lg backdrop-blur">
            <h3 className="font-medium text-lg">Real-time Inventory Tracking</h3>
            <p className="text-sm opacity-80">
                Live tracking of product inventory.
            </p>
            </article>

            <article className="p-4 bg-white/10 rounded-lg backdrop-blur">
            <h3 className="font-medium text-lg">Admin Access</h3>
            <p className="text-sm opacity-80">
                Admin can do all the settings of products.
            </p>
            </article>

            <article className="p-4 bg-white/10 rounded-lg backdrop-blur">
            <h3 className="font-medium text-lg">System Users</h3>
            <p className="text-sm opacity-80">
                Bakers, Decorators, Hot kitchen, Delivery and Admin.
            </p>
            </article>

            <article className="p-4 bg-white/10 rounded-lg backdrop-blur">
            <h3 className="font-medium text-lg">Manage Production</h3>
            <p className="text-sm opacity-80">
                Admin can manage production of Cakes and Snacks
            </p>
            </article>
        </div>
        </section>

        {/* ────────── RIGHT  – Title + hero image ────────── */}
        <aside className="flex flex-col items-center order-1 md:order-2">
        <h1 className="text-center md:text-right text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Inventory&nbsp;<br className="hidden md:block" />
            Management System&nbsp;<br className="hidden md:block" />
           
        </h1>

        {/* Image width is responsive; max-w keeps it from overflowing */}
        <img
            src={ikea}
            alt=""
            className="w-full max-w-[420px] mt-6 md:mt-10"
        />
        </aside>

    </div>
    </div>
    </div>

     {/* another system*/}
     <div className={`w-full flex flex-col md:flex-row  transition-all duration-1000 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
       <div className="mt-20 px-5 text-white max-w-6xl mx-auto">

 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

    
        <section className="space-y-6 order-2 md:order-1">
        <h2 className="text-2xl font-semibold">Quick facts</h2>

        <div className="grid sm:grid-cols-2 gap-4">
            <article className="p-4 bg-white/10 rounded-lg backdrop-blur">
            <h3 className="font-medium text-lg">Enrollment</h3>
            <p className="text-sm opacity-80">
                Students can submit enrollment from the portal.
            </p>
            </article>

            <article className="p-4 bg-white/10 rounded-lg backdrop-blur">
            <h3 className="font-medium text-lg">Registrar</h3>
            <p className="text-sm opacity-80">
               Manage all students information
            </p>
            </article>

            <article className="p-4 bg-white/10 rounded-lg backdrop-blur">
            <h3 className="font-medium text-lg">System Users</h3>
            <p className="text-sm opacity-80">
                Admin, Students, Faculty.
            </p>
            </article>

            <article className="p-4 bg-white/10 rounded-lg backdrop-blur">
            <h3 className="font-medium text-lg">Updates</h3>
            <p className="text-sm opacity-80">
                Timely updates for paches and new features
            </p>
            </article>
        </div>
        </section>

        {/* ────────── RIGHT  – Title + hero image ────────── */}
        <aside className="flex flex-col items-center order-1 md:order-2">
        <h1 className="text-center md:text-right text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            School&nbsp;<br className="hidden md:block" />
            Management System&nbsp;<br className="hidden md:block" />
           
        </h1>

        {/* Image width is responsive; max-w keeps it from overflowing */}
        <img
            src={stonino}
            alt=""
            className="w-full max-w-[420px] mt-6 md:mt-10"
        />
        </aside>

    </div>
    </div>
    </div>
    <Footer />
    </>
 )
}