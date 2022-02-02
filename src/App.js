import "./App.css";
import "./Note.css";
import imagejyoti from "./Components/jyoti.jpeg";
import { Note } from "./Components/Note";
import { Enable } from "./Components/Enable";
import { Experience } from "./Components/Experience";


function App() {
  return (
    <>
      <div className="content">
        <div className="App">
          <div className="text-center">
            <Enable />
          
            <a href="#home" >Home</a>

            <a href="#about">About</a>

            <a href="#why-code">WhyCode</a>
            <a href="#skills">Skills</a>

            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>

            <a href="#feedback">Feedback</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="text-center">
            <h1 id="title"> Jyoti Chaurasia</h1>
            <h4>
              <u>Frontend Developer</u>
            </h4>
          </div>

          <img src={imagejyoti} alt="jyoti" className="photo" />
          <p>
            I am a self-taught programmer. I love checking out the newest
            digital products. I sometimes make reels about them too. Mostly,
            you'll find me dreaming about the next big thing.
          </p>

          <h2 id="about">
            <u>Who Am I???</u>
          </h2>
          <p>
            I am an aspiring web designer. I have taught myself to code. I would
            love to build new, cutting edge designs. The technologies that most
            excite me include new mobile apps, Electronic Vehicles and Artifical
            Intelligence. I am currently working on building a portfolio of my
            work so that I can get an awesome coding job.
          </p>

          <h2 id="why-code">
            <u>Why Am I Learning to Code?</u>
          </h2>
          <p>
            I started my career back in 2015. 5 years into the corporate world,
            I realised that coding is an essential skill nowadays. This started
            me on the path of learning the basics of coding. My first step is to
            be a part of the web development bootcamp by BigBinary Academy. It
            feels great today, since I am making my own personal portfolio which
            I could show off in front of my friends. Not only that, I could use
            this as my resume when I apply for further web development jobs.
          </p>

          <h2 id="skills">
            <u>Skills</u>
          </h2>
          <ol className="Text-center">
            <li>HTML5</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT JS</li>
          </ol>

          <h2 id="projects">
            <u>Projects</u>
          </h2>
          <ol className="Text-center">
            <li><a href="https://github.com/jyoti96chaurasia/my-textutils">Textutils</a></li>
            <li><a href="https://github.com/jyoti96chaurasia/news-app">News-App</a></li>
            <li><a href="https://github.com/jyoti96chaurasia/Login-page">Login-Page</a></li>
            <li><a href="https://github.com/jyoti96chaurasia/Data-search">Textutils</a></li>
            <li><a href="https://github.com/jyoti96chaurasia/loader-modal">Loader-Modal</a></li>
          </ol>
          <div className="text-center">
            <Experience />
            <Note />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
