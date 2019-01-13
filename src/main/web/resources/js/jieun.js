"use strict";
var jieun = jieun || {};

jieun=(()=>{

		var detail=x=>{
			
			jieun.detail2.d(x);

		}
		return{detail:detail};
			
})();

jieun.detail2={
	d:x=>{
		
		$.getJSON($.context()+'/BrdDetail/detail/'+x.seq,d=>{
			$('#content').empty();
			
			let section =$('<section/>').addClass('je_row').appendTo($('#content'));
			
			// --------------------------------------------nav ::
			// 변경---------------------------------------//
			$('<div id="je_selling_helper_wrap" class="col-md-9"/>').append($('<div id="je_selling_helper"/>').addClass('navbar navbar-default')).appendTo($('#content'));
			
			$('<ul/>').addClass("nav nav-tabs nav-justified").append(
					$('<li class="col2 active"/>').attr({id:'b_product-info','data-target':'product-info',role:'presentation'}).text('상품정보').click(e=>{
						e.preventDefault();
						$(window).scrollTop($('#je_total_wrap').offset().top);
					}),
					$('<li class="col2" id="je_count"/>').attr({id:'b_product-review','data-target':'product-review',role:'presentation'}).text('리뷰').click(e=>{
						e.preventDefault();
						$(window).scrollTop($('#product-review').offset().top);
					}),
					$('<li class="col2"/>').attr({id:'b_','data-target':'product-shipping',role:'presentation'}).text('배송/교환/환불').click(e=>{
						e.preventDefault();
						$(window).scrollTop($('#product-shipping').offset().top);
					})
			).appendTo($('.navbar'));
			
			window.onscroll = function() {myFunction()};

			var navbar = $('#je_selling_helper_wrap');
			var sticky = navbar.offset().top;
			function myFunction() {
				var scrollTop = $(window).scrollTop();
			  if (scrollTop > sticky) {
				  $('#je_selling_helper_wrap').addClass('je_sticky');
				  
			  } else {
				  $('#je_selling_helper_wrap').removeClass('je_sticky'); 
			  }
			}
			$('.je_sticky').appendTo($('#h_navigation'));
		
			// --------------------------------------------nav ::
			// 변경---------------------------------------//

			let section2 =$('<section "/>').addClass('je_row1').appendTo($('#content'));
			
			let je_div_cover = $('<div />').addClass('je_div_cover');

			let je_div_cover_info1 = $('<div style="height:100%"/>').addClass('je_div_cover_info1');
			let je_div_cover_info2 = $('<div style="height:100%"/>').addClass('je_div_cover_info2');
			let arr = ['a','b','c'];
			$.each(arr,function(i,j){
				var col = $('<div>').addClass('je_col'+i).appendTo(section).appendTo($('#content'));
				col.appendTo(section);
				$('.je_col0').append(je_div_cover);
				$('.je_col1').append(je_div_cover_info1);					
				$('.je_col2').append(je_div_cover_info2);					
			});
			$('<img/>').attr({src:$.img()+'/jun/'+x.category+'/'+x.photo+'.jpg',id:'je_view1'}).appendTo(je_div_cover).appendTo($('.je_col0'));
			
			let p = $('<p style="margin-top: 50px; color:#8080805c"/>').addClass('je_info1').appendTo(je_div_cover_info1);
			let a1=$('<a id="gray_a"/>').html('오늘의 집 스토어');
			let span1 = $('<span/>').addClass('glyphicon glyphicon-chevron-right').attr({"aria-hidden":"true",id : 'je_icon'});
			let span2 = $('<span/>').addClass('glyphicon glyphicon-chevron-right').attr({"aria-hidden":"true",id : 'je_icon'});
			let span3 = $('<span/>').addClass('glyphicon glyphicon-chevron-right').attr({"aria-hidden":"true",id : 'je_icon'});
			let span4 = $('<span/>').addClass('glyphicon glyphicon-chevron-right').attr({"aria-hidden":"true",id : 'je_icon'});
			let a2 = $('<a id="gray_a"/>').html('가구');
			let a3 = $('<a id="gray_a"/>').html('침실 가구');
			let a4 = $('<a id="gray_a"/>').html('매트리스');
			let a5 = $('<a id="gray_a"/>').html('스프링매트리스');
			
			a1.appendTo(p); 
			span1.appendTo(p);
			a2.appendTo(p); 
			span2.appendTo(p);
			a3.appendTo(p); 
			span3.appendTo(p);
			a4.appendTo(p); 
			span4.appendTo(p);
			a5.appendTo(p);
			p.appendTo(je_div_cover_info1);
			
			let p1=$('<p/>').addClass('je_cover_title');
			p1.text(d.title).appendTo(je_div_cover_info1);
			$('.je_cover_title').html();
			
			let a6 = $('<a style="color:#cc5200"/>').addClass('je_review');
			let review = $('<span/>').addClass('je_star_review').attr({id:'je_line'});
			let star = $('<span/>').attr({class:'glyphicon glyphicon-star','aria-hidden':true});
				star.appendTo(a6);
				star.appendTo(a6);star.appendTo(a6);

				a6.append(star);
				star.appendTo(a6);
				star.appendTo(review).appendTo(a6).html('226개의 리뷰<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>');
				$('<br/>').appendTo(a6);
				a6.appendTo(je_div_cover_info1);
			
			let p_price=$('<p/>').addClass('je_price_cover');

			$('<b style="margin-top: 10px; margin-right :10px"/>').html(d.disc+'%').attr({id:'je_line',class:'je_discount'}).appendTo(p_price);
			
			let origin = $('<h6/>').addClass('je_origin_cost').text(d.price.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
			let sum_p=(Math.round(d.sum/100))*100;
			let ins = $('<ins/>').addClass('je_dis_cost').text((sum_p+"").replace(/\B(?=(\d{3})+(?!\d))/g, ',')+'원');
		
			origin.appendTo(p_price);
			ins.appendTo(p_price);
			p_price.appendTo(je_div_cover_info1);		

	    	$('<select id="je_selectbtn" name="je_opt" />').appendTo(je_div_cover_info1);
	    	$('<option selected disabled hidden />').attr({"value":""}).html('옵션').appendTo($('#je_selectbtn'));
	    	$.each(d.options,(i,j)=>{
				$('<option id="opt'+i+'"/>').attr("value",j.seq).html(j.options).appendTo($('#je_selectbtn'));
			});	
	    	$('<div id="je_total_div"/>').appendTo(section2);
			$('<div id="je_total_1" class="col-md-8" style="text-align: center;"/>').appendTo($('#je_total_div'));
			$('<div id="je_total_2" class="col-md-4" style="margin-top: 4.5%; height:7500px; padding-left: 8%; padding-right: 1%;"/>').appendTo($('#je_total_div'));
			
	    	
	    	var je_item=$('<section class="je_item" id="item_sec" style="overflow:auto; margin-top:3%; max-height:20%; background-color:whitesmoke; "/>');
	    	je_item.appendTo(je_div_cover_info1);
	    	
	    	$('<hr style="	color: gray; size: 0.5em; noshade;"/>').appendTo(je_div_cover_info2);
			
			$('<p style="font-size: 13px" class="je_total_price"/>').appendTo(je_div_cover_info2);
			$('<span id="je_temp"/>').appendTo($('.je_total_price'));
			
			
			//아래 카트
			let t_order_cart=$('<section class="col-md-10" id="t_order_cart" style="left: 18%; width: 90%; top: 20%; position:sticky; height: 20%;"/>');
			let je_order_cart=$('<section class="je_o_cart" id="je_order_cart" style="width: 120%; height: 20%; background-color: whitesmoke; margin-top: 15%; overflow-y:auto; max-height: 50%;"/>');
			let btn_span=$('<span id="btn_span">');
			let je_hdiv=  $('<div id="je_hdiv" style="padding-bottom: 20px;"/>');
			t_order_cart.appendTo($('#je_total_2'));
			$('<h style="font-weight:bold" id="je_h" style="padding-bottom:20px;">').text("옵션선택").appendTo(je_hdiv);
			je_hdiv.appendTo(t_order_cart);
			$('<select id="select_btn2" name="je_opt" style="font-size: 12px; width: 120%; height: 3%;"/>').appendTo(btn_span);
			btn_span.appendTo(t_order_cart);
			$('<option selected disabled hidden />').attr({"value":""}).html('옵션').appendTo($('#select_btn2'));
			$.each(d.options,(i,j)=>{
				$('<option id="opt'+i+'"/>').attr("value",j.seq).html(j.options).appendTo($('#select_btn2'));
			});	
			je_order_cart.appendTo(t_order_cart);
			
			
			let t=1;
			
			let sum=0;	
			let y=sum_p;
			
			$('#je_selectbtn').change(function(){
					
				
				
				let t2=t;
				let count=1;
				let x = $("#je_selectbtn option:selected").text();				

				let minus=$('<span id="je_minus'+t2+ '" class="minus glyphicon glyphicon-minus" role="button" style="margin-right: 3px;"/>');
				let amount=$('<div class="amount"/>');
				let plus=$('<span id="je_plus'+t2+ '" class="plus glyphicon glyphicon-plus" role="button" style="margin-left: 10px;"/>');
				let input=$('<input id="je_num_val'+t2+'" type="number" value="1"  style=" border: 0px solid; width:30px; text-align:center; background-color:whitesmoke; " disabled/>');
				$('<input/>').attr({type:'hidden',id:"je_num_val_"+t2}).val($('#je_selectbtn option:selected').val()).appendTo(amount);
				let divv=$('<div id="item'+t2+'" class="divv_c" data-index="1" style="border-bottom: solid 1px #ededed; margin:10px; font-size: 12px;">');
				let detail=$('<div class="detail" style="margin-top:20px">');
				let bold_p=$('<p class="bold col-md-12" style="font-weight:bold; left: 75%; width: 30%;  bottom: 20px;  padding-left: 0%!important;">');
				let span_left=$('<span id="span_l" style="float:left">').html(x);
				let no_wrap_p=$('<p style="font-size: 12px; white-space: nowrap; margin-bottom: 10px; height: 10px;">');
				let span_am=$('<span class="amount" style="float:right"/>').html((y+"").replace(/\B(?=(\d{3})+(?!\d))/g, ',')+'원');
				let remove = $('<span class="remove glyphicon glyphicon-remove" role="button" aria-hidden="false" style="float: right; right: 10px;">');
				let br=$('<br>');


				
				let res = true;
				for(let i =1; i<=t; i++){
					if($.cookie("opt"+i)===$("#je_selectbtn option:selected").val()){
						console.log('$.cookie("opt"+i)'+$.cookie("opt"+i));
						console.log("option:"+$("#je_selectbtn option:selected").val());
						alert('이미 선택된 옵션입니다.');
						res= false; 
					}			
/*					if($('#opt'+i).val()===$("#je_selectbtn option:selected").val()){
						res= false;
						console.log("$('#opt'+i).val()"+$('#opt'+i).val());
						console.log("option:"+$("#je_selectbtn option:selected").val());
						
						alert('이미 선택된 옵션입니다.');
					}*/
				}
				if(res){
					
					$.cookie("opt"+t,$("#je_selectbtn option:selected").val());
					span_left.appendTo(no_wrap_p);
					remove.appendTo(no_wrap_p);
					no_wrap_p.append(br);
					
					minus.appendTo(amount);	
					input.appendTo(amount);							
					plus.appendTo(amount);					
					amount.appendTo(detail);					
					span_am.appendTo(bold_p);
					bold_p.appendTo(detail);
					
					no_wrap_p.appendTo(divv);
					detail.appendTo(divv);
					divv.appendTo(je_item);
					
					divv.append(br);
					sum=sum+y;
					$('#je_won').html((sum+"").replace(/\B(?=(\d{3})+(?!\d))/g, ','));	
					
					
				}

			
				$(this).click(e=>{
					e.preventDefault();		
					je_item.show();
					$('#je_won').html((sum+"").replace(/\B(?=(\d{3})+(?!\d))/g, ','));	
					});
				
				
				
				$('#je_minus'+t2).click(e=>{
					e.preventDefault();
					
					if(count>1){
						count--;
						$('#je_num_val'+t2).val(count);							
						sum=sum-y;
						$('#je_won').html((sum+"").replace(/\B(?=(\d{3})+(?!\d))/g, ','));	
						}
					
				});
				
				$('#je_plus'+t2).click(e=>{
					e.preventDefault();	
						je_order_cart.empty();
						$('.divv_c').clone(true).appendTo('.je_o_cart');
						count++;
						$('#je_num_val'+t2).val(count);
						sum=sum+y;
						$('#je_won').html((sum+"").replace(/\B(?=(\d{3})+(?!\d))/g, ','));	
						
						
				});
		
				remove.click(e=>{
					e.preventDefault();				
					divv.remove();		
					if(divv.remove()){					
						sum=sum-count*y;
						$('#je_won').html(sum);	
						if(sum==0){
							$('#je_won').html('0');	
						}						
						}
					$('#je_won').html((sum+"").replace(/\B(?=(\d{3})+(?!\d))/g, ','));
					je_order_cart.empty();
					$('.divv_c').clone(true).appendTo('.je_o_cart');
					$( "#je_won" ).change(function() {
						u_price.empty();
						$('.je_total_price').clone(true).appendTo(u_price);
					});
					});
				
				if($("#je_selectbtn option:selected").val()){
					$('.je_o_cart').empty();
		    		$('.divv_c').clone(true).appendTo('.je_o_cart');
					//$('#select_btn2').empty();
					//$('#je_selectbtn').find('option').clone().appendTo('#select_btn2');
		    		
					s_u_p.empty();
					in_span.clone(true).appendTo(s_u_p);
				}
				
				
				t++;	

			});

			$( "#select_btn2" ).change(function() {
				
				let t2=t;
				let count=1;
				let x = $("#select_btn2 option:selected").text();				

				let minus=$('<span id="je_minus'+t2+ '" class="minus glyphicon glyphicon-minus" role="button" style="margin-right: 3px;"/>');
				let amount=$('<div class="amount"/>');
				let plus=$('<span id="je_plus'+t2+ '" class="plus glyphicon glyphicon-plus" role="button" style="margin-left: 10px;"/>');
				let input=$('<input id="je_num_val'+t2+'" type="number" value="1"  style=" border: 0px solid; width:30px; text-align:center; background-color:whitesmoke; " disabled/>');
				$('<input/>').attr({type:'hidden',id:"je_num_val_"+t2}).val($('#je_selectbtn option:selected').val()).appendTo(amount);
				let divv=$('<div id="item'+t2+'" class="divv_c" data-index="1" style="border-bottom: solid 1px #ededed; margin:10px; font-size: 12px;">');
				let detail=$('<div class="detail" style="margin-top:20px">');
				let bold_p=$('<p class="bold col-md-12" style="font-weight:bold; left: 80%; width: 20%;  bottom: 20px; padding-right: 0%; padding-left: 0%!important;">');
				let span_left=$('<span id="span_l" style="float:left">').html(x);
				let no_wrap_p=$('<p style="font-size: 12px; white-space: nowrap; margin-bottom: 10px; height: 10px;">');
				let span_am=$('<span class="amount" style="float:right"/>').html((y+"").replace(/\B(?=(\d{3})+(?!\d))/g, ',')+'원');
				let remove = $('<span class="remove glyphicon glyphicon-remove" role="button" aria-hidden="false" style="float: right; right: 10px;">');
				let br=$('<br>');


				let res = true;
				for(let i =1; i<=t; i++){
					if($.cookie("opt"+i)===$("#select_btn2 option:selected").val()){
						console.log('$.cookie("opt"+i)'+$.cookie("opt"+i));
						console.log("option:"+$("#select_btn2 option:selected").val());
						alert('이미 선택된 옵션입니다.');
						res= false; 
					}		
					/*if($('#opt'+i).val()===$("#je_selectbtn option:selected").val()){
						res= false;
						console.log("$('#opt'+i).val()"+$('#opt'+i).val());
						console.log("option:"+$("#je_selectbtn option:selected").val());
						
						alert('이미 선택된 옵션입니다.');
					}*/
				}
				if(res){
					
					$.cookie("opt"+t,$("#select_btn2 option:selected").val());
					span_left.appendTo(no_wrap_p);
					remove.appendTo(no_wrap_p);
					no_wrap_p.append(br);
					
					minus.appendTo(amount);	
					input.appendTo(amount);							
					plus.appendTo(amount);					
					amount.appendTo(detail);					
					span_am.appendTo(bold_p);
					bold_p.appendTo(detail);
					
					no_wrap_p.appendTo(divv);
					detail.appendTo(divv);
					divv.appendTo(je_item);
					
					divv.append(br);
					sum=sum+y;
					$('#je_won').html((sum+"").replace(/\B(?=(\d{3})+(?!\d))/g, ','));	
					
					
				}

			
				$(this).click(e=>{
					e.preventDefault();		
					je_order_cart.show();
					$('#je_won').html((sum+"").replace(/\B(?=(\d{3})+(?!\d))/g, ','));	
					});
				
				
				
				$('#je_minus'+t2).click(e=>{
					e.preventDefault();
					
					if(count>1){
						count--;
						$('#je_num_val'+t2).val(count);							
						sum=sum-y;
						$('#je_won').html((sum+"").replace(/\B(?=(\d{3})+(?!\d))/g, ','));	
						}
					
				});
				
				$('#je_plus'+t2).click(e=>{
					e.preventDefault();				
						count++;
						$('#je_num_val'+t2).val(count);
						sum=sum+y;
						$('#je_won').html((sum+"").replace(/\B(?=(\d{3})+(?!\d))/g, ','));	
						
						
				});
		
				remove.click(e=>{
					e.preventDefault();				
					divv.remove();		
					if(divv.remove()){					
						sum=sum-count*y;
						$('#je_won').html(sum);	
						if(sum==0){
							$('#je_won').html('0');	
						}
						}
					$('.divv_c').remove();
					$('.divv_c').appendTo('.je_item');
					});
				
				if($("#select_btn2 option:selected").val()){
					$('.je_o_cart').empty();
		    		$('.divv_c').clone(true).appendTo('.je_o_cart');
					s_u_p.empty();
					in_span.clone(true).appendTo(s_u_p);

				}
				
				t++;	
			
			});
			
			let or_pri=$('<label style="margin-top: 10px;"/>').html('주문금액');
			let in_span=$('<span class="in_span1" style="float: right; display: inline;"/>').html('<strong id="je_won">'+sum+'</strong>원');
			let u_price = $('<div id="u_p" style=" padding-top: 10%; width: 120%;">');
			$('<label id="u_pp" style=" font-weight:bold; font-size:130%;">').html('주문금액').appendTo(u_price);
			var s_u_p = $('<span class="s_u_p" style="float: right; display: inline;"/>').html('<strong id="je_won1"></strong>원');

			or_pri.appendTo($('#je_temp'));
			in_span.appendTo($('#je_temp'));
			s_u_p.appendTo(u_price);
			u_price.appendTo(t_order_cart);
			
			let d_btn = $('<div id="d_btn">');
			d_btn.appendTo(t_order_cart);
			$('<button id="d_cart" >').html('장바구니 담기')
			.appendTo(d_btn)
			.click(()=>{
				if($.type($.cookie("userid")) === 'undefined'){
					$.getScript($.script()+'/hyeri.js', ()=>{
						hyeri.page.l();
		            });
					
				}else{
					let i_c="";
					let name="";
					for(let i=1;i<t;i++){
						name+=$('#je_num_val_'+i).val()+"/";
						i_c+=$('#je_num_val'+i).val()+"/";
					}	

					$.ajax({
						url:$.context()+"/cart/add",
						method:'POST',
						contentType : 'application/json',
						data:JSON.stringify({userid:$.cookie("userid"),seq:x.seq,name:name,count:i_c}),
						success:c_d=>{
							if(confirm("장바구니로 가시겠습니까 ?")){
								jun.main.cart();
					
							}else{
							
							}
						}
					})
				}
			});
			
			$('<button id="d_buy" rel="tooltip" title=" 페이지의 특성상 구매기능을 구현하지 않았습니다. " style=" text-decoration: none; "> 구매하기 </a>').appendTo(d_btn);
			$(document).ready(function() {
			    // html 페이지에서 'rel=tooltip'이 사용된 곳에 마우스를 가져가면 
			    $('buttona[rel=tooltip]').mouseover(function(e) 
			    {
			         var tip = $(this).attr('title');         

			        // 브라우져에서 제공하는 기본 툴 팁을 끈다
			        $(this).attr('title','');
			        
			        // css와 연동하기 위해 html 태그를 추가해줌
			        $(this).append('<div id="tooltip"><div class="tipBody">' 
			                      + tip + '</div></div>');               
			    }).mousemove(function(e) 
			   {
			         //마우스가 움직일 때 툴 팁이 따라 다니도록 위치값 업데이트
			        $('#tooltip').css('top', e.pageY + 10 );
			        $('#tooltip').css('left', e.pageX + 10 );
			    }).mouseout(function() 
			    {
			        //위에서 껐던 브라우져에서 제공하는 기본 툴 팁을 복원
			        $(this).attr('title',$('.tipBody').html());
			        $(this).children('div#tooltip').remove();
			    });
			});
										
			
			let buttons=$('<div id="je_buttons" style="margin-top: 15px; margin-bottom:30px"/>')
			buttons.appendTo(je_div_cover_info2);
			$('<button id="je_get_basket"/>').html('장바구니 담기')
			.appendTo(buttons)
			.click(()=>{
				if($.type($.cookie("userid")) === 'undefined'){
					$.getScript($.script()+'/hyeri.js', ()=>{
						hyeri.page.l();
		            });
					
				}else{
					let i_c="";
					let name="";
					for(let i=1;i<t;i++){
						name+=$('#je_num_val_'+i).val()+"/";
						i_c+=$('#je_num_val'+i).val()+"/";
					}	
					$.ajax({
						url:$.context()+"/cart/add",
						method:'POST',
						contentType : 'application/json',
						data:JSON.stringify({userid:$.cookie("userid"),seq:x.seq,name:name,count:i_c}),
						success:c_d=>{
							
								if(confirm("장바구니로 가시겠습니까 ?")){
									jun.main.cart();
								}else{
									alret('옵션을 선택하세요.');
								}								
							}
					})
				}

				
			});
			$('<button id="je_buy" rel="tooltip" title=" 페이지의 특성상 구매기능을 구현하지 않았습니다. " style=" text-decoration: none; "> 구매하기 </a>').appendTo(buttons);
			$(document).ready(function() {
			    // html 페이지에서 'rel=tooltip'이 사용된 곳에 마우스를 가져가면 
			    $('buttona[rel=tooltip]').mouseover(function(e) 
			    {
			         var tip = $(this).attr('title');         

			        // 브라우져에서 제공하는 기본 툴 팁을 끈다
			        $(this).attr('title','');
			        
			        // css와 연동하기 위해 html 태그를 추가해줌
			        $(this).append('<div id="tooltip"><div class="tipBody">' 
			                      + tip + '</div></div>');               
			    }).mousemove(function(e) 
			   {
			         //마우스가 움직일 때 툴 팁이 따라 다니도록 위치값 업데이트
			        $('#tooltip').css('top', e.pageY + 10 );
			        $('#tooltip').css('left', e.pageX + 10 );
			    }).mouseout(function() 
			    {
			        //위에서 껐던 브라우져에서 제공하는 기본 툴 팁을 복원
			        $(this).attr('title',$('.tipBody').html());
			        $(this).children('div#tooltip').remove();
			    });
			});


			let total_wrap = $('<div id="je_total_wrap" />').appendTo($('#je_total_1'));
			
			
			
			($('<section id="je_notice" style="padding-top: 50px;"/>').append(
					$('<img class="je_notice_img"/>').attr({src:$.img()+'/jieun/notice_1.jpg'}),
					$('<p id="je_product_notice"/>').html('<p>구매 후<strong>15영업일 이내 발송</strong>되는 상품입니다.</p>'),
					$('<img class="je_notice_img"/>').attr({src:$.img()+'/jieun/notice_2.jpg'}))).appendTo(total_wrap);

			
			//
			$('<section id="je_detail">').appendTo(total_wrap);
			($('<div id="je_detail_contents" class="je_detail_hidden"/>').append($('<div style="margin: 0px; padding: 0px; width: 100%; text-align: center;"/>'))).appendTo($('#je_detail'));
			// <!-------------------- 오하임 전체공지------------------>
			// <!-------------------- 레이디가구 전체공지--------------->
			$('#je_detail_contents').append($('<img class="je_detail_img">').attr({src:$.img()+'/jieun/gong.jpg'}));
			$('<div/>').html('&nbsp');
			$('<div/>').html('&nbsp');
			$('<div/>').html('&nbsp');
			// <!--------------------업체별(가드너) 공지 ST--------->
			// <!---------------------상세 START---------------------------->
			
			$('#je_detail_contents').append($('<img class="je_detail_img">').attr({src:$.img()+'/jieun/gong2.jpg'}));
			
			$('<br/>');
			$('<br/>');
			$('#je_detail_contents').append($('<img class="je_detail_img">').attr({src:$.img()+'/jieun/faq.jpg'}));
			// <!-------------------배송정보 START----------------------------->
			
			let pro_rev=$('<section id="product-review" style="margin-bottom: 50px;">');
			let section4 =$('<section id="product-shipping">');	
			let seqn={t:d,wrap:total_wrap,pro:pro_rev,sec4:section4};
			
					
			$('<br/>');
			$('<br/>');
			
			pro_rev.appendTo(total_wrap);
			jieun.detail2.w(seqn);
			jieun.detail2.l(seqn);
			section4.appendTo(total_wrap);
			jieun.detail2.b(section4);	
			
			$('<span id="topBtn" class="glyphicon glyphicon-chevron-up" aria-hidden="true"><p>top</p></span>').appendTo('#content');
			$( window ).scroll( function() {
				if ( $( '#topBtn' ).scrollTop() > sticky ) {
					$( '#topBtn' ).fadeIn();
				} else {
					$( '#topBtn' ).fadeOut();
				}
			} );
			
			$( '#topBtn' ).click( function() {
				$( 'html, body' ).animate( { scrollTop : 0 }, 600 );
				return false;
			} );
			
		});
		
	},
	a:x=>{
		
	},
	b:d=>{
		
		// shipping
			
		d.append($('<h3 class="bold text-black"/>').text('배송 관련 안내'));
		d.append($('<table class="line-height-normal" style=" width: 100%;"/>'));
		
		$('#line-height-normal').append($('<tbody/>')).append('<tr/>').append('<td/>');
		d.append($('<h4 class="bold text-black"/>').text('교환 및 환불'));
		d.append($('<table  class="line-height-normal" cellspacing="0" style=" width: 100%;"/>'));
		$('#line-height-normal').append($('<tbody/>')).append('<tr/>').append('<td/>');
		let refund=$('<section class= "text-caption-2 je_refund"/>');
		$('<p class="text-body-2 bold"/>').text('반품/교환 사유에 따른 요청 가능 기간').appendTo(refund);
		$('<p class="text-gray-light"/>').text('반품 시 먼저 판매자와 연락하셔서 반품사유, 택배사, 배송비, 반품지 주소 등을  협의하신 후 반품상품을 발송해 주시기 바랍니다.').appendTo(refund);
		$('<ol class="line-height-normal"/>').appendTo(refund);
		$('.line-height-normal').append($('<li/>').html('<span>1</span>구매자 단순 변심은 상품 수령 후 7일 이내 <small>(구매자 반품 배송비 부담)</small>'));
		$('.line-height-normal').append($('<li/>').html('<span>2</span>표시/광고와 상이, 상품하자의 경우 상품 수령 후 3개월 이내 혹은 표시/광고와 다른 사실을 안 날로부터 30일 이내.<br/>둘 중 하나 경과 시 반품/교환 불가 <small>판매자 반품 배송비 부담)</small>'));
		let refund2 = $('<section class="text-caption-2 je_refund"/>');
		refund2.append($('<p class="text-body-2 bold"/>').text('반품/교환 불가능 사유'));
		refund2.append($('<p class="text-gray-light"/>').text('아래와 같은 경우 반품/교환이 불가능합니다.'));
		refund2.append($('<ol class="line-height-normal">').append($('<li>').html('<span>1</span> 반품요청기간이 지난 경우')));
		$('.line-height-normal').append($('<li/>').html('<span>2</span>구매자의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우 <small>(단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외)</small>'));
		
		$('#je_detail_contents').append($('<img class="je_detail_img">').attr({src:$.img()+'/jieun/배송1.jpg'}));

		// <!-------------------배송정보 END----------------------------->
		
		// product-info-noti
		$('<section id="je_info_noti">').appendTo(d);
		($('<tbody id="je_tbody"/>').appendTo($('<table class="line-height-normal" cellspacing="0">'))).appendTo($('#je_info_noti'));
		
		$('<br/>');
		$('<br/>');
		$('<br/>');
		$('<br/>');
		
	},
	l:x=>{

	        if(x.i==undefined)x.i=1;
	        $.getJSON($.context()+'/BrdDetail/review/'+x.i,d=>{		
	       
			let rev_container2=$('<div class="review_container2">');
			
			$.each(d.list,(i,j)=>{
				
				let rev_caption=$('<p class="caption1" style="color:gray; text-align: left;">');
				let rev_container=$('<div class="review_container" style=" margin-top: 80px;">');
				
				let je_user=$('<span class="user">').html(j.nickname + ' / ');
				let je_date=$('<span class="date">').html(j.regi_date + ' / ');
				let je_source=$('<span class="source">').html(' 니방내방 리뷰');
				let je_text=$('<div class="text">');
				let je_comm=$('<div class="review_comm" style="color:black; width:600px; margin-bottom: 30px; word-break: break-word; ">').html(j.contents);
				let rev_photo=$('<a class="review_img" style="width:70px" >');		
				let del_btn= $('<button id="del_btn1" style="float:right; background-color:#cc5200; color:white; border-radius:4px; border:0px solid #cc5200; margin-top:50%px">').html('삭제');
				
				je_user.appendTo(rev_caption);
				je_date.appendTo(rev_caption);
				je_source.appendTo(rev_caption);
				je_text.appendTo(rev_caption);
				if($.cookie("nickname") === j.nickname){
					del_btn.appendTo(je_text)
					.click(()=>{
						
						if(confirm('삭제하시겠습니까?')){
							$.getJSON($.context()+'/BrdDetail/delete/'+j.seq,d=>{
								
							});
							rev_container2.empty();							
							jieun.detail2.l(x);
							
						}						
					});
				}			
				
				je_comm.appendTo(je_text);						
				rev_caption.appendTo(rev_container);		
				rev_container.appendTo(rev_container2);
				rev_container2.appendTo(x.pro);		
				
			});		
			$('#p_con').remove();
			let p_c=$('<div id="p_con" class="p_container" style="padding: 20px 0 20px 0; ">');
			let ul =$('<ul style="list-style: none; " class="pagination justify-content-center">');
			let p_1=$('<div class="p_p_1">');
			p_1.appendTo(p_c);
			ul.appendTo(p_1);
			

			for(let i=d.page.beginPage ; i<=d.page.endPage ; i++){
				let ac=(i==d.page.pageNumber)? "active" : ""; // 함수 안에 있기 때문에 cc를 쓰던 말던 성능 차이가 거의 없다.
				$('<li />').addClass("page-item "+ac).append($('<a />').addClass("page-link").html(i)).appendTo(ul).click(e=>{
					e.preventDefault();
					rev_container2.remove();
					jieun.detail2.l({"i":i,pro:x.pro});
				});
			}
			let disp = (d.page.existPrev)? "": "hidden" ;
			let disn = (d.page.existNext)? "": "hidden" ;
			$('<li id="epo" />').addClass("page-item "+disp).append($('<span style="color: #cc5200; border:none; border-radius:100%"/>').addClass("page-link").html("<"))
			.click(e=>{
				jieun.detail2.l({"i":d.page.beginPage-1,pro:x.pro});
			}).prependTo(ul);
			$('<li id="eno" />').addClass("page-item "+disn).append($('<span style="color: #cc5200; border:none; border-radius:100%"/>').addClass("page-link").html(">"))
			.click(e=>{
				jieun.detail2.l({"i":d.page.endPage+1,pro:x.pro});
			})
			.appendTo(ul);
			
			p_c.appendTo(x.pro);
			
			});
		
	},

	w:x=>{
		
		// review
		

		let t_div=$('<div id="t_div" style="margin-bottom: 60px;">');
		let rev_title=$('<p class="bold review_head" style="font-weight:bold; font-size:20px; ">').html(x.t.title);
		let rev=$('<div id="rev">');
		
		rev_title.appendTo(t_div);
		t_div.appendTo(x.pro);
		rev.appendTo(x.pro);
		$('<button class="newrev_btn" ><p id="w_rev" style="font-size:13px; top:4px; margin:0 0 3px" ><span class="glyphicon glyphicon-plus" aria-hidden="true" style="color:#cc5200; margin-right:10px; "></span>리뷰쓰기</p></button>')
		.appendTo(rev_title)
		.click(()=>{
			if($.type($.cookie("userid")) === 'undefined'){
				$.getScript($.script()+'/hyeri.js', ()=>{
					hyeri.page.l();
	            });
				
			}else{	
				
					
				$('#in_div2').remove();
					let in_div=$('<div id="in_div2" class="in_div1" style="margin-bottom:50px;">');
					let d1=new Date();
					in_div.slideToggle("slow");
					in_div.slideDown("slow");	
					$('<textarea cols="40" rows="50" id="rev_box" name="rev_box1" size="1000" placeholder=" 리뷰를 입력해주세요." style="border:1px solid #e8e8e8; width:720px; height:100px; margin-bottom:20px; overflow:auto; word-break: break-word;">')
					.appendTo(in_div);
					$('<button id="save_btn" style="float:right; background-color:#cc5200; color:white; border-radius:4px; border:0px solid #cc5200">')
					.html('저장하기')
					.appendTo(in_div)
					.click(()=>{
								
								$.ajax({
									url:$.context()+'/BrdDetail/write',
									method:'POST',
									contentType:'application/json',
									data:JSON.stringify({
										nickname : $.cookie("nickname"),
										regi_date : d1.getFullYear()+'-'+(d1.getMonth()+1)+'-'+d1.getDate(),
										image: '',
										contents: $('#rev_box').val()
									}),
									success:d=>{		
										x.pro.empty();	
										x.sec4.empty();
										jieun.detail2.l(x);
										jieun.detail2.w(x);
										$('#rev_box').val('리뷰를 입력해주세요.');
										jieun.detail2.b(x.sec4);
									},error:(m1,m2,m3)=>{
										
									}
								})	
								
								
							});
				/*	in_div.empty();*/
					$('#rev_box').appendTo(in_div);
					$('#save_btn').appendTo(in_div);
					in_div.appendTo(rev);
					


				
			}

						
		});
		

/*		t_div.appendTo($('#rev'));
		$('#rev').appendTo(x.pro);*/
		rev_title.appendTo(t_div);
		jieun.review;
		
		
	}
	
}

jieun.compo = {
		div : x=>{
			return '<div id="'+x+'">'
		}
};
