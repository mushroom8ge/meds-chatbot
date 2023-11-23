import React, { Component } from "react";
import { Switch, NavBar, Checkbox, Radio, Input } from "antd-mobile";
import './common.css';

class LandingPage extends Component {
  state = {};

  setValue(val) {}

  render() {
    return (
        <div className="page flex-col">
        <div className="group_1 flex-row justify-between">
          <div className="function_box flex-col">
            <div className="button_new_chat flex-col">
              <span className="text_1">new&nbsp;chat</span>
            </div>
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
              balalala
            </span>
          </div>
          <div className="dialog_box flex-col">
            <img
              className="image_1"
              src={"https://lanhu.oss-cn-beijing.aliyuncs.com/MasterDDSSlicePNG0b77848fc2b7d87be3cf9ceb67ab7993.png"}
            />
          </div>
        </div>
        <div className="group_2 flex-row justify-between">
          <img
            className="oh_logo"
            src={"https://lanhu.oss-cn-beijing.aliyuncs.com/MasterDDSSlicePNG1f1c91c83883625a3eff3fd6e741f254.png"}
          />
          <div className="block_1 flex-col">
            <div className="group_4 flex-col">
              <span className="text_2">text</span>
              <div className="text-wrapper_2 flex-col">
                <span className="text_3">Send&nbsp;&nbsp;a&nbsp;message</span>
                {/* <Input
                  placeholder="Type your message here"
                    // Add any other props or event handlers as needed  
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;