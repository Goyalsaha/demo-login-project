function sendData() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (user === "" || pass === "") {
    alert("Please enter demo credentials");
    return;
  }

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: user,
      password: pass,
      time: new Date().toLocaleString()
    })
  })
  .then(res => res.text())
  .then(() => {
    // alert("Demo data sent to server");
    document.getElementById("password").value = "";
  });
}
