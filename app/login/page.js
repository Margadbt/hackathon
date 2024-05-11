
"use client"
import { useState } from 'react';
import "./style.css";

export default function LoginForm({ onLogin }) {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleShow = () => {
        setShow(!show);
    };

    return (
        <div className="login-body">
            <div className="wrapper">

                <div className="logo-login">
                    <h1>Оюутны туслах</h1>
                </div>
                <div className="input">
                    <input type="text" onChange={(e) => setEmail(e.target.value)} className='form-control' id='userName' required />
                    <div className="label">Хэрэглэгч</div>
                </div>
                <div className="input">
                    <input id='password' type={show ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} required />
                    <div className="label">Нууц үг</div>

                </div>
                <div className='line'>

                    <div className="remember">
                        <div className="user">
                            <input type="checkbox" className="checkbox" id="rememberMe" />
                            <label htmlFor="rememberMe">Хэрэглэгчийг санах</label>
                        </div>

                    </div>
                </div>
                <div className="login">
                    <button type="submit" className="btn">Нэвтрэх</button>
                </div>
                <div className="new-user">
                    <a href="#">Шинээр бүртгүүлэх үү?</a>
                </div>

            </div>
        </div>
    );
}
