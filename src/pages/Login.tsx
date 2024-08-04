import React from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../shared/Input";
import { Card } from "../shared/Card";

const formFields = [
  { type: "text", label: "Name" },
  { type: "text", label: "Last name" },
  { type: "password", label: "Password" },
];

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <Card rounded="lg" padding="xl" text="sm" className="login">
      <h1>Login</h1>
      <form>
        {formFields.map((field, index) => (
          <Input key={index} type={field.type} label={field.label} />
        ))}
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </Card>
  );
};

export default Login;
