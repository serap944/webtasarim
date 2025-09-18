document.addEventListener('DOMContentLoaded', function () {
  // Sayfa tamamen yüklendiğinde çalışacak


  //css kayma stilleri ekleniyor
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const karta = entry.target.querySelector('.karta');
        const kartb = entry.target.querySelector('.kartb');
        const kartc = entry.target.querySelector('.kartc');

        if (karta) karta.classList.add('hareketi');
        if (kartb) kartb.classList.add('hareketi');
        if (kartc) kartc.classList.add('chareketi');

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.kart').forEach(kart => {
    observer.observe(kart);
  });

  // Menü toggle
  const menutogg = document.querySelector(".menu-toggle");
  const linklerim = document.querySelector(".linklerim");
  const menutoggIcon = menutogg.querySelector("i");

  menutogg.addEventListener("click", function () {
    linklerim.classList.toggle("aktiflik");
    const isOpen = linklerim.classList.contains("aktiflik");

    if (isOpen) {
      menutoggIcon.classList.remove("fa-bars");
      menutoggIcon.classList.add("fa-times");
    } else {
      menutoggIcon.classList.remove("fa-times");
      menutoggIcon.classList.add("fa-bars");
    }
  });

  // Açılır menü
  const acilirToggle = document.querySelector(".acilir-toggle");
  const acilirParent = document.querySelector(".acilir");
  if (acilirToggle) {
    acilirToggle.addEventListener("click", () => {
      acilirParent.classList.toggle("open");
    });
  }

  // Form gönderimi
  const teklifFormu = document.getElementById('teklifFormu');
  if (teklifFormu) {
    teklifFormu.addEventListener('submit', function (e) {
      e.preventDefault();
      const form = e.target;
      const bildirim = document.getElementById('formBildirim');
      const mesaj = bildirim.querySelector('.bildirim-mesaj');

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
      })
        .then(response => {
          if (response.ok) {
            bildirim.style.background = '#4CAF50';
            mesaj.textContent = '✓ Talebiniz başarıyla gönderildi!';
            form.reset();
          } else {
            bildirim.style.background = '#f44336';
            mesaj.textContent = '✗ Gönderim başarısız. Lütfen tekrar deneyin.';
          }
          bildirim.classList.add('goster');
          setTimeout(() => bildirim.classList.remove('goster'), 4000);
        })
        .catch(() => {
          bildirim.style.background = '#f44336';
          mesaj.textContent = '✗ Bir hata oluştu. Lütfen daha sonra tekrar deneyin.';
          bildirim.classList.add('goster');
          setTimeout(() => bildirim.classList.remove('goster'), 4000);
        });
    });
  }

  // SLIDER
  const kaydirici = document.getElementById('slider');
  const ileri = document.getElementById('next');
  const geri = document.getElementById('prev');
  const dotsContainer = document.getElementById('dots-container');

  let indeks = 0;
  let toplam = kaydirici.children.length;
  let gorunen = 3;
  let kartGenislik, gap;
  let zamanlayici;

  function gorunenKartSayisi() {
    if (window.innerWidth <= 768) {
      gorunen = 1;
    } else if (window.innerWidth <= 1024) {
      gorunen = 2;
    } else {
      gorunen = 3;
    }
    return gorunen;
  }

  function dotsOlustur() {
    dotsContainer.innerHTML = '';
    const dotsCount = toplam - gorunenKartSayisi() + 1;
    for (let i = 0; i < dotsCount; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        indeks = i;
        guncelleSlider();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function dotsGuncelle() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === indeks);
    });
  }

  function guncelleSlider() {
    gorunenKartSayisi();
    kartGenislik = kaydirici.children[0].offsetWidth;
    gap = parseFloat(getComputedStyle(kaydirici).gap) || 0;
    const hareketX = -(indeks * (kartGenislik + gap));
    kaydirici.style.transform = `translateX(${hareketX}px)`;
    dotsGuncelle();
  }

  function baslatOtoKaydir() {
    zamanlayici = setInterval(() => {
      indeks++;
      if (indeks > toplam - gorunen) indeks = 0;
      guncelleSlider();
    }, 3000);
  }

  function durOtoKaydir() {
    clearInterval(zamanlayici);
  }

  ileri.addEventListener('click', () => {
    indeks++;
    if (indeks > toplam - gorunen) indeks = 0;
    guncelleSlider();
    durOtoKaydir();
    baslatOtoKaydir();
  });

  geri.addEventListener('click', () => {
    indeks--;
    if (indeks < 0) indeks = toplam - gorunen;
    guncelleSlider();
    durOtoKaydir();
    baslatOtoKaydir();
  });

  kaydirici.addEventListener('mouseenter', durOtoKaydir);
  kaydirici.addEventListener('mouseleave', baslatOtoKaydir);

  window.addEventListener('resize', function () {
    gorunenKartSayisi();
    dotsOlustur();
    guncelleSlider();
  });

  // Dokunmatik desteği
  let startX, moveX;
  kaydirici.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
    durOtoKaydir();
  });
  kaydirici.addEventListener('touchmove', function (e) {
    moveX = e.touches[0].clientX;
  });
  kaydirici.addEventListener('touchend', function () {
    if (startX - moveX > 50) {
      indeks++;
      if (indeks > toplam - gorunen) indeks = 0;
    } else if (moveX - startX > 50) {
      indeks--;
      if (indeks < 0) indeks = toplam - gorunen;
    }
    guncelleSlider();
    baslatOtoKaydir();
  });

  // Başlangıç
  gorunenKartSayisi();   // 🔑 ilk açılışta çağır
  dotsOlustur();
  guncelleSlider();
  baslatOtoKaydir();
});

function scrollToForm() {
  $('html, body').animate({
    scrollTop: $('#teklifFormu').offset().top
  }, 1500);
}
