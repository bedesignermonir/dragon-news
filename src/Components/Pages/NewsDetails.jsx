import React, { useEffect, useState } from 'react';
import Header from '../Header';
import RightAside from '../HomeLayout/RightAside';
import NewsDetailsCard from '../NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    console.log(data, id);

    const [news, setNews] = useState({});

    useEffect(() => {
        const detailsNews = data.find((singleNews) => singleNews.id == id);
        setNews(detailsNews);

    }, [data, id])
    return (
        <div className='mt-5 w-11/12 mx-auto'>
            <Header></Header>
            <main className='grid grid-cols-12 gap-5'>
                <div className='col-span-9'>
                    <h1 className='py-5'>Dragon News</h1>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </div>
                <div className='col-span-3'>
                    <RightAside></RightAside>
                </div>
            </main>
        </div>
    );
};

export default NewsDetails;