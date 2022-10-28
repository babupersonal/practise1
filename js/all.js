// JavaScript Document

$(document).ready(function(){
	$(".box1").ready(function(){
		$(".box1").delay(4000).fadeOut(800);
	});
	$(".no").ready(function(){
		$(".no").delay(4000).fadeIn(800);
	});
	
	$(".t1").click(function(){
		$("html,body").animate({scrollTop:$(".t01").offset().top},1000);
	});
	$(".t2").click(function(){
		$("html,body").animate({scrollTop:$(".t02").offset().top},1000);
	});
	$(".t3").click(function(){
		$("html,body").animate({scrollTop:$(".t03").offset().top},1000);
	});
	$(".t4").click(function(){
		$("html,body").animate({scrollTop:$(".t04").offset().top},1000);
	});
	$(".t5").click(function(){
		$("html,body").animate({scrollTop:$(".t05").offset().top},1000);
	});
	$(".t6").click(function(){
		$("html,body").animate({scrollTop:$(".t06").offset().top},1000);
	});
	
	$(".box3item2").hide();
	$(".box3item3").hide();
	$(".b31").click(function(){
		$(".box3item1").show();
		$(".box3item2").hide();
		$(".box3item3").hide();
	});
	$(".b32").click(function(){
		$(".box3item2").show();
		$(".box3item1").hide();
		$(".box3item3").hide();
	});
	$(".b33").click(function(){
		$(".box3item3").show();
		$(".box3item2").hide();
		$(".box3item1").hide();
	});
	$(".box6item2").hide();
	$(".box6item3").hide();
	$(".b61").click(function(){
		$(".box6item1").show();
		$(".box6item2").hide();
		$(".box6item3").hide();
	});
	$(".b62").click(function(){
		$(".box6item2").show();
		$(".box6item1").hide();
		$(".box6item3").hide();
	});
	$(".b63").click(function(){
		$(".box6item3").show();
		$(".box6item2").hide();
		$(".box6item1").hide();
	});
	
	$(".b71").click(function(){
		alert("感謝你的訂閱");
	});
	$(".b72").click(function(){
		$(".box7btn2").val("");
	});
	$(".b73").click(function(){
		alert("感謝您，我們會盡快處理。");
	});
	
	$(".box9").hide();
	$(".box9-1").hide();
	$(".box13").hide();
	$(".box13-1").hide();
	$(".box14").hide();
	$(".box15").hide();
	$(window).scroll(function(){
		var t=$(window).scrollTop();
		if (t>1000){
			$(".box9").fadeIn(500);
			$(".box9-1").fadeIn(500);
			$(".box13").fadeIn(500);
			$(".box13-1").fadeIn(500);
			$(".box15").fadeIn(500);
		}
		else{
			$(".box9").fadeOut(500);
			$(".box9-1").fadeOut(500);
			$(".box13").fadeOut(500);
			$(".box13-1").fadeOut(500);
			$(".box15").fadeOut(500);
		}
	});
	
	$(".box13").click(function(){
		$(".box14").toggle(500);
		$(".box14-1").show();
		
	});
	$(".c1").click(function(){
		var v1=parseFloat($("#v1").val());
		var v1a=(v1)*49999;
		pd1=parseFloat(v1);
		$(".p1").text(v1);
		$(".p1a").text(v1a);
		$(".p7a").text(pd1*49999+pd2*49999+pd3*49999+pd4*49999+pd5*49999+pd6*49999);
		$(".box9-1").text(pd1+pd2+pd3+pd4+pd5+pd6);
	});
	$(".c2").click(function(){
		var v2=parseFloat($("#v2").val());
		var v2a=(v2)*49999;
		pd2=parseFloat(v2);
		$(".p2").text(v2);
		$(".p2a").text(v2a);
		$(".p7a").text(pd1*49999+pd2*49999+pd3*49999+pd4*49999+pd5*49999+pd6*49999);
		$(".box9-1").text(pd1+pd2+pd3+pd4+pd5+pd6);
	});
	$(".c3").click(function(){
		var v3=parseFloat($("#v3").val());
		var v3a=(v3)*49999;
		pd3=parseFloat(v3);
		$(".p3").text(v3);
		$(".p3a").text(v3a);
		$(".p7a").text(pd1*49999+pd2*49999+pd3*49999+pd4*49999+pd5*49999+pd6*49999);
		$(".box9-1").text(pd1+pd2+pd3+pd4+pd5+pd6);
	});
	$(".c4").click(function(){
		var v4=parseFloat($("#v4").val());
		var v4a=(v4)*49999;
		pd4=parseFloat(v4);
		$(".p4").text(v4);
		$(".p4a").text(v4a);
		$(".p7a").text(pd1*49999+pd2*49999+pd3*49999+pd4*49999+pd5*49999+pd6*49999);
		$(".box9-1").text(pd1+pd2+pd3+pd4+pd5+pd6);
	});
	$(".c5").click(function(){
		var v5=parseFloat($("#v5").val());
		var v5a=(v5)*49999;
		pd5=parseFloat(v5);
		$(".p5").text(v5);
		$(".p5a").text(v5a);
		$(".p7a").text(pd1*49999+pd2*49999+pd3*49999+pd4*49999+pd5*49999+pd6*49999);
		$(".box9-1").text(pd1+pd2+pd3+pd4+pd5+pd6);
	});
	$(".c6").click(function(){
		var v6=parseFloat($("#v6").val());
		var v6a=(v6)*49999;
		pd1=parseFloat(v6);
		$(".p6").text(v6);
		$(".p6a").text(v6a);
		$(".p7a").text(pd1*49999+pd2*49999+pd3*49999+pd4*49999+pd5*49999+pd6*49999);
		$(".box9-1").text(pd1+pd2+pd3+pd4+pd5+pd6);
	});
	
	
	
	$(".box10").hide();
	$(".box11").hide();
	$(".box12").hide();
	$(".box9").click(function(){
		$(".box10").show();
		$(".b10a").css("background"," rgba(217,0,3,1.00)");
		$(".b10a").css("color","#fff");
	});
	$(".b101").click(function(){
		$(".box10").hide();
	});
	$(".b102").click(function(){
		$(".box10").hide();
		$(".box11").show();
		$(".b10b").css("background"," rgba(217,0,3,1.00)");
		$(".b10b").css("color","#fff");
	});
	$(".b103").click(function(){
		$(".box11").hide();
		$(".box10").show();
		$(".b10b").css("background"," #fff");
		$(".b10b").css("color","#000");
	});
	$(".b104").click(function(){
		$(".box11").hide();
		$(".box12").show();
		$(".b10c").css("background"," rgba(217,0,3,1.00)");
		$(".b10c").css("color","#fff");
	});
	$(".b105").click(function(){
		$(".box12").hide();
		$(".box11").show();
		$(".b10c").css("background"," #fff");
		$(".b10c").css("color","#000");
	});
	
	$(".b106").click(function(){
		
		
	   var nn = jQuery("#name").val();
	   var aa = jQuery("#add").val();
	   var ee = jQuery("#mail").val();

		
   if (jQuery.trim(nn) == ""   ){
      alert("姓名不可為空!");
	   jQuery("#name").focus();
      
   }

	else if(jQuery.trim(aa) == ""   ){
      alert("地址不可為空!");
		jQuery("#add").focus();
	}
	else if(jQuery.trim(ee) == ""   ){
      alert("E-MAIL不可為空!");
		jQuery("#email").focus();
		
	}	else {
			
		alert("感謝您的購買，將於7日內送達。")
		$(".box12").hide();
		$(".b10b").css("background"," #fff");
		$(".b10b").css("color","#000");
		$(".b10c").css("background"," #fff");
		$(".b10c").css("color","#000");
	
	
   
   }
   });
	
	$(".b141").click(function(){
		$(".box14-1").append("<h4>會員招募</h4>");
		$(".box14-1").append("<p>會員招募中，快來申請吧!!</p>");
	});
	$(".b142").click(function(){
		$(".box14-1").append("<h4>付款方式</h4>");
		$(".box14-1").append("<p>1.貨到付款或 2.ATN轉帳。</p>");
	});
	$(".b143").click(function(){
		$(".box14-1").text($(".box14-1").val());
	});
	$(".b144").click(function(){
		$(".box14-1").append($(".box14btn1").val());
		$(".box14-1").append("<p>感謝您，我們會盡快處理。</p>");
	});
});

pd1=0
pd2=0
pd3=0
pd4=0
pd5=0
pd6=0

var sm=43200;
	function ct(){
		sm-=1;
		var ci=document.getElementById("ci");
		var h=Math.floor(sm/3600);
		var m=Math.floor(Math.floor(sm%3600)/60);
		var s=sm%60;
		ci.innerHTML=h+":"+m+":"+s;
	}
var mm=window.setInterval("ct()",1000);











