import "./ App.css";
import React from 'react'

function App() {
  return (
    <div className="cards">
      <h1 > </h1>
     <form>
        <div className="input-group">
            <label htmlFor="name">Username</label>
            <input type="text"required placeholder="Username" />
      </div>
      <div className="input-group">
            <label>Email</label>
            <input type="email" required placeholder="you@example.com" />
          </div>
      <div className="input-group">
            <label>Password</label>
            <input type="password"required placeholder="********" />
          </div>
          <button type="submit" className="submit-btn">Sign Up</button>
     </form>
    
    </div>
  )
}

export default App