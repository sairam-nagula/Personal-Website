import React from 'react';
import { Link, Element } from "react-scroll";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaPython, FaReact, FaNodeJs, FaHtml5, FaGit } from "react-icons/fa";

function App() {
  return (
    <div className="App font-sans bg-black text-white min-h-screen">

      {/* Main Content */}
      <main className="container mx-auto px-4">
        <section
          id="home"
          className="relative flex flex-col justify-center items-center h-screen bg-black text-center"
        >
          <p className="text-lg mb-4 text-gray-300">Hi, my name is</p>
          <h1 className="text-6xl font-bold mb-6 text-white">Sairam Nagula.</h1>

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

        {/* Sidebar Navigation */}
        <div className="fixed top-1/3 right-8 z-50 flex flex-col space-y-4">
          {[
            { id: 'home', icon: faHome },
            { id: 'about', icon: faUser },
            { id: 'services', icon: faBriefcase },
            { id: 'contact', icon: faEnvelope },
          ].map((section) => (
            <Link
              key={section.id}
              to={section.id}
              spy={true}
              smooth={true}
              duration={800}
              activeClass="active"
              className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 cursor-pointer transition-all duration-300"
            >
              <FontAwesomeIcon
                icon={section.icon}
                className="text-lg"
              />
            </Link>
          ))}
        </div>

        {/* About Section */}
        <section
          id="about"
          className="relative flex items-center justify-center h-screen bg-black text-white px-8"
        >
          {/* Left Side: Content */}
          <div className="w-1/2 text-left">
            <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
            <p className="text-base text-gray-300 mb-4">
              I am currently pursuing my B.S. in Computer Science with a minor in Business at the UCF. My coursework includes Data Structures & Algorithms, Machine Learning,
              Systems Software, and Security in Computing.
            </p>
            <p className="text-base text-gray-300 mb-4">
              Over the years, I've worked on exciting projects, such as an AI Sudoku Solver, a three-tier
              distributed website, and a Java-based banking simulator. Additionally, I co-founded the
              Engineering Without Borders club at UCF, which focuses on professional growth among students.
            </p>
            <p className="text-base text-gray-300">
              I'm skilled in Java, Python, React, Node.js, and more, and I have professional experience as
              a Data Science Intern, where I conducted in-depth data analysis and supported cross-functional
              teams.
            </p>
          </div>

          {/* Right Side: Placeholder for Image */}
          <div className="w-1/2 flex justify-center items-center">
            {/* Add your image or placeholder here */}
            <div className="w-[300px] h-[300px] bg-gray-700 rounded-full"></div>
          </div>
        </section>


     {/* Work Experience Section */}
<section id="work-experience" className="py-16">
  <div className="container mx-auto px-8">
    <h2 className="text-3xl font-bold mb-8 text-center text-white">Work Experience</h2>
    <div className="relative border-l-2 border-gray-700">
      {/* Entry 1 */}
      <div className="mb-8 pl-8">
        <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-2 border-gray-700"></div>
        <h3 className="text-xl font-semibold text-blue-400">Data Science Intern</h3>
        <p className="text-sm text-gray-400">ChaTeck, Inc. | Apr. 2024 – Jun. 2024</p>
        <p className="text-gray-300 mt-2">
          Conducted in-depth data analysis to resolve transaction issues, improving client report accuracy. Delivered actionable insights to enhance operational decision-making for business improvements.
        </p>
      </div>
      {/* Entry 2 */}
      <div className="mb-8 pl-8">
        <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-2 border-gray-700"></div>
        <h3 className="text-xl font-semibold text-blue-400">Co-Founder & Tech Lead</h3>
        <p className="text-sm text-gray-400">Engineering Without Borders | Nov. 2024 – Present</p>
        <p className="text-gray-300 mt-2">
          Designed a website increasing outreach by 50% and enhancing communication for 40+ members. Led technical initiatives to modernize club operations and expand its digital footprint.
        </p>
      </div>
      {/* Entry 3 */}
      <div className="mb-8 pl-8">
        <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-2 border-gray-700"></div>
        <h3 className="text-xl font-semibold text-blue-400">Trainer & Barista</h3>
        <p className="text-sm text-gray-400">Starbucks Coffee Company | Mar. 2022 – Jan. 2024</p>
        <p className="text-gray-300 mt-2">
          Trained new hires and delivered excellent service in a fast-paced environment. Fostered teamwork and contributed to achieving high customer satisfaction scores.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Skills Section */}
<section id="skills" className="py-16 bg-black">
  <h2 className="text-4xl font-bold mb-10 text-center text-white">Skills</h2>
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
    {/* Languages */}
    <div className="bg-gray-900 shadow-lg rounded-lg p-8">
      <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center">
        <i className="fas fa-code mr-3 text-3xl"></i> Languages
      </h3>
      <ul className="space-y-3 text-lg">
        <li className="flex items-center">
          <i className="fas fa-file-code text-blue-400 text-xl mr-3"></i> C/C++
        </li>
        <li className="flex items-center">
          <i className="fab fa-java text-blue-400 text-xl mr-3"></i> Java
        </li>
        <li className="flex items-center">
          <i className="fab fa-html5 text-blue-400 text-xl mr-3"></i> HTML
        </li>
        <li className="flex items-center">
          <i className="fab fa-python text-blue-400 text-xl mr-3"></i> Python
        </li>
        <li className="flex items-center">
          <i className="fab fa-js-square text-blue-400 text-xl mr-3"></i> JavaScript
        </li>
        <li className="flex items-center">
          <i className="fas fa-database text-blue-400 text-xl mr-3"></i> SQL
        </li>
        <li className="flex items-center">
          <i className="fab fa-react text-blue-400 text-xl mr-3"></i> React Native
        </li>
      </ul>
    </div>

    {/* Developer Tools */}
    <div className="bg-gray-900 shadow-lg rounded-lg p-8">
      <h3 className="text-2xl font-bold mb-6 text-green-400 flex items-center">
        <i className="fas fa-tools mr-3 text-3xl"></i> Developer Tools
      </h3>
      <ul className="space-y-3 text-lg">
        <li className="flex items-center">
          <i className="fas fa-code-branch text-green-400 text-xl mr-3"></i> Git
        </li>
        <li className="flex items-center">
          <i className="fas fa-terminal text-green-400 text-xl mr-3"></i> VS Code
        </li>
        <li className="flex items-center">
          <i className="fas fa-laptop-code text-green-400 text-xl mr-3"></i> Visual Studio
        </li>
        <li className="flex items-center">
          <i className="fas fa-cloud text-green-400 text-xl mr-3"></i> Vercel
        </li>
        <li className="flex items-center">
          <i className="fas fa-database text-green-400 text-xl mr-3"></i> MySQL
        </li>
        <li className="flex items-center">
          <i className="fas fa-bug text-green-400 text-xl mr-3"></i> Wireshark
        </li>
      </ul>
    </div>

    {/* Frameworks */}
    <div className="bg-gray-900 shadow-lg rounded-lg p-8">
      <h3 className="text-2xl font-bold mb-6 text-yellow-400 flex items-center">
        <i className="fas fa-project-diagram mr-3 text-3xl"></i> Frameworks
      </h3>
      <ul className="space-y-3 text-lg">
        <li className="flex items-center">
          <i className="fab fa-react text-yellow-400 text-xl mr-3"></i> React
        </li>
        <li className="flex items-center">
          <i className="fab fa-node-js text-yellow-400 text-xl mr-3"></i> Node.js
        </li>
      </ul>
    </div>
  </div>
</section>
        {/* Services Section */}
        <section id="services" className="py-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">What I Offer</h2>
          <ul className="flex justify-center space-x-8 text-lg text-white">
            <li className="bg-gray-800 shadow-md rounded-lg p-4 w-48 text-center hover:bg-gray-700">
              Web Development
            </li>
            <li className="bg-gray-800 shadow-md rounded-lg p-4 w-48 text-center hover:bg-gray-700">
              Software Engineering
            </li>
            <li className="bg-gray-800 shadow-md rounded-lg p-4 w-48 text-center hover:bg-gray-700">
              Data Science
            </li>
            <li className="bg-gray-800 shadow-md rounded-lg p-4 w-48 text-center hover:bg-gray-700">
              Technical Leadership
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Contact Me</h2>
          <div className="max-w-md mx-auto bg-gray-800 shadow-lg rounded-lg p-8 text-gray-300">
            <p className="text-lg mb-4">
              <strong className="text-white">Email:</strong> <a href="mailto:sairamnagulaharshit@gmail.com" className="text-blue-400 hover:underline">sairamnagulaharshit@gmail.com</a>
            </p>
            <p className="text-lg mb-4">
              <strong className="text-white">LinkedIn:</strong> <a href="https://www.linkedin.com/in/sairamnagula" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">linkedin.com/in/sairamnagula</a>
            </p>
            <p className="text-lg">
              <strong className="text-white">GitHub:</strong> <a href="https://github.com/sairam-nagula" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">github.com/sairam-nagula</a>
            </p>
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