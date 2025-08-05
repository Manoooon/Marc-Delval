

window.addEventListener("load", () => {
    setTimeout(() => {
        const images = document.querySelectorAll('.leheader img');
        images.forEach(img => img.classList.add("anim"));
    }, 200);
});

