import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard
        firstName=" John"
        lastName=" Doe"
        gender=" male"
        height={178}
        birth={new Date('1992-07-14').toDateString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        firstName=" Obrien"
        lastName=" Delores "
        gender=" female"
        height={172}
        birth={new Date('1988-05-11').toDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
    </div>
  );
}

export default App;
