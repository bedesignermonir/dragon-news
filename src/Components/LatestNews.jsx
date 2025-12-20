import React from 'react';
import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-primary'>
            <h3 className='text-base-100 bg-accent py-3 px-5'>Latest</h3>
            <Marquee pauseOnHover={true} speed={50}>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolores laudantium autem cum eius, aliquid!</p>

            </Marquee>
        </div>
    );
};

export default LatestNews;