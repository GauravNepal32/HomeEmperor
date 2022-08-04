import { useState } from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

export const NewLogin = () => {
    const [user, setUser] = useState("");
    const auth = useAuth();
    const navigate = useNavigate();
    const handleLogin = () => {
        auth.login(user)
        navigate('/portal/profile')
    }
    return (
        <div>
            <label>
                email:
                <input type='text' onChange={(e) => setUser(e.target.value)} />
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};
