"user strict"

const userVue = {
		detail : ()=>{
			return `
				<tr>
					<td id="title" colspan="3" style="border: 1px solid black;">사용자 정보</td>
				</tr>
				<tr style="width: 80%; height: 50px;">
					<td rowspan="7" style="border: 1px solid black;"><img
						src="https://u5b8t9w6.stackpathcdn.com/wp-content/uploads/2014/12/profile-default-300x242.jpg">
					</td>
					<td style="border: 1px solid black;"><label for="userid">아이디</label>
					</td>
					<td style="border: 1px solid black;">
						<p id="userid"></p>
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid black;"><label for="name">이름</label>
					</td>
					<td style="border: 1px solid black;">
						<p id="name"></p>
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid black;"><label for="ssn">주민번호</label>
					</td>
					<td style="border: 1px solid black;">
						<p id="ssn"></p>
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid black;"><label for="addr">주소</label>
					</td>
					<td style="border: 1px solid black;">
						<p id="addr"></p>
					</td style="border: 1px solid black;">
				</tr>
				<tr>
					<td style="border: 1px solid black;"><label for="email">이메일</label>
					</td>
					<td style="border: 1px solid black;">
						<p id="email"></p>
					</td style="border: 1px solid black;">
				</tr>
				<tr>
					<td style="border: 1px solid black;"><label for="phoneNumber">전화번호</label>
					</td>
					<td style="border: 1px solid black;">
						<p id="phoneNumber"></p>
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid black;"><label for="registerDate">등록날짜</label>
					</td>
					<td style="border: 1px solid black;">
						<p id="registerDate"></p>
					</td>
				</tr>
			`
		},
		
		list : ()=>{
			return `
				            <td>
				                <a id="number">No.</a>
				            </td>
				            <td>
				                <a id="lostId">분실물ID</a>
				            </td>
				             <td>
				                <a id="name">습듣물품명</a>
				            </td>
				           <td>
				                <a id="lostDate">습득일자</a>
				            </td>
				            <td>
				                <a id="group">습득물분류</a>
				            </td>
				            <td>
				                <a id="location">습득위치(지하철)</a>
				            </td>
        `
		}
}