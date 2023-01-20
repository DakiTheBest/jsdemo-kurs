for (let i = 0; i <= 10; i++) {
  //   console.log(i);
}

const users = ["Max", "Anna", "Joel"];

for (const user of users) {
  //   console.log(user);
}

const loggedInUser = {
  name: "Max",
  age: 32,
  isAdmin: true,
};

for (const data in loggedInUser) {
  console.log(data);
  console.log(loggedInUser[data]);
}

let isFinished = false;

while (!isFinished) {
  isFinished = confirm("Do you want to quit?");
}

console.log("Done!");
