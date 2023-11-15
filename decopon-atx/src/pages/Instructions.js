import React from 'react';

const Instructions = () => {
  return (
    <div className='component'>
      <div className='title'>
        <h1 className='subtitle'>Instructions</h1>
      </div>
      <div className='content'>
        <p>Welcome to the instructions page! Follow these steps:</p>
        <ol>
          <li>Step 1: Do something</li>
          <li>Step 2: Do something else</li>
          <li>Step 3: Do one more thing</li>
        </ol>
      </div>
    </div>
  );
};

export default Instructions;
