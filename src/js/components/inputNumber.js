function initInputNumber() {
    const input = document.querySelector('.donate__input--number');
    const btnPlus = document.querySelector('.donate__plus');
    const btnMinus = document.querySelector('.donate__minus');

    if(input) {
        btnPlus.addEventListener("click", () => {
            let num = btnPlus.getAttribute("data-plus");
            let oldValue = input.value;

            input.value = Number(oldValue) + Number(num);
        });

        btnMinus.addEventListener("click", () => {
            let num = btnPlus.getAttribute("data-plus");
            let oldValue = input.value;

            if(Number(oldValue) - Number(num) <= 0) {
                input.value = 1;
            } else {
                input.value = Number(oldValue) - Number(num);
            }
        });
    }
}

initInputNumber();