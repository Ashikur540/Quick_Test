import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page " className=" container mx-auto">
            <h1 className='text-6xl font-bold text-indigo-900 my-8'>Oops!</h1>
            <p className="mt-5 text-5xl">😣</p>
            <p className="mt-5 text-xl">Sorry, an unexpected error has occurred.</p>
            <p className="mt-5 text-xl">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}