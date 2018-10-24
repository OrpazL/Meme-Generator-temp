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
    gCtx.fillStyle = 'black';
    gCtx.fillText(document.querySelector('.text-box').value, getMousePos(elCanvas,ev).x, getMousePos(elCanvas,ev).y);
    clickForTextBox(ev);
}

function renderTextBox(x , y) {
    // var elTxtBox = `<input type="text" class="text-box text-box-${x}-${y}"/>`;
    // document.querySelector('.text-box-container').innerHtml += elTxtBox;
    // console.log('rendered text box ', elTxtBox);

    var elTxtBox = document.querySelector('.text-box');

}

function getMousePos(canvas, ev) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: ev.clientX - rect.left,
      y: ev.clientY - rect.top
    };
}

var gCurrTextBoxPos;

function clickForTextBox(ev) {
    var canvas = gCanvas;
    var ctx = gCtx;

    var coverDiv = document.createElement('div');
    coverDiv.setAttribute('id', 'canvas-cover');
    coverDiv.style.width = canvas.width + 'px';
    coverDiv.style.height = canvas.height + 'px';
    coverDiv.style.position = 'absolute';
    coverDiv.style.top = 0;
    // coverDiv.style['z-index'] = 1;
    // coverDiv.style['background-color'] = 'gray';

    var inputTextBox = document.createElement('input');
    inputTextBox.setAttribute('id', 'floatTextBox')
    inputTextBox.onblur = unCoverCanvas;
    console.log('inputtextbox', inputTextBox)
    
    inputTextBox.style['background-color'] = 'transparent';
    inputTextBox.style.border = '1px dashed #d4d1d1';
    inputTextBox.style.position = 'absolute';
    inputTextBox.style.top = (getMousePos(canvas,ev).y - 16.5) + 'px';
    inputTextBox.style.left = (getMousePos(canvas,ev).x - 89) + 'px';
    inputTextBox.setAttribute('autofocus' ,'');
    gCurrTextBoxPos = {
        x: getMousePos(canvas,ev).x,
        y: getMousePos(canvas,ev).y,
    };

    $('.on-canvas').append(coverDiv);
    $('#canvas-cover').append(inputTextBox);
    console.log($('#canvas-cover')[0]);
}

function unCoverCanvas() {
    var textBox = document.querySelector('#floatTextBox');
    var ctx = gCtx;
    ctx.fillText(textBox.value , gCurrTextBoxPos.x , gCurrTextBoxPos.y);

    var canvasCover = document.querySelector('#canvas-cover')
    // document.querySelector('#canvas-cover').removeChild(textBox);
    document.querySelector('.on-canvas').removeChild(canvasCover);
    console.log('unfocused');

}

