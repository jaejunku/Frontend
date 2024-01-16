import { Routes, Route} from "react-router-dom";
import LoginForm from "./ui/LoginForm";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/main/" element={<div>hello</div>} />
      </Routes>
    </>
);
}

export default AppRouter;