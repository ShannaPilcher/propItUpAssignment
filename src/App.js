import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard 
      lastName={"Pilcher"}
      firstName={"Shanna"}
      age={"29"}
      hairColor={"Blonde"}
      />
            <PersonCard 
      lastName={"Pilcher"}
      firstName={"Ty"}
      age={"31"}
      hairColor={"Blonde"}
      />
            <PersonCard 
      lastName={"Pilcher"}
      firstName={"Lex"}
      age={"2"}
      hairColor={"Blonde"}
      />
            <PersonCard 
      lastName={"Pilcher"}
      firstName={"Shadow"}
      age={"5"}
      hairColor={"Black"}
      />
    </div>
  );
}

export default App;
