import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PortalAgent from "./agent/PortalAgent";
import Portal from "./portal";
import Dashboard from "./studentPortal/Dashboard";

const PortalSelection = () => {
    const navigate = useNavigate();
    const userData = JSON.parse(sessionStorage.getItem("token"));
    const [agent, setAgent] = useState(false)
    const [student, setStudent] = useState(false)
    const [subAgent, setSubAgent] = useState(false)
    const [admin, setAdmin] = useState(false)
    const userID = userData.id;
    useEffect(() => {
        {
            if (userID === 14) {
                setAgent(true)
            } else {
                setStudent(true)
            }
        }
    }, []);
    useEffect(() => {
        if (student) {
            navigate('/portal')
        } else if (agent) {
            navigate('/PortalAgent')
        }
    })
    return <div>
        <div className="">
        </div>
    </div>;
};

export default PortalSelection;
