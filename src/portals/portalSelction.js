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
    const role = userData.role;
    useEffect(() => {
        {
            if (role === "agent") {
                setAgent(true)
            } else if (role === "student") {
                setStudent(true)
            }else if(role ==="sub agent"){
                setSubAgent(true)
            }
        }
    }, []);
    useEffect(() => {
        if (student) {
            navigate('/portal')
        } else if (agent) {
            navigate('/PortalAgent')
        }else if (subAgent){
            navigate('/PortalSubAgent')
        }
    })
    return <div>
        <div className="">
        </div>
    </div>;
};

export default PortalSelection;
