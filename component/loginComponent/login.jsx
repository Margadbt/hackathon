import { useState } from 'react';
import "./style.css";

function LoginForm({ onLogin }) {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleShow = () => {
        setShow(!show);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginSuccess = await onLogin(email, password);
        if (!loginSuccess) {
            setErrorMessage("Нууц үг эсвэл нэвтрэх нэр буруу");
        }
    };

    return (
        <div className="login-body">
            <div className="wrapper">
                <form onSubmit={handleSubmit} action="">
                    <div className="logo-login">
                        <img src={Logo} alt="Logo" />
                        <h1>Оюутны туслах</h1>
                    </div>
                    <div className="input">
                        <input type="text" onChange={(e) => setEmail(e.target.value)} className='form-control' id='userName' required />
                        <div className="label">Хэрэглэгч</div>
                    </div>
                    <div className="input">
                        <input id='password' type={show ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} required />
                        <div className="label">Нууц үг</div>
                        {show ? (
                            <i onClick={handleShow} className="fa-solid fa-eye"></i>
                        ) : (
                            <i onClick={handleShow} className="fa-solid fa-eye-slash"></i>
                        )}
                    </div>
                    <div className='line'>
                        < div className="error-message">{errorMessage}</div> {}
                        <div className="remember">

                            <div className="user">
                                <input type="checkbox" className="checkbox" id="rememberMe" />
                                <label htmlFor="rememberMe">Хэрэглэгчийг санах</label>
                            </div>
                            <a href="#">Нууц үгээ мартсан уу?</a>
                        </div>
                    </div>

                    <div className="login">
                        <button type="submit" className="btn">Нэвтрэх</button>
                    </div>
                    <div className="new-user">
                        <a href="#">Шинээр бүртгүүлэх үү?</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
