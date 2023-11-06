import React from 'react';
import './../../CSS/Info.css';

function Info(){
  return (
    <>
      <div className='info_main'>
        <div className='text_box'>
          <h3>Author:</h3>
          <p style={{ marginLeft: '0.5vw' }}> Ozan Topcu</p>
        </div>
        <div className='text_box'>
          <p> The project does not include any image
            that might require specific
            permissions or rights.
          </p>
        </div>
        <div className='text_box'>
          <h3>Work Hours:</h3>
          <p style={{ marginLeft: '0.5vw' }}> 48 Hours</p>
        </div>
        <div className='text_box'>
          <h3>Hardest Feature:</h3>
          <p> Implementing the backend was quite
            challenging
          </p>
        </div>
      </div>

      <div className='instructions'>
        <h3>INSTRUCTIONS ON HOW TO USE</h3>
        <p> The UI hints help the user to figure out how to use the application
        </p>
      </div>
    </>
  );
}
export default Info;