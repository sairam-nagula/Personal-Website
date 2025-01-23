import React from 'react';
import { Link } from "react-scroll";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';


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
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I specialize in building applications combining my skills in software engineering and innovation.
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
          <Link
            to="home"
            smooth={true}
            duration={1000} // 1.5 seconds for smooth scroll
            className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 cursor-pointer"
          >
            <FontAwesomeIcon icon={faHome} className="text-lg" />
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={1000} // Adjust as needed
            className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 cursor-pointer"
          >
            <FontAwesomeIcon icon={faUser} className="text-lg" />
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={1000} // Adjust as needed
            className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 cursor-pointer"
          >
            <FontAwesomeIcon icon={faBriefcase} className="text-lg" />
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={1000} // Adjust as needed
            className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 cursor-pointer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
          </Link>
        </div>


        {/* About Section */}
        <section
  id="about"
  className="relative flex flex-col justify-center items-center h-screen bg-black text-center px-4"
>
  <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
  <p className="text-lg text-gray-300 mb-4 max-w-2xl">
    I am currently pursuing my B.S. in Computer Science with a minor in Business at UCF, where
    I maintain a GPA of 3.6. My coursework includes Data Structures & Algorithms, Machine Learning,
    Systems Software, and Security in Computing.
  </p>
  <p className="text-lg text-gray-300 mb-4 max-w-2xl">
    Over the years, I've worked on exciting projects, such as an AI Sudoku Solver, a three-tier
    distributed website, and a Java-based banking simulator. Additionally, I co-founded the
    Engineering Without Borders club at UCF, which focuses on professional growth among students.
  </p>
  <p className="text-lg text-gray-300 max-w-2xl">
    I'm skilled in Java, Python, React, Node.js, and more, and I have professional experience as
    a Data Science Intern, where I conducted in-depth data analysis and supported cross-functional
    teams.
  </p>

  {/* Bouncing Arrow */}

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