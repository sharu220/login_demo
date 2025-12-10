import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain 8 characters, one uppercase, one lowercase, one number, and one special character."
      );
    } else {
      setError("");
      if (username === "admin" && password === "Admin@123") {
        toast.success("Login Successfull");
        localStorage.setItem("demo-site-uname", username);
        navigate("/");
      } else {
        toast.error("Wrong Password or Username");
      }
    }
    console.log(username);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="max-w-sm w-full mx-auto bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/50 items-center	"
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Login</h1>
        </div>

        <div className="mb-6">
          <label className="block mb-3 text-sm font-semibold text-gray-700">
            Username
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 shadow-sm"
            name="uname"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-8">
          <label className="block mb-3 text-sm font-semibold text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 shadow-sm"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
          {error && <p className="text-xs text-center text-red-600">{error}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg hover:from-green-700 hover:to-blue-700 focus:ring-4 focus:ring-green-200 transition-all duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
