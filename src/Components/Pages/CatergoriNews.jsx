import React from 'react';
import { useParams } from 'react-router';

const CatergoriNews = () => {
    const { id } = useParams();
    return (
        <div>
            This is category news - {id}
        </div>
    );
};

export default CatergoriNews;