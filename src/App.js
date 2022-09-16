import {Routes, Route} from "react-router-dom"
import {Home} from "./pages/Home"
import {BuildPage} from "./pages/BuildPage"
import {ConsultPage} from "./pages/ConsultPage"
import {Toaster} from "react-hot-toast"
import {EditPage} from "./pages/EditPage"


function App() {
  return (<>
    <Toaster position="bottom-right" reverseOrder={false} />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/buildpage" element={<BuildPage/>} />
      <Route path="/consultpage" element={<ConsultPage/>} />
      <Route path="/editpage/:id" element={<EditPage />} />
    </Routes>      
    </>
  );
}

export default App;
