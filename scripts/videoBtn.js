document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".video-carousel");

    carousels.forEach((carousel) => {
        const slides = Array.from(carousel.querySelectorAll(".video-slide"));
        const btnLeft = carousel.querySelector(".video-btn-left");
        const btnRight = carousel.querySelector(".video-btn-right");


        if (!slides.length || !btnLeft || !btnRight) return;

        let index = slides.findIndex((s) => s.classList.contains("is-active"));
        if (index === -1) index = 0;

        slides.forEach((s, i) => s.classList.toggle("is-active", i === index));

        const stopVideoInSlide = (slide) => {
            const vid = slide.querySelector("video");
            if (!vid) return;
            vid.pause();
            // vid.currentTime = 0; //remove this line if you want 
        };

        const show = (newIndex) => {
            if (newIndex < 0) newIndex = slides.length - 1;
            if (newIndex >= slides.length) newIndex = 0;

            const current = slides[index];
            const next = slides[newIndex];

            stopVideoInSlide(current);
            current.classList.remove("is-active");
            next.classList.add("is-active");

            index = newIndex;
        };

        btnLeft.addEventListener("click", () => show(index - 1));
        btnRight.addEventListener("click", () => show(index + 1));

        carousel.tabIndex = 0; 
        carousel.addEventListener("keydown", (e) => {
            if (e.key === "ArrowLeft") show(index - 1);
            if (e.key === "ArrowRight") show(index + 1);
        });

        //swipe support (mobile)
        let startX = null;
        carousel.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        carousel.addEventListener("touchend", (e) => {
            if (startX === null) return;
            const endX = e.changedTouches[0].clientX;
            const dx = endX - startX;
            startX = null;

            const threshold = 35; 
            if (dx > threshold) show(index - 1);     
            else if (dx < -threshold) show(index + 1);
        });
    });
});