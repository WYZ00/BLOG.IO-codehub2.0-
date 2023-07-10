import React, { useState } from "react";

import { useSearchParams } from "react-router-dom";

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [searchParams] = useSearchParams();
  const isLoginMode = searchParams.get("mode") === "login";

  return (
    <section className="w-1/2 mx-auto">
      <h1 className="text-center font-bold text-2xl mb-4">
        {isLoginMode ? "Login" : "Register"} Form
      </h1>
      <form method="post" onSubmit={formActionHandler}>
        <div className="mb-4">
          <label htmlFor="username" className="font-medium">
            Enter username
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            id="username"
            className="block border border-black text-lg p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="font-medium">
            Enter Pasword
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password"
            className="block border border-black text-lg p-2 w-full"
            required
          />
        </div>
        <button className="text-white bg-black font-medium text-lg text-center py-4 w-full">
          {isLoginMode ? "Login" : "Register"} Account
        </button>
      </form>
    </section>
  );
};

export default AuthForm;
