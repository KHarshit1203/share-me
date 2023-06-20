import React from 'react';

import shareVideo from 'src/assets/share.mp4';
import logo from 'src/assets/logowhite.png';
import GoogleLoginBtn from './google/GoogleLoginBtn';

function Login() {
  return (
    <main className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          typeof="video/mp4"
          loop
          muted
          autoPlay
          controls={false}
          className="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} alt="logo" width="130px" />
          </div>

          <div className="shadow-2xl">
            <GoogleLoginBtn />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
