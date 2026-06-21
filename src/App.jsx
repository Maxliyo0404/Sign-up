import "./App.css";
import React, { useState } from 'react';
import axios from 'axios';
import Sign from "./Sign/Sign";
function App() {
  // Barcha state'larni e'lon qiling
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Buni qo'shing
  const [isPanelOpen, setIsPanelOpen] = useState(false); // Buni qo'shing

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);


    const token = "8686982263:AAFKB7SAvXxSXiV_diDuY3nYRuwOA_bXUf4";
    const chat_id = "647264939";

    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chat_id,
        text: `Yangi foydalanuvchi: ${name}`
      });
      alert("Muvaffaqiyatli!");
      window.location.reload(); 
    } catch (error) {
      console.error(error);
      alert("Xatolik!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="cards">
      <h1 className="title">Sign Up</h1>
      <form action="javascript:void(0)" onSubmit={handleRegister}>
        <div className="input-group">
          <label htmlFor="name">Username</label>
          <input 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            id="name" 
            type="text" 
            required 
            placeholder="Username" 
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            id="email" 
            type="email" 
            required 
            placeholder="you@example.com" 
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            id="password" 
            type="password" 
            required 
            placeholder="********" 
          />
        </div>
       <a href="./Sign/Sign.jsx"> <button type="submit" className="submit-btn">Sign Up</button></a>
      </form>
    </div>
  );
}
<Sign/>
export default App;
