import { PacmanLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className=" flex justify-center items-center min-h-screen bg-slate-100">
            <PacmanLoader
                color="#4c31b9"
                loading={true}
                size={50}
            />
        </div>
    );
};

export default Loading;