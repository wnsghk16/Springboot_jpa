"use strict"

var admin = admin || {}
admin = (()=>{ // e=>로 쓰면 이벤트가 발생할때만 실행되므로 쓰면 안된다.
	const WHEN_ERROR = `호출하는 JS 파일을 찾지 못했습니다.`
	let user_vue
	let init = ()=>{
		user_vue = `/resources/vue/user_vue.js`
		onCreate()
	}
	let onCreate = ()=>{
		$.when(
				$.getScript(user_vue)			
			).done(()=>{
				setContentView()
				$.getJSON('/users', d => {
					$('#total_count').text('총회원수 : '+d.length)
					$.each(d, (i, user) => {
						$(`<tr>
		                        	<td>
		                                <span>${i+1}</span>
		                            </td>
		                            <td>
		                                <span>${user.userid}</span>
		                            </td>
		                            <td>
		                                <span id="user_`+(i+1)+`"></span>
		                            </td>
		                             <td>
		                                <span>${user.ssn}</span>
		                            </td>
		                           <td>
		                                <span>${user.email}</span>
		                            </td>
		                            <td>
		                                <span>${user.phoneNumber}</span>
		                            </td>
		                            <td>
		                                <span>${user.registerDate}</span>
		                            </td>
									 
		                        </tr>`).appendTo('#user_list')
		                        
		                        $(`<a>${user.name}</a>`)
		                         .css({cursor:'pointer',color:'blue'})
								 .appendTo("#user_"+(i+1))
								 .click(e=>{
									 e.preventDefault()
						        	 $('#user_list').empty()
						        	 $(userVue.detail()).appendTo('#user_list')
						        	 $.getJSON(`/users/${user.userid}`,d=>{
						        		 $('#userid').text(d.userid)
						        		 $('#name').text(d.name)
						        		 $('#ssn').text(d.ssn)
						        		 $('#addr').text(d.addr)
						        		 $('#email').text(d.email)
						        		 $('#phoneNumber').text(d.phoneNumber)
						        		 $('#registerDate').text(d.registerDate)
						        	 })						        	
								 })
								 
								 
								 
					})// each
				})// getjson
				$('#lost_list').click(e=>{
						e.preventDefault()
						$('#user_list').empty()						
						$.getJSON('/losts', d => {
							$(userVue.list()).appendTo('#user_list').css({'background-color':'yellow'})
							$.each(d, (i, lost) => {								
									$(`<tr>
									      <td>
									        <span>${i+1}</span>
									       </td>
									       <td>
									         <span>${lost.lostId}</span>
									       </td>
									       <td>
									          <span>${lost.name}</span>
									        </td>
									        <td>
									            <span>${lost.lostDate}</span>
									         </td>
									         <td>
									            <span>${lost.group}</span>
									         </td>
									         <td>
									            <span>${lost.location}</span>
									         </td>															 
									     </tr>`).appendTo('#user_list').addClass('border_black')
									     
									     $(`<a>${user.name}</a>`)
				                         .css({cursor:'pointer',color:'blue'})
										 .appendTo("#user_"+(i+1))
										 .click(e=>{
											 e.preventDefault()
								        	 $('#user_list').empty()
								        	 $(userVue.detail()).appendTo('#user_list')
								        	 $.getJSON(`/losts/${lost.lostId}`,d=>{
								        		 $('#lostId').text(d.userid)
								        		 $('#name').text(d.name)
								        		 $('#ssn').text(d.ssn)
								        		 $('#addr').text(d.addr)
								        		 $('#email').text(d.email)
								        		 $('#phoneNumber').text(d.phoneNumber)
								        		 $('#registerDate').text(d.registerDate)
								        	 })						        	
										 })
								})
								                        
						})
				})
			}).fail(()=>{
				alert(WHEN_ERROR)
			}) // when이 성공하면 done() 실패하면 fail()
					
	}
	let setContentView = ()=>{ 
	     $('#user_list').addClass('border_black center')	     
	     $('#user_list tr').first().css({'background-color':'yellow'})
	     $('#user_list tr td').addClass('border_black')
		
	}
	return {init}
})()