import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import SignInUp from './components/sign in-up/SignInUp';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="recruitment-app">
      <div className="App bg-[#151719] h-full w-full box-border">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/UserLoginAndRegister" element={<SignInUp />} /> */}
          {/* <Route path='/' element={<CandidateSearch/>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
