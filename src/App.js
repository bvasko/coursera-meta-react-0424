import Header from './components/Header';
import MenuPage from './components/Menu';
import MealsProvider from './providers/MealsProvider';
import './App.css';


function App() {
  return (
    <MealsProvider>
    <div className="App">
      <Header title="Tiffin Menu" className="App-header" />
      <div>
      <MenuPage />
      </div>
    </div>
    </MealsProvider>
  );
}

export default App;
