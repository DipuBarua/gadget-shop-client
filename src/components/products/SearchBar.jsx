import { FaSearchengin } from "react-icons/fa";

const SearchBar = () => {
    return (
        <div>
            <form className=" flex items-center gap-[2px]">
                <input
                    type="text"
                    placeholder="Search Gadgets"
                    name="search"
                    className=" text-slate-700 border border-black px-2 py-[11px] rounded-l-md rounded-r-none max-w-md"
                />
                <button className="btn btn-outline bg-gray-300 rounded-l-none rounded-r-md">
                    <FaSearchengin size={25} />
                </button>
            </form>

        </div>
    );
};

export default SearchBar;