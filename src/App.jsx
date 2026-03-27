import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage";
import Builder from "./Pages/BuilderPage";
import Preview from "./Pages/PreviewPage";
import Landing from "./Pages/LandingPage";
import Navbar from "./Components/Home/Navbar";
import { ToastContainer } from "react-toastify";

const App=()=>{
    return (
      <div className="text-black">
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/builder/:type" element={<Builder />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      </div>
    );
}
export default App;