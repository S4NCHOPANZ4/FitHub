import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DailycaloryPage, ExerciseWikiPage, BMIpage, BodyFatPage, ErrorPage} from './Routes'
import Footer from "./components/Footer";

function App() {


  return (
    <div
      className="min-h-[100vh] w-[100%] bg-[#1c1c1c]">
      <div className="md:w-[80%] w-[95%] m-auto flex md:flex-row flex-col justify-between ">
        <BrowserRouter>
          <Routes>
            <Route path="/dailyCal" element={<DailycaloryPage />} />
            <Route path="/bmi" element={<BMIpage />} />
            <Route path="/fatPer" element={<BodyFatPage />} />
            <Route path="/" element={<ExerciseWikiPage />} />
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </div>
  )
}

export default App
