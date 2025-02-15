// src/components/Button.jsx
import React from 'react';

const Button = ({ label, type, onClick }) => {
  const buttonStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
  };

  return (
    <button
      className={`px-4 py-2 rounded ${buttonStyles[type]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;