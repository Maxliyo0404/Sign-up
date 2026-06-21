import React from 'react';
import { Link } from 'react-router-dom';
import "./Sign.css";

function Sign() {
  return (
    <div className="sign">
        {/* Rasmga mos asosiy xabar */}
        <h1>Xush kelibsiz!</h1>
        
        {/* Qo'shimcha matn (masalan, foydalanuvchini yo'naltirish uchun) */}
        <p className="subtitle">Sizning ro'yxatdan o'tishingiz muvaffaqiyatli yakunlandi.</p>
        
        {/* Asosiy tugma */}
        <div className="actions">
            <Link to="/" className="back-link">ORTGA QAYTISH</Link>
            
            {/* Qo'shimcha tugma (masalan, profilga o'tish yoki dashboard) */}
            <Link to="/profile" className="profile-link">Profilni ko'rish</Link>
        </div>
    </div>
  );
}

export default Sign;