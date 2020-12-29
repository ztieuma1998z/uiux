document.addEventListener("DOMContentLoaded", function(){
    // var nut = document.getElementsByClassName("headerclick");
    // console.log(nut);
    // var cd = document.getElementsByClassName("header-language-act");
    // console.log(cd);
    
    // nut.onmouseover = function(){
    //  cd[0].classList.remove('header-len');
    //  cd[0].classList.add('header-xuong');
    // }
    // nut.onmouseout = function(){
    //  cd[0].classList.remove('header-xuong')
    //  cd[0].classList.add('header-len');
    // }
    var nut = document.getElementById('headerclick');
    var cd = document.getElementById('header-language-act');
    console.log(nut);
    
    var number = 1;
    nut.onclick = function(){

        if (number==1) {
            cd.classList.remove('header-len');
            cd.classList.add('header-xuong');
            number=2;
        }
        else if (number==2) {
            cd.classList.remove('header-xuong')
            cd.classList.add('header-len');
            number=1;
        }
    }



    var nut2 = document.getElementById('header-unit');
    var cd2 = document.getElementById('header-unit-act');
    var number2 = 1;
    nut2.onclick = function(){

        if (number2==1) {
            cd2.classList.remove('header-len')
            cd2.classList.add('header-xuong');
            number2=2;
        }
        else if (number2==2) {
            cd2.classList.remove('header-xuong')
            cd2.classList.add('header-len');
            number2=1;
        }
    }
    var nut3 = document.getElementById('middle-header-click');
    var cd3 = document.getElementById('middle-header-act');
    var number3 = 1;
    nut3.onclick = function(){

        if (number3==1) {
            cd3.classList.remove('header-len')
            cd3.classList.add('header-xuong');
            number3=2;
        }
        else if (number3==2) {
            cd3.classList.remove('header-xuong')
            cd3.classList.add('header-len');
            number3=1;
        }
    }
}, false);

$(function() {
 $('.line-slide-wrap').owlCarousel({
    loop: true,
    autoplay:true,
   smartSpeed: 3000,
   navText:false,
   autoplayTimeout: 3100,
    //dots: true,
    dotsEach:2,
    responsive: {
        0: {
            items: 1,
            margin: 0,
        },
        576: {
            items: 2
        },
        768: {
            items: 1,
            margin: 0,
        },
        992: {
            items: 1,
            margin: 0,
        },
        1366: {
            items: 1,
            margin: 0,
        },
        1920: {
            items: 1,
        }
    }
})
})


$(function() {
    $('.line-dot-i:nth-child(n)').click(function(event) {

        $('.line-slide:nth-child(n)').addClass('line-slide-act').one('webkitAnimationEnd', function(event) {
            $('.line-slide-act').removeClass('line-slide-act');
        });

        $('.line-dotAct').removeClass('line-dotAct');
        $(this).addClass('line-dotAct');
    });
});
$(function() {
 $('.main-custom-items-wrap').owlCarousel({
    loop: true,
    //autoplay:true,
    //smartSpeed: 1500,
    navText:false,
   // autoplayTimeout: 2000,
    dots: false,
    dotsEach:2,
    responsive: {
        0: {
            items: 1,
            margin: 0,
        },
        576: {
            items: 2
        },
        768: {
            items: 3,
            margin: 0,
        },
        992: {
            items: 5,
            margin: 0,
        },
        1366: {
            items: 4,
            margin: 0,
        },
        1920: {
            items: 4,
        }
    }

});

});

 