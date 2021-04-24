var elementPosition;
setTimeout(() => {
        elementPosition = $('#social-icons').offset();
    }, 2000);
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > (elementPosition.top-35)) {
        jQuery('#social-icons').addClass("sticky");
    } else {
        jQuery('#social-icons').removeClass("sticky");
    }

});
if($("#stickThis").length > 0) {
    $("#stickThis").stick_in_parent();
}