
import { CiFilter } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";

const FilterBar = ({ setBrand, setCategory, handleReload, uniqueBrand, uniqueCategory }) => {

    return (
        <div className=" mt-7 bg-gray-300 h-full md:min-h-screen p-4 rounded-t-md divide-y-2">
            <div className=" flex justify-center items-center text-slate-600 gap-2 my-2">
                <CiFilter size={24} />
                <h1 className=" text-xl font-bold">Filter</h1>
            </div>

            <div className=" flex flex-col gap-4 justify-center items-center py-4">
                <div className=" w-full">
                    <select
                        onChange={(e) => { setBrand(e.target.value) }}
                        className="select select-bordered border border-black w-full max-w-xs">
                        <option value={''}>Brand</option>
                        {
                            uniqueBrand.map((item, index) =>
                                <option key={index} value={item}>
                                    {item}
                                </option>)
                        }
                    </select>
                </div>

                <div className=" w-full">
                    <select
                        onChange={(e) => { setCategory(e.target.value) }}
                        className="select select-bordered border border-black w-full max-w-xs">
                        <option value={''}>Category</option>
                        {
                            uniqueCategory.map((item, index) =>
                                <option key={index} value={item}>
                                    {item}
                                </option>)
                        }
                    </select>
                </div>

            </div>

            <button onClick={handleReload} className=" w-full btn flex gap-2">
                Reset
                <GrPowerReset size={15} />
            </button>

        </div>
    );
};

export default FilterBar;