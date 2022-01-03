export const fetchLogin = async (username, password) => {
  try {
    console.log(`${username} ${password}`);
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const data = await response.json();
    return data.user;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getUser = async () => {};

export const createAccount = async (email, username, password) => {
  const response = await fetch("http://localhost:3000/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      username: username,
      password: password,
    }),
  });

  const data = await response.json();
  console.log(`Create account data ----`);
  console.log(data);
  return data;
};

export const saveBasket = async (username, basket) => {
  const response = await fetch("http://localhost:8080/basket", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      basket: basket,
    }),
  });
  const data = response.json();
  console.log(data);
}