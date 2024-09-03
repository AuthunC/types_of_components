import './App.css';


function App() {

  //Basic working of a var name changing each time page refreshes.
  const handleNameChange=()=>{
    const names=["AA","Authun","Ayyati"];
    const int=Math.floor(Math.random(names.length)*3);
    return names[int];
  }

  return (
    <div className="App">
      <p>Hey {handleNameChange()}, How are you?</p>
    </div>
    
  );
}

export default App;
