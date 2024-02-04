import { useState } from "react";
import AutomaticBouncing from "./AutomaticBatching";
import Transitions from "./Transitions";
import Suspense from "./Suspense";
import "./styles.scss";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const scrollDownToSection = (sectionId) => {
    const learnMore = document.getElementById(sectionId);
    learnMore.scrollIntoView({ behavior: "smooth"});
  }
  return (
    <div className="container-fluid" aria-description="responsive body container">
      <div className="row" role="img" aria-label="background image of a laptop screen">
        <div className="col">
          <div className="hero-image">
            <div className="title" aria-label="title on the hero image">
              <h2>
                <i className="fa-brands fa-react"></i>REACT 18 FEATURES
              </h2>
              <button onClick={() => scrollDownToSection('learn-more-section')}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div 
        className="fab-container sticky-bottom" 
        role="group" 
        aria-label="sticky fab"
        tabIndex="-1"
      >
        <input 
          type="checkbox"
          id="toggle"
          name="sticky fab"
          tabIndex="-1"
          checked={isMenuOpen}
        />
        <label className="button" 
          htmlFor="toggle" 
          tabIndex={0}
          onKeyDown={(e) => {
            if(e.key === 'Enter') { // for accessibility: after tab key opens the fab nav, enter key closes the nav
              setMenuOpen(false)
            }
          }} 
          onFocus={() => setMenuOpen(!isMenuOpen)} // for accessibility: on tab focus,nav should open up!
        ></label>
        <nav className="nav" tabIndex="-1">
          <ul>
            <li tabIndex={isMenuOpen ? 0 : -1} onClick={() => scrollDownToSection('automatic-batching')}>
              <i className="fa-solid fa-laptop-code"></i> <span>Automatic Batching</span>
            </li>
            <li tabIndex={isMenuOpen ? 0 : -1} onClick={() => scrollDownToSection('transition')}>
              <i className="fa-solid fa-laptop-code"></i> <span>Transition</span>
            </li>
            <li 
              tabIndex={isMenuOpen ? 0 : -1} 
              onClick={() => scrollDownToSection('suspense')}
              onKeyDown={(e) => {
                if(e.key === "Tab") {
                  setMenuOpen(false) // for accessibility: when tab is pressed at the end of the nav, the nav should be closed
                }
              }}
            >
              <i className="fa-solid fa-laptop-code"></i> <span>Suspense</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="row p-4" id="learn-more-section">
        <div className="col-12 col-md-6 align-self-center text-center" role="img">
          <img src="/images/learn-more-image.jpg" alt="a cool pic goes here" />
        </div>
        <div className="col-12 col-md-6 pt-md-0 pt-3" role="article" aria-label="learn-more-section">
          <p>
            Hey, there! I have created this website to showcase features introduced by React 18 with working examples. 
          </p>
          <p>First, a brief introduction of React 18. Most of the features are based on the React concurrency. It's a mechanism that holds many different versions of UI at a time and a version is chosen accordingly. It works in the background so the user won't feel the difference. Such rendering is asynchronous which means even with an update, rendering might start after a delay or maybe abort the rendering at all after evaluating the whole DOM tree. If the rendering is not delayed, another UI screen will be displayed until the job is done. <a href="https://react.dev/blog/2022/03/29/react-v18">Learn more on React 18</a></p>
          <p>Here are the list of features discussed in the app. Click on one of them to learn more.</p>
          <ul id="feature-list">
            <li tabIndex={0} onClick={() => scrollDownToSection('automatic-batching')}>
              <i className="fa-solid fa-laptop-code"></i> <span>Automatic Batching</span>
            </li>
            <li tabIndex={0} onClick={() => scrollDownToSection('transition')}>
              <i className="fa-solid fa-laptop-code"></i> <span>Transition</span>
            </li>
            <li tabIndex={0} onClick={() => scrollDownToSection('suspense')}>
              <i className="fa-solid fa-laptop-code"></i> <span>Suspense</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="row p-4 content" id='automatic-batching' role="main">
        <div className="col-12 col-md-6" >
          <h3 role="term">&#128230;Automatic Batching</h3>
          <p role="definition">The beauty of this feature is accumulating multiple state updates into a single update including updates from promise, event handlers and timeout which improves the performance.</p>
          <p role="note">
            &#128393; The console is called only once despite the numerous state updates. Unlike the previous versions, React 18's automatic batching
            prevent unnecessary component rerendering even with async events. <a href="https://github.com/juliaeliz92/react-18-features/tree/main/src/AutomaticBatching"><i className="fa-brands fa-github"></i>Click here to check out the code</a>
          </p>         
        </div>
        <div className="col-12 col-md-6" role="figure">
            <p>Turn on console log to behold the power of automatic batching!</p>
            <AutomaticBouncing />
        </div>
      </div>
      <div className="row p-4 content" id='transition' role="main">
        <div className="col-12 col-md-6">
          <h3 role="term">&#8634;Transition</h3>
          <p role="definition">This feature is essential when an operation(s) is prioritized over the other(s). Transition is handy in examples like expecting an action following an input typing. The typing example is in high priority while the action following it is paused until the first operation is done. The less prioritized is wrapped inside the function from <code>useTransition</code> hook.</p>
          <p role="note">
            &#128393; As you can see in the code, the loop checking for the multiples
            is wrapped in startTransition hook. This function interrupts
            the input onchange function because the urgency is over the
            former function. <a href="https://github.com/juliaeliz92/react-18-features/tree/main/src/Transitions"><i className="fa-brands fa-github"></i>Click here to check out the code</a>
          </p>
        </div>
        <div className="col-12 col-md-6" role="figure">
          <Transitions />
        </div>
      </div>
      <div className="row p-4 content" id='suspense' role="main">
        <div className="col-12 col-md-6">
          <h3 role="term">&#8987;Suspense</h3>
          <p role="definition">This feature helps to load a temporary UI until the main UI is ready.</p>
          <p role="note">
            &#128393; The component is wrapped in React's Suspense component. While the child component fetches message from a promise, the suspense load fallback UI. <a href="https://github.com/juliaeliz92/react-18-features/tree/main/src/Suspense"><i className="fa-brands fa-github"></i>Click here to check out the code</a>
          </p>
        </div>
        <div className="col-12 col-md-6" role="figure">
          <div className="example-container">
            <div className="example">
              <pre aria-label="code">
                <code>
                  {`<Suspense fallback={<h1>Loading...</h1>}>
                      <SuspenseChild />
                    </Suspense>`}
                </code>
              </pre>
            </div>
          </div>
          <p><code>{`SuspenseChild`}</code> throws a promise when the UI is loading aka api haven't returned the data which triggers the fallback in <code>{`Suspense`}</code>. Below is the working example of the code.</p>
          <p>Click on the button to reveal a secret message.</p>
          <div className="example-container">
            <div className="example">               
              <Suspense />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
