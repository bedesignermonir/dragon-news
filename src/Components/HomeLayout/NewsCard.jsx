

import React from 'react';

const NewsCard = ({ news }) => {
    // Destructure for easier access
    const {
        title,
        author,
        image_url,
        details,
        rating,
        total_view,
        others
    } = news;

    // Helper function to format the date
    const formatDate = (isoDate) => {
        if (!isoDate) return 'N/A';
        const date = new Date(isoDate);
        // Format to a readable string like "August 24, 2022"
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    // Helper to render star rating icons
    const renderStars = (starCount) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <input
                    key={i}
                    type="radio"
                    name={`rating-${news.id}`} // Unique name for radio group
                    className={`mask mask-star-2 ${i < starCount ? 'bg-orange-400' : 'bg-gray-300'}`}
                    checked={i === starCount - 1} // Check the last star up to the rating number
                    readOnly // Stars are for display only
                    style={{ width: '0.8rem', height: '0.8rem' }} // Custom size for better fit
                />
            );
        }
        return stars;
    };

    return (
        // daisyUI Card container with a strong shadow
        <div className="card w-full max-w-sm md:max-w-md lg:max-w-lg bg-base-100 shadow-xl border border-gray-200 mx-auto mt-5">
            {/* 1. Header Section: Author and Action Icons */}
            <div className="flex items-center justify-between p-4 pb-0">
                <div className="flex items-center space-x-3">
                    {/* Author Image */}
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={author.img} alt={author.name} />
                        </div>
                    </div>
                    {/* Author Name and Date */}
                    <div>
                        <p className="font-semibold text-sm text-gray-800">{author.name}</p>
                        <p className="text-xs text-gray-500">{formatDate(author.published_date)}</p>
                    </div>
                </div>
                {/* Save and Share Icons (Placeholder) */}
                <div className="flex space-x-3 text-gray-500">
                    {/* Bookmark Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 cursor-pointer hover:text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                    </svg>
                    {/* Share Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 cursor-pointer hover:text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.684 13.342C8.882 13.118 9 12.835 9 12.5a2.5 2.5 0 115 0c0 .335.118.618.316.842m-1.391 3.518A7.989 7.989 0 0112 16a7.989 7.989 0 01-3.301-6.81m-2.189 4.39A9.98 9.98 0 0012 22a9.98 9.98 0 005.49-2.071m-.468-3.327a1.5 1.5 0 11-3.238-1.554 1.5 1.5 0 013.238 1.554z"
                        />
                    </svg>
                </div>
            </div>

            {/* 2. Main Content: Title, Image, and Snippet */}
            <div className="card-body p-4 pt-2">
                <h2 className="card-title text-xl font-bold leading-tight mb-2 text-gray-900">
                    {title}
                </h2>

                {/* Main Image */}
                <figure className="mb-4">
                    <img
                        src={image_url}
                        alt={title}
                        className="rounded-lg w-full h-48 object-cover"
                    />
                </figure>

                {/* Metadata and Tags */}
                <div className="flex flex-wrap gap-2 mb-2 text-sm text-gray-600">

                </div>

                {/* Snippet with 'Read More' link */}

                <p className="text-base text-gray-700 mb-2 leading-relaxed">
                    {details.substring(0, 150)}...
                    <a href="#" className="font-semibold text-red-600 hover:underline ml-1">
                        Read More
                    </a>
                </p>

                {/* 3. Footer Section: Rating and Views */}
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                    {/* Star Rating */}
                    <div className="flex items-center space-x-1">
                        <div className="rating rating-sm flex space-x-0.5">
                            {renderStars(rating.number)}
                        </div>
                        <span className="text-base font-semibold text-gray-800 ml-2">
                            {rating.number}.0
                        </span>
                    </div>

                    {/* Views Count */}
                    <div className="flex items-center text-gray-500">
                        {/* Eye Icon (Placeholder) */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                        </svg>
                        <span className="text-sm font-medium">
                            {total_view.toLocaleString()}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;