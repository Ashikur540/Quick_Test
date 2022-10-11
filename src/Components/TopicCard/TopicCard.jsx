import React from 'react';
import { Link } from 'react-router-dom';

const TopicCard = ({ topic }) => {
    // console.log(topic);
    const { id, name, logo, total } = topic;
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl my-8 mx-auto">
                <figure className="px-10 pt-10">
                    <img src={logo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>

                </div>
                <div className="flex justify-between items-center p-10">
                    <p>Question: {total}</p>
                    <Link to={`/topics/${id}`}><button className="btn btn-primary pl-4" >Start practice</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TopicCard;