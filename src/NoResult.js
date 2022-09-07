import NoImg from "./images/error/no.png"
import { Link } from "react-router-dom";
const NoResult = (keyword) => {
    return (
        <>
            <div className="main-container my-5">
                <div className="container">
                    <div className="no-result-img mx-auto">
                        <img className="img-fluid" src={NoImg} alt="" />
                    </div>
                    <h1 className="text-center no-result-text">
                        No Result found
                    </h1>
                    <div className="text-center">
                        <Link to="/" className="redirect-link text-center text-black ">
                            Go Back
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NoResult;