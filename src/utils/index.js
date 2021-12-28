const fetchLogin = async () => {
  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
  });

  if (response.status === 200) {
    console.log("post req made");
  }
};

const createAccount = async () => {
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
  console.log(data);
};

const fetchBasket = async () => {}
const updateBasket = async () => {}

export default { fetchLogin, createAccount };
