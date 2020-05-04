package com.occamsrazor.web.admin;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.occamsrazor.web.user.User;
import com.occamsrazor.web.util.Data;
import com.occamsrazor.web.util.Messenger;

@Service
public class AdminServiceImpl implements AdminService{
	@Autowired AdminDao adminDao;
	
	@Override
	public void register(Admin admin) {		
		admin.setEmployNumber(createEmployNumber()); // 4자리 랜덤 d
		admin.setPasswd("1"); //비밀번호 다 외워야하니까 일단 1로 준다. 사번만드는거랑 거의 같음
		admin.setRegisterDate(createCurrentDate()); // 자바에서 현재 날짜 
		adminDao.insert(admin);		
	}

	private String createCurrentDate() {
		return new SimpleDateFormat("yyyy-MM-dd").format(new Date());
	}

	private String createEmployNumber() { //private으로 보안
		String startNum="";
		for(int i=0; i<4; i++) {
			startNum += (int)(Math.random()*10);
		}
		return startNum;
	}

	@Override
	public List<Admin> findall() {
		return adminDao.selectAll();
	}

	@Override
	public Admin findOne(String employNumber) {
		return adminDao.selectOne(employNumber);
	}

	@Override
	public void modify(Admin admin) {
		adminDao.update(admin);
	}

	@Override
	public void remove(Admin admin) {
		adminDao.delete(admin);
	}

	@Override
	public boolean login(Admin admin) {
		return adminDao.access(admin);
	}

}
