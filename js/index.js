//轮播图
$(function(){
	var index = 0;
	timer = setInterval(loop,2000);

	function loop(){
		$('#circle li').eq(0).css('background','white');
		$('#circle li').css('background','#9f8f8f')
		index++;
		if(index == 6){
			index = 1;
			$('#loopUl').css({
				left:0
			})
		}
		$('#circle li').eq(index).css('background','white')
		$('#loopUl').stop().animate({
			'left':-document.body.clientWidth*index
		},1000)
	
	}
	//touch事件
	touch.on('#loopUl','swipeleft',function(e){
		$('#loopUl').animate({
			marginleft:-document.body.clientWidth
		});
	});
	touch.on('#loopUl','swiperight',function(e){
		$('#loopUl').animate({
			marginleft:0
		});
	});
	
		
	$.ajax({
		type:"get",
		url:'1.json',
		async:true,
		success:function(res){
			console.log(res);
			setData(res.data.gallery);
			setData1(res.data.sections[0].body.items);
			setData2(res.data.sections);
		}
	});
	function setData(arr){ 
		for (var i = 0; i < 5; i++) {
			var obj = arr[i];
			var liObj = $('<li><img src = "'+obj.img_url+'"/></li>');
			$('#loopUl').append(liObj);
		}
		var imgs = $('<li><img src = "'+arr[0].img_url+'"/><li>');
//		console.log(arr[0].img_url);
		$('#loopUl').append(imgs);
		loop();
	}
	//中间六张图
	function setData1(arr1){ 
		for (var i = 0; i < 6; i++){
			var obj1 = arr1[i];
			var liObj= $('<li><img src = "'+obj1.img_url+'"/></li>');
			$('.sixImg').append(liObj);
		}
	}
	//列表
	function setData2(arr2){ 
		for (var i = 1; i < arr2.length-1; i++) {
			var obj2 = arr2[i].body.items[0];
			var liObj= $('<li><div class="leftDiv"><img src = "'+obj2.img_url+'"/></div><div class="rightDiv"><p></p><p></p><p></p></div></li>');
			liObj.find('p').eq(0).text(obj2.product_name);
			liObj.find('p').eq(1).text(obj2.product_brief);
			liObj.find('p').eq(2).text(obj2.product_price);
			$('.sellList').append(liObj);
		}
	}
	//第二页列表
	$.ajax({
		type:"get",
		url:'2.json',
		async:true,
		success:function(res){
			console.log(res);
			setDataP2(res.data.list);
			
		}
	});
	function setDataP2(arr){ 
		for (var i = 0; i < arr.length; i++) {
			var obj = arr[i];
			var divObj = $('<div class="outer"><p class="p2P"></p><ul class="inner"></ul><div class="clearfix"></div></div>');
			$('#p2List').append(divObj);
			divObj.find('p').text(obj.name);
			for (var j = 0; j < obj.list.length; j++) {
				var obj2 = obj.list[j];
				var liObj = $('<li class="p2Li"><img src = "'+obj2.img_url+'" class="p2Img"/><p class="phoneName">'+obj2.name+'</p></li>')
				$('.inner').eq(i).append(liObj);
			}
		}
	}
	
	document.documentElement.style.fontSize = innerWidth/16 + 'px';
	window.onresize = function(){
		document.documentElement.style.fontSize = innerWidth/16 + 'px';
	}
	
	var arr = ['#sec1','#sec2','#sec3','#sec4'];
	function show(num){
		for (var i = 0; i < arr.length; i++) {
			if(i==num){
				$(arr[i]).css('display','block');
				$(".tap_a").eq(i).css({color:"orangered"});
				
			}else{
				$(arr[i]).css('display','none');
				$(".tab_a").eq(i).css({color:"#333"});
				
			}
		}
	}
	$('#mall').on('click',function(){
		$(this).css('color','orangered');
		show(0);
	})
	$('#kind').on('click',function(){
		$(this).css('color','orangered');
		
		show(1);
	})
	$('#find').on('click',function(){
		$(this).css('color','orangered');
		
		show(2);
	})
	$('#server').on('click',function(){
		$(this).css('color','orangered');
		
		show(3);
	})
	
	
	
//	$('#kind').on('click',function(){
//		$('#sec2').show();
//		$('#sec3').hide();
//		$('#sec1').hide();
//		$('#sec4').hide();
//	})
//	$('#find').on('click',function(){
//		$('#sec3').show();
//		$('#sec1').hide();
//		$('#sec2').hide();
//		$('#sec4').hide();
//	})
//	$('#server').on('click',function(){
//		$('#sec4').show();
//		$('#sec1').hide();
//		$('#sec2').hide();
//		$('#sec3').hide();
//	})
//	$('#mall').on('click',function(){
//		$('#sec1').show();
//		$('#sec2').hide();
//		$('#sec3').hide();
//		$('#sec4').hide();
//	})
	
	
	
	
})	
	

