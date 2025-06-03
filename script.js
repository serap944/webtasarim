// Sayfa yüklendiğinde bu fonksiyon çalışacak
document.addEventListener('DOMContentLoaded', function() {

  // Intersection Observer oluşturuyoruz
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const karta = entry.target.querySelector('.karta');
        if (karta) karta.classList.add('hareketi');
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.1 
  });

  document.querySelectorAll('.kart').forEach(kart => {
    observer.observe(kart);
  });

  //MENU//
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.menu-cubugu');
  
  menuToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
    
    const icon = this.querySelector('i');
    if (mainNav.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Form gönderimi
  document.getElementById('teklifFormu').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const bildirim = document.getElementById('formBildirim');
    const mesaj = bildirim.querySelector('.bildirim-mesaj');
    
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => {
      if(response.ok) {
        bildirim.style.background = '#4CAF50';
        mesaj.textContent = '✓ Talebiniz başarıyla gönderildi!';
        form.reset();
      } else {
        bildirim.style.background = '#f44336';
        mesaj.textContent = '✗ Gönderim başarısız. Lütfen tekrar deneyin.';
      }
      
      bildirim.classList.add('goster');
      setTimeout(() => {
        bildirim.classList.remove('goster');
      }, 4000);
    })
    .catch(error => {
      bildirim.style.background = '#f44336';
      mesaj.textContent = '✗ Bir hata oluştu. Lütfen daha sonra tekrar deneyin.';
      bildirim.classList.add('goster');
      setTimeout(() => bildirim.classList.remove('goster'), 4000);
    });
  });

  // Kapat butonu işlevi
  document.querySelector('.kapat').addEventListener('click', function() {
    document.getElementById('formBildirim').classList.remove('goster');
  });

}); // DOMContentLoaded fonksiyonunun kapanışı

//teklif formuna götürme (jQuery gerektirir)
function scrollToForm() {
    $('html, body').animate({
        scrollTop: $('#teklifFormu').offset().top
    }, 1500);
}
