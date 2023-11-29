import React from 'react';

const ErrorMsg = ({ error }) => {
  return (
    <>
      <p style={{ color: 'red', fontSize: "12px", marginTop: "10px" }}>{error}</p>
    </>
  );
};

export default ErrorMsg;