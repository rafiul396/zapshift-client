import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const ReviewCard = ({ reviewC }) => {
    // const [review, userName, user_photoURL, date] = reviewC;
    // const dates = new Date(reviewC.date);

    return (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 max-w-md">
            {/* Quote Icon */}
            <div className="text-teal-300 text-4xl mb-4">
                <FaUserCircle />
            </div>

            {/* Review Text */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
               {reviewC.review}
            </p>

            {/* Divider */}
            <div className="border-t border-dashed border-gray-300 my-4"></div>

            {/* Profile Section */}
            <div className="flex items-center gap-3">
                {/* Circle Avatar Placeholder */}
                <div></div>
                    <img className="w-10 h-10 rounded-full bg-teal-900" src={reviewC.user_photoURL} alt="" />
                <div>
                    <h3 className="font-semibold text-gray-800">
                        {reviewC.userName}
                    </h3>
                    <p className="text-sm text-gray-500">
                        {new Date(reviewC.date).toLocaleDateString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;