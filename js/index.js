$(function(){

$("#fullpage").fullpage({
    autoScrolling:true,
    scrollHorizontally: true
    ,navigation:true,
    loopTop:true,
    loopBottom:true,
    onLeave :function(anchorLink,index,direction){
        var n = index.index
        console.log(n)
        if(n == 0){
            $(".noti1").removeClass("on")
            $(".s2_list li img").css({"filter":"saturate(0.3) opacity(0.5)"})
        }else if(n == 1){

        }else if(n == 2){
            $(".noti1").removeClass("on")
            $("#s4 h1").removeClass("on")
            $(".s4_left").removeClass("on")
            $(".s4_right h3").removeClass("on")
            $(".s4_right p").removeClass("on")
            $(".s4_right span").removeClass("on")
            $(".s2_list li img").css({"filter":"saturate(0.3) opacity(0.5)"})
        }else if( n == 3){
            $(".noti1").removeClass("on")
            
            $("#s4 h1").delay(1000).addClass("on",1000)
            $(".s4_left").delay(1200).addClass("on",1200)
            $(".s4_right h3").delay(1200).addClass("on",1200)
            $(".s4_right p").delay(1200).addClass("on",1200)
            $(".s4_right span").delay(1200).addClass("on",1200)

            $(".s2_list li img").css({"filter":"saturate(0.3) opacity(0.5)"})
        }


    }
})

$(".s2_list li img").click(function(){

    $(".s2_list li img").css({"filter":"saturate(0.3) opacity(0.5)"})
    $(".noti1").removeClass("on")

    $(this).css({"filter":"saturate(1) opacity(1)"})
    $(this).next().addClass("on")
})

$(".s2_list2").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows: false,
    fade: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 500
})

$(".s3_ul").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows: true,
    // fade: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000

})


$(".box1").click(function(){
    $(".s2_list").addClass("on")
    $(".s2_list2").removeClass("on")
    $(this).addClass("on")
    $(".box2").removeClass("on")
})
$(".box2").click(function(){
    $(".s2_list2").addClass("on")
    $(".s2_list").removeClass("on")
    $(this).addClass("on")
    $(".box1").removeClass("on")
})

$(".noti_button1").click(function(){
    var x = $(this).parent().parent().index()
    console.log(x)
    $(".popup1 ul li").eq(x).show()

})

$(".popup1 ul li").click(function(){
    $(this).hide()
})


$(".texta_btn").click(function(){
    var x = $(this).parent().parent().index()
    console.log(x)
    $(".popup2 ul li").eq(x).show()

})

$(".popup2 ul li").click(function(){
    $(this).hide()
})


$(".texta_btn1").click(function(){
    $(".popup2").show()
})

$(".p2_btn").click(function(){
    $(".popup2").hide()
})







})//제이커리