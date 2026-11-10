import "./Chatbot.css";
import { Send } from "lucide-react";
import { useState } from "react";


function Chatbot(){
    const [message,setMessage]=useState("");
    const [reply,setReply]=useState("");
    const [messages,setMessages]=useState([]);
    const [isLoading, setIsLoading]=useState(false);

    const handleSend=async ()=>{
        if(!message.trim()) return;
        setIsLoading(true);
        setMessages(prevMessages=>[
            ...prevMessages,{
                sender: "user" ,text: message
            }

        ]);

        try{
        const response = await fetch("http://localhost:3000/api/chat", {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: message })    



    });
    if (!response.ok){
        throw new Error("Request failed");
    }
    const data= await response.json();
    setReply(data.reply);
    setMessages(prevMessages=>[
            ...prevMessages,{
                sender: "bot" ,text: data.reply
            }

        ]);
    setMessage("");

    }
    catch(error){
        console.error("Chatbot error: ",error);
        setReply("Something went wrong. Please try again.");
    }



    };
    return(
        <>
        <div className="chatbotPAGE">
            {messages.length===0&&(
          <h1>Hello, How can I help you?</h1> )}

          <div className="chatMessages">
            {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                    {msg.text}
                </div>
            ))}
            </div> 

          <div className="messageInput">
            <input type="text" placeholder="Ask your question..." id="msgInput" className="msgINPUT"
            value={message}
            onChange={(e) =>setMessage(e.target.value)}
            onKeyDown={(e)=>{
                if(e.key=== "Enter"){
                    handleSend();
                }}
            }
            />
            <button className="sendBUTT" onClick={handleSend}><Send  size={20} className="sendICON"/></button>
          </div>
          <p>Chatbot can make mistakes. Check importants informations.</p>
        </div>
        </>
    )
}

export default Chatbot;
