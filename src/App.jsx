import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";

function App() {
  function showAlert() {
    alert("Hi, there!");
  }
  const showAlert2 = () => {
    alert("hello, there");
  };
  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h2>React Core concepts 2</h2>

      <Friends></Friends>
      <Users></Users>

      <Counter></Counter>
      <Team></Team>

      <button onClick={showAlert}>Click Me</button>
      <button onClick={showAlert2}>Click more</button>
      <button
        onClick={() => {
          alert("joyguru");
        }}
      >
        Click 2
      </button>
      {/* complex one (call function wrap with a anonymous function) */}
      <button onClick={() => addToFive(3)}>Add five</button>
    </>
  );
}

export default App;
