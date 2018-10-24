var colorWheel = new iro.ColorPicker("#colorWheel", {
    color: '#ff6f6f',
    padding: 6,
    borderWidth: 0,
    borderColor: '#fff',
    display: 'inline-block',
    anticlockwise: false,
    width: 320,
    height: 320,
    sliderHeight: undefined,
    sliderMargin: 24,
    markerRadius: 8,
    wheelLightness: undefined,
    CSS: {} // apply colors to any elements
});

var colorWheelS = new iro.ColorPicker("#colorWheelS", {
    color: '#fff',
    padding: 2,
    borderWidth: 0,
    borderColor: '#fff',
    display: 'inline-block',
    anticlockwise: false,
    width: 220,
    height: 220,
    sliderHeight: undefined,
    sliderMargin: 24,
    markerRadius: 8,
    wheelLightness: undefined,
    CSS: {} // apply colors to any elements
});

//on color change
colorWheel.on('color:change', function(color){
    gCurrColor = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`;

    $('.selected-color').css("background-color", gCurrColor);
    $('.add-color').css("background-color", gCurrColor);
    setPreview('color');
})

colorWheelS.on('color:change', function(color){
    var color = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`;

    $('.title-background').css("background-color", color);
    $("#color-input").val(color);
})