import AutomaticBouncing from "./AutomaticBatching";
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
            <button className="hero-button" onClick={() => scrollDownToSection('learn-more-section')}>Learn More</button>
          </div>
        </div>
      <div id="learn-more-section">
        <p>
          Hey, there! I have created this website to showcase features introduced by React 18 with working examples. 
        </p>
        <p>First, a brief introduction of React 18. Most of the features are based on the React concurrency. It's a mechanism that holds many different versions of UI at a time and a version is chosen accordingly. It works in the background so the user won't feel the difference. Such rendering is asynchronous which means even with an update, rendering might start after a delay or maybe abort the rendering at all after evaluating the whole DOM tree. If the rendering is not delayed, another UI screen will be displayed until the job is done. <a href="https://react.dev/blog/2022/03/29/react-v18">Learn more on React 18</a></p>
        <p>Here are the list of features discussed in the app. Click on one of them to learn more.</p>
        <ul id="feature-list">
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
        <section id='automatic-batching'>
          <h3>&#128230;Automatic Batching</h3>
          <p>The beauty of this feature is accumulating multiple state updates into a single update including updates from promise, event handlers and timeout which improves the performance.</p>
          <p>Turn on console log to behold the power of automatic batching!</p>
          <AutomaticBouncing />
          <p>
            &#128393; The console is called only once despite the numerous state updates. Unlike the previous versions, React 18's automatic batching
            prevent unnecessary component rerendering even with async events. <a href="https://github.com/juliaeliz92/react-18-features/tree/main/src/AutomaticBatching"><i class="fa-brands fa-github"></i>Click here to check out the code</a>
          </p>
        </section>
        <section id='transition'>
          <h3>&#8634;Transition</h3>
          <p>This feature is essential when an operation(s) is prioritized over the other(s). Transition is handy in examples like expecting an action following an input typing. The typing example is in high priority while the action following it is paused until the first opertion is done. The less prioritized is wrapped inside the function from <code>useTransition</code> hook.</p>
          <Transitions />
          <p>
            &#128393; As you can see in the code, the loop checking for the multiples
            is wrapped in startTransition hook. This function interrupts
            the input onchange function because the urgency is over the
            former function. <a href="https://github.com/juliaeliz92/react-18-features/tree/main/src/Transitions"><i class="fa-brands fa-github"></i>Click here to check out the code</a>
          </p>
        </section>
        <section id='suspense'>
          <h3>&#8987;Suspense</h3>
          <p>This feature helps to load a temporary UI until the main UI is ready.</p>
          <div className="example">
            <pre>
              <code>
                {`<Suspense fallback={<h1>Loading...</h1>}>
                    <SuspenseChild />
                  </Suspense>`}
              </code>
            </pre>
          </div>
          <p><code>{`SuspenseChild`}</code> throws a promise when the UI is loading aka api haven't returned the data which triggers the fallback in <code>{`Suspense`}</code>. Below is the working example of the code.</p>
          <div className="example flex-column">
            <p>Click on the button to reveal a secret message.</p>
            <Suspense />
          </div>
          <p>
            &#128393; The component is wrapped in React's Suspense component. While the child component fetches message from a promise, the suspense load fallback UI. <a href="https://github.com/juliaeliz92/react-18-features/tree/main/src/Suspense"><i class="fa-brands fa-github"></i>Click here to check out the code</a>
          </p>
        </section>
      </div>
    </>
  );
}

export default App;
