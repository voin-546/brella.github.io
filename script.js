let hamburger = document.querySelector('.hamburger')
hamburger.onclick = function () {
    let navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
}
$('.appearance').click(function() {
    $('*').toggleClass("dark");
    $(this).toggleClass("switch");
  });
$(document).ready(function() {
    setTimeout(() =>{
    $('#preloader').addClass('loaded')
    }, 1500);
    setTimeout(() =>{
    $('#preloader').remove('loaded')
    }, 3000);
        })