import {Routes, Route} from "react-router-dom"
import {Home} from "./pages/Home"
import {BuildPage} from "./pages/BuildPage"
import {Toaster} from "react-hot-toast"

function App() {
  return (<>
    <Toaster position="bottom-right" reverseOrder={false} />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/buildpage" element={<BuildPage/>} />
    </Routes>      
    </>
  );
}

export default App;
