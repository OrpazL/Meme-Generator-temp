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

var gCurrImg;
var gCurrFont = 'sans-serif';
var gCurrFontSize = 16;
var gCurrColor = 'black';


function init() {
    createList(gImages);
    // renderCanvas();
}

function handlePage(pageClass, elLink) {
    if (elLink.classList.contains('disabled')) return;

    removeDisplayPrev();
    elLink.classList.add('active');

    let page = $(`.${pageClass}`);
    page.removeClass('d-none');

    renderCanvas();
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
    if (gCurrImg) {
        $('#' + gCurrImg.id).removeClass("selected");

        if (id === gCurrImg.id) {
            gCurrImg = undefined;
            return;
        }
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

function getBlankImg() {
    return {
        id: 'blank',
        url: './img/blank300x300.jpg',
        keywords: ['blank']
    };
}

function openFontNav(navName) {
    $(navName).addClass('open-nav');
    if(navName === '#color-picker') $('#colorWheel').fadeIn();
}

function closeNav(navName) {
    $(navName).removeClass('open-nav');
    if(navName === '#color-picker') $('#colorWheel').fadeOut();
}

function changeFont(font) {
    $('.font-style .text').text($(font).text());

    gCurrFont = $(font).text();
    closeNav('.nav-background');
    setPreview('font');
}

function changeFontSise(sign) {
    if (( +$('.size-val').text() >= 30  && $(sign).hasClass('plus')) || (+$('.size-val').text() <=  10 && $(sign).hasClass('minus'))) return; 
    $(sign).hasClass('plus') ? gCurrFontSize++ : gCurrFontSize--;

    $('.size-val').text(gCurrFontSize);
    setPreview('size');
}

function setPreview(prop) {
    switch(prop) {
        case 'font':
            $('.text-preview').css("font-family", gCurrFont);
            break; 
        case 'size':
            let size = gCurrFontSize / 10;
            $('.text-preview').css("font-size", size + 'rem');
            break;
        case 'color':
            $('.text-preview').css("color", gCurrColor);
            break;
    }
}

function changeColor(selectedColor) {
    gCurrColor = $(selectedColor).attr('id');
    setPreview('color');
}

function setBlur() {
    $('.controllers-panel>*:not(.canvas-style)').addClass('blur-background');
}

function removeBlur() {
    $('.controllers-panel>*:not(.canvas-style)').removeClass('blur-background');
}



function getCurrColor() {
    return gCurrColor;
}

function getCurrFontSize() {
    return gCurrFontSize;
}

function getCurrFont() {
    return gCurrFont;
}