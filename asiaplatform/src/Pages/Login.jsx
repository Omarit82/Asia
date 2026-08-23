import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useState } from "react";

export function Login() {

    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            console.log(data.message);
            return;
        }

        login(data.user, data.token);

        navigate("/dashboard");
    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">
                Ingresar
            </button>

        </form>
    );
}