package com.occamsrazor.web.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.occamsrazor.web.util.Messenger;

@RestController
@RequestMapping("/member") //mapping(이름붙이는거)
public class AdminController {
	@Autowired AdminService memberService;
	
	@PostMapping("/join")//자바 영역이라 싱글쿼터쓰면 안되고 더블쿼터("") 써야함
	public Messenger add(@RequestBody Admin member) {
		int current = memberService.count();
		memberService.add(member); 
		return (memberService.count()==(current+1))?Messenger.SUCCESS:Messenger.FAIL;
	}
	
	@PostMapping("/login")//예외로 보안이 필요한거는 post로함(get이 아니고)
	public Messenger login(@RequestBody Admin member) {	
		return (memberService.login(member))?Messenger.SUCCESS:Messenger.FAIL;
	}
	
	@GetMapping("/list")
	public Admin[] list(@RequestBody Admin member) {
		Admin[] result = new Admin[5];
		result = memberService.list();
		return result;
	}
	
	@GetMapping("/detail")
	public Admin detail(@RequestBody String userid){
		Admin member = new Admin();
		member = memberService.detail(userid);
		return member;
	}
	
	@GetMapping("/count")
	public int count() {
		int count = 0;
		count = memberService.count();
		return count;
	}
	
	@PutMapping("/update")
	public void update(@RequestBody Admin member) {
		memberService.update(member);
	}
	
	@DeleteMapping("/delete")
	public void delete(@RequestBody Admin member) {
		memberService.delete(member);
	}
}
