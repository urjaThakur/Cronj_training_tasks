document.getElementById("button1").addEventListener("click", getText);

document.getElementById("button2").addEventListener("click", getJson);

document.getElementById("button3").addEventListener("click", getExternal);

// get data from  text file
function getText() {
  fetch("text.txt")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById("output").innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// get data from json file
function getJson() {
  fetch("post.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let output = "";
      data.forEach(function (d1) {
        output += `<li>${d1.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// get data from external api
function getExternal() {
  fetch("https://api.github.com/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let output = "";
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}
