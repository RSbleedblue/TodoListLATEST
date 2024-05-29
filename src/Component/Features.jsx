import { FaToggleOn } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Features = () => {
    return (
        <>
            <div className="h-[90%] w-[20%] shadow-lg rounded-xl bg-slate-950  flex flex-col p-6 gap-10 items-center ml-[15%]">
                <div className="w-full text-white flex justify-between items-center">
                    <p className="text-2xl font-semibold text-violet-500">Features
                    </p>
                    <FaToggleOn className="text-3xl text-violet-500" />
                </div>
                <div className="w-full flex flex-col gap-2 text-gray-300">
                    <Link to="/" className="w-full  flex items-center  hover:bg-slate-900 gap-2 p-2 rounded-lg transition-all cursor-pointer">
                        <FaHome />
                        <p>Home</p>
                    </Link>
                    <Link to="/favourite" className="w-full  flex items-center  hover:bg-slate-900 gap-2 p-2 rounded-lg transition-all cursor-pointer">
                        <FaAddressBook />
                        <p>Important</p>
                    </Link>
                    <Link to = "/search" className="w-full flex items-center hover:bg-slate-900 gap-2 p-2 rounded-lg transition-all cursor-pointer">
                        <FaSearch />
                        Search
                    </Link>
                    <div className="w-full flex items-center hover:bg-slate-900 gap-2 p-2 rounded-lg transition-all cursor-pointer">
                        <MdEmail />
                        Email
                    </div>
                </div>
                <FaGithub className="text-white text-3xl mt-20" />
            </div>
        </>
    )
}
export default Features;