$(document).ready(function() {
    $("ul").find("a").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        });
    });
});