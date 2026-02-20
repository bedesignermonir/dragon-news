import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    console.log(news);
    return (
        <div className='bg-gray-50 p-5 rounded-xl'>
            <img className='w-full rounded-2xl' src={news.image_url} alt="" />
            <h1 className='text-3xl font-bold my-5'>{news.title}</h1>
            <p className='text-2xl my-5'>{news.details}</p>
            <Link to={`/category/${news.category_id}`} className='btn btn-accent'>All News in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;