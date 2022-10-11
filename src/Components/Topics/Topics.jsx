import React from 'react';
import { useLoaderData } from 'react-router';
import Header from '../Header/Header';
import TopicCard from '../TopicCard/TopicCard';

const Topics = () => {
    const topicsData = useLoaderData().data;
    console.log(topicsData);
    return (
        <div>
            <Header></Header>

            <h1 className="text-3xl font-semibold text-sky-500">Explore our Topics</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-32">
                {
                    topicsData.map(topic => <TopicCard
                        key={topic.id}
                        topic={topic}
                    ></TopicCard>)
                }
            </div>
        </div>
    );
};

export default Topics;