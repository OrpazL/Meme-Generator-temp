function createCard(img) {
    let card =  $(`<div id="${img.id}" class="col-lg-3 col-md-6 col-sm-12">
                        <div class="card bg-dark text-white">
                            <img class="card-img" src="${img.url}" alt="Card image" onclick="selectImg(${img.id})" >
                        </div>
                    </div>`)
    card.data('id', img.id);

    $('.album__row').append(card);
}

function createList(images) {
    images.forEach(img => {
        createCard(img);
    });
}

//scroll up
//Check to see if the window is top if not then display button
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});

//Click event to scroll to top
$('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});