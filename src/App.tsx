import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Routes'
import Navbar from "./components/Navbar";

function App() {

  return (
    <div
      className="min-h-[100vh] w-[100%] bg-[#fafafa]">
      <div className="md:w-[80%] w-[95%] m-auto flex md:flex-row flex-col justify-between ">
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
