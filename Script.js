document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    const nav = document.querySelector("nav");
    const mainContent = document.querySelector("main");
    const aside = document.querySelector("aside");

    title.textContent = "Belajar Javascript Dasar - Interaksi Pertama! 😎😁";
    title.addEventListener("click", () => {
        nav.classList.toggle("show-nav");
    // === Paragraaf pertama pada artikel,peertama berubah saat di klik ===
    const targetParagraph = document.querySelector("article:first-of-type > p");

    document.querySelector("article:first-of-type").addEventListener("click", () => {
        targetParagraph.textContent = 
            "Coding bukan hanya mengetik,tapi memahami🤷‍♀️";
    });
    
    });

    document.addEventListener("keydown", (event) => {
        if(event.key === "d") {
            document.body.classList.toggle("dark");
        }
    });

    let count = 0;
    mainContent.addEventListener("click", () => {
        count++;
        aside.textContent =`kamu klik konten ini sebanyak ${count} kali`;
    })
// === Menekan tombol F akan mengubah ukuran tulisan pada navbar ===
document.addEventListener("keydown", (event) => {
    if (event.key === "f" || event.key === "F") {
        const navList = document.querySelector("nav ul");
        navList.style.fontSize =
        navList.style.fontSize === "26px" ? "18px" : "26px";
    }
});

// === Waarna Background akan berganti ketika halaman di scroll 200px ===
let lastScrollChange = 0;

const colors = ["#ffe6f2", "#ffd6e8", "#ffccdd", "#ffc2d6", "#ffb8cc"];
let colorIndex = 0;

window.addEventListener("scroll", () => {
    if (window.scrollY - lastScrollChange >= 200) {
        colorIndex = (colorIndex + 1) % colors.length;
        document.body.style.backgroundColor = colors[colorIndex];
        lastScrollChange = window.scrollY;
    }
});
})