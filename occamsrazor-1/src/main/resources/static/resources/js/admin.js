"use strict"

var admin = admin || {}
admin = (()=>{ //e=>로 쓰면 이벤트가 발생할때만 실행되므로 쓰면 안된다.
	let init = ()=>{
		onCreate()
	}
	let onCreate = ()=>{
		setContentView()
		$('#admin_register').click(e=>{
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
	        		 location.href="/admin/access.html"
	        	 },
	        	 error: (r,x,e)=>{
	        		 alaert(r.status)
	        	 }
		        	 
	         })
	     })
	}
	let setContentView = ()=>{
		 $('#kcdc').css({ width: '80%', height: '900px' }).addClass('border_black center')
	     $('#title').css({width:'25%'}).addClass('center')
	     $('#title2').css({width:'50%'}).addClass('center')
	     $('#title3').css({width:'25%'}).addClass('center')
	     $('#nav_list').css({width:'100%'}).addClass('border_black center')    
	     $('#content').css({width:'100%', height:'100%'}).addClass('center')
	     $('#admin td').addClass('border_black')
	     $('#register_a').css({color: 'blue',cursor:'none','text-decoration':'none'})
	}
	return {init}
})()