"use client";

import { useState } from "react";
import { API_BASE_URL } from "@/contants";

const LoginForm = ({ onLogin }) => {
    const [username, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState("");
    const [loginSuccess, setLoginSuccess] = useState("");

    const handleSubmit = async (e) => {
        setIsLoading(true);
        setLoginError("");
        setLoginSuccess("");
        e.preventDefault();
        try {
            const response = await fetch(`${API_BASE_URL}/token`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    grant_type: "password",
                    username: username,
                    password: password,
                    scope: "",
                    client_id: "string",
                    client_secret: "string"
                })
            });

            if (!response.ok) {
                throw new Error(data.detail | "Failed to login");
            }

            else {
                const data = await response.json();
                setLoginSuccess("Login successful!");
                onLogin(data.access_token);
            }            
        }
        catch (error) {
            setLoginError("Invalid credentials. Please try again.");
        }
        finally {
            setIsLoading(false);
        }
        // Handle the response from the API
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <p className="text-gray-600 mb-4">Please enter your credentials to login.</p>
                <input 
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setEmail(e.target.value)} 
                    className="mb-4 w-full p-2 border border-gray-300 rounded"
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-4 w-full p-2 border border-gray-300 rounded"
                />
                <button 
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full bg-blue-500 text-white p-2 rounded-lg focus:none hover:bg-blue-800"
                >{isLoading ? "Loading..." : "Login"}
                </button>
                {loginError && <p className="text-red-500 mb-4">{loginError}</p>}
                {loginSuccess && <p className="text-green-500 mb-4">{loginSuccess}</p>}
            </div>
        </div>
    )
}

export default LoginForm;