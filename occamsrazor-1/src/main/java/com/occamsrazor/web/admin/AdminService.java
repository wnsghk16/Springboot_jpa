package com.occamsrazor.web.admin;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public interface AdminService {
	public void register(Admin admin);
	public List<Admin> findall();
	public Admin findOne(String employNumber);
	public void modify(Admin admin);
	public void remove(Admin admin);
}
