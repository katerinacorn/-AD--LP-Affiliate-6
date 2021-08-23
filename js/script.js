function main_goto(n) {
    $("#main_" + (n - 1)).hide();
    $("#main_" + n).show();
}

$(document).ready(function () {
    $('.next').on('click', function (e) {
        e.preventDefault();
        goNext($(this));
    }
    );
    function goNext(self) {
        self.closest('.item').hide().next().show().addClass('animated flipInY');
    }
}
);
//
function changeTabdiv(n) {
    $("#n" + n).addClass("TabbedPanelsTabSelected");
    $("#p" + (n - 1)).hide();
    $("#p" + n).show();
    $(".slides .slide-pic li").eq(n - 1).show();
    $(".slides .slide-pic li").eq(n - 2).hide("slow");
    $(".mobile .slide-pic li").eq(n - 1).show();
    $(".mobile .slide-pic li").eq(n - 2).hide();
    if (n == 4) { $(".terms_privacy").show(); }
}
