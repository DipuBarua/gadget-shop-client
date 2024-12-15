
const SortByPrice = () => {
    return (
        <div>
            <select className="select select-bordered border border-black w-full max-w-xs">
                <option value='asc'>Low to High</option>
                <option value='dsc'>High to Low</option>
            </select>
        </div>
    );
};

export default SortByPrice;