import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import "../assets/css/login.css";

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
        <div className="d-flex golden-background">
            <div className=" text-center logo d-flex flex-column justify-content-center align-items-center">
                <img src="./public/images/Asia.png" alt="Logo Asia" />
                <h2>Plataforma Asia</h2>
            </div>
            <div className="container">
                <div className="row justify-content-center align-items-center vh-100 me-5">
                    <div className="">
                        <div className="card shadow">

                            <div className="card-body ">

                                <h2 className="text-center mb-4">
                                    Iniciar Sesión
                                </h2>

                                <form onSubmit={handleSubmit}>

                                    <div className="mb-3">
                                        <label className="form-label">
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            className="form-control"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="correo@ejemplo.com"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">
                                            Contraseña
                                        </label>

                                        <input
                                            type="password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Contraseña"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <button className="btn btn-login w-100" type="button"><FcGoogle size={20} className="me-2" />Continuar con Google</button>
                                    </div>
                                    <button type="submit" className="btn btn-ingresar w-100">Ingresar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}