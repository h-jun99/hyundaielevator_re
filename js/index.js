$(function(){
    $(window).scroll(function(){
        $('header .headsection').css({
            'background-color' : '#fff'
        })
        if($(window).scrollTop() == '0'){
            $('header .headsection').css({
                'background-color' : 'inherit'
            })
        }
    })



    // top메뉴
    $('footer .footertop .topmenu a').click(function(e){
        e.preventDefault()
        $('html').animate({
            scrollTop : '0'
        },2000)
    })
    // 헤더 언어메뉴
    $('.headsection .langbox').slideUp(0)
    $('.headsection .headright .language a').click(function(e){
        e.preventDefault()
        $('.headsection .langbox').slideToggle()
        $('.headsection .lang i').toggleClass
        ('fa-circle-chevron-up fa-circle-chevron-down')
    })
    // 헤더 메뉴리스트
    $('header .headsection .hamburgermenu').slideUp(0)
    $('header .headsection .headright .hambur').click(function(e){
        e.preventDefault()
        $('header .headsection .hamburgermenu').slideToggle()
    })
    // 햄버거
    $('.headsection .headright .hambur').click(function(e){
        $('.hambur1, .hambur2, .hambur').toggleClass('on')
    })
})