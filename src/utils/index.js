export const fetchLogin = async (username, password) => {
  try {
    console.log(`making a post request with ${username} and ${password}`);
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
    });

    const data = await response.json();
    return data.find(
      (el) => el.password === password && el.username === username
    );
  } catch (e) {
    console.log(e);
    console.log(`failed at fetch login`);
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
