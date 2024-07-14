import { BrowserRouter, Navigate, Route } from "react-router-dom";
import Main from "./pages/Main";
import Mypage from "./pages/users/Mypage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth/kakao/callback" element={<Auth />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
