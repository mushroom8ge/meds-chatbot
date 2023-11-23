import React, { useState } from 'react';
import './App.css';
import { Input } from "antd-mobile";
import './common.css';
import axios from 'axios';


function App() {
    const [msg, setMsg] = useState("");
    const [history, setHistory] = useState([]);

    const handleButtonClick = async () => {
        // Define the behavior when the button is clicked
        const response = await axios.post('http://localhost:5005/webhooks/rest/webhook', {
                sender: 'user',
                message: "/restart",
            });
            setHistory([]);
        console.log("Button clicked");
        // Add your custom logic here
    };

    const sendUserInputToRasa = async () => {
        try {
            const response = await axios.post('http://localhost:5005/webhooks/rest/webhook', {
                sender: 'user',
                message: msg,
            });
    
            // Assuming the Rasa response is an array of messages
            const messages = response.data;
    
            // Extract and display messages one by one
            setHistory([
                ...history,
                { type: 'user', text: msg },
            ]);
            messages.forEach(message => {
                const botReply = message.text;
                
                // Log individual message
                console.log(botReply);
    
                // Update the state to show each message
                setHistory(prevHistory => [
                    ...prevHistory,
                    { type: 'bot', text: botReply },
                ]);
            });
        } catch (error) {
            console.error('Error communicating with Rasa:', error);
        }
    };
    

    const handleEnterPress = () => {
        console.log("Enter key pressed"); // Debugging log

        // Call a function to send the message to the backend
        sendUserInputToRasa();
        // Clear the input field by updating the key
        // setHistory([...history, msg]);
        setMsg(""); // Clear the input field
        console.log("message:", msg); // Debugging log
    };

    const handleChange = (value) => {
        // Handle changes in the input field
        console.log("Input value:", value); // Debugging log
        setMsg(value);
    };

    return (
        <div className="page flex-col">
            <div className="group_1 flex-row justify-between">
                <div className="group_2 flex-col">
                    {/* <div className="button_new_chat flex-col">
                        <span className="text_1">new&nbsp;chat</span>
                    </div> */}

                    <button className="button_new_chat" onClick={handleButtonClick}>
                        new chat
                    </button>

                    <img
                        className="label_1"
                        src={"https://lanhu.oss-cn-beijing.aliyuncs.com/MasterDDSSlicePNG7058f070968149bce9e2b90b6257511e.png"}
                    />
                    <span className="paragraph_1">
                        <br />
                        <br />
                        <br />
                        Welcome&nbsp;to&nbsp;use&nbsp;chatbot
                        <br />
                        <br />
                        some&nbsp;guide&nbsp;info&nbsp;about&nbsp;the&nbsp;robot&nbsp;
                        <br />
                        <br />
                        balalala&nbsp;&nbsp;balalala
                        <br />
                        <br />
                        OHCP%7Ckrystalb
                    </span>
                </div>
                <div className="dialog_box flex-col">
                    <Input
                        placeholder="Type your message here"
                        value={msg} // Ensure value is not undefined

                        onChange={handleChange}
                        onEnterPress={handleEnterPress}
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            padding: '10px',
                            fontSize: '16px',
                            marginBottom: '10px',
                            width: '100%',
                            boxSizing: 'border-box',
                          }}

                    />
                    <div className="history"  style={{ overflowY: 'auto', maxHeight: '1063px' }}>
                        {history.map((item, index) => (
                            // <div key={index}>{msg}</div>
                            <div key={index} className={item.type}>
                                {item.text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="group_3 flex-row justify-between">
                <img
                    className="oh_logo"
                    src={"https://lanhu.oss-cn-beijing.aliyuncs.com/MasterDDSSlicePNG1f1c91c83883625a3eff3fd6e741f254.png"}
                />
                {/* <div className="block_1 flex-col">
                    <div className="group_4 flex-col">
                        <span className="text_2">text</span>
                        <div className="text-wrapper_2 flex-col">
                            <span className="text_3">Send&nbsp;&nbsp;a&nbsp;message</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default App;
