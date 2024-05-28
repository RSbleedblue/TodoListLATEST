import { ToastContainer } from "react-toastify";
import Features from "./Features";
import Todos from "./Todos";
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    return (
        <>
        
        <ToastContainer/>
            <div className="w-full p-10 h-screen bg-black flex flex-col gap-10 items-center justify-center">
                
                <p className="text-white text-[40px] font-semibold">
                    to<span className="text-violet-600">do.</span>
                </p>
                <div className="w-full h-full flex gap-10 ml-10 ">
                    <Features />
                    <Todos/>
                </div>
            </div>
        </>
    )
}
export default Home;