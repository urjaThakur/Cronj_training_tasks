class EasyHTTp {
  async get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}

const http = new EasyHTTp();

document.addEventListener("DOMContentLoaded", function getusers(e) {
  http
    .get("https://jsonplaceholder.typicode.com/users")
    .then((dataall) => {
      console.log(dataall);
      const users = document.getElementById("users");
      dataall.forEach(function (data) {
        users.innerHTML += `
          <div class="card mb-2 mr-2">
            <div class="card-header bg-dark">
              <h3 class="card-title text-white text-center">User-${data.id}</h3>
            </div>
            <div class="card-body">
            <ul>
              <li>Name: ${data.name}</li>
              <li>Username: ${data.username}</li>
              <li>Email: ${data.email}</li>
              <li>
                Address: ${data.address.street}, ${data.address.city},
                ${data.address.zipcode}
              </li>
            </ul>
            </div>
           </div>
        `;
      });
    })
    .catch((error) => console.log(error));

  e.preventDefault();
});
