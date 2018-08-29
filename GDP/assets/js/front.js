lozad().observe();

$('.show-answer').on('click', function() {
    var divID = $(this).data('answer-div');
    $(this).addClass('hide');
    $('#' + divID).removeClass('hide');
})