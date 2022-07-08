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

$(document).keydown(function (e) {
  switch (e.which) {
    case 37: // left
      moveToSelected('prev');
      break;

    case 39: // right
      moveToSelected('next');
      break;

    default:
      return;
  }
  e.preventDefault();
});

$('#carousel div').hover(function () {
  moveToSelected($(this));
});

$('#prev').hover(function () {
  moveToSelected('prev');
});

$('#next').click(function () {
  moveToSelected('next');
});
if(document.querySelector('#container-slider')){
   setInterval('funcionEjecutar("siguiente")',5000);
}

      // estilos para la ruleta
      $(function(){
        let current_view = 0;
        let count_views = $('.ruleta .pantalla li').length;

        // Methodes
        let switch_view = function(id){
            if(id >= 0  &&  id <= count_views)
                current_view = id;
            update_view();
        };
        let init_pagination = function() {
            for(let i=0; i<count_views; i++) {
                let page = $('<li/>');
                $(page).click(function() {switch_view(i);});
                $('.ruleta .marca').append(page);
            }
        };
        let update_view = function(){
            // Calculate the current state
            let view0 = current_view;
            let view1 = current_view+1;
            let view2 = current_view+2;
            if(view0 <= 0) view0 = count_views;
            if(view2 > count_views) view2 = 1;
            $('.ruleta .pantalla li').removeClass('left right');
            $('.ruleta .pantalla li, .ruleta .marca li').removeClass('active');
            $('.ruleta .pantalla li:nth-child('+view1+')').addClass('active');
            $('.ruleta .pantalla li:nth-child('+view0+')').addClass('left');
            $('.ruleta .pantalla li:nth-child('+view2+')').addClass('right');
            $('.ruleta .marca li:nth-child('+view1+')').addClass('active');
        };
        $('.ruleta .pantalla li').click(function(e){
            let classes = $(e.target).attr('class');
            if(classes.includes('left')) {
                if(current_view==0)
                    current_view = count_views-1;
                else
                    current_view--;
            }
            else if(classes.includes('right')) {
                if(current_view == (count_views-1))
                    current_view = 0;
                else
                    current_view++;
            }
            update_view();
        });

        init_pagination();
        update_view();
      });
      // estilos para la ruleta-2

      $(function(){
        let current_view = 0;
        let count_views = $('.ruleta-2 .pantalla li').length;

        // Methodes
        let switch_view = function(id){
            if(id >= 0  &&  id <= count_views)
                current_view = id;
            update_view();
        };
        let init_pagination = function() {
            for(let i=0; i<count_views; i++) {
                let page = $('<li/>');
                $(page).click(function() {switch_view(i);});
                $('.ruleta-2 .marca').append(page);
            }
        };
        let update_view = function(){
            // Calculate the current state
            let view0 = current_view;
            let view1 = current_view+1;
            let view2 = current_view+2;
            if(view0 <= 0) view0 = count_views;
            if(view2 > count_views) view2 = 1;
            $('.ruleta-2 .pantalla li').removeClass('left right');
            $('.ruleta-2 .pantalla li, .ruleta-2 .marca li').removeClass('active');
            $('.ruleta-2 .pantalla li:nth-child('+view1+')').addClass('active');
            $('.ruleta-2 .pantalla li:nth-child('+view0+')').addClass('left');
            $('.ruleta-2 .pantalla li:nth-child('+view2+')').addClass('right');
            $('.ruleta-2 .marca li:nth-child('+view1+')').addClass('active');
        };
        $('.ruleta-2 .pantalla li').click(function(e){
            let classes = $(e.target).attr('class');
            if(classes.includes('left')) {
                if(current_view==0)
                    current_view = count_views-1;
                else
                    current_view--;
            }
            else if(classes.includes('right')) {
                if(current_view == (count_views-1))
                    current_view = 0;
                else
                    current_view++;
            }
            update_view();
        });

        init_pagination();
        update_view();
      });

