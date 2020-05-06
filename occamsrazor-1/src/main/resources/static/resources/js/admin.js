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
		                            <td >
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
						$('#content').empty()
						$('#content').html(								
						`<table id="items">
							<tr>
								 <th>
								     <a>No.</a>
								 </th>
								 <th>
								     <a>분실물ID</a>
								 </th>
								 <th>
								     <a>습득물품명</a>
								 </th>
								 <th>
								     <a>습득일자</a>
								 </th>
								 <th>
								     <a>습득물분류</a>
								 </th>
								 <th>
								     <a>습득위치(지하철)</a>
								 </th>
							</tr>
						</table>
						`
						)
						
						$.getJSON('/losts', d => {
							$.each(d, (i, lost) => {								
									$(`<tr>
									      <td>
									        <span>${i+1}</span>
									       </td>
									       <td>
									         <span>${lost.lostId}</span>
									       </td>
									       <td>
									          <span id="lost_`+(i+1)+`"></span>
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
									     </tr>`).appendTo('#items')
									     
									     $(`<a>${lost.name}</a>`)
				                         .css({cursor:'pointer',color:'blue'})
										 .appendTo("#lost_"+(i+1))
										 .click(e=>{
											 e.preventDefault()
								        	 $('#items').empty()
								        	 $(userVue.detail_item()).appendTo('#items')
								        	 $.getJSON(`/losts/${lost.lostId}`,d=>{
								        		 $('#lostId').text(d.lostId)
								        		 $('#name').text(d.name)
								        		 $('#lostDate').text(d.lostDate)
								        		 $('#group').text(d.group)
								        		 $('#location').text(d.location)
								        	 })						        	
										 })
								})
								                        
						})
				})			
			}).fail(()=>{
				alert(WHEN_ERROR)
			}) //when이 성공하면 done() 실패하면 fail()			
	}
	let setContentView = ()=>{   
		  $('#user_list tr').first().css({'background-color':'yellow'})
		
	}
	return {init}
})()