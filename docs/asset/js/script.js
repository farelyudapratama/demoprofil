$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        if($(this).scrollTop() > $nav.height()){
            $nav.addClass("scrolled");
            $nav.removeClass("bg-dark");
            $nav.addClass("bg-terang");
        } else{
            $nav.removeClass("scrolled");
            $nav.addClass("bg-dark");
            $nav.removeClass("bg-terang");
        }

    });
});
