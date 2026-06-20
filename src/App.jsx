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
            <input type="email" placeholder="you@example.com" />
          </div>
     </form>
    
    </div>
  )
}

export default App