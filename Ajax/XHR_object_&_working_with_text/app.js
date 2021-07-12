document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // Create an XHR object
  const xhr = new XMLHttpRequest();

  // open
  xhr.open("GET", "data.txt", true);

  // status of ready state
  //console.log("READYSTATE", xhr.readyState);

  // Optional- used for spinners/ loaders
  xhr.onprogress = function () {
    console.log("READYSTATE", xhr.readyState);
  };

  xhr.onload = function () {
    console.log("READYSTATE", xhr.readyState);
    if (this.status === 200) {
      //console.log(this.responseText);
      document.getElementById(
        "output"
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  // xhr.onreadystatechange = function () {
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // };

  // When something goes wrong
  xhr.onerror = function () {
    console.log("Request error...");
  };

  xhr.send();

  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"

  // readyState values
  // 0: request not initialized
  // 1: connection to server established
  // 2: request received
  // 3: request processing
  // 4: request finished and response is ready
}
