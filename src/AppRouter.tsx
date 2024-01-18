import { Routes, Route} from "react-router-dom";
import LoginForm from "./ui/LoginForm";
import MainPage from "./ui/MainPage";
import { useState } from 'react';

function AppRouter() {
  const [userName, setUsername] = useState('');

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm setUser={setUsername} />} />
        <Route path="/main" element={<MainPage userName={userName} />} />
      </Routes>
    </>
);
}


export default AppRouter;