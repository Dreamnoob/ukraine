const header = document.querySelector('.header'),
    modaWrap = document.querySelectorAll('.modal-wrap'),
    scrollHide = calcScroll();


function bindModal(triggerSelector, modalSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal();
            modal.classList.add('active');
            hidesScroll();
        });
    });
}

function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}

function hidesScroll() {
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = `${scrollHide}px`;
    modaWrap.forEach(item => {
        item.style.width = `calc(100% - ${scrollHide}px)`;
    });
}

function showsScroll() {
    document.body.style.overflow = "";
    document.body.style.marginRight = '';
    modaWrap.forEach(item => {
        item.style.width = '';
    });
}

function showModal(modalItem) {
    const modal = document.querySelector(modalItem);
    modal.classList.add('active');
    hidesScroll();
}


bindModal('.show-gallery', '.modal-gallery');


//////////////////////////////////////////////////////////////////////////////

function closeModal() {
    const modalAll = document.querySelectorAll('.modal-wrap');

    modalAll.forEach(item => {
        item.classList.remove('active');
        showsScroll();
    });

}

function closeAllModal() {
    const modalAll = document.querySelectorAll('.modal-wrap');
    const modalClose = document.querySelectorAll('.modal__close');

    modalClose.forEach(item => {
        item.addEventListener('click', function () {
            closeModal();
        });
    });

    modalAll.forEach(item => {
        item.addEventListener('click', function (e) {
            if (e.target === item) {
                item.classList.remove('active');
                showsScroll();
            }
        });
    });
}

closeAllModal();


/////////////////////////////////////////////////////////////////////////





