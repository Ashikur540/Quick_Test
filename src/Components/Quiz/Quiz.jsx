import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import QuestionCard from '../QuestionCard/QuestionCard';

const Quiz = () => {
    const quizTopicData = useLoaderData().data;
    const [score, setScore] = useState(0);
    console.log(quizTopicData);
    const { name, total, questions } = quizTopicData
    return (
        <div>
            <h1 className="text-2xl text-slate-800 my-4"> {name} Quiz</h1>
            <h1 className="text-md text-slate-600"> total -{total}</h1>
            <div className="container mx-auto">
                <div className="py-4 my-4 border-2 rounded bg-cyan-800 text-white">
                    <p className="text-lg font-bold">Score:{score}</p>
                </div>
                {
                    questions.map(Singlequestion => <QuestionCard key={Singlequestion.id} setScore={setScore} score={score} Singlequestion={Singlequestion}></QuestionCard>)
                }
            </div>
        </div>
    );
};

export default Quiz;