import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="p-8 ">
                <div className="hero h-96 mt-10 rounded-2xl" style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2020/09/23/07/53/quiz-5595288_960_720.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold text-white">WELCOME TO QUIZZLY 🤗</h1>
                            <p className="mb-5 text-slate-300">Lavel up your technical skills by our quizes..<br></br>
                                So lets check your lavel!!😉😀
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;