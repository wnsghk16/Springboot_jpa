"use strict"

const adminVue = {
		join : ()=>{
			return `
			<tr>
	            <td id="content" colspan="4">
	                <table id="admin" style="width: 1500px; height:565px; margin: 0 auto">
	                <tr style="width: 80%;height: 50px;">
	                  <td rowspan="4" style="border: 1px solid black;">
	                    <img src="https://u5b8t9w6.stackpathcdn.com/wp-content/uploads/2014/12/profile-default-300x242.jpg">
	                  </td>
	                  <td style="border: 1px solid black;">
	                    <label>이름</label>
	                  </td>
	                  <td style="border: 1px solid black;">
	                    <input id="name" type="text" />
	                  </td>
	                </tr>  
	                <tr>
	                  <td style="border: 1px solid black;" >
	                    <label>직급</label>
	                  </td>
	                  <td style="border: 1px solid black;">
	                    <input id="position" type="text" />
	                  </td>
	                </tr>
	                <tr>
	                  <td style="border: 1px solid black;">
	                    <label>이메일</label>
	                  </td>
	                  <td style="border: 1px solid black;">
	                    <input id="email" type="text" />
	                  </td>
	                </tr>
	                <tr>
	                  <td style="border: 1px solid black;">
	                    <label>전화번호</label>
	                  </td>
	                  <td style="border: 1px solid black;">
	                    <input id="phoneNumber" type="text" />
	                  </td>
	                </tr>
	                <tr>
	                  <td colspan="3" id="button_box" style="border: 1px solid black;">
	                  </td>
	                </tr>
	              </table>
	            </td>
	        </tr>
          `
		},
		login : ()=>{
			return `
			<table id="login_box" style="height:160px; margin: 0 auto">
            	<tr>
            		<td>
            		<label>EmployNumber </label>
            		</td>            		
            	</tr>
            	<tr>
            		<td>
            		<input id="employNumber" type="text">
            		</td>            		
            	</tr> 
            	<tr>
            		<td>
            		<label>PASSWORD </label>
            		</td>            		
            	</tr>
            	<tr>
            		<td>
            		<input id="passwd" type="text">
            		</td>            		
            	</tr>           		
            </table>   
			`
		},
		mypage : ()=>{
			return ``
		}
}