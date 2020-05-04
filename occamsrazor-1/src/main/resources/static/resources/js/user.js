"use strict"
var user = user || {}
user = (()=>{ 
	const WHEN_ERROR = `호출하는 JS 파일을 찾지 못했습니다.`
	let admin_vue
	let init = () =>{
		admin_vue = `/resources/vue/admin_vue.js`
		onCreate()
	}
	let onCreate = ()=>{
		$.when(
			$.getScript(admin_vue)			
		).done(()=>{
			setContentView()
			$('#register_a').click(e=>{
				e.preventDefault()
				$('#content').empty()
				$('#content').html(adminVue.join())
				$(`<input type="button"/>`)
				.attr({value:'등록하기'})
				.css({width: '200px', height: '50px', 'font-size': '20px'})
				.appendTo('#button_box')
				.click(e=>{
					 e.preventDefault()
			         $.ajax({
			        	 url:'/admins',
			        	 type:'post',
			        	 data:JSON.stringify({
							name:$('#name').val(),
							position:$('#position').val(),
							email:$('#email').val(),
							phoneNumber:$('#phoneNumber').val()
			        	 }),
			        	 dataType:'json',
			        	 contentType:'application/json',
			        	 success :d=>{
			        		$('#content').empty()
			 				$('#content').html(adminVue.login())
			 				$(`<input type="button"/>`)
								.attr({value:"로그인"})
								.appendTo('#login_box')
								.click(e=>{
									e.preventDefault()
									//location.href="/admin"
									
									$.ajax({
										url:'/admins',
										type : 'post',
										dat : JSON.stringify({
											employNumber:$('#employNumber').val(),
											passwd:$('#passwd').val()
										}),
										dataType : 'json/login',
										contentType : 'application/json',
										success : d=>{
											if(d.messenger === 'SUCCESS'){
												sessionStorage.setItem('employNumber',d.admin.employNumber)
												location.href="/admin"					
											}else{
												alert('잘못입력했습니다.')
												location.href="/user"
											}
										},
										error : (r,x,e)=>{
											alert(r.status)
										}
									})
									
								})
							    $(`<input type="button"/>`)
								.attr({value:"취소"})
								.appendTo('#login_box')
							    .click(e=>{
							    	e.preventDefault()
							    })
			        	 },
			        	 error: (r,x,e)=>{
			        		 alaert(r.status)
			        	 }
			        	 
			         })
				})
				$(`<input type="button"/>`)
				.attr({value: '취소하기'})
				.css({width: '200px', height: '50px', 'margin-left': '50px', 'font-size': '20px'})
				.appendTo('#button_box')
				.click(e=>{
					alert('취소버튼 클릭')
				})
			})
			$('#access_a').click(e=>{
				e.preventDefault()
				$('#content').empty()
				$('#content').html(adminVue.login())	
				$(`<input type="button"/>`)
				.attr({value:"로그인"})
				.appendTo('#login_box')
				.click(e=>{
					e.preventDefault()										
					location.href="/admin"
					/*
					$.ajax({
						url:'/admins/login',
						type : 'post',
						dat : JSON.stringify({
							userid:$('#userid').val(),
							passwd:$('#passwd').val()
						}),
						dataType : 'json',
						contentType : 'application/json',
						success : d=>{
							if(d.messenger === 'SUCCESS'){
								sessionStorage.setItem('userid',d.user.userid)
								location.href="/admin"					
							}else{
								alert('잘못입력했습니다.')
								location.href="/user"
							}
						},
						error : (r,x,e)=>{
							alert(r.status)
						}
					})
					*/
				})
			    $(`<input type="button"/>`)
				.attr({value:"취소"})
				.appendTo('#login_box')
			    .click(e=>{
			    	e.preventDefault()
			    })
			     
				//location.href="/admin"			
			})
			$('#join_a').click(e=>{
				e.preventDefault()
				location.href="user/signup.html"
			})
			$('#login_a').click(e=>{
				e.preventDefault()
				location.href="user/signin.html"
			})
		}).fail(()=>{
			alert(WHEN_ERROR)
		}) //when이 성공하면 done() 실패하면 fail()
		
		
	}
	let setContentView = ()=>{
		$('#kcdc').css({width:'80%', height:'900px'}).addClass('border_black center')
		$('#title').css({width:'100%', height:'15%'}).addClass('center')
		$('#nav_list').css({width:'100%', height:'10%'}).addClass('center')
		$('#content').css({width:'100%', height:'55%'}).addClass('center')
		$('#menu_2').css({width:'100%', height:'15%'})	
		$('#text').css({width:'100%', height:'10%'})
		$('#text td').addClass('center')
		
	}
	return {init}
})()

