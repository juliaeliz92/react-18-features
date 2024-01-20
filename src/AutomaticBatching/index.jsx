import ButtonExample from "./ButtonExample";

export default function AutomaticBatching() {
  console.log("Automatic batching works!");
  return (
    <div>
      <p>Click on the button</p>
      <ButtonExample />
      <p>Now click here</p>
      <ButtonExample isAsync/>
    </div>
  );
}
