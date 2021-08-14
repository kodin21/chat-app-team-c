
<video src="https://user-images.githubusercontent.com/58252790/129451307-49c6cb06-70bf-487a-aef5-4b67ce42c337.mp4" width="1280" height="720" controls preload autoplay></video>

# Chat APP

Birden çok odası bulunan, herkesin oda ekleyebildiği, herkesin anonim olarak herhangi bir odaya katılıp mesajlaşabildiği bir live chat app yapmanızı bekliyorum.
Çok temelde chat appimiz üç ekrandan oluşuyor.

1. Ana ekran (/login) ekranı

   -> Ekranda [Kullanici Adi] inputu ve [giris yap] butonu var.

   -> Herkes istediği username ile giriş yapabilir.

   -> Sifre sormaz, kayit mantigi yoktur. Herkes hizlica giris yapip mesajlasmaya baslayabilir.

2. Oda Listesi (/rooms) ekrani

   -> Giris sonrasi mevcut tum odalar listelenir. [Genel, GoyGoy, Teknoloji, ...] gibi odalar oluşturabilirsiniz.

   -> Bu ekranda istenirse yeni oda eklenebilir(Ekranin en altina bir yeni oda ekle butonu / input'u eklemek kafi.)

   -> Herhangi bir odanin uzerine gelindiginde odada kac kisi oldugu yazar ve chat'e katil butonu vardir.

3. Chat room (/room/room-name)

   -> Odaya katildiginiz zaman sol tarafta oda listesi gorunmeye devam eder. Sag tarafta bir chat kutusu ve chat gecmisi vardir. Anlik yazilanlar chat vasitasiyla gonderilir. Diger kisilerin ekranina anlik duser. (Discord gibi dusunun)

## Neler kullanalım

### React

### React-Router ya da ReachRouter

### Gerekiyorsa formik

### Realtime (canlı) chat ve database altyapısı için firebase yada seçeceğiniz servis.
