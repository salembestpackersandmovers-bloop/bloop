document.documentElement.classList.add("js-enabled");

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  const form = document.getElementById("quoteForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get("name") || "Customer";
    const phone = data.get("phone") || "";
    const from = data.get("from") || "Not specified";
    const to = data.get("to") || "Not specified";
    const service = data.get("service") || "Moving service";
    const date = data.get("date") || "Not specified";
    const extra = data.get("message") || "None";
    const message =
      `Hello Salem Best Packers & Movers,%0A%0A` +
      `I would like a free quote.%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Phone: ${encodeURIComponent(phone)}%0A` +
      `From: ${encodeURIComponent(from)}%0A` +
      `To: ${encodeURIComponent(to)}%0A` +
      `Moving date: ${encodeURIComponent(date)}%0A` +
      `Service: ${encodeURIComponent(service)}%0A` +
      `Requirements: ${encodeURIComponent(extra)}`;
    window.open(`https://wa.me/919524809145?text=${message}`, "_blank");
  });

  // Close the mobile navigation after clicking a section link.
  document.querySelectorAll("#navMenu .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("navMenu");
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
});
