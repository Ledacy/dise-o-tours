function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveToSelected('prev');
        break;

        case 39: // right
        moveToSelected('next');
        break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel div').hover(function() {
  moveToSelected($(this));
});

// $('#prev').click(function() {
//   moveToSelected('prev');
// });

// $('#next').click(function() {
//   moveToSelected('next');
// });

//  document.getElementById('#carousel div').addEventListener('hover', function() {
//  document.getElementById('#text-1').classList.toggle('hide');
// })
// estilos para el header
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function () {

    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (window.scrollY > 650 && width > 768) {
      document.getElementById('mainMenu').classList.add('fixed-top-wonder', 'py-0');
      document.getElementById('sidebar').classList.add('top-lateral');
      document.getElementById('bg').classList.remove('bg-header');
      document.getElementById('logo-1').classList.add('d-none');
      document.getElementById('logo-2').classList.remove('d-none');
      document.getElementById('menu-1').classList.add('negro');
      document.getElementById('menu-2').classList.add('negro');
      document.getElementById('menu-3').classList.add('negro');
      document.getElementById('menu-4').classList.add('negro');
      document.getElementById('texto-1').classList.add('negro');
      document.getElementById('idioma').classList.remove('text-white');

    } else {
      document.getElementById('mainMenu').classList.remove('fixed-top-wonder', 'py-3');
      document.getElementById('sidebar').classList.remove('top-lateral');
      document.getElementById('bg').classList.add('bg-header');
      document.getElementById('menu-1').classList.remove('negro');
      document.getElementById('menu-2').classList.remove('negro');
      document.getElementById('menu-3').classList.remove('negro');
      document.getElementById('menu-4').classList.remove('negro');
      document.getElementById('texto-1').classList.remove('negro');
      document.getElementById('logo-1').classList.remove('d-none');
      document.getElementById('logo-2').classList.add('d-none');
    }
  });
});