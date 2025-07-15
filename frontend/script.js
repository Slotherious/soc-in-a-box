document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const data = {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value
  };

  console.log("Sending login data:", data);

  fetch('http://192.168.56.20:5000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => alert("Response: " + res.message))
  .catch(err => alert("Error: " + err));
});
