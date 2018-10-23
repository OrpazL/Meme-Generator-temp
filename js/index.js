var gNextId = 1;
var gImages = [
    {id: gNextId++, url: './img/meme-imgs/1.jpg', keywords: ['happy']},
    {id: gNextId++, url: './img/meme-imgs/2.jpg', keywords: ['happy']},
    {id: gNextId++, url: './img/meme-imgs/3.jpg', keywords: ['happy']},
    {id: gNextId++, url: './img/meme-imgs/4.jpg', keywords: ['happy']},
    {id: gNextId++, url: './img/meme-imgs/5.jpg', keywords: ['happy']},
    {id: gNextId++, url: './img/meme-imgs/6.jpg', keywords: ['happy']},
    {id: gNextId++, url: './img/meme-imgs/7.jpg', keywords: ['happy']},
    {id: gNextId++, url: './img/meme-imgs/8.jpg', keywords: ['happy']},
    {id: gNextId++, url: './img/meme-imgs/9.jpg', keywords: ['happy']},
    {id: gNextId++, url: './img/meme-imgs/10.jpg', keywords: ['happy']},
    {id: gNextId++, url: './img/meme-imgs/11.jpg', keywords: ['happy']},
    {id: gNextId++, url: './img/meme-imgs/12.jpg', keywords: ['happy']},
    {id: gNextId++, url: './img/meme-imgs/13.jpg', keywords: ['happy']},
    {id: gNextId++, url: './img/meme-imgs/14.jpg', keywords: ['happy']},
    {id: gNextId++, url: './img/meme-imgs/15.jpg', keywords: ['happy']},
    {id: gNextId++, url: './img/meme-imgs/16.jpg', keywords: ['happy']},
    {id: gNextId++, url: './img/meme-imgs/17.jpg', keywords: ['happy']},
    {id: gNextId++, url: './img/meme-imgs/18.jpg', keywords: ['happy']},
    {id: gNextId++, url: './img/meme-imgs/19.jpg', keywords: ['happy']},
    {id: gNextId++, url: './img/meme-imgs/20.jpg', keywords: ['happy']},
    {id: gNextId++, url: './img/meme-imgs/21.jpg', keywords: ['happy']},
    {id: gNextId++, url: './img/meme-imgs/22.jpg', keywords: ['happy']},
    {id: gNextId++, url: './img/meme-imgs/23.jpg', keywords: ['happy']},
    {id: gNextId++, url: './img/meme-imgs/24.jpg', keywords: ['happy']},
    {id: gNextId++, url: './img/meme-imgs/25.jpg', keywords: ['happy']}
];
var gCurrImg = gImages[0];

function init() {
    createList(gImages);
    renderCanvas();
}

function handlePage(pageClass, elLink) {
    if (elLink.classList.contains('disabled')) return;

    removeDisplayPrev();
    elLink.classList.add('active');

    let page = $(`.${pageClass}`);
    page.removeClass('d-none');
}

function removeDisplayPrev() {
    let allPages = $('.card-body');
    let allBtns = $('.nav-link');

    for (let i = 0; i < allPages.length; i++) {
        $(allPages[i]).addClass('d-none');
        if ($(allBtns[i]).hasClass('active')) {
            $(allBtns[i]).removeClass('active');
        }
    }
}
//select image
function selectImg(id) {
    if(gCurrImg) {
        $('#' + gCurrImg.id).removeClass("selected");
    }

    gCurrImg = gImages.find(image => image.id === id); 
    
    $('#' + id).addClass('selected');
}

function getCurrImg() {
    return gCurrImg;
}
//change step
function nextPage(next, id) {
    let elLink = document.querySelector(`#${id}`);

    handlePage(next, elLink);
}


