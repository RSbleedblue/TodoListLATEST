import { useContext, useEffect, useState } from "react";
import TODOContext from "../Utils/TODOContext";

const Search = () => {
    const [searchText, setSearchText] = useState("");
    const { state } = useContext(TODOContext);
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        if (searchText.trim() !== "") {
            const results = state.todo.filter(todo =>
                todo.task.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredTodos(results);
        } else {
            setFilteredTodos([]);
        }
    }, [searchText, state.todo]);

    return (
        <>
            <div className="h-[90%] w-[40%] shadow-lg rounded-xl bg-slate-950 flex flex-col p-6 gap-4 items-start relative">
                <p className="text-3xl text-violet-500">Search</p>
                <div className="w-[80%] border border-solid border-white rounded-lg flex gap-2 items-center justify-between p-2">
                    <input
                        className="w-[80%] focus:outline-none rounded-lg bg-transparent text-sm text-white ml-2"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search tasks..."
                    />
                </div>
                <div className="w-full flex flex-col h-[300px] overflow-y-auto">
                    {searchText.trim() !== "" ? (
                        filteredTodos.length > 0 ? (
                            filteredTodos.map((ele) => (
                                <div
                                    className="flex w-[90%] items-center p-2 justify-between hover:bg-slate-900 text-gray-400 text-sm gap-2 transition-all rounded-lg hover:text-white cursor-pointer"
                                    key={ele.id}
                                >
                                    <div className="w-full flex gap-2">
                                        <p className="text-xl">{ele.task}</p>
                                    </div>
                                    <div className="flex gap-4 text-sm items-center">
                                        <p className="text-white">{ele.date}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-sm">No Todos found!</p>
                        )
                    ) : (
                        <p className="text-gray-500 text-sm">Please enter a search term.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Search;
