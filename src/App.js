
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Piestany"/>
      <footer><small>This is <a href="https://github.com/lenka1987-bit/react-project">open-source</a> coded by Lenka Doubravova</small></footer> 
     </div>   
    </div>
  );
}

