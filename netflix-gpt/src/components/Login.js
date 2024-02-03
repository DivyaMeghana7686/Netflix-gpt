import Header from "./Header";
import Back_URL from "../utils/images/background_img.jpg";
import { useState,useEffect } from "react";
import "./style.css";

const Login = ()=>{
    const [isSignInForm, setIsSignInForm]=useState(true);
    const toggleSignIn=()=>{
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className="absolute backdrop-brightness-5000 ">
                <img 
                    src={Back_URL}
                    alt="back_img"
                />
            </div>
            <form className="absolute p-12 bg-black w-1/4 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                
                <h1 className=" my-2 font-bold text-4xl ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input
                    type="text"
                    placeholder="User Name"
                    className="p-4 my-2 w-full bg-gray-700 bg-opacity-70 rounded-lg"
                />}
                <input
                    type="text"
                    placeholder="Email Address"
                    className="p-4 my-2 w-full bg-gray-700 bg-opacity-70 rounded-lg"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-4 my-2 w-full bg-gray-700 bg-opacity-70 rounded-lg"
                />
                <button className="p-3 my-4 bg-red-700 w-full rounded-lg" cursor="Pointer">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                
                {isSignInForm && <p className="w-full text-center forgot">Forgot Password?</p>}

                <div className="my-20">
                    <p>{isSignInForm ? "New to Netlix?" : "Already a User?"}
                        <a className="font-bold text-1xl toggle" onClick={toggleSignIn}>
                            {isSignInForm ? " Sign Up now." : " Sign In now."}
                        </a>  
                    </p>
                    <p className="text-sm my-4">This page is protected by Google reCAPTCHA to ensure you're not a bot. </p>
                </div>
                
                
            </form>
        </div>
    )
}

export default Login;