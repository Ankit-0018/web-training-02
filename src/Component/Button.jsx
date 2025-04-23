import React from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Welcome 🚀</h1>

      <div className="flex flex-col gap-6 w-full max-w-sm">
        <button
          onClick={() => navigate("/register")}
          className="w-full bg-green-500 text-white py-4 text-xl rounded-lg hover:bg-green-600 transition-all"
        >
          Register
        </button>

        <button
          onClick={() => navigate("/loggin")}
          className="w-full bg-blue-500 text-white py-4 text-xl rounded-lg hover:bg-blue-600 transition-all"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Button;
