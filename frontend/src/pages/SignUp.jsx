import { useState } from "react";

import "./SignUp.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signUpGlobal">
      <h2>Sign&apos;Up</h2>
      <form className="signUpFormGlobal" onSubmit={handleForm}>
        <div className="signUpDivInputG">
          <label htmlFor="text" className="signUpLabel">
            Name :
          </label>
          <input
            type="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="name : Jean-claude"
            value={name}
          />
        </div>
        <div className="signUpDivInputG">
          <label htmlFor="email" className="signUpLabel">
            Email :
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email: Jean-claude@gmail.com"
            value={email}
          />
        </div>
        <div className="signUpDivInputG">
          <label htmlFor="password : " className="signUpLabel">
            Password :
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            value={password}
          />
        </div>
        <button type="submit">S&apos;inscrire</button>
      </form>
    </div>
  );
}

export default SignUp;
