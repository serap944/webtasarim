// Menü toggle (hamburger)
const menuToggle = document.querySelector(".menu-toggle");
const linklerim = document.querySelector(".linklerim");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
    linklerim.classList.toggle("aktif"); // menü aç/kapat
    // ikon değiştir
    if (linklerim.classList.contains("aktif")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
    } else {
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    }
});

// Mobilde açılır menü (hizmetlerimiz)
const acilirToggle = document.querySelector(".acilir-toggle");
const acilirPencere = document.querySelector(".acilir-pencere");

acilirToggle.addEventListener("click", () => {
    acilirPencere.classList.toggle("goster");
    acilirToggle.parentElement.classList.toggle("open");
});

// Teklif formuna kaydırma
function scrollToForm() {
    const form = document.getElementById("teklifFormu");
    if (form) {
        $("html, body").animate(
            {
                scrollTop: $(form).offset().top - 80, // menü yüksekliğini hesaba kat
            },
            700
        );
    }
}

// Kart animasyonları görünür olduğunda çalışsın
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("hareketi");
            }
        });
    },
    { threshold: 0.2 }
);

document.querySelectorAll(".karta, .kartb, .kartc").forEach((el) => {
    observer.observe(el);
});

// Slider kontrolleri
const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let offset = 0;

nextBtn.addEventListener("click", () => {
    const slideWidth = slider.children[0].offsetWidth + 32; // kart genişliği + gap
    if (offset > -(slider.scrollWidth - slider.offsetWidth)) {
        offset -= slideWidth;
        slider.style.transform = `translateX(${offset}px)`;
    }
});

prevBtn.addEventListener("click", () => {
    const slideWidth = slider.children[0].offsetWidth + 32;
    if (offset < 0) {
        offset += slideWidth;
        slider.style.transform = `translateX(${offset}px)`;
    }
});
