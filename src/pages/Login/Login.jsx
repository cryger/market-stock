import { React, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Login.module.css";

export default function Login() {
  const [userExist, setUserExist] = useState(true);
  const [passExist, setPassExist] = useState(true);
  const [loadUser, setLoadUser] = useState(false);
  const [loadPass, setLoadPass] = useState(false);

  const user = "admin";
  const pass = "1234";

  function spin(username, password) {
    if (username !== user && username !== "") {
      setUserExist(false);
      setLoadUser(false);
    } else setLoadUser(false);
    if (password !== pass && password !== "") {
      setPassExist(false);
      setLoadPass(false);
    } else setLoadPass(false);
  }

  const handleUsername = (e) => {
    e.preventDefault();
    if (!e.target.value.length) {
      setUserExist(true);
      setLoadUser(false);
    } else {
      setLoadUser(true);
      setUserExist(true);
      setTimeout(() => {
        spin(e.target.value, "");
      }, 1000);
    }
  };
  let handlePassword = (e) => {
    e.preventDefault();
    if (!e.target.value.length) {
      setPassExist(true);
      setLoadPass(false);
    } else {
      setLoadPass(true);
      setPassExist(true);
      setTimeout(() => {
        spin("", e.target.value);
      }, 1000);
    }
  };

  return (
    <div className="bg-[rgb(131,173,223)] h-screen flex">
      <div className="bg-[#f9f9f9] rounded-2xl mx-auto my-auto min-w-[300px] ]">
        <div className="flex flex-col p-4 ">
          <h1 className="mx-auto font-bold text-[150%] mt-10 ">Login</h1>
          <p className="mx-auto text-xs mt-1 text-gray-500">
            Enter you credentials
          </p>
        </div>

        <div className="flex flex-col p-6 pb-12 mt-[-10px] relative">
          <input
            type="text"
            placeholder="Username"
            className="bg-[#d0e5f7] rounded h-10 outline-0"
            onChange={handleUsername}
          />
          <div
            className={
              loadUser
                ? `${style.spinner} opacity-100`
                : `${style.spinner} opacity-0`
            }
          ></div>
          <div
            className={
              userExist ? "hidden" : " text-red-400 text-xs font-medium ml-2"
            }
          >
            Username doesn't exists
          </div>
          <input
            type="password"
            placeholder="Password"
            className="bg-[#d0e5f7] rounded mt-2 h-10 outline-0"
            onChange={handlePassword}
          />
          <div
            className={
              loadPass
                ? `${style.spinner2} opacity-100`
                : `${style.spinner2} opacity-0`
            }
          ></div>
          <div
            className={
              passExist ? "hidden" : " text-red-400 text-xs font-medium ml-2"
            }
          >
            Password doesn't exists
          </div>
          <Link to="dashboard">
            <button
              type="submit"
              className="bg-[#909fc2] text-[#f9f9f9] rounded h-10 mt-4 w-full text-[10px] font-bold hover:text-[#909fc2] hover:bg-[#ededed] hover:border hover:border-[#909fc2]"
            >
              LOGIN
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
