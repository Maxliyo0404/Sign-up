import React from 'react';
import { Link } from 'react-router-dom';
import "./Sign.css";

function Sign() {
  return (
    <div className="sign">
        {/* Rasmga mos asosiy xabar */}
        <h1>Xush kelibsiz!</h1>
        
       
        <p className="subtitle">Sizning ro'yxatdan o'tishingiz muvaffaqiyatli yakunlandi.</p>
        
        <div className="actions">
            <Link to="/" className="back-link">ORTGA QAYTISH</Link>
        
            <Link to="/profile" className="profile-link">Profilni ko'rish</Link>
        </div>
    </div>
  );
}

export default Sign;