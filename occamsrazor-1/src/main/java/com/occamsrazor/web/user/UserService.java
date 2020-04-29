package com.occamsrazor.web.user;

import java.util.List;

public interface UserService {
	public void register(User user);
	public List<User> findall();
	public User findOne(String userid);
	public void modify(User user);
	public void remove(User user);
	public User login(User user);
	public boolean idCheck(String userid);
	
}
