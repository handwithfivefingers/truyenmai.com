import React, { useState, useEffect } from 'react';

function LoadingScreen(props) {
  return (
    <>
      <div className="loading">
        <div className="loading-item">
          <div className="pupil"></div>
          <div className="iris"></div>
          <div className="tomoes">
            <div className="tomoe-area">
              <div className="tomoe"></div>
            </div>
            <div className="tomoe-area">
              <div className="tomoe"></div>
            </div>
            <div className="tomoe-area">
              <div className="tomoe"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingScreen;
