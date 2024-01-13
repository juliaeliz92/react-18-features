import ErrorBoundary from "./ErrorBoundary";
import ClickHere from "./ErrorBoundary/ClickHere";
import Buttons from "./AutomaticBatching/Buttons";
import Transitions from "./Transitions";
import Suspense from "./Suspense";
import "./styles.scss";

function App() {
  return (
    <div className="main-page">
      <header>
        <h2>
          <i className="fa-brands fa-react"></i>REACT 18 FEATURES
        </h2>
        <span>
          &#128064; Learning with exampled is so easy! React 18 introduced cool
          new features include concurrency that set an impact on performance,
          compact error catching and eased rendering. I have made a few easy
          examples that exhibits the features.&#128204;
        </span>
      </header>
      <div className="content">
        <section>
          <h3>&#128680;Error Boundary</h3>
          <p>Fifth click trigger an error on this button</p>
          <ErrorBoundary>
            <ClickHere triggerOnClick={5} />
          </ErrorBoundary>

          <p>Now try clicking twice on this button</p>
          <ErrorBoundary>
            <ClickHere triggerOnClick={2} />
          </ErrorBoundary>

          <p>
            &#128393;As you can see, the error boundaries works as a try catch
            block except on components. This will not affect on other
            components.
          </p>
        </section>
        <section>
          <h3>&#128230;Automatic Batching</h3>
          <p>Turn on console log to behold the power of automatic batching!</p>
          <Buttons />
          <p>
            &#128393;Unlike the previous versions, React 18's automatic batching
            prevent unnecessary component rerendering even with async events.
          </p>
        </section>
        <section>
          <h3>&#8634;Transition</h3>
          <Transitions />
          <p>
            &#128393; If you check the code, the loop checking for the multiples
            is wrapped in startTransition function. The function is interrupts
            the input value setting function because the urgency is over the
            former function.
          </p>
        </section>
        <section>
          <h3>&#8987;Suspense</h3>
          <p>Click on the button to reveal a secret message</p>
          <Suspense />
          <p>
            &#128393; The component is wrapped in React's Suspense component. While the child component fetches message from a promise, the suspense load fallback UI. 
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
