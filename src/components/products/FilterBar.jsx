
import { CiFilter } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";

const FilterBar = () => {

    return (
        <div className=" mt-7 bg-gray-300 min-h-screen p-4 rounded-t-md divide-y-2">
            <div className=" flex justify-center items-center text-slate-600 gap-2 my-2">
                <CiFilter size={24} />
                <h1 className=" text-xl font-bold">Filter</h1>
            </div>

            <div className=" flex flex-col gap-4 justify-center items-center py-4">
                <div className=" w-full">
                    <select className="select select-bordered border border-black w-full max-w-xs">
                        <option disabled selected>Low to High</option>
                        <option value=''>item</option>
                        <option value=''>item</option>
                        <option value=''>item</option>
                    </select>
                </div>

                <div className=" w-full">
                    <select className="select select-bordered border border-black w-full max-w-xs">
                        <option disabled selected>Low to High</option>
                        <option value=''>item</option>
                        <option value=''>item</option>
                        <option value=''>item</option>
                    </select>
                </div>

                <div className=" w-full">
                    <select className="select select-bordered border border-black w-full max-w-xs">
                        <option disabled selected>Low to High</option>
                        <option value=''>item</option>
                        <option value=''>item</option>
                        <option value=''>item</option>
                    </select>
                </div>

                <div className=" w-full">
                    <select className="select select-bordered border border-black w-full max-w-xs">
                        <option disabled selected>Low to High</option>
                        <option value=''>item</option>
                        <option value=''>item</option>
                        <option value=''>item</option>
                    </select>
                </div>

            </div>

            <button className=" w-full btn flex gap-2">
                Reset
                <GrPowerReset size={15} />
            </button>

        </div>
    );
};

export default FilterBar;