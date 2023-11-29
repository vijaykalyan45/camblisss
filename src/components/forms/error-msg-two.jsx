import React from 'react';

const ErrorMsgTwo = ({error}) => {
  return (
    <>
     <p style={{color:'red', fontSize:"12px", marginTop:'-20px', marginBottom:"20px"}}>{error}</p> 
    </>
  );
};

export default ErrorMsgTwo;