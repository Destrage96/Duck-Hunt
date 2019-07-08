
$(function () {

 
    function missClick(){
        function clickScreen(ev){
            $('.wrapper')
            .fadeOut(50)
            .fadeIn(50)
        }

        $('.wrapper')
        .on('click', clickScreen)
    }
     missClick();
});

//анимация утки
//1 Первая утка влево
function duckLeft(){
    $('.duck').addClass('duck_fly_left');
    var moveLeft = anime({
        targets: '.duck_fly_left',
        translateX: -2300,
        autoplay: true,
        easing: 'linear',
        duration: 5900
    });
    }
setTimeout(duckLeft, 5900);
setTimeout(function(){
    $('.duck').removeClass('duck_fly_left')
}, 10000);
        
    //2 Вторая утка вверх вправо
function duck2TopRight(){
    $('.duck_2').addClass('duck_2_fly_top_right');
    var move2TopRight = anime({
         targets: '.duck_2_fly_top_right',
         translateX: 1800,
         translateY: -1500,
         autoplay: true,
         easing: 'linear',
         duration: 10000
        });
}

setTimeout(duck2TopRight, 6000);
setTimeout(function(){
    $('.duck_2').removeClass('duck_2_fly_top_right')
}, 10000);

//3 Вторая утка вверх влево
function duck2TopLeft(){
    $('.duck_2').addClass('duck_2_fly_top_left');
    var move2TopLeft = anime({
        targets: '.duck_2_fly_top_left',
        translateX: -1700,
        translateY: -2400,
        autoplay: true,
        easing: 'linear',
        duration: 10000
        });
}
setTimeout(duck2TopLeft, 10000);
setTimeout(function(){
    $('.duck_2').removeClass('duck_2_fly_top_left')
}, 16900);
       

//4 Первая утка вверх влево
function duckTopRight(){
    $('.duck').addClass('duck_fly_top_right');
    var moveRightTop = anime({
         targets: '.duck_fly_top_right',
        translateX: 1400,
        translateY: -1500,
        autoplay: true,
        easing: 'linear',
        duration: 10100
        });
}
setTimeout(duckTopRight, 10100);
setTimeout(function(){
    $('.duck').removeClass('duck_fly_top_right')
}, 15900);

//5 Вторая утка влево
function duck2Left(){
    $('.duck_2').addClass('duck_2_fly_left');
    var move2Left = anime({
        targets: '.duck_2_fly_left',
        translateX: -5550,
        autoplay: true,
        easing: 'linear',
        duration: 15900
    });
}
setTimeout(duck2Left, 15900);

//6 первая утка вправо
function duckRight(){
    $('.duck').addClass('duck_fly_right');
    var moveRight = anime({
    targets: '.duck_fly_right',
    translateX: 3550,
    autoplay: true,
    easing: 'linear',
    duration: 15000
    });
}
setTimeout(duckRight, 15000);

        // setTimeout(function(){
        //     $('.duck').addClass('duck_fly_top_left');
        // }, 1000);
       
$(function () {

    function shot(){
        function deleteClass(ev){
        $('.duck').removeClass('duck_fly_left duck_fly_top_left duck_fly_right duck_fly_top_right');
        }
        $('.duck').on('click', deleteClass);
    }
    shot(); 

    function shot2(){
        function deleteClass2(ev){
            $('.duck_2').removeClass('duck_2_fly_left duck_2_fly_top_left duck_2_fly_right duck_2_fly_top_right ');
        }
        $('.duck_2').on('click', deleteClass2)
    }
    shot2();
});
        
        
setTimeout(function (){
    $('.dog').addClass('dog_walk');
}, 1000);

setTimeout(function (){
    $('.dog').removeClass('dog_walk');
}, 4400);

setTimeout(function(){ 
    $('.dog').addClass('dog_jump');
}, 4500);

        // setTimeout(function(){ 
        //     $('.dog').addClass('dog_and_duck');
        // }, 7000);
        
function dogAndDuck(){ 
    $('.dog').addClass('dog_and_duck');
    var moveDogAndDuck = anime({
        targets: '.dog_and_duck',
        translateY: 4500,
        autoplay: true,
        easing: 'linear',
        duration: 4000
        });
}
setInterval(dogAndDuck, 6000);

        // function dog2Duck(){ 
        //     $('.dog').addClass('dog_and_duck_2');
        //     var moveDogAnd2Duck = anime({
        //         targets: '.dog_and_duck_2',
        //         translateY: 4500,
        //         autoplay: true,
        //         easing: 'linear',
        //         duration: 1000
        //         });
        //     }
        //     setInterval(dog2Duck, 6000)


        // function dogAndMiss(){ 
        //         $('.dog').addClass('dog_and_miss');
        //         var moveDogAndMiss = anime({
        //             targets: '.dog_and_miss',
        //             translateY: 4500,
        //             autoplay: true,
        //             easing: 'linear',
        //             duration: 4000
        //             });
        //         }
        //         setInterval(dogAndMiss, 6000);
        