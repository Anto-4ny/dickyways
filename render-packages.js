// render-packages.js

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const placeKey = urlParams.get("place");

  const packages = travelPackages[placeKey];
  const title = document.getElementById("package-title");
  const container = document.getElementById("package-list");

  if (!packages) {
    title.textContent = "Packages Not Found";
    container.innerHTML = "<p>We couldn't find any packages for this destination.</p>";
    return;
  }

  title.textContent = `${placeKey.charAt(0).toUpperCase() + placeKey.slice(1)} Premium Packages`;

  container.innerHTML = packages.map(pkg => `
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <img src="${pkg.image}" class="card-img-top" alt="${pkg.name}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${pkg.name}</h5>
          <p class="card-text">${pkg.description}</p>
          <div class="mt-auto">
            <p class="fw-bold text-primary">${pkg.price}</p>
            <p class="text-muted">${pkg.location}</p>
            <a href="#" class="btn btn-dark w-100">Book Now</a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
});
