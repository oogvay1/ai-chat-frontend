import { useState, useRef, useEffect } from "react";

export default function ChatInput() {
    
    async function sendMessage(text) {

        const res = await fetch('http://localhost:3000/chat/text', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                mode: "text",
                prompt: text
            })
        });
        const data = await res.json();

        chat.push({ role: "ai", text: data.output });

        localStorage.setItem('chat', JSON.stringify(chat));
    };

    const getUser = async () => {

        const res = await fetch('http://localhost:3000/api/auth/user', {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NTY5NTA2NTcsImV4cCI6MTc1OTU0MjY1N30.tGwuPkAIJEKOazQfSfUmBB1n2dP3uSa8_m32SECmY5A"
            }
        });

        const data = await res.json();

        console.log(data);
    }

    getUser()

    return (
        <>
            <div className="input-container">
                
            </div>
        </>
    );
}
