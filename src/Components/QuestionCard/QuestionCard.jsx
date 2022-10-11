import React from 'react';

const QuestionCard = ({ Singlequestion }) => {

    // console.log("this ", question);
    const { question, options, id, correctAnswer } = Singlequestion;


    const ValidateAnswer = (ans) => {
        // console.log(ans);
        if (ans === correctAnswer) alert("your answer is correct");
        else alert("incorrect!!")
    }


    return (
        <div className="bg-white my-4 max-w-lg mx-auto px-8 py-4 rounded-xl shadow-lg">
            <h1 className='text-xl font-semibold my-8'>{question} ?</h1>
            {
                options.map(option => {
                    return (
                        <div className="border p-4 cursor-pointer hover:bg-slate-200 my-2 rounded-md" onClick={() => ValidateAnswer(option)}>
                            <p className='text-medium'>{option}</p>
                        </div>
                    )
                })
            }

        </div>
    );
};

export default QuestionCard;