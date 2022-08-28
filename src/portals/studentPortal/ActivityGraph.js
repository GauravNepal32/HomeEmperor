import React from "react";
import { Link } from "react-router-dom";

const ActivityGraph = (userActivity) => {
    return (
        <>
            <div className='d-flex flex-column'>
                {/* Displaying two processes only */}
                {userActivity.userActivity.slice(0, 2).map((activities) => (
                    <div className='processing-timline-child d-flex align-items-center'>
                        <div className='date-container'>{(activities.created_at).substring(0, 10)}</div>
                        <div className='timeline-checkpoint mx-4'></div>
                        <div className='straight-line-container'></div>
                        <div className='timeline-description '>
                            <div className="fw-bold"> {activities.title}
                                <a target="_blank" href={activities.image} className="ms-2 text-black fw-normal">View File</a>

                            </div>


                            <div className='timeline-description2'>
                                {activities.description}
                            </div>
                        </div>

                    </div>
                ))}
                <Link to="/portal/processing" className="more-contain-btn ">View More</Link>
            </div>
        </>
    );
}

export default ActivityGraph;