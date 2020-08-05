$('.problem-head').on('click', function (e) {
    $(e.currentTarget).parent().find('.problem-body').toggleClass('hidden');
});

$(function () {
    if(window.location.hash.length > 0) {
        expandTopic(window.location.hash);
    }
    $(window).on('hashchange', function(){
        expandTopic(window.location.hash);
    });
    $('a.list-item').on('click', function (e) {
        expandTopic(e.currentTarget.hash);
    });
});

function expandTopic(selector) {
    console.log('Trying to expand ' + selector);
    let elem = $(selector);
    if(elem.hasClass('problem')) {
        elem.find('.problem-body').removeClass('hidden');
        if(elem[0] !== undefined) {
            elem[0].scrollIntoView();
        }
    } else {
        elem.closest('.problem').find('.problem-body').removeClass('hidden');
        if(elem[0] !== undefined) {
            elem[0].scrollIntoView();
        }
    }
}