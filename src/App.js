import {Routes, Route} from "react-router-dom"
import {Home} from "./pages/Home"
import {BuildPage} from "./pages/BuildPage"
import {EditPericias} from "./Basura/EditPericias"
import {EditPrimario} from "./Basura/EditPrimario"
import { Toaster } from "react-hot-toast"


let identPerson="";


function App() {
  return (<>
  <Toaster position="top-center" reverseOrder={false} />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/buildpage" element={<BuildPage/>} />
      <Route path="/edit/" element={<EditPericias/>} />
      <Route path="/edit/" element={<EditPrimario/>} />
    </Routes>
      
    </>
  );
}

export default App;
