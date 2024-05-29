import { ToastContainer } from "react-toastify";
import Features from "./Features";
import Todos from "./Todos";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Favourite from "./Favourite";
import Search from "./Search";

const Home = () => {
    return (
        <>
            <Router>
                <ToastContainer />
                <div className="w-full p-10 h-screen bg-black flex flex-col gap-10 items-center justify-center">

                    <p className="text-white text-[40px] font-semibold">
                        to<span className="text-violet-600">do.</span>
                    </p>
                    <div className="w-full h-full flex gap-10 ml-10 ">
                        <Features />
                        <Routes>
                            <Route path="/" element = {<Todos/>} ></Route>
                            <Route path="/favourite" element = {<Favourite/>}></Route>
                            <Route path = "/search" element = {<Search/>}></Route>
                        </Routes>
                    </div>
                </div>
            </Router>
        </>
    )
}
export default Home;