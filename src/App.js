import './App.css';
import Routes from 'routes';
import { BrowserRouter } from 'react-router-dom';
import TopBar from 'components/topBar';
import {CurrentUserProvider} from 'contexts/currentUser';

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <TopBar />
        <Routes />
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
