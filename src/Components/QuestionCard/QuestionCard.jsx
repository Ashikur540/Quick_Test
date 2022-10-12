import React, { useState, useEffect } from 'react';
import { MdVisibility } from "react-icons/md";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuestionCard = ({ Singlequestion, setScore, score }) => {

    // console.log("this ", question);
    const { question, options, id, correctAnswer } = Singlequestion;


    const ValidateAnswer = (ans) => {
        // console.log(ans);

        if (ans === correctAnswer) {

            let newScore = score + 1;
            setScore(newScore);

            // let newscore = score + 1;
            // setScore(newscore);
            // console.log(score);
            toast.success(' Correct answer wow 😲', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else {

            toast.error('!!Worng answer !! 🥱', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }


        < ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored" />
    }


    // show answer
    const showAnswer = (ans) => {
        let correctAns = `Answer: ${ans}`
        toast.info(<p className="text-md font-bold"><>{correctAns}</></p>, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }

    return (
        <div className="bg-cyan-50 my-4 max-w-lg mx-auto px-8 py-4 rounded-xl shadow-lg">

            <div className="p-2 flex justify-between items-center">
                <h1 className='text-xl font-semibold my-8'>{question} ?</h1>
                <label htmlFor="my-modal-4" className="cursor-pointer" >  <MdVisibility htmlFor="my-modal-4" className='text-3xl cursor-pointer' onClick={() => showAnswer(correctAnswer)} /></label>
            </div>
            {
                options.map(option => {
                    return (
                        <div className="border p-4 cursor-pointer hover:bg-indigo-200 my-2 rounded-md" onClick={() => ValidateAnswer(option)}>
                            <p className='text-medium'>{option}</p>
                        </div>
                    )
                })
            }

        </div>
    );
};

export default QuestionCard;
