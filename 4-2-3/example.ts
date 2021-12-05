const tuple1 = [false, 1, "2"] as [false, 1, "2"];
const taple2 = [false, 1, "2"] as const;

const a = "a";
let b = a;

const A = "A" as const;
const B = A;

function increment() {
  return { type: "INCREMENT" };
}
function decrement() {
  return { type: "DECREMENT" } as const;
}

const x = increment();
const y = decrement();
