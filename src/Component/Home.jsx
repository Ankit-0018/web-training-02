import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    } else {
      navigate("/loggin"); // Redirect if not logged in
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-900">
      <div className="max-w-2xl bg-white shadow-md rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to Home Page! 🎉</h1>
        <p className="mt-4 text-lg text-gray-600">
          {`Hello ${userName}, you have successfully logged in. Explore and enjoy our services!`}
        </p>
        <button
          onClick={() => {
            localStorage.removeItem("userName"); // Clear the name on logout
            navigate("/loggin");
          }}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Home;
