# Chat APP

## [Live Demo ()=>](https://chat-app-teamc.netlify.app/)

<video src="https://user-images.githubusercontent.com/58252790/129451307-49c6cb06-70bf-487a-aef5-4b67ce42c337.mp4" width="1280" height="720" controls preload autoplay></video>

<p align="center">
  <img src="https://user-images.githubusercontent.com/58252790/129458364-4c12e596-9b53-497c-b7d5-7e819f422c83.png" width="300" height="160" />
  <img src="https://user-images.githubusercontent.com/58252790/129458363-0c3a5115-4952-457b-b678-069f5791ef5d.png" width="300" height="160" />
  <img src="https://user-images.githubusercontent.com/58252790/129458513-9112474a-38ff-4f40-8378-0cc4622b3b21.png" width="300" height="160" />
<img src="https://user-images.githubusercontent.com/58252790/129458523-224cb4e9-1ade-422e-bd29-aff67520a761.png" width="300" height="160" />
</p>

Birden çok odası bulunan, herkesin oda ekleyebildiği, herkesin herhangi bir odaya katılıp mesajlaşabildiği bir live chat app.

---

### Kullandiklarimiz:

- **React**
- **[Firebase Realtime ve Firestore Database](https://firebase.google.com/)**
- **[react-router](https://reactrouter.com/)**
- **[react-firebase-hooks](https://github.com/csfrequency/react-firebase-hooks)**
- **[SCSS](https://sass-lang.com/)**
- **[Figma](https://www.figma.com/file/tCOGv2GFqwYGJCOWyxrBeG/bootcamp-week-5?node-id=0%3A1)**

---

### Contributors:

- [Yusuf Cemal Tokmak](https://github.com/yusufcmlt)
- [Onur Yüksekkaya](https://github.com/onur-yuksekkaya)
- [Neim Ramazanoğlu](https://github.com/Neim-Ramazanoglu)
- [Gizem Yakabağ](https://github.com/gizemykbg)

---

### Karsilanan gereksinimler:

##### 1. Ana ekran (/login) ekranı

- [x] -> Ekranda [Kullanici Adi] inputu ve [giris yap] butonu var.

- [x] -> Herkes istediği username ile giriş yapabilir.

- [x] -> Sifre sormaz, kayit mantigi yoktur. Herkes hizlica giris yapip mesajlasmaya baslayabilir.

##### 2. Oda Listesi (/rooms) ekrani

- [x] -> Giris sonrasi mevcut tum odalar listelenir. [Genel, GoyGoy, Teknoloji, ...] gibi odalar oluşturabilirsiniz.

- [x] -> Bu ekranda istenirse yeni oda eklenebilir(Ekranin en altina bir yeni oda ekle butonu / input'u eklemek kafi.)

- [x] -> Herhangi bir odanin uzerine gelindiginde odada kac kisi oldugu yazar ve chat'e katil butonu vardir.

##### 3. Chat room (/room/room-name)

- [x] -> Odaya katildiginiz zaman sol tarafta oda listesi gorunmeye devam eder. Sag tarafta bir chat kutusu ve chat gecmisi vardir. Anlik yazilanlar chat vasitasiyla gonderilir. Diger kisilerin ekranina anlik duser. (Discord gibi dusunun)
