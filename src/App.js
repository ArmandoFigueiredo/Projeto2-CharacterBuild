import {Routes, Route} from "react-router-dom"
import {Home} from "./pages/Home"
import {BuildPage} from "./pages/BuildPage"
import {ConsultPage} from "./pages/ConsultPage"

function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/buildpage" element={<BuildPage/>} />
      <Route path="/consultpage" element={<ConsultPage/>} />
    </Routes>      
    </>
  );
}

export default App;
