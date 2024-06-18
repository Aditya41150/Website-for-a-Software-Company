document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const message = form.elements["message"].value;

    // Simulate form submission
    console.log("Form submitted", { name, email, message });

    // Clear the form
    form.reset();

    // google photos integration 
    const googlePhotosContainer = document.getElementById("google-photos");

    fetch("https://photoslibrary.googleapis.com/v1/mediaItems", {
      method: "GET",
      headers: {
        Authorization: "Bearer YOUR_ACCESS_TOKEN",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.mediaItems.forEach((item) => {
          const img = document.createElement("img");
          img.src = item.baseUrl;
          googlePhotosContainer.appendChild(img);
        });
      })
      .catch((error) => console.error("Error fetching Google Photos:", error));
  });
});
