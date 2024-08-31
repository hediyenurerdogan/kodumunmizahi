document.addEventListener("DOMContentLoaded", function () {
    // Kartları karıştıran fonksiyon
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Kartları oluşturacak fonksiyon
    function generateCards() {
        // Resim dosya adları ve başlıkları
        let images = [];
        for (let i = 1; i <= 24; i++) {
            images.push({ src: `img/card${i}.jpg`, title: `Kart ${i}` });
        }

        // Kartları karıştır
        shuffle(images);

        // Karıştırılmış kartları sayfaya ekle
        const container = document.querySelector(".container");
        images.forEach(image => {
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("card");

            const imgElement = document.createElement("img");
            imgElement.src = image.src;
            imgElement.alt = image.title;

            cardDiv.appendChild(imgElement);
            container.appendChild(cardDiv);
        });
    }

    // Sayfa yüklendiğinde kartları oluştur ve göster
    generateCards();
});
