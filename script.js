document.addEventListener("DOMContentLoaded", function () {
    // Butonu seç
    let submitBtn = document.getElementById("submit-btn");

    // Kartları karıştıran fonksiyon
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Kartları oluşturacak fonksiyon
    let generateCards = () => {
        // Yükleniyor göstergesini göster
        let loader = document.querySelector(".loader");
        loader.style.display = "block";
        document.querySelector(".wrapper").style.display = "none";

        // Resim dosya adları ve başlıkları
        let images = [
            { src: "card1.jpg", title: "Card 1" },
            { src: "img2.jpg", title: "Card 2" },
            { src: "img3.jpg", title: "Card 3" },
            { src: "img4.jpg", title: "Card 4" },
            { src: "img5.jpg", title: "Card 5" },
            { src: "img6.jpg", title: "Card 6" },
            { src: "img7.jpg", title: "Card 7" },
            { src: "img8.jpg", title: "Card 8" },
            { src: "img9.jpg", title: "Card 9" },
            { src: "img10.jpg", title: "Card 10" }
        ];

        // Kartları karıştır
        images = shuffle(images);

        // Resimlerin sayısı
        let imageCount = images.length;
        document.querySelector(".wrapper").innerHTML = "";

        // Her bir resmi ve başlığı oluştur
        images.forEach((image) => {
            // Kart konteyneri oluştur
            let container = document.createElement("div");
            container.classList.add("card");

            // Resim öğesi oluştur
            let img = document.createElement("img");
            img.setAttribute("src", `C:/Users/90541/Desktop/Projects/Kodumun Mizahı/kodumunmizahi/img/${image.src}`);
            img.onload = () => {
                imageCount--;
                if (imageCount === 0) {
                    // Tüm resimler yüklendiğinde yükleyiciyi gizle ve kartları göster
                    loader.style.display = "none";
                    document.querySelector(".wrapper").style.display = "grid";
                }
            };

            // Başlık öğesi oluştur
            let title = document.createElement("h3");
            title.innerText = image.title;

            // Kart konteynerine resim ve başlığı ekle
            container.append(img);
            container.append(title);

            // Wrapper konteynerine kartı ekle
            document.querySelector(".wrapper").append(container);
        });
    };

    // Sayfa yüklendiğinde kartları karıştır ve oluştur
    generateCards();

    // Buton tıklama olayını dinle
    submitBtn.addEventListener("click", generateCards);
});
