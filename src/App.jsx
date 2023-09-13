import './App.css';
import { User } from './User';

function App() {
  return (
    <div className="App">
     <User name="iPhone 13" prise="2999$"/>
     <User name="Xiaomi Redmi Note 12" prise="500$"/>
     <User name="Galaxy A" prise="1999"/>
    </div>
  );
}

export default App;
