function initInputNumber() {
    const donate = document.querySelector('.donate');
    const btnPlus = document.querySelectorAll('.donate__plus');
    const btnMinus = document.querySelectorAll('.donate__minus');
    let input;
    
    if (donate) {
        btnPlus.forEach(item => {
            item.addEventListener("click", () => {
                let num = item.getAttribute("data-plus");
                input = item.closest(".donate__group--sum").querySelector('.donate__input--number');
                let oldValue = input.value;
                input.value = Number(oldValue) + Number(num);
            });
        });

        btnMinus.forEach(item => {
            item.addEventListener("click", () => {
                let num = item.getAttribute("data-minus");
                input = item.closest(".donate__group--sum").querySelector('.donate__input--number');
                let oldValue = input.value;

                if (Number(oldValue) - Number(num) <= 0) {
                    input.value = 1;
                } else {
                    input.value = Number(oldValue) - Number(num);
                }
            });
        });
    }
}

initInputNumber();