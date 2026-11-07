import "./Chatbot.css";
import { Send } from "lucide-react";

function Chatbot(){
    return(
        <>
        <div className="chatbotPAGE">
          <h1>Hello, How can I help you?</h1>  
          <div className="messageInput">
            <input type="text" placeholder="Ask your question..." id="msgInput" className="msgINPUT"/>
            <button className="sendBUTT"><Send  size={20} className="sendICON"/></button>
          </div>
          <p>Chatbot can make mistakes. Check importants informations.</p>
        </div>
        </>
    )
}

export default Chatbot;
