// $(document).ready(function () {
//     showProjects(20);
//     $(".owl-carousel").owlCarousel({
//         autoplay: true,
//         autoplayHoverPause: true,
//         smartSpeed: 800,
//         loop: true,
//         nav:true;
//         navigation: true,
//         items:1,
//       });
// })
// function showProjects(delay) {    //return false;
// var controller = new ScrollMagic.Controller();
//     $('.animated-item').each(function () {
//         var tween = new TimelineLite()
//             .to(this, 0, { css: { className: '+=show' } }, 0.20).delay(Math.floor(Math.random() * (70 + delay - delay) + delay) / 100)
//             .to(this, 1.5, {className: "+=top-bottom"});
//             new ScrollMagic.Scene({
//                 triggerHook: "onEnter",
//                 triggerElement: this,
//                 duration: 1000, 
//                 offset: -50
//             })
//         .reverse (true)
//         .addTo(controller)
//         .setTween(tween);
//     });


// }