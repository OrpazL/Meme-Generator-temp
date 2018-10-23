var gCanvas;
var gCtx;

function renderCanvas() {
    const TITLE_HEIGHT = 50;
    var elCanvas = document.querySelector('.canvas');
    var ctx = elCanvas.getContext('2d');
    var elCurrImg = getElCurrImg();
    var topTitleToggle = document.querySelector('.top-title');
    var bottomTitleToggle = document.querySelector('.bottom-title');
    elCanvas.width = 400;
    elCanvas.height = elCurrImg.naturalHeight * (400 / elCurrImg.naturalWidth);
    var img = new Image();
    img.src = elCurrImg.src;
    var imgStartX = 0;
    if (topTitleToggle.checked) {
        elCanvas.height += TITLE_HEIGHT;
        imgStartX = TITLE_HEIGHT;
    }
    if (bottomTitleToggle.checked) {
        elCanvas.height += TITLE_HEIGHT;
    }
    
    var $titleColor = $('.title-color');
    if (topTitleToggle.checked || bottomTitleToggle.checked) {
        $titleColor.show();
    } else {
        $titleColor.hide();
    }
    ctx.fillStyle = $titleColor.val();
    ctx.fillRect(0, 0, elCanvas.width, elCanvas.height);
    ctx.drawImage(
        img,
        0,
        imgStartX,
        400,
        elCurrImg.naturalHeight * (400 / elCurrImg.naturalWidth)
    );
}

function getElCurrImg() {
    var currImgObj = getCurrImg();
    var elImg = $(`img[src="${currImgObj.url}"]`);
    return elImg[0];
}