// import logo from './logo.svg';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import FirstPage from './Components/FirstPage';
import Secondpage from './Components/SecondPage';
import Thirdpage from './Components/ThirdPage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage/>}/>
        <Route path='/secondpage' element={<Secondpage/>}/>
        <Route path='/firstpage' element={<FirstPage/>}/>
        <Route path='/thirdpage' element={<Thirdpage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
