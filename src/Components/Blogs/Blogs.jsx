import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-slate-800  my-4 ">Welcome to our Blogs</h1>


            <div className="bg-cyan-50 px-6 py-3 text-left max-w-5xl border-4 rounded-lg shadow-lg mx-auto my-10">
                <h1 className="text-slate-700 font-semibold py-4 text-xl">What is the purpose of react router?</h1>
                <p className="text-slate-600">
                    React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package.Also provides
                    <ol className="list-disc">
                        <li className="ml-7">Dynamic Routing</li>
                        <li className="ml-7">Client side Routing</li>
                        <li className="ml-7">Helps creating single page applications</li>
                    </ol>
                    besides ,also provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.
                </p>
            </div>
            <div className="bg-cyan-50 px-6 py-3 text-left max-w-5xl border-4 rounded-lg shadow-lg mx-auto my-10">
                <h1 className="text-slate-700 font-semibold py-4 text-xl">How does context API works?</h1>
                <p className="text-slate-600">
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around.<br />
                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                </p>
            </div>
            <div className="bg-cyan-50 px-6 py-3 text-left max-w-5xl border-4 rounded-lg shadow-lg mx-auto my-10">
                <h1 className="text-slate-700 font-semibold py-4 text-xl">What is useref Discuss briefly?</h1>
                <p className="text-slate-600">
                    The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue). The returned object will persist for the full lifetime of the component.<br />
                    There are two main uses of useRef:
                    <ol className="list-disc">
                        <li className="ml-7">Accessing the DOM nodes or React elements</li>
                        <li className="ml-7">Keeping a mutable variable</li>

                    </ol>
                </p>
            </div>
        </div>
    );
};

export default Blogs;