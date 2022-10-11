import React from 'react';
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from 'react-router-dom';
const TopicCard = ({ topic }) => {
    // console.log(topic);
    const { id, name, logo, total } = topic;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl my-4 mx-4">
                <figure><img src={logo} alt="logo" className="w-60" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-left">Question: {total}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/topics/${id}`}><button className="btn btn-primary pl-4" >Start practice <MdArrowRightAlt className="text-2xl ml-2" /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopicCard;