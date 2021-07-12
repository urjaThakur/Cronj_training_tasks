// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("hello"), 1000);
//   });

//   const error = true;
//   if (!error) {
//     const res = await promise;
//     return res;
//   } else {
//     await Promise.reject(new Error("Something went wrong"));
//   }
// }

// myFunc()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

async function getusers() {
  // await response of the fetch call
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // only proceed once its resolved
  const data = await response.json();

  // only proceed once second promise is resolved
  return data;
}

getusers().then((users) => console.log(users));
