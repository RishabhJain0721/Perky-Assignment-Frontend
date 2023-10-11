import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Input from "../Components/Input";
import Button from "../Components/Button.js";
import { AuthContext } from "../Contexts/AuthContext";

axios.defaults.baseURL = "http://localhost:5000";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/sendOtp", { email })

      .then((res) => {
        console.log("OTP sent successfully");
        alert("OTP sent successfully");
        setShowOtp(true);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    axios
      .post("/api/verifyOtp", { otp, email })

      .then((res) => {
        console.log("OTP verified", res.data);
        dispatch({ type: "LOGIN", payload: { email:email } });
        alert("OTP verified");
        setEmail("");
        setOtp("");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
        setEmail("");
        setOtp("");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <form onSubmit={handleEmailSubmit}>
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="text-center">
            <Button value="Send OTP" />
          </div>
        </form>
        {showOtp && (
          <form onSubmit={handleOtpSubmit}>
            <Input
              label="OTP"
              type="text"
              placeholder="Enter otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <div className="text-center">
              <Button value="Login" />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
