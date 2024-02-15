import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'

function Overlay() {
    return (
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'auto'}}>
    <main>
      <div id="overlay"></div>
        <h1 className="hero">
          <a href="/">Jarod Anjelo 
        <br />Lustre</a></h1>
        <p className="intro type-primary">
         A visionary software engineer creating impactful things for people.
        </p>
        
        <h2 className='experience header'>
          <span>EXPERIENCE</span>
        </h2>

        <section className='timeline'>
        <article className='timeline-entry'>
            <h2 className='timeline-co type-primary'>
              <a href="https://perpetua.io/">Perpetua</a>
              <span className="timeline-time">Jan 2024 - Present</span>
            </h2>
            <div className='timeline-description'>
              <p>Helping build Perpetua's web app!
              </p>
            </div>
          </article>
          <article className='timeline-entry'>
            <h2 className='timeline-co type-primary'>
              <a href="https://www.rbc.com/about-rbc.html">RBC</a>
              <span className="timeline-time">May 2023 - Aug 2023</span>
            </h2>
            <div className='timeline-description'>
              <p>Worked with the Immersive Tech team at RBC's Innovation Labs to develop interactive software for the bank.
              </p>
              <p>Developed a full-fledged VR software presented in the&nbsp;  
                <a href='https://diversity.rbc.com/a-virtual-reality-lacrosse-experience-at-the-north-american-indigenous-games/'>
                 North American Indigenous Games 2023</a>.
              </p>
              <ul>
                <li>
                  Wrote and implemented back-end features, logic, and optimizations which enhanced performance by 60%.
                </li>
                <li>
                  Rigorously debugged and tested software on the Meta Quest 2.
                </li>
              </ul>
              <p>Prototyped features for a web-based augmented reality software using <a href='https://8thwall.com'>Niantic 8th Wall</a>. </p>
            </div>
          </article>
          <article className='timeline-entry'>
            <h2 className='timeline-co type-primary'>
              <a href="https://www.yorku.ca/cvr/">Centre for Vision Research</a>
              <span className="timeline-time">May 2022 - May 2023</span>
            </h2>
            <div className='timeline-description'>
              <p>Architected experiment software for the Perception Lab and spearheaded implementation
                of <b>three major features</b> for an experiment.
              </p>
              <p> Rewrote and enhanced legacy code to reduce software defects, increase performance, and improve code readability for easier maintenance.
              </p>
            </div>
          </article>
        </section>

        <h2 className='projects header'>
          <span>PROJECTS</span>
        </h2>

        <section className='project-timeline'>
        <article className='timeline-entry'>
            <h2 className='timeline-co type-primary'>
              <a href="/">Borealis - Personal Site</a>
            </h2>
            <div className='timeline-description'>
              <p>The site you're currently on. Inspired by modern design and the aurora borealis. Made with React, React-three-fiber, JavaScript, and good ol' HTML/CSS.</p>
              
            </div>
          </article>
          <article className='timeline-entry'>
              <h2 className='timeline-co type-primary'>
                <a href="https://github.com/jard-io/modelling-personality-from-twts">Personality Analysis Using ML</a>
              </h2>
              <div className='timeline-description'>
                <p>Can we know something about an individual's personality based on their tweets with machine learning?</p>

                <p>I sought an answer to that question with four other researchers and published a paper on&nbsp;<a href='https://www.academia.edu/43608598/Analyzing_Structural_Metrics_to_Predict_Twitter_User_Personality_Traits'>Academia.edu</a>
                </p>

                <p><b>TLDR:</b> Possibly. Need to experiment with different methodologies to be sure.</p>
              </div>
            </article>
          <article className='timeline-entry'>
            <h2 className='timeline-co type-primary'>
              <a href="https://github.com/jard-io/blender-save-states">Save State Manager for Blender</a>
            </h2>
            <div className='timeline-description'>
              <p>I created an extension for Blender using Python that allows you to name and organize different versions of your project easily.</p>
              <p> Why? Because project management can get messy, and I created a solution so it doesn't have to be.</p>
            </div>
          </article>
          <article className='timeline-entry'>
            <h2 className='timeline-co type-primary'>
              <a href="https://github.com/jard-io/noise-pollution-sensor">Noise Pollution Sensor</a>
            </h2>
            <div className='timeline-description'>
              <p>An incredibly lightweight sensor that detects harmful noise levels in your surroundings. Made with C, Assembly, and an Arduino kit. </p>
            </div>
          </article>

        </section>
        <footer>
          <div className='footer-content'>
            <p>
              You can reach out to me through&nbsp;
              <a href='https://www.linkedin.com/in/jarod-lustre/'>
                LinkedIn
              </a>
              ,&nbsp; 
              <a href='https://github.com/jard-io'>
                GitHub
              </a>
              ,&nbsp;and my&nbsp; 
              <a href='mailto:jarodanjelolustre@gmail.com'>
                Email
              </a>!
              &nbsp;
              View my full resume <a href='https://drive.google.com/drive/folders/1Azj95icXViTLsFiu-Y4Hrn97VdurCtHZ?usp=sharing'>here</a>.
            </p>
          </div>
        </footer>
        <div className='cursor'></div>
    </main>
  </div>
  )  
}


function Cursor() {

  document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor')
    const cursorStyle = cursor.style
    cursorStyle.left = e.clientX+'px'
    cursorStyle.top = e.clientY+'px'
  })
}

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Overlay />
    {/* <Cursor /> */}
  </>,
)
