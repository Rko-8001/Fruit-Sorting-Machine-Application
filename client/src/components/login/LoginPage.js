import React, { useState } from "react";
import { Link } from "react-router-dom";
import  {useNavigate} from "react-router-dom";
import KeyBoardComponent from "./KeyBoardComponent";
import { getOptionPhase, setOptionPhase } from "../tokens/Token.js";

export default function LoginPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [mssg, setMssg] = useState("Login ");
  const verifyPassword = (e) => {
    e.preventDefault();
    // logic to verify 
    setTimeout(() => {
      setMssg("Logging you in ...");
    }, 1000);
  
    if(getOptionPhase() === 0){
      setOptionPhase(0);
    }
    navigate("/home");
  }

  return (
    <>
      <div className=" bg-gray-900 pb-6 pt-2 min-h-screen">
        <div className="pb-6 pt-2 flex items-center justify-center">
          <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Access your Machine</h1> 
            <form>
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm text-gray-600">Password</label>
                <input  id="password" type="password" name="password" value={password} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <button  onClick={verifyPassword} className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-4">
                {mssg}
              </button>
            </form>
            <div className="text-center">
              <p className="text-sm">
                Forget your
                <Link to="/forgetPassword" className="text-cyan-600"> Password ? </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="py-10 m-5 px-20 container items-center border-box justify-center">
          <KeyBoardComponent input={password} setInput={setPassword}/>
        </div>
      </div>
    </>
  );
}
