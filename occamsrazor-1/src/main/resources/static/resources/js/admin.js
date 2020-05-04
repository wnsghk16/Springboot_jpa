"use strict"

var admin = admin || {}
admin = (()=>{ //e=>로 쓰면 이벤트가 발생할때만 실행되므로 쓰면 안된다.
	let init = ()=>{
		onCreate()
	}
	let onCreate = ()=>{
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
				        	 $(`<tr>
		            				<td id="num">No.</td>
		            				<td id="userid">ID</td>
		            				<td id="name">NAME</td>
		            				<td id="ssn">SSN</td>
		            				<td id="email">EMAIL</td>
		            				<td id="phoneNumber">PHONENUMBER</td>
		            				<td id="registerDate">REGISTERDATE</td>
		            			</tr>  `).appendTo('#user_list')
		            					 .first().css({'background-color':'yellow'})  
				        	 $(`<tr>
								        <td>
								            <span>${i+1}</span>
								        </td>
								        <td>
								            <span>${user.userid}</span>
								        </td>
								        <td>
								            <span>${user.name}</span>
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
							 //alert(`${user.userid}`)
						 })                      
			})//each
		})//getjson
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
	     
	     $('#user_list tr').first().css({'background-color':'yellow'})
		 $('#user_list').addClass('border_black').css({'width':'100%'})
		 $('#user_list tr').addClass('border_black width_full')
		 
		
	}
	return {init}
})()