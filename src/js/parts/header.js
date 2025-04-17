export class Header {
    init() {
        this.HeaderFixed();
    }
    HeaderFixed() {
        // header fixed js
        $(document).ready(function () {
            var prevScrollPos = $(window).scrollTop();

            $(window).scroll(function () {
                var sticky = $(".header"),
                    scroll = $(window).scrollTop();

                if (scroll >= 50) {
                    sticky.addClass("header-fixed");
                    sticky.removeClass("header-fixed-os");
                } else {
                    sticky.removeClass("header-fixed");
                    sticky.addClass("header-fixed-os");
                }

                if (prevScrollPos > scroll || scroll === 0) {
                    $(".header").removeClass("hidden");
                } else {
                    $(".header").addClass("hidden");
                }

                prevScrollPos = scroll;
            });
        });
    }
}