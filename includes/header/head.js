document.addEventListener("DOMContentLoaded", function () {
  fetch("/teck-staff/includes/header/head.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;

      // Titel uit <body data-title="...">
      const title = document.body.dataset.title;
      const titleElement = document.getElementById("page-title");
      if (title && titleElement) {
        titleElement.textContent = title;
      }
    });
});
