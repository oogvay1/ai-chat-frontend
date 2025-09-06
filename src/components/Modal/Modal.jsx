import { useNavigate } from 'react-router-dom';
import './Modal.css';

function Modal() {

    const navigate = useNavigate();

    return (
        <>
            <div className="modal-container">
                <div className="modal-inner-2">
                    <div className="modal-title">
                        <h1>Welcome back</h1>
                        <p>Login or register to get more logical and smarter answers</p>
                    </div>

                    <div className="buttons-login">
                        <button onClick={() => navigate('/registration')}>Login</button>
                        <button>Register</button>
                    </div>

                    <div className="dont-enter">Dont enter</div>
                </div>
            </div>
        </>
    );
}

export default Modal
