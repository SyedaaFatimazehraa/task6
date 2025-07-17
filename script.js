document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const message = e.target.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields.");
    e.preventDefault();
  }
});
