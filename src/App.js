import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App font-sans">
      <header className="bg-blue-600 text-white py-4">
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

      <main className="container mx-auto px-4">
        <section id="home" className="text-center py-16 bg-gray-100">
          <h1 className="text-4xl font-bold mb-4">Welcome to Sairam Nagula's Website</h1>
          <p className="text-lg text-gray-700">
            Hi! I'm Sairam Nagula, a computer science student at the University of Central Florida.
            I am passionate about developing innovative solutions and have experience working with
            a variety of programming languages, frameworks, and tools.
          </p>
        </section>

        <section id="about" className="py-16">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-lg text-gray-700 mb-4">
            I am currently pursuing my B.S. in Computer Science with a minor in Business at UCF, where
            I maintain a GPA of 3.6. My coursework includes Data Structures & Algorithms, Machine Learning,
            Systems Software, and Security in Computing.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Over the years, I've worked on exciting projects, such as an AI Sudoku Solver, a three-tier
            distributed website, and a Java-based banking simulator. Additionally, I co-founded the
            Engineering Without Borders club at UCF, which focuses on fostering professional growth
            among students.
          </p>
          <p className="text-lg text-gray-700">
            I'm skilled in Java, Python, React, Node.js, and more, and I have professional experience as
            a Data Science Intern, where I conducted in-depth data analysis and supported cross-functional
            teams.
          </p>
        </section>

        <section id="services" className="py-16 bg-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-center">What I Offer</h2>
          <ul className="flex justify-center space-x-8 text-lg text-gray-700">
            <li className="bg-white shadow-md rounded-lg p-4 w-48 text-center">
              Web Development
            </li>
            <li className="bg-white shadow-md rounded-lg p-4 w-48 text-center">
              Software Engineering
            </li>
            <li className="bg-white shadow-md rounded-lg p-4 w-48 text-center">
              Data Science
            </li>
            <li className="bg-white shadow-md rounded-lg p-4 w-48 text-center">
              Technical Leadership
            </li>
          </ul>
        </section>

        <section id="contact" className="py-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 text-gray-700">
            <p className="text-lg mb-4">
              <strong>Email:</strong> <a href="mailto:sairamnagulaharshit@gmail.com" className="text-blue-600 hover:underline">sairamnagulaharshit@gmail.com</a>
            </p>
            <p className="text-lg mb-4">
              <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sairamnagula" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/sairamnagula</a>
            </p>
            <p className="text-lg">
              <strong>GitHub:</strong> <a href="https://github.com/sairam-nagula" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/sairam-nagula</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4">
        <p className="text-center">&copy; 2025 Sairam Nagula. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;