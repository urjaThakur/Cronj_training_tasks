const posts = [
  { title: "Post one", body: " This is post one" },
  { title: "Post two", body: " This is post two" },
];

// function creatPosts(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function () {
//     let output = "";
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// creatPosts({ title: "Post three", body: "This is post three" });

// getPosts();

function creatPosts(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

creatPosts({ title: "Post three", body: "This is post three" }, getPosts);
