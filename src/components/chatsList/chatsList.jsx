import './chatsList.css';

function ChatsList({ name }) {

    return (
        <>
            <div className="history-li">
                <div className="chat-name">
                    <p>{name}</p>
                </div>

                <div className="chat-configuration">
                    <i className="ri-more-line dots"></i>
                </div>
            </div>
        </>
    );
}

export default ChatsList
