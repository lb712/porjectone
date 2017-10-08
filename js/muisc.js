// $(".muisc-header").mouseenter(function () {
//    alert(1);
// })
$(".icon-caidan").click(function () {
	$(".mu-zzc").css("display","block");
	$(".mu-zzc").css("z-index","40");
	$(".mu-h-three").animate({left:"0"},200);
	$("body").css("overflow","hidden");
   
})

$(".h-three-three li").click(function () {
	$(".mu-zzc").css("display","none");
	$(".mu-h-three").animate({left:"-100%"},200);
	$("body").css("overflow","scroll");
   	
})