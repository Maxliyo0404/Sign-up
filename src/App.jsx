import "./ App.css";
import React from 'react'

function App() {
  return (
    <div className="cards">
      <h1 className="title">Sign Up </h1>
     <form>
        <div className="input-group">
            <label htmlFor="name">Username</label>
            <input id="name" type="text"required placeholder="Username" />
      </div>
      <div className="input-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" required placeholder="you@example.com" />
          </div>
      <div className="input-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password"required placeholder="********" />
          </div>
          <button type="submit" className="submit-btn">Sign Up</button>
     </form>
    
    </div>
  )
}

export default App