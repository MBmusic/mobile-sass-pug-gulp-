$(document).ready(function() {
    $(".gameblock__games .uk-overlay").click(function() {
        if(!$(this).parent().hasClass("game--page")) {
            $(".gameblock__games .uk-overlay").removeClass("active");
            $(this).addClass("active");
        }
    });

    /**
     * index page header animation
     */
    (function indexHeaderAnimate() {
        if ($(".header").hasClass("header--home")) {
            showLogo();
            $(window).scroll(function () {
                showLogo();
            });
        }

        // show hidden elements
        function showLogo() {
            if ($(this).scrollTop() > 165) {
                $(".header").addClass(" header--line");
                $(".header--main").addClass("active");
            } else {
                $(".header").removeClass("header--line");
                $(".header--main").removeClass("active header--line");
            }
        }

    })();

    /**
     * jQuery flip init
     */
    (function flipInit(){
        $(".flip-card").flip({
            trigger: 'manual'
        });
        $(".info-icon").click(function(){
            $(this).closest(".flip-card").flip('toggle');
        });
    })();


    /* payments acc */

    $(".methodspay__blocks .methodspay__blockimg").click(function() {
        if($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this).parent().find(".methodspay__blocktext .methodspay__text").eq($(this).index()).hide(300);
        } else {
          $(".methodspay__blocks .methodspay__blockimg").removeClass("active");
          $(".methodspay__blocktext .methodspay__text").hide(300);
          $(this).addClass("active");
          $(this).parent().find(".methodspay__blocktext .methodspay__text").eq($(this).index()).show(300);
        }
    });

    if (($("input[type='checkbox'], input[type='radio']").length) > 0) {
        $("input[type='checkbox'], input[type='radio']").styler({
            selectSearch: true
        });
    }

    $(".btn--info").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".br").slideToggle(300);
        $(".balancestats__toggle").slideToggle(300);
    });

    /**
     * profile email confirm input
     */
    (function (){
        var emailInputCode = {
            input : $(".email-confirm-input"),
            length : 0,
            checkEmailCodeValue : function (input) {
                if (/\D/g.test(input.value)) {
                    input.value = input.value.replace(/\D/g, '');
                }
                if (input.value.length === this.length) {
                    input.blur();
                }
            }
        };
        emailInputCode.length = 4;
        emailInputCode.input.on('keyup', function() {
            emailInputCode.checkEmailCodeValue(this);
        });
    })();

    /**
     * preloader fadeOut
     */
    (function (){
        var preloader = {
            window: $(window),
            block: $(".load-page"),
            fadeOutBlock: function() {
                this.block.fadeOut();
            },
            hidePreloader: function () {
                this.window.on('load', this.fadeOutBlock());
            }
        };
        preloader.hidePreloader();
    })();

    /**
     * UIKit overlay fix
     */
    (function (){
        $("body").on('click',".tournament-backside__main .gameblock__game.uk-overlay", function() {
            $(".tournament-backside__main .gameblock__game.uk-overlay").removeClass("uk-hover active");
            $(this).addClass('uk-hover active');
        });
    })();

    /**
     * UIKit off-canvas hide fix
     */
    (function(){
        $('.left-collapse').on('click', function() {
            $("#leftSidebar" ).trigger( "click" );
        });
        $('.right-collapse').on('click', function() {
            $("#rightSidebar" ).trigger( "click" );
        });
    })();

    /**
     * Swap blocks on profile
     */
    (function(){
        var nodepSteps = {
            'window': $(window),
            'document': $(document),
            'image': $(".bezdep__steps .bezdep--step3 .bezdep__img"),
            'block': $(".bezdep__steps .bezdep--step3 div"),
            nodepStepsResponsive: function() {
                if(this.window.width() < 534) {
                    this.image.insertAfter(this.block);
                } else {
                    this.image.insertBefore(this.block);
                }
            },
            init: function() {
                var _this = this;
                this.document.ready(this.nodepStepsResponsive());
                this.window.resize(function() {
                    _this.nodepStepsResponsive();
                });
            }
        };
        nodepSteps.init();
    })();

    $(document).ready(function() {
        $(".user-btn-toggle").click(function() {
            $(".user-bar-block").toggleClass("slide");
        });
    });
});