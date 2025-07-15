document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const data = {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value
  };

  fetch('http://<WINDOWS-IP>:5000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => {
    if (res.message === "Login success!") {
      window.location.href = "dashboard.html";
    } else {
      alert(res.message);
    }
  })
  .catch(err => alert("Error: " + err));
});
