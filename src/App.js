import {Routes, Route} from "react-router-dom"
import {Home} from "./pages/Home"
import {BuildPage} from "./pages/BuildPage"
import{EnterBuild} from "./pages/EnterBuild"

let identPerson="";


function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/buildpage" element={<BuildPage/>} />
      <Route path="/enterbd" element={<EnterBuild/>} />
    </Routes>
      
    </>
  );
}

export default App;
