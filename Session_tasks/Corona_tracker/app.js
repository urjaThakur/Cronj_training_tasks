document.addEventListener("DOMContentLoaded", getExternal);

function getExternal() {
  fetch("https://api.covidindiatracker.com/state_data.json")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      let output = "";
      data.map(function (val) {
        output += `
        <tr class="item">
        <td>${val.id}</td>
        <td>${val.state}</td>
        <td>${val.active}</td>
        <td>${val.confirmed}</td>
        <td>${val.recovered}</td>
        <td>${val.deaths}</td>
      </tr>
        `;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}
document.getElementById("search").addEventListener("click", SearchState);
document.getElementById("filter").addEventListener("keyup", filterState);

function filterState(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".item").forEach(function (data) {
    const item = data.children[1].textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      data.style.display = "";
    } else {
      data.style.display = "none";
    }
  });
}

function SearchState() {
  const text = document.getElementById("filter").value.toLowerCase();
  document.querySelectorAll(".item").forEach(function (data) {
    const item = data.children[1].textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      data.style.display = "";
    } else {
      data.style.display = "none";
    }
  });
  document.getElementById("filter").value = "";
}
