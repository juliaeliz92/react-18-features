import ErrorBoundary from "./ErrorBoundary";
import ClickHere from "./ErrorBoundary/ClickHere";
import Buttons from "./AutomaticBatching/Buttons";
import Transitions from "./Transitions";
import Suspense from "./Suspense";
import "./styles.scss";

function App() {
  const scrollDownToSection = (sectionId) => {
    const learnMore = document.getElementById(sectionId);
    learnMore.scrollIntoView({ behavior: "smooth"});
  }
  return (
    <>
      <div className="hero-image">
          <div className="title">
            <h2>
              <i className="fa-brands fa-react"></i>REACT 18 FEATURES
            </h2>
            <button onClick={() => scrollDownToSection('learn-more-section')}>Learn More</button>
          </div>
        </div>
      <div id="learn-more-section">
        <span>
          Learning with examples is so easy! React 18 introduced cool
          new features that set an impact on performance,
          compact error catching and eased rendering. I have made a few easy
          examples that exhibits the features listed below. Click on a feature to see the example.
        </span>
        <ul id="feature-list">
          <li onClick={() => scrollDownToSection('error-boundary')}>
            <i className="fa-solid fa-laptop-code"></i> <span>Error Boundary</span>
          </li>
          <li onClick={() => scrollDownToSection('automatic-batching')}>
            <i className="fa-solid fa-laptop-code"></i> <span>Automatic Batching</span>
          </li>
          <li onClick={() => scrollDownToSection('transition')}>
            <i className="fa-solid fa-laptop-code"></i> <span>Transition</span>
          </li>
          <li onClick={() => scrollDownToSection('suspense')}>
            <i className="fa-solid fa-laptop-code"></i> <span>Suspense</span>
            </li>
        </ul>
      </div>
      <div className="content">
        <section id="error-boundary">
          <h2>&#128680;Error Boundary</h2>
          <p>This feature is handful when you need to compartmentalize errors into a component or a group of components by encapsulating the said component(s) by Error Boundaries so that the error will not spill out into the whole document. You will need to create Error Boundary to customize the error handling. </p>
          <p>Let's try with this example.</p>
          <p>Fifth click trigger an error on this button.</p>
          <ErrorBoundary>
            <ClickHere triggerOnClick={5} />
          </ErrorBoundary>
          <br/>
          <br/>
          <p>Now try clicking twice on this button</p>
          <ErrorBoundary>
            <ClickHere triggerOnClick={2} />
          </ErrorBoundary>
          <br/>
          <p>
            &#128393;As you can see, the error boundaries work as a try catch
            block except on components. This will not affect on other
            components.
          </p>
        </section>
        <section id='automatic-batching'>
          <h3>&#128230;Automatic Batching</h3>
          <p>The beauty of this feature is accumulating multiple state updates into a single update including updates from promise, event handlers and timeout which improves the performance.</p>
          <p>Turn on console log to behold the power of automatic batching!</p>
          <Buttons />
          <p>
            &#128393;Unlike the previous versions, React 18's automatic batching
            prevent unnecessary component rerendering even with async events.
          </p>
        </section>
        <section id='transition'>
          <h3>&#8634;Transition</h3>
          <Transitions />
          <p>
            &#128393; If you check the code, the loop checking for the multiples
            is wrapped in startTransition function. The function is interrupts
            the input value setting function because the urgency is over the
            former function.
          </p>
        </section>
        <section id='suspense'>
          <h3>&#8987;Suspense</h3>
          <p>Click on the button to reveal a secret message</p>
          <Suspense />
          <p>
            &#128393; The component is wrapped in React's Suspense component. While the child component fetches message from a promise, the suspense load fallback UI. 
          </p>
        </section>
      </div>
    </>
  );
}

export default App;
