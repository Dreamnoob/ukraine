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

donateTabs(".currency__btn", ".currency__item");
