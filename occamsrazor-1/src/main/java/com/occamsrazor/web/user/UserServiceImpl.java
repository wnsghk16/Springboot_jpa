package com.occamsrazor.web.user;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import com.occamsrazor.web.util.Data;
import com.occamsrazor.web.util.Messenger;

import javax.swing.JOptionPane;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
	@Autowired UserDao userDao;
	
	@Override
	public void register(User user) {
		user.setRegisterDate(createCurrentDate());
		userDao.insert(user);
	}

	private String createCurrentDate() {
		return new SimpleDateFormat("yy-MM-dd").format(new Date());
	}

	@Override
	public List<User> findall() {
		return userDao.selectAll();
	}

	@Override
	public User findOne(String userid) {
		return userDao.selectOne(userid);
	}

	@Override
	public void modify(User user) {
		userDao.update(user);
	}

	@Override
	public void remove(User user) {
		userDao.delete(user);
	}

	@Override
	public User login(User user) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public boolean idCheck(String userid) {	
		boolean ok=true;
		List<User> list = findall();
		for(int i=0; i<list.size(); i++) {
			if(userid.equals(list.get(i).getUserid())) {
				ok = false;
				break;
			}
		}
		return ok;
	}

	
	

}
