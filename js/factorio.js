$('.problem-head').on('click', function (e) {
    $(e.currentTarget).parent().find('.problem-body').toggleClass('hidden');
});

$(function () {
    expandTopic(window.location.hash);
    $(window).on('hashchange', function(){
        expandTopic(window.location.hash);
    });
    $('a.list-item').on('click', function () {
        expandTopic(window.location.hash);
    });
});

function expandTopic(selector) {
    let elem = $(selector);
    if(elem.hasClass('problem')) {
        elem.find('.problem-body').removeClass('hidden');
        elem[0].scrollIntoView();
    } else {
        elem.closest('.problem').find('.problem-body').removeClass('hidden');
        elem[0].scrollIntoView();
    }
}