const axios = require("axios");

module.exports.authenticate = async () => {
  const data = {
    email: "user1@mail.com",
    password: "a!Strongp#assword1",
  };

  const headers = {
    "Bankin-Version": "2019-08-22",
    "Bankin-Device": "26ac2fb6-4b1f-4e7c-a35d-aaa40b5c00b5",
  };

  try {
    const response = await axios.post(
      "https://sync.bankin.com/v2/authenticate",
      data,
      { headers }
    );
    const accessToken = response.data;
    return accessToken;
  } catch (error) {
    console.error(error);
  }
};

module.exports.accountRequest = async (accessToken) => {
  const headers = {
    "Bankin-Version": "2019-08-22",
    "Bankin-Device": "26ac2fb6-4b1f-4e7c-a35d-aaa40b5c00b5",
    Authorization: `Bearer ${accessToken.access_token}`,
  };

  try {
    const response = await axios.get("https://sync.bankin.com/v2/accounts", {
      headers,
    });

    const accounts = response.data;
    return accounts;
  } catch (error) {
    console.error(error);
  }
};

module.exports.calculateTotalBalance = (accounts) => {
  const total = accounts.resources.reduce((accumulator, account) => {
    return accumulator + account.balance;
  }, 0);
  return Math.ceil(total / 100) * 100;
};
