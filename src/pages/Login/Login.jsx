import Marquee from "react-fast-marquee";
import './Login.css'
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const forget = useRef(null);
    const navigate = useNavigate();
    const [login, setLogin] = useState(true);

    const initialForm = {
        email: "",
        password: ""
    }
    console.log(login)

    const [form, setForm] = useState(initialForm);

    const handleForm = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {

        if (!form.email || !form.password) return;

        if (form.email.length < 5 || form.password.length < 8) return;

        const res = await fetch(`http://localhost:3000/api/auth/${login ? 'login' : 'signup'}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });

        const json = await res.json();
        setForm(initialForm);
        console.log(json)

        localStorage.setItem('token', json.token);

        if (res.ok) {
            navigate('/');
        }

        document.querySelectorAll('input').value = "";
    }

    return (
        <>
            <div className="modal">

                <div className="modal-flex">

                    <div className="modal-inner">

                        <div className="gradient1"></div>

                        <div className="logo-with-star">
                            <div className="logoR">
                                <i className="ri-typhoon-line"></i>
                            </div>
                        </div>

                        <div className="login-header">
                            <div className="login-title">
                                Log in with email
                            </div>

                            <div className="login-text">
                                Login to an account or create new one to get mode better and best quality answers
                            </div>
                        </div>

                        <form className="inputs-container">
                            <div className="email-container">
                                <i className="fa-solid fa-envelope"></i>
                                <input
                                    onChange={handleForm}
                                    name="email" type="email"
                                    placeholder='Email'
                                    autoComplete="off"
                                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                                />
                            </div>

                            <div className="password-container">
                                <i className="fa-solid fa-lock"></i>
                                <input
                                    onChange={handleForm}
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="off"
                                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                                />
                            </div>
                        </form>

                        <div className="create-acc">
                            <p onClick={() => setLogin(!login)}>Dont have an account?</p>
                        </div>

                        <div className="or">
                            <p>OR</p>
                        </div>

                        <div className="login-methods">
                            <div className="img-container">
                                <img src="src/assets/google.png" alt="" />
                                <p>Continue with Google</p>
                            </div>

                            <div className="img-container">
                                <img src="src/assets/apple.png" alt="" />
                                <p>Continue with Apple</p>
                            </div>

                            <div className="img-container">
                                <img src="src/assets/bill.png" alt="" />
                                <p>Continue with Microsoft account</p>
                            </div>
                        </div>

                        <div className="marquee1">
                            <Marquee className="marque-content" autoFill>
                                <p>&nbsp;&nbsp;&nbsp;Under construction&nbsp;&nbsp;&nbsp;</p>
                            </Marquee>
                        </div>

                        <div className="marquee2">
                            <Marquee className="marque-content" autoFill>
                                <p>&nbsp;&nbsp;&nbsp;Under construction&nbsp;&nbsp;&nbsp;</p>
                            </Marquee>
                        </div>

                    </div>
                    <div className="forget">
                        <p className="forget-p">Forget the password?</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login
