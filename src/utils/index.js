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

export const createAccount = async () => {
  const response = await fetch("http://localhost:3000/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: this.email,
      username: this.username,
      password: this.password,
    }),
  });

  const data = await response.json();
  return data;
};

// const fetchBasket = async () => {}
// const updateBasket = async () => {}
