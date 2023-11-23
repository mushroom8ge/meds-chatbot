// import React, { Component, useState } from "react";
// import { Switch, NavBar, Checkbox, Radio, Input } from "antd-mobile";
// import './common.css';

// class LandingPage extends Component {
//     state = {
//         message: "",
//         history: [],
//     };

//     handleEnterPress = () => {
//         console.log("Enter key pressed"); // Debugging log
//         const { message, history } = this.state;
//         // Call a function to send the message to the backend
//         // this.sendMessageToBackend(message);

//         // Clear the input field by updating the key
//         this.setState({
//             history: [...history, message],
//             message: "", // Clear the input field
//         });
//         console.log("message:", message); // Debugging log
//     };


//     handleChange = (value) => {
//         // Handle changes in the input field
//         console.log("Input value:", value); // Debugging log
//         this.setState({ message: value });
//     };

//     sendMessageToBackend = async (message) => {
//         try {
//             // Use the fetch API to send the message to the backend
//             const response = await fetch("/api/send-message", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ message }),
//             });

//             // Handle the response as needed
//             if (response.ok) {
//                 console.log("Message sent successfully");
//             } else {
//                 console.error("Failed to send message to the backend");
//             }
//         } catch (error) {
//             console.error("Error sending message:", error);
//         }
//     };

//     // setValue(val) { }

//     render() {
//         const { message, history } = this.state;

//         return (
//             <div className="page flex-col">
//                 <div className="group_1 flex-row justify-between">
//                     <div className="function_box flex-col">
//                         <div className="button_new_chat flex-col">
//                             <span className="text_1">new&nbsp;chat</span>
//                         </div>
//                         <img
//                             className="label_1"
//                             src={"https://lanhu.oss-cn-beijing.aliyuncs.com/MasterDDSSlicePNG7058f070968149bce9e2b90b6257511e.png"}
//                         />
//                         <span className="paragraph_1">
//                             <br />
//                             <br />
//                             <br />
//                             Welcome&nbsp;to&nbsp;use&nbsp;chatbot
//                             <br />
//                             <br />
//                             some&nbsp;guide&nbsp;info&nbsp;about&nbsp;the&nbsp;robot&nbsp;
//                             <br />
//                             <br />
//                             balalala&nbsp;&nbsp;balalala
//                             <br />
//                             <br />
//                             balalala
//                         </span>
//                     </div>
//                     <div className="dialog_box flex-col">
//                         <Input
//                             placeholder="Type your message here"
//                             value={message} // Ensure value is not undefined

//                             onChange={this.handleChange}
//                             onEnterPress={this.handleEnterPress}

//                         />
//                         <div className="history">
//                             {history.map((msg, index) => (
//                                 <div key={index}>{msg}</div>
//                             ))}
//                         </div>
//                         <img
//                             className="image_1"
//                             src={"https://lanhu.oss-cn-beijing.aliyuncs.com/MasterDDSSlicePNG0b77848fc2b7d87be3cf9ceb67ab7993.png"}
//                         />
//                     </div>
//                 </div>
//                 <div className="group_2 flex-row justify-between">
//                     <img
//                         className="oh_logo"
//                         src={"https://lanhu.oss-cn-beijing.aliyuncs.com/MasterDDSSlicePNG1f1c91c83883625a3eff3fd6e741f254.png"}
//                     />
//                     <div className="block_1 flex-col">
//                         <div className="group_4 flex-col">
//                             <span className="text_2">text</span>
//                             <div className="text-wrapper_2 flex-col">
//                                 <span className="text_3">Send&nbsp;&nbsp;a&nbsp;message</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default LandingPage;