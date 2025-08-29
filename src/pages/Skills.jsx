import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FaReact, FaDocker, FaAws, FaDatabase, FaMobileAlt, FaBrain, FaTable } from "react-icons/fa";
import { SiTensorflow, SiKubernetes, SiNginx, SiGithub, SiPython } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      title: "Web Development/Languages",
      icon: <FaReact className="text-sky-400" size={28} />,
      items: [
        "React.js. Next.js, Node.js, Express.js, graphQL",
        "Tailwind CSS, Bootstrap",
        "RUST, PHP Vanila, PHP Laravel, C, C#, .NET, C++, Python, Python Django",
        "Fastify - API",
        "Redis",
  
      ],
    },
    {
      title: "Deployment",
      icon: <FaDocker className="text-blue-500" size={28} />,
      items: [
        "GitHub + GitHub Actions",
        "Docker",
        "Linux Server",
        "Kubernetes",
        "AWS (EC2, Lambda, Route53, RDBMS, Load Balancers)",
        "Nginx",
      ],
    },
    {
      title: "Mobile App Development",
      icon: <FaMobileAlt className="text-green-400" size={28} />,
      items: ["React Native (Expo)", "Android Studio", "Java"],
    },
    {
      title: "AI Integration",
      icon: <FaBrain className="text-purple-400" size={28} />,
      items: [
        "OpenAI, ChatGPT, Copilot",
        "Machine Learning (PyTorch, TensorFlow/Keras, scikit-learn, Pandas, Matplotlib)",
      ],
    },
    {
      title: "Database Management",
      icon: <FaDatabase className="text-yellow-400" size={28} />,
      items: [
        "Database Schema",
        "MySQL, PostgreSQL, MongoDB",
        "ETL (Extract Transfer Load)",
        "SaaS: RDS, DynamoDB",
      ],
    },
    ,
    {
      title: "CMS",
      icon: <FaTable className="text-yellow-400" size={28} />,
      items: [
        "WordPress",
        "Wix",
        "Jumla",
        "Shopify",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0b1120] text-white px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            These are my skills right now!
          </motion.h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-800 hover:shadow-xl hover:border-indigo-500 transition duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {skill.icon}
                  <h2 className="text-xl font-semibold">{skill.title}</h2>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-indigo-400">▹</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
