import React from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const auth = getAuth();

const provider = new GoogleAuthProvider();
import app from "../firebase/firebase.config";

const LoginDemo = () => {
    const handleLogin = () => {
        signInWithPopup(auth, provider).then((result) => {
            // The signed-in user info.
            const user = result.user;
            alert("Login Successfully Done!")
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
  return (
    <div className='m-5 p-5'>
        <button className="bg-primary px-4 text-white" onClick={handleLogin}> Login </button>
    </div>
  )
}

export default LoginDemo;