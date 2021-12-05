type Question = "exercise_habits" | "time_of_sleeping";

type Answer = "mighty" | "lot" | "few" | "entirely";

type User = {
  name: string;
  enquete: { [K in Question]?: Answer };
};

const userA: User = {
  name: "Taro",
  enquete: {
    exercise_habits: "entirely",
    time_of_sleeping: "few",
  },
};

console.log(userA.enquete["exercise_habits"]);
console.log(userA.enquete["steps_par_day"]);
