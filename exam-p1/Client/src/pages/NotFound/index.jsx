import React from 'react';
import './inex.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="error-code">404</h1>
        <p className="error-message">Page is not Found!.</p>
        <p className="suggestion">Do You Want Come Back?</p>
        <button className="go-home-button" onClick={() => window.location.href = '/'}>
         Home Page
        </button>
      </div>
    </div>
  );
};

export default NotFound;
