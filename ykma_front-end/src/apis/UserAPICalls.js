
export const api  = ({ memberNo }) => {
    const requestURL = `http://localhost:8080/members/${memberNo}`;

    return async (dispatch, getState) => {
        // 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능
        // 서버에서 cors 허용을 해주어야 함
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
                Authorization: 'Bearer ' + window.localStorage.getItem('accessToken'),
            },
        }).then((response) => response.json());

      

        dispatch({ type: GET_MEMBER, payload: result });
    };
};

export const REST_API_KEY = ''; // insert your REST_API_KEY
export const REDIRECT_URI = 'http://localhost:5173/auth/kakao/callback';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export const CLIENT_SECRET = ''; // insert your CLIENT_SECRET