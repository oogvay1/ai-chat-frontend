import { useEffect, useRef, useState } from 'react';
import ChatsList from '../chatsList/chatsList';
import './Aside.css';
import Lenis from 'lenis';
import gsap from 'gsap';

function Aside() {

    const chatsRef = useRef(null);
    const aside = useRef(null);
    const modes = useRef([]);
    const [isClose, setIsClose] = useState(false);

    useEffect(() => {
        if (!chatsRef.current) return

        const lenis = new Lenis({
            wrapper: chatsRef.current,
            content: chatsRef.current,
            smooth: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        }
    }, []);

    const close = () => {
        setIsClose(!isClose);

        const tl = gsap.timeline({
            defaults: { duration: 0.5, ease: "power2.out" }
        });

        if (!isClose) {

            tl.to(aside.current, { width: 65 }, 0);

            modes.current.forEach((el, index) => {
                const p = el.querySelector("p");

                tl.to(el, {
                    padding: "6px 8px",
                    y: index === 0 ? -20 : 20,
                    x: index === 0 ? 0 : -39.7
                },
                    0
                );

                tl.to(p, {
                    autoAlpha: 0,
                    fontSize: 0,
                    onComplete: () => {
                        gsap.set(p, { display: "none" });
                    }
                },
                    0
                );
            });

            tl.to(".modes", {
                width: 34,
                height: 80,
                y: -40
            },
                0
            );

            gsap.to('.chat-history', {
                opacity: 0
            });

            gsap.to('.user-data', {
                opacity: 0
            });

            gsap.to('.user-pic', {
                x: -5
            });
        } else {
            tl.to(aside.current, { width: 260 }, 0);

            modes.current.forEach((el, index) => {
                const p = el.querySelector("p");

                tl.to(el, {
                    padding: "6px 25px",
                    x: 0,
                    y: 0
                },
                    0
                );

                tl.to(p, {
                    display: "block",
                    fontSize: 16,
                    onComplete: () => {
                        gsap.to(p, {
                            autoAlpha: 1
                        });
                    }
                },
                    0
                );
            });

            tl.to(".modes", {
                width: 230,
                height: 38,
                y: 0
            },
                0
            );

            gsap.to('.chat-history', {
                opacity: 1
            });

            gsap.to('.user-pic', {
                x: 0
            });

            gsap.to('.user-data', {
                opacity: 1
            });
        }
    };

    return (
        <>
            <aside ref={aside} className='aside'>
                <div className="aside-inner">

                    <div className="top-content">
                        <div className="aside-header">
                            <div className="aside-logo">
                                <h1>Chat</h1>
                                <i className="ri-typhoon-line"></i>
                            </div>

                            <button className="aside-close" onClick={close}>
                                <img src="src/assets/sidebar.png" alt="" />
                            </button>
                        </div>

                        <div className="aside-control">
                            <div className="aside-new-chat">
                                <i className="ri-add-large-line"></i>
                                <p>New chat</p>
                            </div>

                            <div className="aside-search">
                                <i className="ri-search-2-line"></i>
                                <p>Chat search</p>
                            </div>
                        </div>

                        <div className="chat-history">
                            <div className="chat-history-title">
                                <h2>Chats</h2>
                            </div>

                            <div ref={chatsRef} className="chats">
                                <ChatsList name={'GSAP animation'} />
                                <ChatsList name={'GSAP animation'} />
                                <ChatsList name={'GSAP animation'} />
                                <ChatsList name={'GSAP animation'} />
                                <ChatsList name={'GSAP animation'} />
                                <ChatsList name={'GSAP animation'} />
                                <ChatsList name={'GSAP animation'} />
                                <ChatsList name={'GSAP animation'} />
                                <ChatsList name={'GSAP animation'} />
                                <ChatsList name={'GSAP animation'} />
                                <ChatsList name={'GSAP animation'} />
                                <ChatsList name={'GSAP animation'} />
                                <ChatsList name={'GSAP animation'} />
                                <ChatsList name={'GSAP animation'} />
                                <ChatsList name={'GSAP animation'} />
                                <ChatsList name={'GSAP animation'} />
                                <ChatsList name={'GSAP animation'} />
                                <ChatsList name={'GSAP animation'} />
                                <ChatsList name={'GSAP animation'} />
                                <ChatsList name={'GSAP animation'} />
                                <ChatsList name={'GSAP animation'} />
                                <ChatsList name={'GSAP animation'} />
                                <ChatsList name={'GSAP animation'} />
                                <ChatsList name={'GSAP animation'} />
                                <div className="div"></div>
                            </div>
                        </div>

                        <div className="shadow1"></div>
                    </div>

                    <div className="lower-content">
                        <div className="lower-inner">

                            <div className="modes">
                                <div ref={(el) => modes.current[0] = el} className="light">
                                    <i className="ri-sun-line"></i>
                                    <p>Light</p>
                                </div>

                                <div ref={(el) => modes.current[1] = el} className="dark">
                                    <i className="ri-moon-line"></i>
                                    <p>Dark</p>
                                </div>
                            </div>

                            <div className="account">

                                <div className="user-pic">
                                    <img width={80} src="src/assets/userpic.png" alt="" />
                                </div>

                                <div className="user-data">
                                    <p className='user-name'>Alibekov Azimbek</p>
                                    <p className='plan'>Pro Max</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </aside>
        </>
    );
}

export default Aside
