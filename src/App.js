import './App.css';
import Home from './components/Home';

function App() {
  App.arguments(

    cors({

      origin:"http://localhost:8080",

    }))
    App.get('/cors', (req, res) => {
      res.set('Access-Control-Allow-Origin', '*');
      
      })

  
  return (
    <div className="App">
      
      <Home />
    </div>
  );
}

export default App;
