# Çevrimiçi Metin Okuyucu

Bu proje, kullanıcıların metinleri sesli olarak dinleyebilmeleri için tarayıcı tabanlı bir uygulamadır. Uygulama, Web Speech API ve Google Cloud Text-to-Speech API kullanarak metinleri sesli olarak okuyabilir. Ayrıca, kullanıcılar kendi seslerini kaydedip kullanabilirler.

## Özellikler

- Kullanıcı metin girdiğinde sistem bunu sesli okuyabilir.
- Farklı ses seçenekleri (kadın, erkek, robotik ses vb.) sunulabilir.
- Kullanıcı okuma hızını ayarlayabilir.
- Okunan metni MP3 olarak kaydedebilir.
- Farklı dillerde konuşma desteği eklenmiştir.
- Kullanıcı kendi sesini kaydedip kullanabilir.
- AI destekli daha doğal ses sentezi (Google Cloud TTS).

## Gereksinimler

- Google Cloud API anahtarı (Google Cloud Text-to-Speech API için)
- Modern bir web tarayıcısı (Chrome, Firefox, Edge, Safari)

## Kurulum

1. Bu projeyi yerel makinenize klonlayın veya indirin.
2. Proje dizininde `index.html` dosyasını açın.
3. `script.js` dosyasındaki `apiKey` değişkenine Google Cloud API anahtarınızı ekleyin.

## Kullanım

1. Metin alanına metni girin.
2. Ses seçeneğini ve okuma hızını ayarlayın.
3. "Oku" butonuna tıklayarak metni sesli olarak dinleyin.
4. "Kaydet" butonuna tıklayarak okunan metni MP3 olarak kaydedin.
5. "Kendi Sesini Kaydet" butonuna tıklayarak kendi sesinizi kaydedin ve "Kaydı Durdur" butonuna tıklayarak kaydı durdurun. Kendi sesinizi ses seçenekleri arasına ekleyin ve kullanın.

## Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen bir pull request gönderin veya bir issue açın.