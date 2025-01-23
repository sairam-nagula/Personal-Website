import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App font-sans bg-black text-white min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 fixed top-0 left-0 w-full z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Sairam Nagula</h1>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-20">
        {/* Home Section */}
        <section id="home" className="text-center py-32">
          <p className="text-lg mb-4 text-gray-300">Hi, my name is</p>
          <h1 className="text-6xl font-bold mb-6">Sairam Nagula.</h1>
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
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">About Me</h2>
          <p className="text-lg text-gray-300 mb-4">
            I am currently pursuing my B.S. in Computer Science with a minor in Business at UCF, where
            I maintain a GPA of 3.6. My coursework includes Data Structures & Algorithms, Machine Learning,
            Systems Software, and Security in Computing.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            Over the years, I've worked on exciting projects, such as an AI Sudoku Solver, a three-tier
            distributed website, and a Java-based banking simulator. Additionally, I co-founded the
            Engineering Without Borders club at UCF, which focuses on fostering professional growth
            among students.
          </p>
          <p className="text-lg text-gray-300">
            I'm skilled in Java, Python, React, Node.js, and more, and I have professional experience as
            a Data Science Intern, where I conducted in-depth data analysis and supported cross-functional
            teams.
          </p>
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
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 mt-auto">
  <p className="text-center">&copy; 2025 Sairam Nagula. All rights reserved.</p>
</footer>
    </div>
  );
}

export default App;