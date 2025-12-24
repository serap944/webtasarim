// add-ga.js (dosya adı tam bu olacak)
const fs = require('fs');
const path = require('path');

console.log('🔧 Google Analytics kodu ekleniyor...');

const gaCode = `
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WW6HYY69P3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-WW6HYY69P3');
</script>
`;

try {
    // build/index.html yolunu bul
    const indexPath = path.join(__dirname, 'build', 'index.html');

    // Dosya var mı kontrol et
    if (!fs.existsSync(indexPath)) {
        console.log('⚠️  build/index.html bulunamadı. Önce npm run build yapmalısın.');
        process.exit(0); // Hata değil, sadece bilgi
    }

    // HTML'i oku
    let html = fs.readFileSync(indexPath, 'utf8');

    // Eğer zaten GA varsa ekleme
    if (html.includes('gtag/js')) {
        console.log('✅ Google Analytics zaten mevcut');
    } else {
        // </title> tag'inden sonra GA kodunu ekle
        html = html.replace('</title>', '</title>' + gaCode);

        // Dosyayı kaydet
        fs.writeFileSync(indexPath, html, 'utf8');
        console.log('✅ Google Analytics kodu başarıyla eklendi!');
    }
} catch (error) {
    console.log('❌ Hata:', error.message);
}