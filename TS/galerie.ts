const images: string[] = [
    "../MEDIA/g1.svg",
    "../MEDIA/g2.svg",
    "../MEDIA/g3.svg"
];

const mainImage = document.getElementById("carousel-image") as HTMLImageElement;

if (!mainImage) throw new Error("Elementul nu exista");

let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    mainImage.src = images[currentIndex]!;
}

setInterval(showNextImage, 3000);

