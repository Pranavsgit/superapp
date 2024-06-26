import Registration from "./pages/registration/Registration";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GenrePage from "./pages/genre/GenrePage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />}></Route>
          <Route path="/genre" element={<GenrePage />}></Route >
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
