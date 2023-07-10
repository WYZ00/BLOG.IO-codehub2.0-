import React from "react";

import { useSearchParams } from "react-router-dom";

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const isLoginMode = searchParams.get("mode") === "login";

  return (
    <section className="w-1/2 mx-auto">
      <h1 className="text-center font-bold text-2xl mb-4">
        {isLoginMode ? "Login" : "Register"} Form
      </h1>
      <form>
        <div className="mb-4">
          <label htmlFor="username" className="font-medium">
            Enter username
          </label>
          <input
            type="text"
            name="username"
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
