import React from 'react';
import data from '../utils/data'
import SingleItem from './SingleItem';

function Home() {
    // console.log(data)
    return (
        <>
        <div className="home">
            {
                data.map(single=>{
                    return <SingleItem key={single.id} singleItem={single}/>
                })
            }
        </div>
        </>
    )
}

export default Home
