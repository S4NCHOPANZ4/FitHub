import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Routes'
import Navbar from "./components/Navbar";

function App() {

  return (
    <div
      className="min-h-[100vh] w-[100%] bg-[#fafafa]">
      <div className="w-[80%] m-auto flex justify-between">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
