import { BASE_URL } from "../config";

const mockFormSubmit = (path, data, waitFor) => {
  return new Promise((resolve, reject) => {
    const isSuccess = `${data.fname} ${data.lname}`.length >= 5;

    setTimeout(() => {
      if (isSuccess) resolve(200);
      else reject(400);
    }, waitFor || 3000);
  });
};

const formSubmit = (path, data) => {
  return fetch(BASE_URL + path, {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((response) => {
    if (response.status >= 400 && response.status < 600) {
      throw new Error("Bad response from server");
    }
    return response.text();
  });
};

export default typeof BASE_URL === "string" ? formSubmit : mockFormSubmit;
