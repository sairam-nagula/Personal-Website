import React, { useState } from 'react';
import { Link } from "react-scroll";
import './App.css';
import { useInView } from "react-intersection-observer";

function App() {


  const { ref: entry1Ref, inView: entry1InView } = useInView({ triggerOnce: true });
  const { ref: entry2Ref, inView: entry2InView } = useInView({ triggerOnce: true });
  const { ref: entry3Ref, inView: entry3InView } = useInView({ triggerOnce: true });
  const [activeSection, setActiveSection] = useState('home');
 

  return (
    <div className="App font-sans bg-black text-white min-h-screen">


{/* Sidebar Navigation */}
<div className="fixed top-1/2 left-4 z-50 flex flex-col space-y-3">
  {[
    { id: 'home' },
    { id: 'about' },
    { id: 'work-experience' },
    { id: 'skills' },
    { id: 'projects' },
    { id: 'services' },
    { id: 'contact' },
  ].map((section) => (
    <Link
      key={section.id}
      to={section.id}
      spy={true}
      smooth={true}
      duration={800}
      offset={-500}
      onSetActive={() => setActiveSection(section.id)}
      className={`w-2 h-2 rounded-full ${
        activeSection === section.id
          ? 'bg-blue-400 scale-125'
          : 'bg-gray-500 scale-100'
      } transition-transform duration-300`}
    ></Link>
  ))}
</div>



      {/* Main Content */}
      <main className="container mx-auto px-4">
        <section
          id="home"
          className="relative flex flex-col justify-center items-center h-screen bg-black text-center"
        >
          <p className="text-lg mb-4 text-gray-300">Hi, my name is</p>
          <h1
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 text-transparent bg-clip-text leading-tight"

          >
            Sairam Nagula.
          </h1>

          {/* Animated Line */}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animated-text">
            <span className="word">I</span>
            <span className="word">specialize</span>
            <span className="word">in</span>
            <span className="word">building</span>
            <span className="word">applications</span>
            <span className="word">combining</span>
            <span className="word">my</span>
            <span className="word">skills</span>
            <span className="word">in</span>
            <span className="word">software</span>
            <span className="word">engineering</span>
            <span className="word">and</span>
            <span className="word">innovation.</span>
          </p>

          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://www.linkedin.com/in/sairamnagula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              <i className="fab fa-linkedin text-3xl"></i>
            </a>
            <a
              href="https://github.com/sairam-nagula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              <i className="fab fa-github text-3xl"></i>
            </a>
          </div>

          {/* Bouncing Arrow */}
          <div className="absolute bottom-20 animate-bounce">
            <a href="#about">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-400 hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m0 0l-8-8m8 8l8-8"
                />
              </svg>
            </a>
          </div>
        </section>

     {/* About Section */}
<section
  id="about"
  className="relative flex flex-col md:flex-row items-center justify-center h-auto md:h-screen bg-black text-white px-6 md:px-8 py-16"
>
  {/* Left Side: Content */}
  <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
      About Me
    </h2>
    <p className="text-sm md:text-lg text-gray-400 leading-relaxed mb-6">
      I am currently pursuing my B.S. in Computer Science with a minor in Business at UCF. My coursework includes Data Structures & Algorithms, Machine Learning, Systems Software, and Security in Computing.
    </p>
    <p className="text-sm md:text-lg text-gray-400 leading-relaxed mb-6">
      Over the years, I've worked on exciting projects, such as an AI Sudoku Solver, a three-tier distributed website, and a Java-based banking simulator. Additionally, I co-founded the Engineering Without Borders club at UCF, which focuses on professional growth among students.
    </p>
    <p className="text-sm md:text-lg text-gray-400 leading-relaxed">
      I'm skilled in Java, Python, React, Node.js, and more. I also have professional experience as a Data Science Intern, where I conducted in-depth data analysis and supported cross-functional teams to solve business challenges.
    </p>
  </div>

  {/* Right Side: Animation GIF */}
  <div className="w-full md:w-1/2 flex justify-center items-center">
    <img
      src={`${process.env.PUBLIC_URL}/animation.gif`}
      alt="Animation"
      className="w-[240px] h-[240px] md:w-[420px] md:h-[420px] object-cover rounded-full shadow-xl"
    />
  </div>
</section>



  



      {/* Work Experience Section */}
<section id="work-experience" className="py-16">
  <div className="container mx-auto px-8">
    <h2 className="text-3xl font-bold mb-8 text-center text-white">Experience</h2>
    <div className="relative border-l-2 border-gray-700 pl-12">
      {/* Entry 1 */}
      <div
        ref={entry1Ref}
        className={`mb-8 transition-opacity duration-700 ${
          entry1InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <div className="absolute left-3 w-6 h-6 bg-blue-500 rounded-full border-2 border-gray-700"></div>
        <p className="text-sm text-gray-400 mb-1">Apr. 2024 – Jun. 2024</p>
        <h3 className="text-lg font-semibold">
          <span className="text-lg font-semibold text-blue-400">
            Data Science Intern <span className="text-gray-400">| ChaTeck, Inc.</span>
          </span>
        </h3>
        <p className="text-gray-300 mt-1">
          Conducted in-depth data analysis to resolve transaction issues, improving client report accuracy.
          Delivered actionable insights to enhance operational decision-making for business improvements.
        </p>
      </div>

      {/* Entry 2 */}
      <div
        ref={entry2Ref}
        className={`mb-8 transition-opacity duration-700 delay-200 ${
          entry2InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <div className="absolute left-3 w-6 h-6 bg-blue-500 rounded-full border-2 border-gray-700"></div>
        <p className="text-sm text-gray-400 mb-1">Nov. 2024 – Present</p>
        <h3 className="text-lg font-semibold">
          <span className="text-lg font-semibold text-blue-400">
            Co-Founder & Tech Lead <span className="text-gray-400">| Engineering Without Borders</span>
          </span>
        </h3>
        <p className="text-gray-300 mt-1">
          Designed a website increasing outreach by 50% and enhancing communication for 40+ members.
          Led technical initiatives to modernize club operations and expand its digital footprint.
        </p>
      </div>

      {/* Entry 3 */}
      <div
        ref={entry3Ref}
        className={`mb-8 transition-opacity duration-700 delay-400 ${
          entry3InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <div className="absolute left-3 w-6 h-6 bg-blue-500 rounded-full border-2 border-gray-700"></div>
        <p className="text-sm text-gray-400 mb-1">Mar. 2022 – Jan. 2024</p>
        <h3 className="text-lg font-semibold">
          <span className="text-lg font-semibold text-blue-400">
            Trainer & Barista <span className="text-gray-400">| Starbucks Coffee Company</span>
          </span>
        </h3>
        <p className="text-gray-300 mt-1">
          Trained new hires and delivered excellent service in a fast-paced environment.
          Fostered teamwork and contributed to achieving high customer satisfaction scores.
        </p>
      </div>
    </div>
  </div>
</section>

     {/* Skills Section */}
<section id="skills" className="py-16 bg-black">
  <h2 className="text-4xl font-bold mb-10 text-center text-white">Skills</h2>
  <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3 text-white">
    {/* Languages */}
    <div className="bg-gray-900 shadow-lg rounded-lg p-6 md:p-8">
      <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-blue-400 flex items-center border-b-2 border-blue-400 pb-2">
        <i className="fas fa-code mr-3 text-xl md:text-3xl"></i> Languages
      </h3>
      <ul className="space-y-2 text-sm md:text-lg">
        <li className="flex items-center">
          <i className="fas fa-file-code text-blue-400 text-xl md:text-2xl mr-3"></i> C/C++
        </li>
        <li className="flex items-center">
          <i className="fab fa-java text-blue-400 text-xl md:text-2xl mr-3"></i> Java
        </li>
        <li className="flex items-center">
          <i className="fab fa-html5 text-blue-400 text-xl md:text-2xl mr-3"></i> HTML
        </li>
        <li className="flex items-center">
          <i className="fab fa-python text-blue-400 text-xl md:text-2xl mr-3"></i> Python
        </li>
        <li className="flex items-center">
          <i className="fab fa-js-square text-blue-400 text-xl md:text-2xl mr-3"></i> JavaScript
        </li>
        <li className="flex items-center">
          <i className="fas fa-database text-blue-400 text-xl md:text-2xl mr-3"></i> SQL
        </li>
        <li className="flex items-center">
          <i className="fab fa-react text-blue-400 text-xl md:text-2xl mr-3"></i> React Native
        </li>
      </ul>
    </div>

    {/* Developer Tools */}
    <div className="bg-gray-900 shadow-lg rounded-lg p-6 md:p-8">
      <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-green-400 flex items-center border-b-2 border-green-400 pb-2">
        <i className="fas fa-tools mr-3 text-xl md:text-3xl"></i> Developer Tools
      </h3>
      <ul className="space-y-2 text-sm md:text-lg">
        <li className="flex items-center">
          <i className="fas fa-code-branch text-green-400 text-xl md:text-2xl mr-3"></i> Git
        </li>
        <li className="flex items-center">
          <i className="fas fa-terminal text-green-400 text-xl md:text-2xl mr-3"></i> VS Code
        </li>
        <li className="flex items-center">
          <i className="fas fa-laptop-code text-green-400 text-xl md:text-2xl mr-3"></i> Visual Studio
        </li>
        <li className="flex items-center">
          <i className="fas fa-cloud text-green-400 text-xl md:text-2xl mr-3"></i> Vercel
        </li>
        <li className="flex items-center">
          <i className="fas fa-database text-green-400 text-xl md:text-2xl mr-3"></i> MySQL
        </li>
        <li className="flex items-center">
          <i className="fas fa-bug text-green-400 text-xl md:text-2xl mr-3"></i> Wireshark
        </li>
      </ul>
    </div>

    {/* Frameworks */}
    <div className="bg-gray-900 shadow-lg rounded-lg p-6 md:p-8">
      <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-yellow-400 flex items-center border-b-2 border-yellow-400 pb-2">
        <i className="fas fa-project-diagram mr-3 text-xl md:text-3xl"></i> Frameworks
      </h3>
      <ul className="space-y-2 text-sm md:text-lg">
        <li className="flex items-center">
          <i className="fab fa-react text-yellow-400 text-xl md:text-2xl mr-3"></i> React
        </li>
        <li className="flex items-center">
          <i className="fab fa-node-js text-yellow-400 text-xl md:text-2xl mr-3"></i> Node.js
        </li>
      </ul>
    </div>
  </div>
</section>


/* Projects Section */
<section id="projects" className="py-16 bg-black">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center text-white">Projects</h2>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "FitAI - AI Fitness App",
          description:
            "Mobile fitness app offering Personalized Workout Recommendations and an AI-Powered Chat Coach to help users achieve their fitness goals. Built with React Native (Expo CLI) and Firebase for authentication and storage, utilizes the OpenAI API.",
          languages: "React Native, Firebase, OpenAI API",
          github: "https://github.com/sairam-nagula/FitAI",
        },
        {
          title: "Three Tier Distributed Website",
          description:
            "Built a marketplace simulation as a three-tiered website using Java, JSP, and MySQL, implementing secure user authentication and deploying the application using Tomcat.",
          languages: "Java, HTML",
          github: "https://github.com/sairam-nagula",
        },
        {
          title: "Multi-Threaded Bank Simulation",
          description:
            "Developed a Java-based banking simulator handling real-time deposits, withdrawals, and audits across multiple agents using synchronized threads.",
          languages: "Java",
          github: "https://github.com/sairam-nagula/Simulator-with-Synchronized-Multi-Threaded-Operation-",
        },
        {
          title: "E-Store Java GUI",
          description:
            "Designed a Java-based e-store front with a unique GUI for inventory management and real-time transaction handling.",
          languages: "Java",
          github: "https://github.com/sairam-nagula/E-Store-Java-GUI",
        },
        {
          title: "AI Sudoku Solver",
          description:
            "Developed an AI-based Sudoku Solver using backtracking algorithms with a simple GUI for user interaction.",
          languages: "Python",
          github: "https://github.com/sairam-nagula",
        },
      ].map((project, index) => (
        <div
          key={index}
          className="bg-gray-900 shadow-lg rounded-lg p-6 flex flex-col justify-between h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-800"
        >
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="text-blue-400 text-xl font-bold">{project.title}</div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
            </div>
            <p className="text-gray-300 text-sm">{project.description}</p>
          </div>
          <div className="mt-4">
            <span className="text-gray-400 text-xs">Languages: {project.languages}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


        
   {/* Services Section */}
<section id="services" className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-6 text-center text-white">What I Offer</h2>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          title: "Technical Leadership",
          description:
            "Co-founded and led initiatives, including building websites and managing teams to enhance outreach and collaboration.",
        },
        {
          title: "Web Development",
          description:
            "Skilled in building dynamic, responsive websites using React, Node.js, and modern web development frameworks.",
        },
        {
          title: "Software Engineering",
          description:
            "Experienced in Java, C/C++, and Python for robust, scalable applications with object-oriented principles.",
        },
        {
          title: "Data Science",
          description:
            "Conducted in-depth data analysis during internships, leveraging Python and MySQL for actionable insights.",
        },
      ].map((service, index) => (
        <div
          key={index}
          className="bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-700"
        >
          <h3 className="text-xl font-bold mb-4 text-blue-400 text-center">
            {service.title}
          </h3>
          <p className="description text-sm md:text-base text-center text-gray-300 leading-relaxed">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
<section id="contact" className="py-16">
  <div className="container mx-auto px-8 text-center">
    <p className="text-lg text-white mb-2">Let's connect,</p>
    <h2 className="text-5xl font-bold text-white mb-4">Get in Touch!</h2>
    <p className="text-lg text-white mb-6">Have any questions or want to reach out?</p>
    <div className="max-w-md mx-auto bg-gray-800 shadow-lg rounded-lg p-6">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <i className="fas fa-envelope text-blue-400 text-2xl"></i>
          <span className="text-gray-300">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:sairamnagulaharshit@gmail.com"
              className="text-blue-400 hover:underline"
            >
              sairamnagulaharshit@gmail.com
            </a>
          </span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <i className="fab fa-linkedin text-blue-400 text-2xl"></i>
          <span className="text-gray-300">
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/sairamnagula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/sairamnagula
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Bottom Section */}
        <section id="footer" className="bg-black text-gray-400 py-4">
          <div className="border-t border-gray-600 w-full"></div>
          <div className="text-center mt-4">
            <p className="text-sm mb-2">
              Made with <span className="text-white">React.js</span>, <span className="text-white">Tailwind CSS</span>, and <span className="text-white">Vercel</span>
            </p>
            <p className="text-sm">
              &copy; 2025 <span className="text-white">Sairam Nagula</span>. All rights reserved.
            </p>
          </div>
        </section>

      </main>

    </div>
  );
}

export default App;