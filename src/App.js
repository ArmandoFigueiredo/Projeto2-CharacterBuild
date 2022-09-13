import {Routes, Route} from "react-router-dom"
import {Home} from "./pages/Home"
import {BuildPage} from "./pages/BuildPage"
import {FormPrimario} from "./components/FormPrimario"




function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/buildpage" element={<BuildPage/>} />
    </Routes>
      
    </>
  );
}

export default App;
