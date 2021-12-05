interface User {
  // [k: string]: any;
  // [k: string]: Function;
  [k: string]: () => Promise<any>;
}

const user: User = {
  name: "Taro",
  age: 28,
  walk: () => {},
  talk: async () => {},
};
