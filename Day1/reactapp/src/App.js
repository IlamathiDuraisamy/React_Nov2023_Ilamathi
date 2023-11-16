import './App.css';
import Greetings from "./components/Greetings";
import Helloworld from "./components/Helloworld";
import HelloClass from "./components/HelloClass";
function App()
{
  return(
    <div className="App">
      <Helloworld/>
      <Greetings/>
      <HelloClass/>
    </div>
  );
}
export default App;