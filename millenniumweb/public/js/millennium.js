$(window).on('load', function () {
   if ($(window).width() <= 768) {
        $('.back-face-div').css('height', $('.feature-img').css('height'));
        $('.back-face-div').css('width', $('.feature-img').css('width'));
    }

    setTimeout(function () {
        $('.form-section').removeClass('row')
        $('.section-body').addClass('row')
        if ($(".web-form-footer button").hasClass('btn btn-primary btn-sm')) {
            $(".web-form-footer button").addClass('mw-button mw-button-draw mw-button-meet').removeClass('btn btn-primary btn-sm');
        }
        if ($(".website-list .result a").hasClass('btn btn-primary btn-sm')) {
            $(".website-list .result a").addClass('mw-button mw-button-draw mw-button-meet').removeClass('btn btn-primary btn-sm');
        }
    }, 500);
})
$(document).ready(function () {



    


    // showProjects(20);
    $(".testimonial_owlCarousel").owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 800,
        loop: true,
        nav: true,
        navigation: true,
        items: 1,
    });
    $(".slider-owl").owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 800,
        loop: true,
        nav: true,
        navigation: true,
        items: 1,
    });

    $('.has-animation').filter($('.not-scroll')).each(function (index) {
        if ($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).outerHeight()) {
            $(this).delay($(this).data('delay+20')).queue(function () {
                $(this).addClass('animate-in');
            });
        }
        // else {
        //     $(this).delay($(this).data('delay+20')).queue(function () {
        //         $(this).addClass('reverse');
        //     });
        // }
    });

    // var lastScrollTop = 0;
    // window.addEventListener("scroll", function (e) {
    //     var st = window.pageYOffset || document.documentElement.scrollTop;

    //     if (st < lastScrollTop) {

    //         if (findOnScroll($('.has-animation'))) {
    //             if ($('.has-animation').hasClass('animate-in')) {
    //                 curElement = $("div.has-animation").filter(".animate-in").not($('.not-scroll'));
    //                 curElement.addClass('reverse');
    //                 curElement.removeClass('animate-in');
    //             }

    //         }
    //     }
    //     else {
    //         curElement = $("div.has-animation").filter(".reverse").not($('.not-scroll'));
    //         curElement.addClass("animate-in");
    //         curElement.removeClass('reverse');
    //     }
    //     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    // }, false);


    $(window).scroll(function () {
        $('.has-animation').filter($('.not-scroll')).each(function (index) {
            if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
                $(this).delay($(this).data('delay+20')).queue(function () {
                    $(this).addClass('animate-in');
                });
                // console.log("Forward");
            }
            // else {
            //     console.log("reverse");
            //     $(this).delay($(this).data('delay+20')).queue(function () {
            //         $(this).addClass('reverse');
            //     });
            // }
        });
    });

    // $('.has-animation').not($('.scroll')).each(function (index) {
    //     if ($(window).scrollTop() + $(window).height() < $(this).offset().top + $(this).outerHeight()) {
    //         $(this).delay($(this).data('delay+20')).queue(function () {
    //             $(this).addClass('reverse');
    //         });
    //     }
    // });


    // $(window).scroll(function () {
    //     $('.has-animation').not($('.scroll')).each(function (index) {
    //         if ($(window).scrollTop() + $(window).height() < $(this).offset().top) {
    //             $(this).delay($(this).data('delay+20')).queue(function () {
    //                 $(this).addClass('reverse');
    //             });
    //         }
    //     });
    // });


    //   Auto Courosel 
    setTimeout(function () {
        $("a.slider--control.right").trigger('click');
    }, 100);
    $("a.slider--control.right").on("click", () => {
        $("#page3").attr("checked", true);
    })
    // END 
    //return false;
 
    if ($('.custom-container').length > 0) {
        var controller = new ScrollMagic.Controller();
        var fade_all = new TimelineMax();
        fade_all
            .to(".back-face-div", 1, { css: { className: "+=show" } })

        new ScrollMagic.Scene({
            triggerElement: '.custom-container',
            reverse: false,
            duration: 1100,
            offset: -400,
        })

            .addTo(controller)
            .setTween(fade_all);
    }

    // bar section top-bottom
    if ($('.bar-wrapper').length > 0) {
        var controller = new ScrollMagic.Controller();
        var fade_all = new TimelineMax();
        fade_all
            .to(".back-bar-wrapper", 1, { css: { top: "78%" } })
        new ScrollMagic.Scene({
            triggerElement: '.bar-wrapper',
            reverse: true,
            duration: 1000,
            offset: 300,
        })

            .addTo(controller)
            .setTween(fade_all);
    }

    if ($('.front-img').length > 0) {
        var controller = new ScrollMagic.Controller();
        var fade_all = new TimelineMax();
        fade_all
            .to(".front-img", 1, { css: { top: "-.5rem" } })
        new ScrollMagic.Scene({
            triggerElement: '.custom-container',
            reverse: true,
            duration: 1000,

        })

            .addTo(controller)
            .setTween(fade_all);
    }


    var controller = new ScrollMagic.Controller();
    $(".has-animation").filter($(".scroll")).each(function () {
        var tween = TweenMax.to(this, 1, { className: "+=animate-in" })

        var fadeUpScene = new ScrollMagic.Scene({
            triggerElement: this,
            duration: 800,
            offset: -300,
            reverse: false
        })
            .setTween(tween)
            .addTo(controller);
    })
    if ($(window).width() > 768) {
        if ($('.background_layer').length > 0) {
            var controller = new ScrollMagic.Controller();
            var fade_all = new TimelineMax();
            fade_all
                .to(".testimonial_container", 1, { css: { top: "-4rem" } })
            new ScrollMagic.Scene({
                triggerElement: '.background_layer',
                reverse: true,
                duration: 700,
                offset: -150,
            })
                .addTo(controller)
                .setTween(fade_all);
        }
    }


// dot anination

    if ($('.loader').length) {
        $('.loader').each(function (index) {
            var controller = new ScrollMagic.Controller();

            const tl = new TimelineMax({ ease: Power4.easeIn });

            tl.to($(this).find('.loader--dot:nth-child(1)'), 0.3, {
                x: 15
            }, '-=0.15')
                .to($(this).find('.loader--dot:nth-child(2)'), 0.3, {
                    x: 30
                }, '-=0.15')
                .to($(this).find('.loader--dot:nth-child(3)'), 0.3, {
                    x: 45
                }, '-=0.15')
                .to($(this).find('.loader--dot:nth-child(4)'), 0.3, {
                    x: 60
                }, '-=0.15')
                .to($(this).find('.loader--dot:nth-child(5)'), 0.3, {
                    x: 75
                }, '-=0.15')
                .to($(this).find('.loader--dot:nth-child(6)'), 0.3, {
                    x: 90
                }, '-=0.15')
                .to($(this).find('.loader--dot:nth-child(7)'), 0.3, {
                    x: 105
                }, '-=0.15')
            new ScrollMagic.Scene({

                triggerElement: this,
                offset: -200,
                reverse: false

            })
                .addTo(controller)
                .setTween(tl);

        })

    }


    // rotating diamonds
    const tl = new TimelineMax({ repeat: -1 })
    var el1 = $('.diamond-one')
    var el2 = $('.diamond-two')
    var time = 12
    tl.to(el1, time,
        {
            rotation: 405,
            ease: Linear.easeNone
        })
        .to(el2, time,
            {
                rotation: -405,
                ease: Linear.easeNone
            }
            , '-=time')


    $('.hover-img').on({
        mouseenter: function () {
            $(this).animate({ opacity: 0 });

        },
        mouseleave: function () {
            $(this).animate({ opacity: 1 });

        }
    })

    if ($('#particles-js').length) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 13,
                    "density": {
                        "enable": true,
                        "value_area": 400
                    }
                },
                "color": {
                    "value": "#f67d2a"
                },
                "shape": {
                    "type": "image",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 4
                    },
                    "image": {
                        "src": "/files/diamond.png",
                        "width": 500,
                        "height": 500,

                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 6,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,

                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }






    const sidebar = document.getElementById('sidebar');
    const button = document.getElementById('toggle');
    if (button) {
        button.addEventListener('click', _ => {
            sidebar.classList.toggle('collapsed');
        });
    }


    // event filter

    $('.filter').on('click', function () {
        var cat = $(this).attr("data-rel");
        if (cat == 'all') {
            $('.category-filter').removeClass('d-none');
            setTimeout(function () {
                $('.category-filter').removeClass('d-none');
            }, 300);
        }
        else {
            $('.category-filter').addClass('d-none');
            setTimeout(function () {
                $('.category-filter.' + cat).removeClass('d-none');
            }, 300);
        }
    });









})


$(document).on("click","div.floor-tiles-link", function(e) {
    let tab_content = $(this).children("a")[0].dataset.content;
      // console.log(tab_content);
    if($("ul.tab-nav li").hasClass("active") && $("div.tab-content-indus").hasClass("active")){
          $("ul.tab-nav li").removeClass("active");
          $("div.tab-content-indus").removeClass("active");
    }
      $(`#${tab_content}`).addClass("active");
      $(`#${tab_content}`).addClass("o_tip");
      $(this).addClass("active");
      
  });

function millenniumNavDropdowns(e) {
    var t = this;
    this.container = document.querySelector(e),
        this.root = this.container.querySelector(".navRoot"),
        this.primaryNav = this.root.querySelector(".navSection.primary"),
        this.primaryNavItem = this.root.querySelector(".navSection.primary .rootLink:last-child"),
        this.secondaryNavItem = this.root.querySelector(".navSection.secondary .rootLink:first-child"),
        this.checkCollision(),
        window.addEventListener("load", this.checkCollision.bind(this)),
        window.addEventListener("resize", this.checkCollision.bind(this)),
        this.container.classList.add("noDropdownTransition"),
        this.dropdownBackground = this.container.querySelector(".dropdownBackground"),
        this.dropdownBackgroundAlt = this.container.querySelector(".alternateBackground"),
        this.dropdownContainer = this.container.querySelector(".dropdownContainer"),
        this.dropdownArrow = this.container.querySelector(".dropdownArrow"),
        this.dropdownRoots = Strut.queryArray(".hasDropdown", this.root),
        this.dropdownSections = Strut.queryArray(".dropdownSection", this.container).map(function (e) {
            return {
                el: e,
                name: e.getAttribute("data-dropdown"),
                content: e.querySelector(".dropdownContent")
            }
        });
    var n = window.PointerEvent ? {
        end: "pointerup",
        enter: "pointerenter",
        leave: "pointerleave"
    } : {
            end: "touchend",
            enter: "mouseenter",
            leave: "mouseleave"
        };
    this.dropdownRoots.forEach(function (e, r) {
        e.addEventListener(n.end, function (n) {
            n.preventDefault(), n.stopPropagation(), t.toggleDropdown(e)
        }), e.addEventListener(n.enter, function (n) {
            if (n.pointerType == "touch") return;
            t.stopCloseTimeout(), t.openDropdown(e)
        }), e.addEventListener(n.leave, function (e) {
            if (e.pointerType == "touch") return;
            t.startCloseTimeout()
        })
    }), this.dropdownContainer.addEventListener(n.end, function (e) {
        e.stopPropagation()
    }), this.dropdownContainer.addEventListener(n.enter, function (e) {
        if (e.pointerType == "touch") return;
        t.stopCloseTimeout()
    }), this.dropdownContainer.addEventListener(n.leave, function (e) {
        if (e.pointerType == "touch") return;
        t.startCloseTimeout()
    }), document.body.addEventListener(n.end, function (e) {
        t.closeDropdown()
    })
}
/* end finbyznavDropdown */

/* Starting code */
var Strut = {
    queryArray: function (e, t) {
        // console.log(e,t);
        return t || (t = document.body), Array.prototype.slice.call(t.querySelectorAll(e))
    },
    ready: function (e) {
        // console.log(e);
        document.addEventListener("DOMContentLoaded", e)
    }
};


Strut.supports = {

    pointerEvents: function () {

        var e = document.createElement("a").style;
        // console.log(e);
        return e.cssText = "pointer-events:auto", e.pointerEvents === "auto"

    }(),
},

    millenniumNavDropdowns.prototype.checkCollision = function () {

        var e = this;

        if (Strut.isMobileViewport) return;

        if (e.compact == 1) {

            var t = document.body.clientWidth,

                n = e.primaryNav.getBoundingClientRect();

            n.left + n.width / 2 > t / 2 && (e.container.classList.remove("test"), e.compact = !1)

        } else {

            var r = e.primaryNavItem.getBoundingClientRect(),

                i = e.secondaryNavItem.getBoundingClientRect();

            r.right > i.left && (e.container.classList.add("test"), e.compact = !0)

        }
    },


    millenniumNavDropdowns.prototype.openDropdown = function (e) {
        var t = this;
        if (this.activeDropdown === e) return;
        this.container.classList.add("overlayActive"), this.container.classList.add("dropdownActive"), this.activeDropdown = e, this.dropdownRoots.forEach(function (e, t) {
            e.classList.remove("active")
        }), e.classList.add("active");
        var n = e.getAttribute("data-dropdown"),
            r = "left",
            i, s, o;
        this.dropdownSections.forEach(function (e) {
            e.el.classList.remove("active"), e.el.classList.remove("left"), e.el.classList.remove("right"), e.name == n ? (e.el.classList.add("active"), r = "right", i = e.content.offsetWidth, s = e.content.offsetHeight, o = e.content) : e.el.classList.add(r)
        });
        var u = 520,
            a = 400,
            f = i / u,
            l = s / a,
            c = e.getBoundingClientRect(),
            h = c.left + c.width / 2 - i / 2;

        h = Math.round(Math.max(h, 10)), clearTimeout(this.disableTransitionTimeout), this.enableTransitionTimeout = setTimeout(function () {
            t.container.classList.remove("noDropdownTransition")
        }, 50), this.dropdownBackground.style.transform = "translateX(" + h + "px) scaleX(" + f + ") scaleY(" + l + ")", this.dropdownContainer.style.transform = "translateX(" + h + "px)", this.dropdownContainer.style.width = i + "px", this.dropdownContainer.style.height = s + "px";
        var p = Math.round(c.left + c.width / 2);

        this.dropdownArrow.style.transform = "translateX(" + p + "px) rotate(45deg)";

        var d = o.children[0].offsetHeight / l;

        this.dropdownBackgroundAlt.style.transform = "translateY(" + d + "px)"

    },
    millenniumNavDropdowns.prototype.closeDropdown = function () {

        var e = this;

        if (!this.activeDropdown) return;

        this.dropdownRoots.forEach(function (e, t) {

            e.classList.remove("active")

        }),

            clearTimeout(this.enableTransitionTimeout),

            this.container.classList.remove("overlayActive"),

            this.container.classList.remove("dropdownActive"),

            this.activeDropdown = undefined

    }, millenniumNavDropdowns.prototype.toggleDropdown = function (e) {
        this.activeDropdown === e ? this.closeDropdown() : this.openDropdown(e)
    }, millenniumNavDropdowns.prototype.startCloseTimeout = function () {
        var e = this;
        e.closeDropdownTimeout = setTimeout(function () {
            e.closeDropdown()
        }, 180)
    }, millenniumNavDropdowns.prototype.stopCloseTimeout = function () {
        var e = this;
        clearTimeout(e.closeDropdownTimeout)
    }, Strut.supports.pointerEvents, Strut.ready(function () {
        new millenniumNavDropdowns(".millenniumNav")
    });
/* Multilevel Sidebar - menu */

$(".go-tosub-menu").on("click", function (event) {
    let lsid = $(this).data("ls");
    let icon = $(this).data("icon");
    if ($(`#${lsid}`).hasClass("d-block")) {
        $(`#${lsid}`).parent("li").removeClass("show").addClass("showreverce");
        let $li = $("#navsidebar").children("ul").children("li");
        $(`#${lsid}`).parent("li").removeClass("show");
        setTimeout(() => {
            $.each($li, function (ix, list) {
                $(this).removeClass("d-none");
            });
            $("#navsidebar").children("ul").addClass("show");
            $(`#${lsid}`).parent("li").children("img").removeClass("d-none");
            $(`#${lsid}`).parent("li").find("a img:first").addClass("d-none");
            $(`#${lsid}`).parent("li").children("ul:first").removeClass("d-block").addClass("d-none");
            $(`#${lsid}`).parent("li").removeClass("showreverce");
            setTimeout(() => {
                $("#navsidebar").children("ul").removeClass("show");
            }, 500)
        }, 500)
    } else {
        if ($(`#${lsid}`).addClass("d-block")) {
            $(`#${lsid}`).parent("li").removeClass("showreverce").addClass("show").parent("li").children("img").addClass("d-none");
            $(`#${lsid}`).parent("li").children("img").addClass("d-none");
            $(`#${lsid}`).parent("li").find("a img:first").removeClass("d-none");
            let $li = $("#navsidebar").children("ul").children("li").not("li.show");
            $.each($li, function (ix, list) {
                $(this).addClass("d-none");
            });
        }
    }
});

$('#navsidebarCollapse').on('click', function () {
    $('#navsidebar').toggleClass('active');
    $("header.millenniumNav div.nav-wrapper").css({
        "left": "0px",
    });
    if ($(this).hasClass('active')) {
        $("header.millenniumNav div.nav-wrapper").css({
            "left": "-50px",
        });
    }
    $(this).toggleClass('active');
});
/* end multilevel sidebar */


/* Go to Top */

var btn = $('a#gototop');
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});
/* end goto top */

var lastScrollTop = 0;
window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st <= 0) {
        setTimeout(() => {
            $("header.mi    llenniumNav").removeClass("nav-shadow");
        }, 100)
    }
    if (st > lastScrollTop) {
        $("header.millenniumNav").addClass("nav-shadow");
    } else {
        $("header.millenniumNav").addClass("nav-shadow");
        // console.log("reverse");
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

/* Counter */
try {
    $(window).on('scroll', function () {
        if (findOnScroll($('#counter-section'))) {
            (function ($) {
                $.fn.countTo = function (options) {
                    options = options || {};

                    return $(this).each(function () {
                        // set options for current element
                        var settings = $.extend({}, $.fn.countTo.defaults, {
                            from: $(this).data('from'),
                            to: $(this).data('to'),
                            speed: $(this).data('speed'),
                            refreshInterval: $(this).data('refresh-interval'),
                            decimals: $(this).data('decimals')
                        }, options);

                        // how many times to update the value, and how much to increment the value on each update
                        var loops = Math.ceil(settings.speed / settings.refreshInterval),
                            increment = (settings.to - settings.from) / loops;

                        // references & variables that will change with each update
                        var self = this,
                            $self = $(this),
                            loopCount = 0,
                            value = settings.from,
                            data = $self.data('countTo') || {};

                        $self.data('countTo', data);

                        // if an existing interval can be found, clear it first
                        if (data.interval) {
                            clearInterval(data.interval);
                        }
                        data.interval = setInterval(updateTimer, settings.refreshInterval);

                        // initialize the element with the starting value
                        render(value);

                        function updateTimer() {
                            value += increment;
                            loopCount++;

                            render(value);

                            if (typeof (settings.onUpdate) == 'function') {
                                settings.onUpdate.call(self, value);
                            }

                            if (loopCount >= loops) {
                                // remove the interval
                                $self.removeData('countTo');
                                clearInterval(data.interval);
                                value = settings.to;

                                if (typeof (settings.onComplete) == 'function') {
                                    settings.onComplete.call(self, value);
                                }
                            }
                        }

                        function render(value) {
                            var formattedValue = settings.formatter.call(self, value, settings);
                            $self.html(formattedValue);
                        }
                    });
                };

                $.fn.countTo.defaults = {
                    from: 0,               // the number the element should start at
                    to: 0,                 // the number the element should end at
                    speed: 1000,           // how long it should take to count between the target numbers
                    refreshInterval: 100,  // how often the element should be updated
                    decimals: 0,           // the number of decimal places to show
                    formatter: formatter,  // handler for formatting the value before rendering
                    onUpdate: null,        // callback method for every time the element is updated
                    onComplete: null       // callback method for when the element finishes updating
                };

                function formatter(value, settings) {
                    return value.toFixed(settings.decimals);
                }
            }(jQuery));

            jQuery(function ($) {
                // custom formatting example
                $('.count-number').data('countToOptions', {
                    formatter: function (value, options) {
                        return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                    }
                });

                // start all the timers
                $('.timer').each(count);

                function count(options) {
                    var $this = $(this);
                    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                    $this.countTo(options);
                }
            });
            $(window).off('scroll');
        }
        if (findOnScroll($('#drag-container'))) {
            // console.log("hello");
            imageGallary({ "radius": 400, "imgheightwidth": 208.3 });
        }
        if ($(window).width() < 768) {

            if (findOnScroll($('#drag-container'))) {
                // console.log("hello");
                imageGallary({ "radius": 200, "imgheightwidth": 110.3 });
            }

        }

    });

    $('.owl-carousel.nav-carousel').owlCarousel({
        stagePadding: 200,
        loop:true,
        margin:10,
        nav:false,
        items:1,
        lazyLoad: true,
        nav:true,
      responsive:{
            0:{
                items:1,
                stagePadding: 60
            },
            600:{
                items:1,
                stagePadding: 100
            },
            1000:{
                items:1,
                stagePadding: 200
            },
            1200:{
                items:1,
                stagePadding: 250
            },
            1400:{
                items:1,
                stagePadding: 300
            },
            1600:{
                items:1,
                stagePadding: 350
            },
            1800:{
                items:1,
                stagePadding: 400
            }
        }
    })

} catch (err) { }



function findOnScroll(elm, eval) {

    if (elm.length) {
        eval = eval || "object visible";
        var viewportHeight = $(window).height(), // Viewport Height
            scrolltop = $(window).scrollTop(), // Scroll Top
            y = $(elm).offset().top,
            elementHeight = $(elm).height();
    }

    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
}


function imageGallary(args) {
    // console.log("function call");
    var radius = args.radius;
    var autoRotate = true;
    var rotateSpeed = -60;
    var imgWidth = args.imgheightwidth;
    var imgHeight = args.imgheightwidth;


    setTimeout(init, 1000);

    var odrag = document.getElementById('drag-container');
    var ospin = document.getElementById('spin-container');
    var aImg = ospin.getElementsByTagName('img');
    var aEle = [...aImg]; // combine 2 arrays

    // Size of images
    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    // Size of ground - depend on radius
    var ground = document.getElementById('ground');
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";

    function init(delayTime) {
        for (var i = 0; i < aEle.length; i++) {
            aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
            aEle[i].style.transition = "transform 1s";
            aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
        }
    }
    // auto spin
    if (autoRotate) {
        var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
        ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }
};

