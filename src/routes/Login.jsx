import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { Modal, Dropdown } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

import "../styles/Login.css";

function Login() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="loginContainer">
      <div className="header">
        <h3>Online Tutor</h3>
        <ul>
          <li>Home</li>
          <li>Contacts</li>
          <li>Help</li>
        </ul>
        <Modal
          basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          size="small"
          trigger={
            <Button
              primary
              onClick={() => {
                setOpen(false);
              }}
            >
              Signin
            </Button>
          }
        >
          <Modal.Content
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h1 style={{ color: "white", textAlign: "center" }}>
                Sign in as
              </h1>
              <div style={{ display: "flex" }}>
                <div className="signin-as"    onClick={() => {
                      navigate("/signin");
                    }}>
                  <span
                 
                  >
                    Student
                  </span>
                </div>
                <div className="signin-as"  onClick={() => {
                      navigate("/signin");
                    }}>
                  <span
                   
                  >
                    Tutor
                  </span>
                </div>
              </div>
            </div>
          </Modal.Content>
        </Modal>
      </div>
    </div>
  );
}

export default Login;
