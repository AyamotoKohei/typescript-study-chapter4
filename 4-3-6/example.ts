type User = { name: string };
type UserA = User & { gender: "male" | "female" | "other" };
type UserB = User & { graduate: string };

const users: (UserA | UserB)[] = [
  { name: "Taro", gender: "male" },
  { name: "Hanako", graduate: "Tokyo" },
];

/*
function filteredUser(user: UserA | UserB): user is UserB {
  return 'graduate' in user;
}

const filteredUsers = users.filter(filteredUser);
*/

const filteredUsers = users.filter(
  (user: UserA | UserB): user is UserB => "graduate" in user
);
