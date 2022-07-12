import React, { useState } from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";

const Auth: NextPage = () => {
  const [authChoice, setAuthChoice] = useState(false);
  return (
    <div className="bg-gray-200 h-full w-full flex items-center justify-center">
      <div className="h-3/6 w-3/6 bg-gray-100 rounded-3xl p-5 flex items-center justify-center flex-col">
        <h1 className="text-3xl font-semibold text-gray-600">
          Welcome to{" "}
          <span className="text-blue-500">
            Task<b>POP</b>
          </span>
          !
        </h1>
        <div className="h-14 w-3/6 bg-gray-300 rounded-xl flex items-center p-1 m-3">
          <motion.div
            className="w-2/4 h-full rounded-xl bg-blue-500 flex items-center justify-center cursor-pointer"
            animate={{ x: authChoice ? "100%" : "0%" }}
            onClick={() => {
              setAuthChoice((authChoice) => !authChoice);
            }}
          >
            <h3 className="font-bold text-gray-100 uppercase tracking-wider">
              {authChoice ? "Register" : "Sign In"}
            </h3>
          </motion.div>
          <motion.div
            className="w-2/4 h-full rounded-xl flex items-center justify-center cursor-pointer"
            animate={{ x: authChoice ? "-100%" : "0" }}
            onClick={() => {
              setAuthChoice((authChoice) => !authChoice);
            }}
          >
            <h3 className="font-bold text-gray-400 uppercase tracking-wider">
              {authChoice ? "Sign In" : "Register"}
            </h3>
          </motion.div>
        </div>
        <form action="submit" className="w-3/6 flex flex-col">
          <h4 className="font-bold text-gray-600 text-lg">Username</h4>
          <input type="text" className="rounded h-[30px] bg-gray-50" required />

          <h4 className="font-bold text-gray-600 text-lg">Password</h4>
          <input
            type="password"
            className="rounded h-[30px] bg-gray-50"
            required
          />

          <button
            type="submit"
            className="m-5 h-[50px] w-[200px] bg-blue-500 rounded-xl self-center text-gray-100 font-bold text-lg"
          >
            {authChoice ? "Register" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
