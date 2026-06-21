import React, { useState } from 'react';
import "./AppContent.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AppContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate(); // O'tish uchun hook

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = "8686982263:AAFKB7SAvXxSXiV_diDuY3nYRuwOA_bXUf4";
    const chat_id = "647264939";

    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chat_id,
        text: `Yangi foydalanuvchi:\nIsmi: ${name}\nEmail: ${email}`
      });
      
      alert("Muvaffaqiyatli yuborildi!");
      navigate("/sign"); // Formani to'ldirgandan so'ng ikkinchi oynaga o'tish
      
    } catch (error) {
      console.error(error);
      alert("Xatolik yuz berdi!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cards">
      <h1 className="title">Sign Up</h1>
      <form onSubmit={handleRegister}>
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
        
        {/* Button endi formani submit qiladi va navigate ishlaydi */}
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Yuborilmoqda..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default AppContent;