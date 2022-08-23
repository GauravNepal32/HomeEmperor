import NoImg from "./images/error/no.png"
const NoResult = ({ keyword }) => {
    return (
        <>
            <div className="main-container my-5">
                <div className="container">
                    <div className="no-result-img mx-auto">
                        <img className="img-fluid" src={NoImg} alt="" />
                    </div>
                    <h1 className="text-center no-result-text">
                        No Result found for "{keyword}"
                    </h1>
                </div>
            </div>
        </>
    );
}

export default NoResult;