"use strict" //문법을 엄격하게 적용한다
var user = user || {} //user가 있으면 있는 user를 사용하고(or) 없으면 새로 만들어라 // Member m = null
//namespace(user)에 JSON을 담으면 JSON이 되고 context를 담으면 설정값이 담기면서 맥락이 된다.
user = (()=>{ //lambda로 function //즉시실행
	let init = () =>{//초기화객체 // m= new Member();
		onCreate()
	}
	let onCreate = ()=>{//만들어 지면  바로 자바에 가서 어떤일을 하는거 -> 이벤트 처리 (기능)
		setContentView() //그림이 그려진 후에 클릭 이벤트 실행되게
		$('#join_a').click(e=>{
			e.preventDefault()
			location.href="user/signup.html"
		})
		$('#login_a').click(e=>{
			e.preventDefault()
			location.href="user/signin.html"
		})
		
		$('#register_a').click(e=>{
			e.preventDefault()
			location.href="/admin"
		})
		$('#access_a').click(e=>{
			e.preventDefault()
			$.ajax({
				
			})		
			
			location.href="admin/access.html"
		})
	}
	let setContentView = ()=>{ //그림을 그림(속성)
		$('#kcdc').css({width:'80%', height:'900px'}).addClass('border_black center')
		$('#title').css({width:'100%', height:'15%'}).addClass('center')
		$('#nav_list').css({width:'100%', height:'10%'}).addClass('center')
		$('#picture').css({width:'100%', height:'55%'}).addClass('center')
		$('#menu_2').css({width:'100%', height:'15%'})	
		$('#text').css({width:'100%', height:'10%'})
		$('#text td').addClass('center')
	}
	//다 그렸으면 위의 스크립트를 html로 보내줘야함
	return {init} //json으로 보냄 {init:init} ->근데 동어 반복이므로 한번만 쓴다
})()

