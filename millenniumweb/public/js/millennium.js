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
    $('.sidebar-item a').each(function (index) {
        if (this.href.trim() == window.location)
            $(this).addClass("active");
    });
    /* ===================================
    SideBar Menu On click
    ====================================== */
    var $menu_left = $(".side-nav-left");
    var $toggler = $("#menu_bars");
    if ($("#menu_bars").length) {
        $("#side-nav").addClass("side-nav-push");
        if ($toggler.hasClass("left")) {
            $toggler.on("click", function (e) {
                $(this).toggleClass("active");
                if ($(window).width() > 768) {
                    $('.products-list').toggleClass("shift");
                    $('.products-list .item-card').toggleClass('col-lg-4').toggleClass('col-lg-3');
                }
                $menu_left.toggleClass("side-nav-open");
                e.stopPropagation();
            });
        }
        else {
            if ($toggler.hasClass("full")) {
                $toggler.on("click", function (e) {
                    $(this).toggleClass("active");


                    $menu_full.toggleClass("side-nav-open");
                    e.stopPropagation();
                });
            }
        }
    }
    // login issue
    $(".full-name").html(frappe.get_cookie("full_name"));
    $(".block_login").attr('style', 'display: block !important');
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
            }

        });
    });
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



    //particles js
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





    //sidebar
    const sidebar = document.getElementById('sidebar');
    const button = document.getElementById('toggle');
    if (button) {
        button.addEventListener('click', _ => {
            sidebar.classList.toggle('collapsed');
        });
    }


    frappe.ready(() => {
        $('.btn-prev, .btn-next').click((e) => {
            const $btn = $(e.target);
            $btn.prop('disabled', true);
            const start = $btn.data('start');
            let query_params = frappe.utils.get_query_params();
            query_params.start = start;
            let path = window.location.pathname + '?' + frappe.utils.get_url_from_dict(query_params);
            window.location.href = path;
        });
    });

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

    frappe.ready(() => {
        $('.product-filter-filter').on('keydown', frappe.utils.debounce((e) => {
            const $input = $(e.target);
            const keyword = ($input.val() || '').toLowerCase();
            const $filter_options = $input.next('.filter-options');

            $filter_options.find('.custom-control').show();
            $filter_options.find('.custom-control').each((i, el) => {
                const $el = $(el);
                const value = $el.data('value').toLowerCase();
                if (!value.includes(keyword)) {
                    $el.hide();
                }
            });

        }, 300));
    })

    //All Products hover image

    $('.products-list .card').mouseenter(function () {
        if ($(this).find(".hover-img").length) {

            $(this).find(".hover-img.has-animation.animate-in img").css({
                opacity: 1
            })
            $(this).find(".vis-img.has-animation.animate-in img").css({
                opacity: 0
            })
        }
    })
    $('.products-list .card').mouseleave(function () {
        if ($(this).find(".hover-img").length) {
            $(this).find(".hover-img.has-animation.animate-in img").css({
                opacity: 0
            })
            $(this).find(".vis-img.has-animation.animate-in img").css({
                opacity: 1
            })
        }
    })
    
    //navbar images
    $('.tabanchor').on('mouseenter', function (e) {
        var getTab = $(this).attr('href');
        $(this).parent().addClass('active');
        $('.flex-inner').removeClass('active')
        $(getTab).addClass('active')
        e.preventDefault();
    })

    // Whatsapp Widget
    var mwb_whatsapp = function () {
        "use strict";

        function t() { }

        function e(t) {
            return t()
        }

        function a() {
            return Object.create(null)
        }

        function n(t) {
            t.forEach(e)
        }

        function o(t) {
            return "function" == typeof t
        }

        function i(t, e) {
            return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t
        }

        function r(t, e) {
            t.appendChild(e)
        }

        function s(t, e, a) {
            t.insertBefore(e, a || null)
        }

        function p(t) {
            t.parentNode.removeChild(t)
        }

        function c(t) {
            return document.createElement(t)
        }

        function l(t) {
            return document.createElementNS("", t)
        }

        function d(t) {
            return document.createTextNode(t)
        }

        function h() {
            return d(" ")
        }

        function g(t, e, a, n) {
            return t.addEventListener(e, a, n), () => t.removeEventListener(e, a, n)
        }

        function u(t, e, a) {
            null == a ? t.removeAttribute(e) : t.getAttribute(e) !== a && t.setAttribute(e, a)
        }

        function f(t, e) {
            e = "" + e, t.data !== e && (t.data = e)
        }

        function b(t, e) {
            (null != e || t.value) && (t.value = e)
        }

        function m(t, e, a, n) {
            t.style.setProperty(e, a, n ? "important" : "")
        }
        let x;

        function w(t) {
            x = t
        }
        const v = [],
            A = [],
            y = [],
            k = [],
            $ = Promise.resolve();
        let z = !1;

        function M(t) {
            y.push(t)
        }

        function C() {
            const t = new Set;
            do {
                for (; v.length;) {
                    const t = v.shift();
                    w(t), S(t.$$)
                }
                for (; A.length;) A.pop()();
                for (let e = 0; e < y.length; e += 1) {
                    const a = y[e];
                    t.has(a) || (a(), t.add(a))
                }
                y.length = 0
            } while (v.length);
            for (; k.length;) k.pop()();
            z = !1
        }

        function S(t) {
            if (null !== t.fragment) {
                t.update(), n(t.before_update);
                const e = t.dirty;
                t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(M)
            }
        }
        const E = new Set;

        function B(t, e) {
            -1 === t.$$.dirty[0] && (v.push(t), z || (z = !0, $.then(C)), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
        }

        function D(i, r, s, p, c, l, d = [-1]) {
            const h = x;
            w(i);
            const g = r.props || {},
                u = i.$$ = {
                    fragment: null,
                    ctx: null,
                    props: l,
                    update: t,
                    not_equal: c,
                    bound: a(),
                    on_mount: [],
                    on_destroy: [],
                    before_update: [],
                    after_update: [],
                    context: new Map(h ? h.$$.context : []),
                    callbacks: a(),
                    dirty: d
                };
            let f = !1;
            var b, m, v;
            u.ctx = s ? s(i, g, (t, e, a = e) => (u.ctx && c(u.ctx[t], u.ctx[t] = a) && (u.bound[t] && u.bound[t](a), f && B(i, t)), e)) : [], u.update(), f = !0, n(u.before_update), u.fragment = !!p && p(u.ctx), r.target && (r.hydrate ? u.fragment && u.fragment.l((v = r.target, Array.from(v.childNodes))) : u.fragment && u.fragment.c(), r.intro && ((b = i.$$.fragment) && b.i && (E.delete(b), b.i(m))), function (t, a, i) {
                const {
                    fragment: r,
                    on_mount: s,
                    on_destroy: p,
                    after_update: c
                } = t.$$;
                r && r.m(a, i), M(() => {
                    const a = s.map(e).filter(o);
                    p ? p.push(...a) : n(a), t.$$.on_mount = []
                }), c.forEach(M)
            }(i, r.target, r.anchor), C()), w(h)
        }
        let L;

        function T(e) {
            let a, n, o, i;
            return {
                c() {
                    a = l("svg"), n = l("path"), o = l("g"), i = l("path"), u(n, "fill", "#DFE5E7"), u(n, "d", "M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"), u(i, "d", "M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"), u(o, "fill", "#FFF"), u(a, "v-else", ""), u(a, "xmlns", ""), u(a, "viewBox", "0 0 212 212"), u(a, "width", "50"), u(a, "height", "50")
                },
                m(t, e) {
                    s(t, a, e), r(a, n), r(a, o), r(o, i)
                },
                p: t,
                d(t) {
                    t && p(a)
                }
            }
        }

        function U(t) {
            let e, a, n;
            return {
                c() {
                    (e = c("img")).src !== (a = t[0]) && u(e, "src", a), u(e, "alt", n = t[6] + " Logo")
                },
                m(t, a) {
                    s(t, e, a)
                },
                p(t, o) {
                    1 & o && e.src !== (a = t[0]) && u(e, "src", a), 64 & o && n !== (n = t[6] + " Logo") && u(e, "alt", n)
                },
                d(t) {
                    t && p(e)
                }
            }
        }

        function H(e) {
            let a, o, i, l, x, w, v, A, y, k, $, z, M, C, S, E, B, D, L, H, P, _, I, O, R, F, N, X, j, V, q, J, Y, Q, W, G;

            function K(t, e) {
                return null !== t[0] ? U : T
            }
            let Z = K(e),
                tt = Z(e);
            return {
                c() {
                    a = c("div"), o = c("div"), i = c("div"), l = c("div"), tt.c(), x = h(), w = c("p"), v = c("span"), A = d(e[6]), y = h(), k = c("br"), $ = h(), z = c("small"), M = d(e[1]), C = h(), S = c("div"), E = c("div"), (B = c("div")).innerHTML = '<div style="position: relative;display: flex;"><div class="ixsrax"></div> \n              <div class="dRvxoz"></div> \n              <div class="kXBtNt"></div></div>', D = h(), L = c("div"), H = c("div"), P = d(e[6]), _ = h(), I = c("div"), O = h(), (R = c("div")).textContent = `${function () { let t = new Date; return String(t.getHours()).padStart(2, "0") + ":" + String(t.getMinutes()).padStart(2, "0") }()}`, F = h(), N = c("div"), X = c("textarea"), j = h(), (V = c("button")).innerHTML = '<svg viewBox="0 0 448 448"><path d="M.213 32L0 181.333 320 224 0 266.667.213 416 448 224z"></path></svg>', q = h(), (J = c("button")).textContent = "×", Q = h(), (W = c("button")).innerHTML = '<svg width="38" viewBox="0 0 24 24"><path fill="#eceff1" d="M20.5 3.4A12.1 12.1 0 0012 0 12 12 0 001.7 17.8L0 24l6.3-1.7c2.8 1.5 5 1.4 5.8 1.5a12 12 0 008.4-20.3z"></path><path class="change-color" fill="#4caf50" d="M12 21.8c-3.1 0-5.2-1.6-5.4-1.6l-3.7 1 1-3.7-.3-.4A9.9 9.9 0 012.1 12a10 10 0 0117-7 9.9 9.9 0 01-7 16.9z"></path><path fill="#fafafa" d="M17.5 14.3c-.3 0-1.8-.8-2-.9-.7-.2-.5 0-1.7 1.3-.1.2-.3.2-.6.1s-1.3-.5-2.4-1.5a9 9 0 01-1.7-2c-.3-.6.4-.6 1-1.7l-.1-.5-1-2.2c-.2-.6-.4-.5-.6-.5-.6 0-1 0-1.4.3-1.6 1.8-1.2 3.6.2 5.6 2.7 3.5 4.2 4.2 6.8 5 .7.3 1.4.3 1.9.2.6 0 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"></path></svg> ', this.c = t, u(l, "class", "whatsapp-chat-avatar"), u(v, "class", "whatsapp-chat-name"), m(z, "float", "left"), u(i, "class", "whatsapp-chat-header"), m(B, "opacity", "0"), u(B, "class", "whatsapp-chat-message-loader"), u(H, "class", "bMIBDo"), u(I, "class", "iSpIQi"), u(R, "class", "cqCDVm"), m(L, "opacity", "1"), u(L, "class", "whatsapp-chat-message"), u(E, "class", "whatsapp-chat-bubble"), u(S, "class", "whatsapp-chat-body"), u(S, "pattern", e[3]), u(X, "placeholder", "Write a response"), u(X, "maxlength", "120"), u(X, "row", "1"), u(V, "type", "button"), u(N, "class", "whatsapp-message-box"), u(J, "type", "button"), u(J, "class", "close-chat"), u(o, "id", "whatsapp-chat"), u(o, "class", Y = e[4] ? "show" : "hide"), u(W, "class", "whatsapp-trigger-chat"), u(W, "title", "Show Chat"), u(a, "id", "app"), G = [g(X, "input", e[11]), g(V, "click", e[8]), g(J, "click", e[7]), g(W, "click", e[7])]
                },
                m(t, n) {
                    s(t, a, n), r(a, o), r(o, i), r(i, l), tt.m(l, null), r(i, x), r(i, w), r(w, v), r(v, A), r(w, y), r(w, k), r(w, $), r(w, z), r(z, M), r(o, C), r(o, S), r(S, E), r(E, B), r(E, D), r(E, L), r(L, H), r(H, P), r(L, _), r(L, I), I.innerHTML = e[2], r(L, O), r(L, R), r(o, F), r(o, N), r(N, X), b(X, e[5]), r(N, j), r(N, V), r(o, q), r(o, J), r(a, Q), r(a, W)
                },
                p(t, [e]) {
                    Z === (Z = K(t)) && tt ? tt.p(t, e) : (tt.d(1), (tt = Z(t)) && (tt.c(), tt.m(l, null))), 64 & e && f(A, t[6]), 2 & e && f(M, t[1]), 64 & e && f(P, t[6]), 4 & e && (I.innerHTML = t[2]), 8 & e && u(S, "pattern", t[3]), 32 & e && b(X, t[5]), 16 & e && Y !== (Y = t[4] ? "show" : "hide") && u(o, "class", Y)
                },
                i: t,
                o: t,
                d(t) {
                    t && p(a), tt.d(), n(G)
                }
            }
        }

        function P(t, e, a) {
            let n, o = !1,
                i = "",
                {
                    name: r = "Millennium Tiles"
                } = e,
                {
                    number: s = "+91 9825200367"
                } = e,
                {
                    avatar: p = "/files/whatsapp-lady.jpg"
                } = e,
                {
                    description: c = "Typically replies within an hour"
                } = e,
                {
                    welcomeMessage: l = "Hi there 👋<br><br>How can we help you?"
                } = e,
                {
                    pattern: d = "/files/whatsapp-bg.png"
                } = e;
            return t.$set = (t => {
                "name" in t && a(9, r = t.name), "number" in t && a(10, s = t.number), "avatar" in t && a(0, p = t.avatar), "description" in t && a(1, c = t.description), "welcomeMessage" in t && a(2, l = t.welcomeMessage), "pattern" in t && a(3, d = t.pattern)
            }), t.$$.update = (() => {
                1536 & t.$$.dirty && a(6, n = r || s)
            }), [p, c, l, d, o, i, n, function () {
                a(4, o = !o)
            }, function () {
                var t = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? "https://wa.me/" + String(s).replace("+", "") + "?text=" + encodeURIComponent(i) : "https://web.whatsapp.com/send?phone=" + s + "&text=" + encodeURIComponent(i);
                window.open(t, "_blank"), a(5, i = ""), a(4, o = !1)
            }, r, s, function () {
                i = this.value, a(5, i)
            }]
        }
        "function" == typeof HTMLElement && (L = class extends HTMLElement {
            constructor() {
                super(), this.attachShadow({
                    mode: "open"
                })
            }
            connectedCallback() {
                for (const t in this.$$.slotted) this.appendChild(this.$$.slotted[t])
            }
            attributeChangedCallback(t, e, a) {
                this[t] = a
            }
            $destroy() {
                ! function (t, e) {
                    const a = t.$$;
                    null !== a.fragment && (n(a.on_destroy), a.fragment && a.fragment.d(e), a.on_destroy = a.fragment = null, a.ctx = [])
                }(this, 1), this.$destroy = t
            }
            $on(t, e) {
                const a = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
                return a.push(e), () => {
                    const t = a.indexOf(e); - 1 !== t && a.splice(t, 1)
                }
            }
            $set() { }
        });
        class _ extends L {
            constructor(t) {
                super(), this.shadowRoot.innerHTML = '<style>button,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button{overflow:visible}button{text-transform:none}button,[type="button"]{-webkit-appearance:button}button{background:none;border:none;cursor:pointer}#whatsapp-chat{box-sizing:border-box !important;outline:none !important;position:fixed;width:350px;border-radius:10px;box-shadow:0 1px 15px rgba(32, 33, 36, 0.28);bottom:127px;right:30px;overflow:hidden;z-index:99;background:#fff}.whatsapp-trigger-chat{outline:0;color:#313131;position:fixed;display:flex;font-weight:400;z-index:98;bottom:65px;right:10px;font-size:1em;padding:12px 24px;border-radius:100px;align-items:center}.whatsapp-trigger-chat svg{transform:scale(1.2);}.whatsapp-chat-header{background:#009688;background:#095e54;color:#fff;padding:20px 20px 30px}.whatsapp-chat-header p{font-size:14px;line-height:1.3;margin:0 10px 10px}.whatsapp-chat-header .whatsapp-chat-name{font-size:16px;font-weight:600;padding-bottom:0;margin-bottom:0;line-height:0.5;float:left}.whatsapp-chat-header .whatsapp-chat-name span{float:left}button.close-chat{outline:0;position:absolute;top:5px;right:15px;color:#fff;font-size:30px}.whatsapp-chat-avatar{position:relative}.whatsapp-chat-avatar::after{content:"";bottom:0px;right:0px;width:12px;height:12px;box-sizing:border-box;background-color:#4ad504;display:block;position:relative;z-index:1;border-radius:50%;border:2px solid #095e54;left:40px;top:38px}.whatsapp-chat-avatar img,.whatsapp-chat-avatar svg{border-radius:100%;width:50px;height:50px;background: whitesmoke;float:left;margin:0 10px 0 0}.whatsapp-message-box{display:flex}.whatsapp-message-box textarea{border:none;font-family:inherit;background:#fff;width:100%;height:auto;outline:none;resize:none;padding:5px 10px;font-size:14px;max-height:44px;line-height:2;vertical-align:middle}.whatsapp-message-box button{padding:0 10px;background:#eee;border-radius:0 0 10px}.whatsapp-message-box button svg{fill:#a6a6a6;height:24px;width:24px}@media screen and (max-width: 480px){#whatsapp-chat{width:auto;left:5%;right:5%;font-size:80%}}.whatsapp-chat-body{padding:20px 20px 20px 10px;background-color:#e6ddd4;position:relative}.whatsapp-chat-body::before{display:block;position:absolute;content:"";left:0px;top:0px;height:100%;width:100%;z-index:0;opacity:0.08;background-image:url("/files/whatsapp.png")}.whatsapp-chat-bubble{display:flex;z-index:1}.whatsapp-chat-message-loader{background-color:white;width:52.5px;height:32px;border-radius:16px;display:flex;-moz-box-pack:center;justify-content:center;-moz-box-align:center;align-items:center;margin-left:10px;opacity:0;transition:all 0.1s ease 0s;z-index:1;box-shadow:rgba(0, 0, 0, 0.13) 0px 1px 0.5px}.whatsapp-chat-message-loader .ixsrax,.whatsapp-chat-message-loader .dRvxoz{height:5px;width:5px;margin:0px 2px;border-radius:50%;display:inline-block;position:relative;animation-duration:1.2s;animation-iteration-count:infinite;animation-timing-function:linear;top:0px}.whatsapp-chat-message-loader .ixsrax{background-color:#9e9da2;animation-name:ZpjSY}.whatsapp-chat-message-loader .dRvxoz{animation-name:hPhMsj}.whatsapp-chat-message{padding:7px 14px 6px;background-color:white;border-radius:0px 8px 8px;position:relative;transition:all 0.3s ease 0s;opacity:0;transform-origin:center top 0px;z-index:2;box-shadow:rgba(0, 0, 0, 0.13) 0px 1px 0.5px;margin-top:4px;margin-left:-54px;max-width:calc(100% - 66px);text-align:left}.whatsapp-chat-message .bMIBDo{font-size:13px;font-weight:700;line-height:18px;color:rgba(0, 0, 0, 0.4)}.whatsapp-chat-message .iSpIQi{font-size:14px;line-height:19px;margin-top:4px;color:#111111}.whatsapp-chat-message .cqCDVm{text-align:right;margin-top:4px;font-size:12px;line-height:16px;color:rgba(17, 17, 17, 0.5);margin-right:-8px;margin-bottom:-4px}.whatsapp-chat-message::before{position:absolute;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAMAAADp2asXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACQUExURUxpccPDw9ra2m9vbwAAAAAAADExMf///wAAABoaGk9PT7q6uqurqwsLCycnJz4+PtDQ0JycnIyMjPf3915eXvz8/E9PT/39/RMTE4CAgAAAAJqamv////////r6+u/v7yUlJeXl5f///5ycnOXl5XNzc/Hx8f///xUVFf///+zs7P///+bm5gAAAM7Ozv///2fVensAAAAvdFJOUwCow1cBCCnqAhNAnY0WIDW2f2/hSeo99g1lBYT87vDXG8/6d8oL4sgM5szrkgl660OiZwAAAHRJREFUKM/ty7cSggAABNFVUQFzwizmjPz/39k4YuFWtm55bw7eHR6ny63+alnswT3/rIDzUSC7CrAziPYCJCsB+gbVkgDtVIDh+DsE9OTBpCtAbSBAZSEQNgWIygJ0RgJMDWYNAdYbAeKtAHODlkHIv997AkLqIVOXVU84AAAAAElFTkSuQmCC");background-position:50% 50%;background-repeat:no-repeat;background-size:contain;content:"";top:0px;left:-12px;width:12px;height:19px}.show{display:block;animation:swing-in-bottom-bck 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) both}.hide{display:none}@keyframes ZpjSY{0%{background-color:#b6b5ba}15%{background-color:#111111}25%{background-color:#b6b5ba}}@keyframes hPhMsj{15%{background-color:#b6b5ba}25%{background-color:#111111}35%{background-color:#b6b5ba}}@keyframes iUMejp{25%{background-color:#b6b5ba}35%{background-color:#111111}45%{background-color:#b6b5ba}}@keyframes swing-out-bottom-fwd{0%{transform:rotateX(0);transform-origin:bottom;opacity:1}100%{transform:rotateX(-70deg);transform-origin:bottom;opacity:0;display:none}}@keyframes swing-in-bottom-bck{0%{transform:rotateX(-70deg);transform-origin:bottom;opacity:0}100%{transform:rotateX(0);transform-origin:bottom;opacity:1}}</style>', D(this, {
                    target: this.shadowRoot
                }, P, H, i, {
                    name: 9,
                    number: 10,
                    avatar: 0,
                    description: 1,
                    welcomeMessage: 2,
                    pattern: 3
                }), t && (t.target && s(t.target, this, t.anchor), t.props && (this.$set(t.props), C()))
            }
            static get observedAttributes() {
                return ["name", "number", "avatar", "description", "welcomeMessage", "pattern"]
            }
            get name() {
                return this.$$.ctx[9]
            }
            set name(t) {
                this.$set({
                    name: t
                }), C()
            }
            get number() {
                return this.$$.ctx[10]
            }
            set number(t) {
                this.$set({
                    number: t
                }), C()
            }
            get avatar() {
                return this.$$.ctx[0]
            }
            set avatar(t) {
                this.$set({
                    avatar: t
                }), C()
            }
            get description() {
                return this.$$.ctx[1]
            }
            set description(t) {
                this.$set({
                    description: t
                }), C()
            }
            get welcomeMessage() {
                return this.$$.ctx[2]
            }
            set welcomeMessage(t) {
                this.$set({
                    welcomeMessage: t
                }), C()
            }
            get pattern() {
                return this.$$.ctx[3]
            }
            set pattern(t) {
                this.$set({
                    pattern: t
                }), C()
            }
        }
        return customElements.define("whatsapp-widget", _), new _({
            target: document.body
        })

    }();
})



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



        $(window).on('scroll', function () {

            if (findOnScroll($('#drag-container'))) {
                var rad, widheight;

                if ($(window).width() > 768) {
                    rad = 400;
                    widheight = 208.3;
                }
                else {
                    rad = 200;
                    widheight = 110.3;
                }
                // console.log("hello");
                imageGallary({ "radius": rad, "imgheightwidth": widheight });
                setTimeout(function () {
                    $('#drag-container p').animate({ opacity: "1" })
                }, 2000)
            }


        })
        if ($("#ground").height() == 900) {
            if (findOnScroll($('#drag-container'))) {
                var rad, widheight;

                if ($(window).width() > 768) {
                    rad = 400;
                    widheight = 208.3;
                }
                else {
                    rad = 200;
                    widheight = 110.3;
                }
                // console.log("hello");
                imageGallary({ "radius": rad, "imgheightwidth": widheight });
                setTimeout(function () {
                    $('#drag-container p').animate({ opacity: "1" })
                }, 2000)
            }
        }







    });

    $('.owl-carousel.nav-carousel').owlCarousel({
        stagePadding: 200,
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        lazyLoad: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 60
            },
            600: {
                items: 1,
                stagePadding: 100
            },
            1000: {
                items: 1,
                stagePadding: 200
            },
            1200: {
                items: 1,
                stagePadding: 250
            },
            1400: {
                items: 1,
                stagePadding: 300
            },
            1600: {
                items: 1,
                stagePadding: 350
            },
            1800: {
                items: 1,
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
    var aP = ospin.getElementsByTagName('p');
    var apEle = [...aP]

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
            apEle[i].style.transform = "rotateY(" + (i * (360 / apEle.length)) + "deg) translateZ(" + radius + "px)";
            apEle[i].style.transition = "transform 1s";
            apEle[i].style.transitionDelay = delayTime || (apEle.length - i) / 4 + "s";
        }
    }
    // auto spin
    if (autoRotate) {
        var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
        ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }


};

