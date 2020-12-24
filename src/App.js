import './App.css';
import Routes from 'routes';
import { BrowserRouter } from 'react-router-dom';
import TopBar from 'components/topBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
