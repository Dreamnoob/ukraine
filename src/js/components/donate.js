function donateTabs(tabs, contentItems) {
    let tabsList = document.querySelectorAll(tabs);
    let contentList = document.querySelectorAll(contentItems);

    if (tabsList.length != 0) {
        tabsList.forEach(function (item) {
            item.addEventListener('click', function () {
                tabsList.forEach(function (item) {
                    item.classList.remove('active');
                });

                contentList.forEach(function (item) {
                    item.classList.remove('active');
                });

                this.classList.add("active");
                let tabId = this.getAttribute("data-id");
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
}

donateTabs(".donate__tab", ".donate__item");


function initCurrencyAccordion() {
    const wrappers = document.querySelectorAll(".currency__wrapper");
    const currencyСontent = document.querySelector(".currency__content");
    const items = document.querySelectorAll(".currency__item");
    let windowWidth = window.innerWidth;
    let move = false;

    function currencyAccordion(tabs, contentItems) {
        let tabsList = document.querySelectorAll(tabs);
        let contentList = document.querySelectorAll(contentItems);

        if (tabsList.length != 0) {
            tabsList.forEach(function (item) {
                item.addEventListener('click', function () {
                    let tabItem = this;
                    tabItem.classList.add("active");
                    let contentItem = document.getElementById(this.getAttribute("data-id"));

                    tabsList.forEach(function (item) {
                        if (item != tabItem) {
                            item.classList.remove('active');
                        }
                    });

                    if (move) {
                        $(contentItem).slideDown(300);
                        contentList.forEach(function (item) {
                            if (item != contentItem) {
                                $(item).slideUp(300);
                            }
                        });

                    } else  {
                        contentItem.classList.add('active');

                        contentList.forEach(function (item) {
                            if (item != contentItem) {
                                item.classList.remove('active');
                            }
                            item.style.display = "";
                        });
                    }
                });
            });
        }
    }

    currencyAccordion(".currency__btn", ".currency__item");

    function moveItemCurrency() {
        items.forEach(function (item, i) {
            $(item).appendTo(wrappers[i]);
        });

        move = true;
    }

    function returnItemCurrency() {
        items.forEach(function (item, i) {
            $(item).appendTo(currencyСontent);
        });

        move = false;
    }

    function movementTracking() {
        windowWidth = window.innerWidth;

        if (windowWidth <= 767 && !move) {
            moveItemCurrency();
        } else if (windowWidth > 767 && move) {
            returnItemCurrency();
        }
    }

    if (wrappers.length != 0) {
        movementTracking();

        window.addEventListener('resize', movementTracking);
    }
}

initCurrencyAccordion();