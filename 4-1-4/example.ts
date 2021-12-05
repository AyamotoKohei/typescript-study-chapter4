type User = {
  age?: number;
  name?: string;
};

function registerUser(user: User) {}

const maybeUser = {
  age: 26,
  name: "Taro",
  gender: "male",
};

registerUser(maybeUser);

registerUser({
  ...{
    age: 26,
    name: "Taro",
    gender: "male",
  },
});
