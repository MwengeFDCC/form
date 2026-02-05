 const form = document.getElementById("contactform");

  const messageBox = document.createElement("p");
  messageBox.style.textAlign = "center";
  messageBox.style.marginTop = "12px";
  messageBox.style.fontWeight = "600";
  form.appendChild(messageBox);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const message = document.getElementById("message").value.trim();
    const datetime = document.getElementById("datetime").value;

    if (!fullname || !email || !contact || !message || !datetime) {
      messageBox.textContent = "❌ Please fill in all required fields.";
      messageBox.style.color = "red";
      return;
    }

    messageBox.textContent = "✅ Form submitted successfully!";
    messageBox.style.color = "green";

    form.reset();
  });