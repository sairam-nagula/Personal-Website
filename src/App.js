import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home">
          <h1>Welcome to My Website</h1>
          <p>This is a simple React website built from scratch!</p>
        </section>

        <section id="about">
          <h2>About Us</h2>
          <p>We are passionate about building awesome websites.</p>
        </section>

        <section id="services">
          <h2>Our Services</h2>
          <ul>
            <li>Web Development</li>
            <li>SEO Optimization</li>
            <li>Content Creation</li>
          </ul>
        </section>

        <section id="contact">
          <h2>Contact Us</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <br />
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <br />
            <label>
              Message:
              <textarea name="message"></textarea>
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;