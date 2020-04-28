package com.occamsrazor.web.user;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.swing.JOptionPane;

import java.util.Set;

import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
	public final static String FILE_PATH = "C:\\Users\\bit22\\spring-workspace\\occamsrazor\\src\\main\\resources\\static\\user\\";
	
	public UserServiceImpl() {
	}
	

	@Override
	public void add(User user) {
		try {
			File file = new File(FILE_PATH+"list.txt");
			@SuppressWarnings("resource")
			BufferedWriter writer = new BufferedWriter(new FileWriter(file,true));
			String message = user.toString();
			writer.write(message);
			writer.newLine();
			writer.flush(); //카톡에서 엔터는 줄바꿈이고 보내기버튼 누르면 메세지 전송하듯 보내기버튼같은거	
		}catch(Exception e){
			System.out.println("파일 입력 시 에러 발생");
		}
	}
	
	@Override
	public int count() {
		return 0;
	}	
	@Override
	public User login(User user) {
		User returnUser = null;	
		return returnUser;
	}
	@Override
	public User detail(String userid) {
		return null;
	}
	@Override
	public boolean update(User user) { //로그인한 상태에서 업데이트하는거라서 무조건 true
	
		return true;
	}
	@Override
	public boolean delete(String userid) { //로그인한 상태에서 삭제하는거라서 무조건 true
	
		return true;
	}
	@Override
	public List<User> list() { //map으로 된걸 list에 옮겨담아야한다.		
		List<User> userlist = new ArrayList<>();	
		List<String> list = new ArrayList<>();
		try {
			File file = new File(FILE_PATH+"list.txt");
			BufferedReader reader = new BufferedReader(new FileReader(file));	
			String message = "";
			while((message = reader.readLine()) != null) {
				list.add(message);
			}
			reader.close(); //다 읽었으면 닫아주기
		}catch(Exception e){
			System.out.println("파일 출력 시 에러 발생");
		}
		User u = null;
		for(int i=0; i<list.size(); i++) {
			u = new User();
			String[] arr = list.get(i).split(",");
			u.setUserid(arr[0]);
			u.setPasswd(arr[1]);
			u.setName(arr[2]);
			u.setSsn(arr[3]);
			u.setAddr(arr[4]);
			userlist.add(u);
		}			
		return userlist;
	}
	@Override
	public boolean idCheck(String userid) {	
		boolean ok=true;
		List<User> list = list();
		for(int i=0; i<list.size(); i++) {
			if(userid.equals(list.get(i).getUserid())) {
				ok = false;
				break;
			}
		}
		return ok;
	}
	

}
