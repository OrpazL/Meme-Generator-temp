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
    gCtx.fillText(document.querySelector('.text-box').value, getMousePos(elCanvas,ev).x, getMousePos(elCanvas,ev).y);


}

function renderTextBox(x , y) {
    // var elTxtBox = `<input type="text" class="text-box text-box-${x}-${y}"/>`;
    // document.querySelector('.text-box-container').innerHtml += elTxtBox;
    // console.log('rendered text box ', elTxtBox);

    var elTxtBox = document.querySelector('.text-box');

}

function getCanvasOffsetTop(element , top) {
    if (element === document.body) return top;
    top += element.offsetTop ;
    return getCanvasOffsetTop(element.parentElement , top);
}
function getCanvasOffsetLeft(element , left) {
    if (element === document.body) return left;
    left -= element.offsetLeft ;
    return getCanvasOffsetLeft(element.parentElement , left);
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}