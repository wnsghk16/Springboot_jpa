"user strict"

const userVue = {
		detail : ()=>{
			return `
				<tr>
					<td id="title" colspan="3" style="border: 1px solid black;">사용자 정보</td>
				</tr>
				<tr>
					<td rowspan="7">
						<img src="https://image.flaticon.com/icons/svg/2353/2353678.svg">
					</td>
					<td>
						<label for="userid">아이디</label>
					</td>
					<td>
						<p id="userid"></p>
					</td>
				</tr>
				<tr>
					<td>
						<label for="name">이름</label>
					</td>
					<td>
						<p id="name"></p>
					</td>
				</tr>
				<tr>
					<td>
						<label for="ssn">주민번호</label>
					</td>
					<td>
						<p id="ssn"></p>
					</td>
				</tr>
				<tr>
					<td>
						<label for="addr">주소</label>
					</td>
					<td>
						<p id="addr"></p>
					</td style="border: 1px solid black;">
				</tr>
				<tr>
					<td>
						<label for="email">이메일</label>
					</td>
					<td>
						<p id="email"></p>
					</td>
				</tr>
				<tr>
					<td>
						<label for="phoneNumber">전화번호</label>
					</td>
					<td>
						<p id="phoneNumber"></p>
					</td>
				</tr>
				<tr>
					<td>
						<label for="registerDate">등록날짜</label>
					</td>
					<td>
						<p id="registerDate"></p>
					</td>
				</tr>
			`
		},
		
		detail_item : ()=>{
			return `
				<tr>
					<td id="title" colspan="3" style="border: 1px solid black;">분실물 정보</td>
				</tr>
				<tr>
					<td rowspan="5" style="border: 1px solid black;">
						<img src="https://image.flaticon.com/icons/svg/1524/1524983.svg" >
					</td>
					<td>
						<label for="lostId">분실물ID</label>
					</td>
					<td>
						<p id="lostId"></p>
					</td>
				</tr>
				<tr>
					<td>
						<label for="name">습득물품명</label>
					</td>
					<td>
						<p id="name"></p>
					</td>
				</tr>
				<tr>
					<td>
						<label for="lostDate">습득일자</label>
					</td>
					<td>
						<p id="lostDate"></p>
					</td>
				</tr>
				<tr>
					<td>
						<label for="group">습득물분류</label>
					</td>
					<td>
						<p id="group"></p>
					</td>
				</tr>
				<tr>
					<td>
						<label for="location">습득위치(지하철)</label>
					</td>
					<td>
						<p id="location"></p>
					</td>
				</tr>
			`
		}
}