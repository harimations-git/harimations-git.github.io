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


    const lightbox = document.querySelector("#imageLightbox");
    const lightboxImage = lightbox.querySelector(".image-lightbox-image");
    const lightboxClose = lightbox.querySelector(".image-lightbox-close");

    const openLightbox = (image) => {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");

        lightboxImage.src = "";

        document.body.style.overflow = "";
    };


    // Make every project carousel image clickable
    document.querySelectorAll(".video-slide img").forEach((image) => {
        image.addEventListener("click", () => {
            openLightbox(image);
        });
    });


    // Close button
    lightboxClose.addEventListener("click", closeLightbox);


    // Clicking the dark background closes it
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });


    // Clicking the large image closes it too
    lightboxImage.addEventListener("click", closeLightbox);


    // Escape key closes it
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.classList.contains("is-open")) {
            closeLightbox();
        }
    });
});