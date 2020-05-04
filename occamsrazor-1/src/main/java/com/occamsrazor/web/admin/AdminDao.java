package com.occamsrazor.web.admin;

import java.util.List;

import com.occamsrazor.web.user.User;

public interface AdminDao {
	public void insert(Admin admin);
	public List<Admin> selectAll();
	public Admin selectOne(String employNumber);
	public void update(Admin admin);
	public void delete(Admin admin);
	public boolean access(Admin admin);

}
