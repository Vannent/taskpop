import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Auth from "./auth";

const Home: NextPage = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  return (
    <div className="w-screen h-screen">
      {isLoggedin ? "User logged in." : <Auth />}
    </div>
  );
};

export default Home;
