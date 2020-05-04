package com.occamsrazor.web.admin;

import java.util.List;

import org.springframework.stereotype.Component;

import com.occamsrazor.web.user.User;

@Component
public interface AdminService {
	public void register(Admin admin);
	public List<Admin> findall();
	public Admin findOne(String employNumber);
	public void modify(Admin admin);
	public void remove(Admin admin);
	public boolean login(Admin admin);
}
