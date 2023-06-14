import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useGoogleLogin } from '@react-oauth/google';

import { client } from 'src/utils/sanity/client';
import { useNavigate } from 'react-router-dom';

const GoogleLoginBtn = () => {
  const navigate = useNavigate();

  const googleSignIn = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // console.log('tokenResponse: ', tokenResponse);
      let userInfo = null;
      try {
        const userInfoResponse = await fetch(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        userInfo = await userInfoResponse.json();
      } catch (e) {
        throw new Error('Error fetching user details from google');
      }
      // console.log('userInfo: ', userInfo);
      localStorage.setItem('user', JSON.stringify(userInfo));

      const { name, picture, sub } = userInfo;
      const doc = {
        _id: sub,
        _type: 'user',
        userName: name,
        image: picture,
      };

      client
        .createIfNotExists(doc)
        .then(() => navigate('/', { replace: true }));
      // console.log('Login successful!!!');
    },
    onError: (errorResponse) =>
      console.log('Login Failed!!!, error: ', errorResponse),
  });

  return (
    <button
      type="button"
      className="bg-mainColor flex justify-center items-center p-2 rounded-md"
      onClick={() => googleSignIn()}
    >
      <FcGoogle className="mr-4" />
      <span>Sign in with Google</span>
    </button>
  );
};

export default GoogleLoginBtn;
