import "./ App.css";
import React, { useState } from 'react'

function App() {
  const {name, setName} = useState("");
  const {email, setEmail} = useState("");
  const {password, setPassword} = useState("");
  const bosish = (event)=>{
    event.preventDefualt();
  }

  }
  return (
    <div className="cards">
      <h1 className="title">Sign Up </h1>
     <form>
        <div className="input-group">
            <label htmlFor="name">Username</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} id="name" type="text"required placeholder="Username" />
      </div>
      <div className="input-group">
            <label htmlFor="email">Email</label>
            <input value={name} onChange={(e) =>setEmail(e.target.value)} id="email" type="email" required placeholder="you@example.com" />
          </div>
      <div className="input-group">
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} id="password" type="password"required placeholder="********" />
          </div>
          <button type="submit" className="submit-btn">Sign Up</button>
     </form>
    
    </div>
  )
}

export default App