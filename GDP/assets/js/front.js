lozad().observe();

$('.topnav-toggler').on('click', function() {
    $('.topnav-collapse').toggleClass('show');
})

$('.show-answer').on('click', function() {
    var divID = $(this).data('answer-div');
    $(this).addClass('hide');
    $('#' + divID).removeClass('hide');
})

$('.comment-form').on('submit', commentAction);

function commentAction(e) {
    var form = $(this);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/comment', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    xhr.onreadystatechange = function() {//Call a function when the state changes.
        if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var result = JSON.parse(this.response);
            var id = result.ID;
            
            var list = form.closest('.comment-root').children('.comment-list');
            list.append(result.html);
            document.getElementById('comment-' + id).scrollIntoView();
            $('#comment-' + id).addClass('focus-bg');
            setTimeout(() => {
                $('#comment-' + id).removeClass('focus-bg');
            }, 5000);

            e.preventDefault();
        }
    }

    xhr.send($(this).serialize());

    $(this).find('textarea, input').val('');

    e.preventDefault();
}

$('.reply-button').on('click', function(e) {
    if (!$(this).data('reply')) {
        var body = $(this).closest('.comment-body');
        var form = $('#respond').clone();
        var ID = body.data('id');
        form.find('[name="parentID"]').val(ID);
        form.find('.comment-form').on('submit', commentAction);
        body.append(form);
    } else {
        $(this).closest('.comment-body').find('#respond').remove();
    }
    $(this).data('reply', !$(this).data('reply'));
    e.preventDefault();
})

$('.signup-button, .modal-link').on('click', function(e) {
    $('#overlay').addClass('show');
    var modalID = $(this).data('modalId');
    $('#' + modalID).addClass('show');
    e.preventDefault();
})

$('.cancel-modal').on('click', function(e) {
    $('#overlay').removeClass('show');
    $('.modal-container').removeClass('show');
})

$('.modal').on('click', function(e) {
    e.stopPropagation();
})

$('body').on('keydown', function(e) {
    if(e.which == 27) { // ESC
        $('#overlay').removeClass('show');
        $('.modal-container').removeClass('show');
    }
})

$(function() {
    if (document.documentElement.clientWidth < 768) {
        $('.codeblock').each(function() {
            var code = $(this).html();
            code = code.replace(/    /g, '  ');
            $(this).html(code);
        })
    }
})