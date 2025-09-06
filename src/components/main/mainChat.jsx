import { useEffect, useState } from 'react';
import ChatInput from '../input';
import './mainChat.css';
import Modal from '../Modal/Modal';

function MainChat() {

    const [showModal, setShowModal] = useState(true);

    useEffect(() => {

        const time = setTimeout(() => {
            setShowModal(false);
        }, 1000);

        return () => {
            clearTimeout(time);
        }
    }, []);

    return (
        <>
            {(!showModal && !localStorage.getItem('token')) ? <Modal /> : null}

            <div className="main-chat">
                <div className="chat-inner">

                    <header>
                        <div className="header-inner">
                            <div className="logo">
                                <h1>AI Chat</h1>
                            </div>

                            <div className="navigation">
                                <div className="upgrade">
                                    <button>⚡ Upgrade</button>
                                </div>

                                <div className="faqs">
                                    <i className="ri-question-line"></i>
                                </div>

                                <div className="gifts">
                                    <i className='bx bx-gift'></i>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div className="main-screen">
                        <div className="ul">
                        </div>
                        
                        <ChatInput />
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainChat
