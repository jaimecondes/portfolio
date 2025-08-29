import Navbar from "../components/Navbar";
import rescue from '../assets/location.webp'
import pic from '../assets/pic.png'
import ikea from '../assets/ikea.png'
import stonino from '../assets/stonino.png'
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Apps() {

  return (
    <>
      <Navbar />

      {/* First Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex flex-col md:flex-row"
      >
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

            <aside
                className="relative flex flex-col items-center justify-center order-1 md:order-2 w-full h-50 md:h-[300px] 
                            bg-cover bg-center rounded-2xl shadow-lg"
                style={{ backgroundImage: `url(${rescue})` }} // replace pic with your imported image
                >
                {/* Overlay to make text readable */}
                <div className="absolute inset-0 bg-black/80 rounded-2xl"></div>

                <motion.h2
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative z-10 text-center md:text-center 
                            text-2xl md:text-3xl lg:text-3xl 
                            font-bold leading-tight text-white"
                >
                    Rescue Tracking and&nbsp;<br className="hidden md:block" />
                   Monitoring System&nbsp;<br className="hidden md:block" />
                </motion.h2>
                </aside>
          </div>
        </div>


        
      </motion.div>

    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex flex-col md:flex-row"
      >
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

           <aside
                className="relative flex flex-col items-center justify-center order-1 md:order-2 w-full h-50 md:h-[300px] 
                            bg-cover bg-center rounded-2xl shadow-lg"
                style={{ backgroundImage: `url(${pic})` }} // replace pic with your imported image
                >
                {/* Overlay to make text readable */}
                <div className="absolute inset-0 bg-black/80 rounded-2xl"></div>

                <motion.h2
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative z-10 text-center md:text-center 
                            text-2xl md:text-3xl lg:text-3xl 
                            font-bold leading-tight text-white"
                >
                    Company&nbsp;<br className="hidden md:block" />
                    Omnichannel System&nbsp;<br className="hidden md:block" />
                </motion.h2>
                </aside>

          </div>
        </div>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex flex-col md:flex-row"
      >
        <div className="mt-20 px-5 text-white max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
     <section className="space-y-6 order-2 md:order-1">
        <h2 className="text-2xl font-semibold">Quick facts</h2>

        <div className="grid sm:grid-cols-2 gap-4">
            <article className="p-4 bg-white/10 rounded-lg backdrop-blur">
            <h3 className="font-medium text-lg">Enrollment</h3>
            <p className="text-sm opacity-80">
                Students can submit enrollment request from the website
            </p>
            </article>

            <article className="p-4 bg-white/10 rounded-lg backdrop-blur">
            <h3 className="font-medium text-lg">Admin Access</h3>
            <p className="text-sm opacity-80">
                Admin can change all the settings of the system.
            </p>
            </article>

            <article className="p-4 bg-white/10 rounded-lg backdrop-blur">
            <h3 className="font-medium text-lg">System Users</h3>
            <p className="text-sm opacity-80">
                Users has their own accounts intended for them filtered by user level
            </p>
            </article>

            <article className="p-4 bg-white/10 rounded-lg backdrop-blur">
            <h3 className="font-medium text-lg">Amounts</h3>
            <p className="text-sm opacity-80">
               All amounts are kept by the cashiers account
            </p>
            </article>
        </div>
        </section>

           <aside
                className="relative flex flex-col items-center justify-center order-1 md:order-2 w-full h-50 md:h-[300px] 
                            bg-cover bg-center rounded-2xl shadow-lg"
                style={{ backgroundImage: `url(${stonino})` }} // replace pic with your imported image
                >
                {/* Overlay to make text readable */}
                <div className="absolute inset-0 bg-black/80 rounded-2xl"></div>

                <motion.h2
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative z-10 text-center md:text-center 
                            text-2xl md:text-3xl lg:text-3xl 
                            font-bold leading-tight text-white"
                >
                    School&nbsp;<br className="hidden md:block" />
                    Management System&nbsp;<br className="hidden md:block" />
                </motion.h2>
                </aside>

          </div>
        </div>

      </motion.div>
      


      <Footer />
    </>
  );
}
