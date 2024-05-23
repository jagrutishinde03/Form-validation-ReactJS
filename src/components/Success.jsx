import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles.css';

const Success = () => {
  const { state } = useLocation();

  return (
    <div className="success-container">
      <h1>Form Submitted Successfully</h1>
      <pre className="success-details">{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default Success;
