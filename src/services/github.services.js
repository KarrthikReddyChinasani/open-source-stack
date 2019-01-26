import { githubConstants, apiConstants } from "../constants";

export const githubService = {
  githubConnect,
  githubToken
};

function githubConnect() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };
  return fetch(
    `${githubConstants.OAUTH_URL}?client_id=18affc69905f556579bf`,
    requestOptions
  )
    .then(handleResponse)
    .then(data => {
      return data;
    });
}

function handleResponse(response) {
  return response.text().then(text => {
    return text;
  });
}

function githubToken(gitcode) {
  return new Promise((resolve, reject) => {
    const requestOptions = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json"
      }),
      body: JSON.stringify({
        client_id: "18affc69905f556579bf",
        client_secret: "19af9612d9c08ffa5e25157edc7419c18da8306d",
        code: gitcode,
        redirect_uri: "https://localhost:8080/profile"
      })
    };
    return fetch(
      "https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",
      requestOptions
    ).then(handleResponseData).then(data => {
        return getUserData(data.access_token).then(res => {
          return resolve(res);
        });
      });
  });
}

function handleResponseData(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        // location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

function getUserData(token) {
  return new Promise((resolve, reject) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token })
    };
    return fetch(`${apiConstants.API_URL}/api/github-user`, requestOptions)
      .then(handleResponse)
      .then(data => {
        return resolve(data);
      });
  });
}
