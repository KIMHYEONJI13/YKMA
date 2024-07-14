import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';

import { REST_API_KEY, REDIRECT_URI, CLIENT_SECRET } from 'config';
import { isLoggedInAtom } from 'atoms/isLoggedInAtom';

function Auth() {
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);

  const params = new URL(document.URL).searchParams;
  const code = params.get('code');

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: 'authorization_code',
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });
    try {
      const res = await axios.post('https://kauth.kakao.com/oauth/token', payload);
      window.Kakao.init(REST_API_KEY); // Kakao Javascript SDK 초기화
      window.Kakao.Auth.setAccessToken(res.data.access_token); // access token 설정
      setIsLoggedIn(true);
      navigate('/profile');
    } catch (err) {
      console.log(err);
      navigate('/');
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return <div>로그인 진행중입니다..</div>;
}


export default Auth;