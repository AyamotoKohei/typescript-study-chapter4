function greet(name?: string): void {
  console.log(`Hello ${name!.toUpperCase()}`);
}
greet();

const myName = 0 as any as string;
console.log(myName.toUpperCase());
