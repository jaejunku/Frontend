import { Routes, Route} from "react-router-dom";
import LoginForm from "./ui/LoginForm";
import MainPage from "./ui/MainPage";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/main" element={<MainPage/>} />
      </Routes>
    </>
);
}

export default AppRouter;