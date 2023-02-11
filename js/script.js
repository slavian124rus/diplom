
//скрипт для карусели owlcarousel ---------------------->
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({

        // // Включаем стандартные кнопки
        // nav: true,

        dots: true,

        // Показывать слайды покругу
        loop: true,

        // Автоматическое проигрывание
        autoplay: true,
        autoplayTimeout: 6500,
        autoplayHoverPause: true,
        smartSpeed:1000,



        responsive: {
            // Ширина от 500 пикселей
            100: {
                // Количество элементов 2
                items: 1,
                // Включаем точки
                dots: true
                },
            // Ширина от 500 пикселей
            800: {
            // Количество элементов 2
            items: 2,
            // Включаем точки
            dots: true
            },

            // Ширина от 800 пикселей
            1300: {
            // Количество элементов 3
            items: 3,
            // Включаем точки
            dots: true
            },

            1600:{

                items: 4,
            // Включаем точки
            dots: true

            }
            
            // 1600:{

            //     items: 5,
            // // Включаем точки
            // dots: true

            // }
        },


        // // Можно еще задать тексты кнопок
        // navText: [
        // '<i class="fa fa-angle-left" aria-hidden="true">   </i>',
        // ' <i class="fa fa-angle-right" aria-hidden="true">   </i>'
        // ]

        
    });

    
});


 // <!-- скрипт для плавного p в header ---------------------------->
$(document).ready(function(){
         $.fn.animate_Text = function() {
          var string = this.text();
          return this.each(function(){
           var $this = $(this);
           $this.html(string.replace(/./g, '<span class="new">$&</span>'));
           $this.find('span.new').each(function(i, el){
            setTimeout(function(){ $(el).addClass('div_opacity'); }, 40 * i);
           });
          });
         };
         $('#slowly').show();
         $('#slowly').animate_Text();
 });
    

 



        



