package com.occamsrazor.web;

import org.springframework.boot.SpringBootConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootConfiguration
@Controller //이동만 하는거는 controller 이동안하고 안에서 처리하면 restcontroller
public class HomeController {
	@GetMapping("/")
	public String hello() {
		return "index";
	}
	@GetMapping("/home")
	public String home() {
		return "user";
	}
	@GetMapping("/admin")
	public String admin() {
		return "admin";
	}

}
