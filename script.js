document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const submitBtn = form.querySelector('button[type="submit"]');

  // Create error message container
  let errorMsg = document.getElementById("form-error");
  if (!errorMsg) {
    errorMsg = document.createElement("div");
    errorMsg.id = "form-error";
    errorMsg.setAttribute('role', 'alert');
    errorMsg.style.color = "#d32f2f";
    errorMsg.style.marginTop = "0.5em";
    errorMsg.style.display = "none";
    form.insertBefore(errorMsg, submitBtn);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous errors
    errorMsg.style.display = "none";
    errorMsg.textContent = "";

    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const message = form.elements["message"].value.trim();

    // Simple validation
    if (!name || !email || !message) {
      errorMsg.textContent = "All fields are required.";
      errorMsg.style.display = "block";
      form.querySelector('[name="name"]').focus();
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      errorMsg.textContent = "Please enter a valid email address.";
      errorMsg.style.display = "block";
      form.querySelector('[name="email"]').focus();
      return;
    }

    // Disable button and show loading
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    // Simulate async submission
    setTimeout(() => {
      // Show success message
      let successMsg = document.getElementById("form-success");
      if (!successMsg) {
        successMsg = document.createElement("div");
        successMsg.id = "form-success";
        successMsg.setAttribute('role', 'status');
        successMsg.style.color = "#0083b0";
        successMsg.style.marginTop = "1em";
        successMsg.style.opacity = 0;
        successMsg.style.transition = "opacity 0.7s";
        form.parentNode.appendChild(successMsg);
      }
      successMsg.textContent = "Thank you for contacting us! We'll get back to you soon.";
      successMsg.style.opacity = 1;

      // Clear the form
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit";

      // Hide success after 5s
      setTimeout(() => {
        successMsg.style.opacity = 0;
      }, 5000);
    }, 1200);
  });
});
