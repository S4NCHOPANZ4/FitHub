import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home , DailycaloryPage, ExerciseWikiPage} from './Routes'

function App() {


  return (
    <div
      className="min-h-[100vh] w-[100%] bg-[#1c1c1c]">
      <div className="md:w-[80%] w-[95%] m-auto flex md:flex-row flex-col justify-between ">
        <BrowserRouter>
          <Routes>
            <Route path="/muscleWiki" element={<ExerciseWikiPage />} />
          </Routes>
          <Routes>
            <Route path="/dailyCal" element={<DailycaloryPage />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
