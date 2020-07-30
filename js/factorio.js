$('.problem-head').on('click', function (e) {
    $(e.currentTarget).parent().find('.problem-body').toggleClass('hidden');
});