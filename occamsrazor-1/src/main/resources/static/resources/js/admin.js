"use strict"

var admin = admin || {}
<<<<<<< HEAD
admin = (()=>{ // e=>로 쓰면 이벤트가 발생할때만 실행되므로 쓰면 안된다.
	const WHEN_ERROR = `호출하는 JS 파일을 찾지 못했습니다.`
	let user_vue
=======
admin = (()=>{ //e=>로 쓰면 이벤트가 발생할때만 실행되므로 쓰면 안된다.
	let admin_vue
>>>>>>> branch '3_di' of https://github.com/wnsghk16/Springboot_jpa.git
	let init = ()=>{
<<<<<<< HEAD
		user_vue = `/resources/vue/user_vue.js`
=======
		admin_vue = `/resources/vue/admin_vue.js`
>>>>>>> branch '3_di' of https://github.com/wnsghk16/Springboot_jpa.git
		onCreate()
	}
	let onCreate = ()=>{
		$.when(
<<<<<<< HEAD
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
					
=======
				$.getScript(admin_vue)			
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
						        	 //$('#user_list').html(adminVue.mypage())
						        	 $(`<tr>
								            <td id="content" colspan="4">
								              <table id="admin_info" style="width: 1000px; height:600px; margin: 0 auto">
								                <tr style="width: 80%;height: 50px; ">
								                  <td rowspan="6" style="border: 1px solid black;">
								                    <img src="https://u5b8t9w6.stackpathcdn.com/wp-content/uploads/2014/12/profile-default-300x242.jpg">
								                  </td>
								                  <td style="border: 1px solid black;">
								                    <label for="userid">아이디</label>
								                  </td>
								                  <td style="border: 1px solid black;">
										            <span>${user.userid}</span>
								                  </td>
								                </tr>
								                <tr>
								                  <td style="border: 1px solid black;">
								                    <label for="name">이름</label>
								                  </td>
								                  <td style="border: 1px solid black;">
									                <span>${user.name}</span>
								                  </td>
								                </tr>
								                <tr>
								                  <td style="border: 1px solid black;">
								                    <label for="ssn">주민번호</label>
								                  </td>
								                  <td style="border: 1px solid black;">
										            <span>${user.ssn}</span>
								                  </td>
								                </tr>								                
								                <tr>
								                  <td style="border: 1px solid black;">
								                    <label for="email">이메일</label>
								                  </td>
								                  <td style="border: 1px solid black;">
										            <span>${user.email}</span>
								                  </td style="border: 1px solid black;">
								                </tr>
								                <tr>
								                  <td style="border: 1px solid black;">
								                     <label for="phoneNumber">전화번호</label>
								                  </td>
								                  <td style="border: 1px solid black;">
										             <span>${user.phoneNumber}</span>
								                  </td>
								                </tr>
								                <tr>
								                  <td style="border: 1px solid black;">
								                     <label for="registerDate">등록날짜</label>
								                  </td>
								                  <td style="border: 1px solid black;">
										             <span>${user.registerDate}</span>
								                  </td>
								                </tr>
								              </table>
								            </td>
								        </tr>`).appendTo('#user_list')
									 
								 })                      
					})//each
				})//getjson
			}).fail(()=>{
				alert(WHEN_ERROR)
			}) //when이 성공하면 done() 실패하면 fail()
			
		
>>>>>>> branch '3_di' of https://github.com/wnsghk16/Springboot_jpa.git
	}
	let setContentView = ()=>{ 
	     $('#user_list').addClass('border_black center')	     
	     $('#user_list tr').first().css({'background-color':'yellow'})
	     $('#user_list tr td').addClass('border_black')
		
	}
	return {init}
})()