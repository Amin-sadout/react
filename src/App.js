
import './App.css';

function App() {
//these will be dynamic values that we will render inside our JSX
const title = "Welcome to my new journey";
const tries = 12;
const character = {name: "possiblyadev", age: 28, skill: "javascript"}; // we can't display booleans and objects??
const google = "https://www.google.com";

  return (
   
    <div className="App">
       <div className="Content">
     <h1>{title}</h1>
     <p>i have tried this {tries} times so far</p>
     {/* <p>character info: {character}</p>  this will not work */}
     <p>{[1,2,3,4,5]}</p> {/* we can display arrays though but it will clump all the elements together and display them as a string*/}
     <p>{Math.random() * 5 }</p> {/* apparently we can also do calculations */}
     <p href="https://www.google.com"></p> {/* we can't add attributes this way */}
      <a href={google}>this google works</a> {/* guess we got to use dynamic values for this*/}
     
    </div>
    </div>
  );
}

export default App;
