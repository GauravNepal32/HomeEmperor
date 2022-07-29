import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const PortalLeft = () => {
    const location = useLocation().pathname;
    const [activePortal, setActivePortal] = useState("Dashboard");
    useEffect(() => {
        if (location == "/portal/courses") {
            setActivePortal("Courses");
        } else if (location === "/portal/dashboard") {
            setActivePortal("Dashboard");
        } else if (location === "/portal/university") {
            setActivePortal("University");
        } else if (location === "/portal/profile") {
            setActivePortal("Profile");
        } else if (location === "/portal/document") {
            setActivePortal("Document");
        } else if (location === "/portal/processing") {
            setActivePortal("Processing");
        }
    });
    return (
        <div className='main-container h-100'>
            <div className='portal-left-container d-flex justify-content-center h-100 contianer'>
                <nav className='w-100'>
                    <ul id="portal-menu" className='portal-nav-list mt-md-5 w-100 d-flex flex-md-column justify-content-evenly list-unstyled'>
                        <Link to={"dashboard"}>
                            <li
                                className={
                                    activePortal === "Dashboard"
                                        ? "text-center d-flex flex-md-row flex-column justify-content-md-start justify-contet-center align-items-md-center active-portal"
                                        : "text-center d-flex flex-md-row flex-column justify-content-md-start justify-contet-center align-items-md-center"
                                }>
                                <span class='material-symbols-outlined me-md-3'>dashboard</span>
                                <span className="d-md-block d-none">Dashboard</span>
                            </li>
                        </Link>
                        <Link to={"courses"}>
                            <li
                                className={
                                    activePortal === "Courses"
                                        ? "text-center d-flex flex-md-row flex-column justify-content-md-start justify-contet-center align-items-md-center active-portal"
                                        : "text-center d-flex flex-md-row flex-column justify-content-md-start justify-contet-center align-items-md-center"
                                }>
                                <span class='material-symbols-outlined me-md-3'>
                                    library_books
                                </span>
                                <span className="d-md-block d-none">My Courses</span>
                            </li>
                        </Link>
                        <Link to={"university"}>
                            <li
                                className={
                                    activePortal === "University"
                                        ? "text-center d-flex flex-md-row flex-column justify-content-md-start justify-contet-center align-items-md-center active-portal"
                                        : "text-center d-flex flex-md-row flex-column justify-content-md-start justify-contet-center align-items-md-center"
                                }>
                                <span class='material-symbols-outlined me-md-3'>
                                    location_city
                                </span>
                                <span className="d-md-block d-none">My University</span>
                            </li>
                        </Link>
                        <Link to={"profile"}>
                            <li
                                className={
                                    activePortal === "Profile"
                                        ? "text-center d-flex flex-md-row flex-column justify-content-md-start justify-contet-center align-items-md-center active-portal"
                                        : "text-center d-flex flex-md-row flex-column justify-content-md-start justify-contet-center align-items-md-center"
                                }>
                                <span class='material-symbols-outlined me-md-3'>
                                    account_circle
                                </span>
                                <span className="d-md-block d-none">My Profile</span>
                            </li>
                        </Link>
                        <Link to={"document"}>
                            <li
                                className={
                                    activePortal === "Document"
                                        ? "text-center d-flex flex-md-row flex-column justify-content-md-start justify-contet-center align-items-md-center active-portal"
                                        : "text-center d-flex flex-md-row flex-column justify-content-md-start justify-contet-center align-items-md-center"
                                }>
                                <span class='material-symbols-outlined me-md-3'>description</span>
                                <span className="d-md-block d-none">Document Details</span>
                            </li>
                        </Link>
                        <Link to={"processing"}>
                            <li
                                className={
                                    activePortal === "Processing"
                                        ? "text-center d-flex flex-md-row flex-column justify-content-md-start justify-contet-center align-items-md-center active-portal"
                                        : "text-center d-flex flex-md-row flex-column justify-content-md-start justify-contet-center align-items-md-center"
                                }>
                                <span class='material-symbols-outlined me-md-3'>timeline</span>
                                <span className="d-md-block d-none">Processing Status</span>
                            </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default PortalLeft;
