function toggleMenu() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const overley = document.querySelector('.overley');
    const closeBtn = document.querySelector('.close-menu');

    burger.addEventListener("click", () => {
        nav.classList.add("active");
        overley.classList.add("active");
        hideScroll();
        document.addEventListener('click', clickPast);
    });

    function closeMenu() {
        nav.classList.remove("active");
        overley.classList.remove("active");
        showScroll();
        document.removeEventListener('click', clickPast);
    }

    closeBtn.addEventListener("click", () => {
        closeMenu();
    });

    function clickPast(e) {
        let withinBoundaries = e.composedPath().includes(nav);
        let withinBoundaries2 = e.composedPath().includes(burger);

        if (!withinBoundaries && !withinBoundaries2) {
            closeMenu();
        }
    }
}

toggleMenu();