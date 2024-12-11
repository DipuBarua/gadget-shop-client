import ReviewCard from "../cards/ReviewCard";

const Review = () => {
    return (
        <div className=" lg:flex space-x-3 justify-center items-center">
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
        </div>
    );
};

export default Review;