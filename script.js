document.addEventListener("DOMContentLoaded", function () {
    let submitBtn = document.getElementById("submit-btn");

    let generateCards = () => {
        let loader = document.querySelector(".loader");
        loader.style.display = "block";
        document.querySelector(".wrapper").style.display = "none";
        
        // Resim dosya adları ve başlıkları
        let images = [
            { src: "img1.jpg", title: "Card 1" },
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

        let imageCount = images.length;
        document.querySelector(".wrapper").innerHTML = "";

        images.forEach((image) => {
            let container = document.createElement("div");
            container.classList.add("card");
            let img = document.createElement("img");
            img.setAttribute("src", `path/to/img/${image.src}`);
            img.onload = () => {
                imageCount--;
                if (imageCount === 0) {
                    loader.style.display = "none";
                    document.querySelector(".wrapper").style.display = "grid";
                }
            };
            let title = document.createElement("h3");
            title.innerText = image.title;
            container.append(img);
            container.append(title);
            document.querySelector(".wrapper").append(container);
        });
    };

    submitBtn.addEventListener("click", generateCards);
});
