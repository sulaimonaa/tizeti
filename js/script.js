/* Changing active states */
$(".navbar-nav .nav-link").hover(
    function () {
        $(".navbar .nav-link").removeClass("active");

        $(this).addClass("active");
    }
);

$(".log-out .fund-wallet").hover(
    function () {
        $(this).addClass("ewallet");
    }
);

$(".log-out .fund-wallet").hover(
    function () {
        $(this).removeClass("ewallet");
    }
);

/* Collapse effect */
$("button .navbar-toggler").click(
        function(){
            $(".main-page").addClass("inc-main-page-header-top");
            $(".main-page").removeClass("inc-main-page-header-top");
              }
              );
