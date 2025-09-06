import Aside from "../../components/Aside/Aside";
import MainChat from "../../components/main/mainChat";
import './chat.css';

function Chat() {

    return (
        <>
            <section className="chat">
                <Aside />

                <MainChat />
            </section>
        </>
    );
}

export default Chat
