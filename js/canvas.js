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
    gCanvas = elCanvas;
    gCtx = ctx;
}

function getElCurrImg() {
    var currImgObj = (getCurrImg() === undefined)? getBlankImg() : getCurrImg();
    var elImg = $(`img[src="${currImgObj.url}"]`);
    return elImg[0];
}

// function getElBlankImg() {
//     var blankImgObj = getBlankImg();
//     var elImg = $(`img[src="${blankImgObj.url}"]`);
//     return elImg[0];
// }

function onAddTextBox(elCanvas , ev) {
    var textBoxPos = {
        x: ev.clientX,
        y: ev.clientY,
    };
    console.log(textBoxPos);
    // console.log(elCanvas.);
    // renderTextBox(textBoxPos.x , textBoxPos.y);
    gCtx.fillStyle = 'black';
    // gCtx.fillText($(`.text-box-${textBoxPos.x}-${textBoxPos.y}`).val(), textBoxPos.x , textBoxPos.y);
    gCtx.fillText(document.querySelector('.text-box').value, textBoxPos.x - elCanvas.offsetLeft, textBoxPos.y - elCanvas.offsetTop);


}

function renderTextBox(x , y) {
    // var elTxtBox = `<input type="text" class="text-box text-box-${x}-${y}"/>`;
    // document.querySelector('.text-box-container').innerHtml += elTxtBox;
    // console.log('rendered text box ', elTxtBox);

    var elTxtBox = document.querySelector('.text-box');

}

// function getCanvasOffsetTop(element) {
//     if (element)
// }