import React, { useState } from "react";
import { Card, Input, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const formDetails = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  branch: "",
};

function Signup() {
  const [signupForm, setSignupForm] = useState(formDetails);
  const navigator = useNavigate();

  const handleClick = () => {
    console.log(signupForm);
    navigator("/home");
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Card style={{ width: "400px" }}>
        <Card.Content style={{ margin: "auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Input
              name="firstName"
              placeholder="firstname"
              style={{ margin: "10px", width: "280px" }}
              type="text"
              onChange={(e) =>
                setSignupForm({
                  ...signupForm,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <Input
              name="lastName"
              placeholder="lastname"
              style={{ margin: "10px", width: "280px" }}
              type="text"
              onChange={(e) =>
                setSignupForm({
                  ...signupForm,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <Input
              name="email"
              placeholder="email"
              style={{ margin: "10px", width: "280px" }}
              type="password"
              onChange={(e) =>
                setSignupForm({
                  ...signupForm,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <Input
              name="password"
              placeholder="password"
              style={{ margin: "10px", width: "280px" }}
              type="password"
              onChange={(e) =>
                setSignupForm({
                  ...signupForm,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <Button
              primary
              style={{ margin: "10px", width: "280px" }}
              onClick={handleClick}
            >
              Sign up
            </Button>
          </div>
        </Card.Content>
      </Card>
      <Card style={{ width: "400px" }}>
        <Card.Content>
          <p>
            Already have an account? then{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => {
                navigator("/signin");
              }}
            >
              Signin
            </span>
          </p>
        </Card.Content>
      </Card>
    </div>
  );
}

export default Signup;
