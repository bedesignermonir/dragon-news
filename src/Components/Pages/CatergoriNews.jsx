import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../HomeLayout/NewsCard';

const CatergoriNews = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const [categoryNews, setCategoryNews] = useState([])



    useEffect(() => {
        if (id == '0') {
            setCategoryNews(data);
            return;
        }
        else if (id == '1') {
            const filteredNews = data.filter((news) => news.others.is_today_pick == true);
            setCategoryNews(filteredNews);
        }
        else {
            const filteredNews = data.filter((news) => news.category_id == id);
            setCategoryNews(filteredNews);
        }
    }, [id, data])





    return (
        <div>
            <h1 className='font-bold'>Total <span className='text-red-400'>{categoryNews.length}</span> News Found</h1>

            <div>
                {
                    categoryNews.map((news) =>
                    (<NewsCard
                        news={news}
                        key={categoryNews.id}>

                    </NewsCard>
                    ))
                }
            </div>

        </div>
    );
};

export default CatergoriNews;