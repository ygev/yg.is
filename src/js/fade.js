// fade-in upon load
$(function () {
    $('body').removeClass('fade-out');
});


//progress scroll 
// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
    myFunction()
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

// fade as scroll

// $(function () { // $(document).ready shorthand
//     $('.monster').fadeIn('slow');
// });

// $(document).ready(function () {

//     /* Every time the window is scrolled ... */
//     $(window).scroll(function () {

//         /* Check the location of each desired element */
//         $('.hideme').each(function (i) {

//             var bottom_of_object = $(this).position().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();

//             /* If the object is completely visible in the window, fade it it */
//             if (bottom_of_window > bottom_of_object) {

//                 $(this).animate({
//                     'opacity': '1'
//                 }, 900);

//             }

//         });

//     });

// });
