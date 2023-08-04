/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.4, {
            minFontSize: '35px',
            maxFontSize: '62px'
        }
    );

    $("h2").fitText(
        1.2, {
            minFontSize: '20px',
            maxFontSize: '30px'
        }
    );





    $("h4").fitText(
        2.4, {
            minFontSize: '10px',
            maxFontSize: '24px'
        }
    );

    $("h5").fitText(
        3.2, {
            minFontSize: '10px',
            maxFontSize: '22px'
        }
    );


    $("h6").fitText(
        1.4, {
            minFontSize: '28px',
            maxFontSize: '56px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict



let methodTabNavItem = document.querySelectorAll("#statistics .tab_nav>li");
let methodTabBoxItem = document.querySelectorAll("#statistics .tab_box>li");
let methodTabNavActive = document.querySelector("#statistics .tabNav_active");
let methodTabBoxActive = document.querySelector("#statistics .tabBox_active");

methodTabNavItem.forEach(function(item, index) {
    item.addEventListener('click', function() {
        methodTabNavActive.className = "";
        this.className = "tabNav_active";
        methodTabNavActive = this;

        methodTabBoxActive.className = "";
        methodTabBoxItem[index].className = "tabBox_active";
        methodTabBoxActive = methodTabBoxItem[index];
    }, false)
});


// let resultTabNavItem = document.querySelectorAll("#result .tab_nav>li");
// let resultTabBoxItem = document.querySelectorAll("#result .tab_box>li");
// let resultTabNavActive = document.querySelector("#result .tabNav_active");
// let resultTabBoxActive = document.querySelector("#result .tabBox_active");

// resultTabNavItem.forEach(function(item, index) {
//     item.addEventListener('click', function() {
//         resultTabNavActive.className = "";
//         this.className = "tabNav_active";
//         resultTabNavActive = this;

//         resultTabBoxActive.className = "";
//         resultTabBoxItem[index].className = "tabBox_active";
//         resultTabBoxActive = resultTabBoxItem[index];
//     }, false)
// });
