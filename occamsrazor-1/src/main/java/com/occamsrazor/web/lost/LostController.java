package com.occamsrazor.web.lost;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.occamsrazor.web.util.Messenger;

@RestController
@RequestMapping("/losts")
public class LostController {
	@Autowired LostService lostService;
	
	@PostMapping("")
	public Messenger post(@RequestBody Lost lost) {
		lostService.register(lost);
		return Messenger.SUCCESS;
	}
	
	@GetMapping("")
	public List<Lost> list(){
		return lostService.findAll();		
	}
	@GetMapping("/{lostId}")
	public Lost detail(@PathVariable String lostId) {
		return lostService.findOne(lostId);
	}
	@PutMapping("/{lostId}")
	public Messenger put(@RequestBody Lost lost) {
		return lostService.modify(lost);
	}
	@DeleteMapping("/{lostId}")
	public Messenger delete(@RequestBody Lost lost) {
		return lostService.remove(lost);
	}

}
