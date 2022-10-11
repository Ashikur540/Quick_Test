import React from 'react';
import { useLoaderData } from 'react-router';
import QuestionCard from '../QuestionCard/QuestionCard';

const Quiz = () => {
    const quizTopicData = useLoaderData().data;
    // console.log(quizTopicData);
    const { name, total, questions } = quizTopicData
    return (
        <div>
            <h1 className="text-2xl text-slate-800 my-4"> {name} Quiz</h1>
            <h1 className="text-md text-slate-600"> total -{total}</h1>
            <div className="container mx-auto">
                {
                    questions.map(Singlequestion => <QuestionCard Singlequestion={Singlequestion}></QuestionCard>)
                }
            </div>
        </div>
    );
};

export default Quiz;