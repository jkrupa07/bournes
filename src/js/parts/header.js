export class Header {
    init() {
        this.HeaderFixed();
    }
    HeaderFixed() {
        // header fixed js
        var prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        $(window).scroll(function () {
            var sticky = $(".header"),
                scroll = $(window).scrollTop();
            if (scroll >= 20) {
                sticky.addClass("header-fixed");
                sticky.removeClass("header-fixed-os");
            } else {
                sticky.removeClass("header-fixed");
                sticky.addClass("header-fixed-os");
            }
            var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
            prevScrollPos = currentScrollPos;
        });
    }
}