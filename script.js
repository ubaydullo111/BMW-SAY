const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Galereya rasmini kattalashtirish
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    lightboxImage.src = item.dataset.image;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
}

document.getElementById("closeLightbox").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeLightbox();
});

// Hozircha forma demo: backend ulanmaguncha xabar yuborilmaydi.
document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  const phone = form.elements.phone.value.trim();
  const topic = form.elements.topic.value;
  const message = form.elements.message.value.trim();
  const status = document.getElementById("formStatus");

  if (!name || !phone) {
    status.textContent = "Iltimos, ism va telefon raqamingizni kiriting.";
    return;
  }

  status.textContent = `Rahmat, ${name}! Forma tekshirildi. Haqiqiy yuborish uchun Telegram bot yoki server ulash kerak.`;
  // Xabarni WhatsApp orqali yuborish uchun quyidagi qatorni sozlash mumkin:
  // const text = encodeURIComponent(`Ism: ${name}\nTelefon: ${phone}\nMavzu: ${topic}\nXabar: ${message}`);
  // window.open(`https://wa.me/998901234567?text=${text}`, "_blank");
  form.reset();
});
